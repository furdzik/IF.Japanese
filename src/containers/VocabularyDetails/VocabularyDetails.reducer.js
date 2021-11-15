import vocabJson from '@data/vocabulary.json';
import vocabNotInApiJson from '@data/vocabulary-not-in-api.json';
import kanjiJson from '@data/kanji.json';

import { fetchJisho, fetchKanjiAlternative } from '@api';

import { URL_SEPARATOR } from '@constants';

import { isCorrectVocabularyMeaning } from '@utils/vocabulary-meaning';
import { getTags, prepareKanjiDetailsData } from '@utils/common-details';
import { getKanji, getFurigana } from '@utils/kanji';

import {
  PROPER_NAME_TYPE,
  getProperName,
  getTranslations,
  getAntonyms,
  getOtherForms,
  getKanjiParts
} from './utils';

const actionTypes = {
  GET_VOCAB_DETAILS_INIT: 'VOCABULARY/GET_VOCAB_DETAILS_INIT',
  GET_VOCAB_DETAILS: 'VOCABULARY/GET_VOCAB_DETAILS'
};

const initialState = {
  japaneseForm: null,
  meaning: '',
  vocab: null,
  metadata: {},
  status: {},
  translations: [],
  additionalExplanation: null,
  antonyms: null,
  counter: null,
  examples: null,
  kanjiParts: null,
  otherForms: null,
  problems: null,
  tags: null,
  verb: null,
  loading: true
};

export default function vocabularyDetailsReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VOCAB_DETAILS: {
      const data = action.payload;

      return {
        ...state,
        vocab: data.vocab,
        meaning: data.meaning
          ? data.meaning
          : data.details.japanese[0].reading,
        metadata: {
          slug: data.details.slug
        },
        status: {
          known: data.known,
          nowLearning: data.nowLearning,
          inProgress: data.inProgress
        },
        translations: getTranslations(data.details.senses),
        additionalExplanation: data.additionalExplanation,
        antonyms: getAntonyms(data.antonyms, data.details.senses),
        counter: data.counter,
        examples: data.examples,
        japaneseForm: data.details.japanese[0].reading !== data.vocab ? {
          kanji: getKanji(data.vocab),
          furigana: getFurigana(
            data.vocab, data.details.japanese[0].reading
          )
        } : null,
        kanjiParts: prepareKanjiDetailsData(data.kanjiDetails),
        otherForms: getOtherForms(data.details.japanese),
        problems: data.problems,
        tags: getTags({
          tags: data.details.tags,
          isCommon: data.details.is_common,
          isVerb: !!data.verb,
          jlpt: data.details.jlpt,
          isCounter: !!data.counter
        }),
        verb: data.verb ? {
          ...data.verb
        } : null,
        loading: false
      };
    }

    case actionTypes.GET_VOCAB_DETAILS_INIT: {
      return {
        ...state,
        ...initialState,
        loading: true
      };
    }

    default:
      return state;
  }
}

const getVocabularyDetailsAction = (payload) => ({
  type: actionTypes.GET_VOCAB_DETAILS,
  payload
});

const getVocabularyDetailsInitAction = () => ({
  type: actionTypes.GET_VOCAB_DETAILS_INIT
});

const getMeaning = (response, name, url) => (dispatch) => {
  const vocab = vocabJson.filter((el) => (
    el.meaning && el.meaning === getProperName(url, PROPER_NAME_TYPE.MEANING)
  ) || (
    !el.meaning && el.vocab === getProperName(url, PROPER_NAME_TYPE.KANJI)
  ))[0];

  const kanjiParts = getKanjiParts(vocab.vocab);

  Promise.all(
    kanjiParts.map((el) => fetchKanjiAlternative(el))
  )
    .then((kanjiDetails) => {
      const completeKanjiParts = [];

      kanjiDetails.forEach((kanjiPart) => {
        kanjiJson.forEach((jsonEl) => {
          if (kanjiPart.kanji === jsonEl.kanji) {
            completeKanjiParts.push({
              ...kanjiPart,
              ...jsonEl
            });
          }
        });
      });

      dispatch(getVocabularyDetailsAction({
        name,
        ...vocab,
        kanjiDetails: completeKanjiParts,
        details: response
      }));
    });
};

export const getVocabularyDetails = (name, url, vocabTrueName) => (dispatch) => {
  dispatch(getVocabularyDetailsInitAction());

  const kanjiMeaning = url.split(URL_SEPARATOR)[1];

  fetchJisho(url || name)
    .then((response) => {
      if (vocabTrueName) {
        let hasApiMeaning = false;

        response.data.forEach((kanji) => {
          if (isCorrectVocabularyMeaning(kanji.japanese, name, kanjiMeaning)) {
            hasApiMeaning = true;
            dispatch(getMeaning(kanji, name, url));
          }
        });

        if (!hasApiMeaning) {
          const dataFromJson = vocabNotInApiJson.filter(
            (el) => el.vocab === vocabTrueName && kanjiMeaning === el.meaning
          );

          dispatch(getMeaning(...dataFromJson, name, url));
        }
      } else {
        dispatch(getMeaning(response.data[0], name, url));
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};
