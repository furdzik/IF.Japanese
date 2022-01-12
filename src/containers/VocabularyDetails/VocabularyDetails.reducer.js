import vocabNotInApiJson from '@data/vocabulary-not-in-api.json';
import kanjiJson from '@data/kanji.json';

import { fetchJisho, fetchKanjiAlternative } from '@api';

import { URL_SEPARATOR } from '@constants';

import { isCorrectVocabularyMeaning } from '@utils/vocabularyMeaning';
import { getTags, prepareKanjiDetailsData } from '@utils/commonDetails';
import { getKanji, getFurigana } from '@utils/kanji';

import {
  getTranslations,
  getAntonyms,
  getOtherForms,
  getKanjiParts,
  getVocabFromJson
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
  apiError: false,
  counter: null,
  examples: null,
  kanjiParts: null,
  otherForms: null,
  problems: null,
  tags: null,
  verb: null,
  loading: true
};

export default function vocabularyDetailsReducer (state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_VOCAB_DETAILS: {
      const data = action.payload;

      const level = data.level ? [data.level.toString()] : null;

      return {
        ...state,
        vocab: data.vocab,
        meaning: data.meaning
          ? data.meaning
          : data.details?.japanese[0]?.reading,
        metadata: {
          slug: data.details?.slug
        },
        status: {
          known: data.known,
          nowLearning: data.nowLearning,
          inProgress: data.inProgress
        },
        translations: data.details ? getTranslations(data.details?.senses) : [],
        additionalExplanation: data.additionalExplanation,
        antonyms: data.details ? getAntonyms(data.antonyms, data.details?.senses) : [],
        counter: data.counter,
        examples: data.examples,
        japaneseForm: data.details && data.details?.japanese[0]?.reading !== data.vocab ? {
          kanji: getKanji(data.vocab),
          furigana: getFurigana(
            data.vocab, data.details?.japanese[0]?.reading
          )
        } : null,
        kanjiParts: data.kanjiDetails ? prepareKanjiDetailsData(data.kanjiDetails) : null,
        otherForms: data.details ? getOtherForms(data.details?.japanese) : [],
        problems: data.problems,
        tags: getTags({
          tags: data.details?.tags,
          isCommon: data.details?.is_common,
          isVerb: !!data.verb,
          jlpt: data.details ? data.details?.jlpt : level,
          isCounter: !!data.counter
        }),
        verb: data.verb ? {
          ...data.verb
        } : null,
        loading: false,
        apiError: !data.details
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
  const vocab = getVocabFromJson(url);

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
    .catch(() => {
      const vocab = getVocabFromJson(url);

      dispatch(getVocabularyDetailsAction({
        name,
        ...vocab,
        kanjiDetails: null,
        details: null
      }));
    });
};
