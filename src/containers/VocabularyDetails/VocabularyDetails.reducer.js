import vocabJson from '@data/vocabulary.json';

import { fetchJisho } from '@api';

import { URL_SEPARATOR } from '@config/constants';

import { isCorrectVocabularyMeaning } from '@utils/vocabularyMeaning';

import {
  PROPER_NAME_TYPE,
  getProperName,
  getTags,
  getTranslations,
  getAntonyms,
  getOtherForms
} from './utils';

const actionTypes = {
  GET_VOCAB_DETAILS_INIT: 'VOCABULARY/GET_VOCAB_DETAILS_INIT',
  GET_VOCAB_DETAILS: 'VOCABULARY/GET_VOCAB_DETAILS'
};

const initialState = {
  loading: true,
  vocab: null,
  meaning: '',
  status: {},
  metadata: {},
  tags: null,
  translations: [],
  antonyms: null,
  otherForms: null,
  additionalExplanation: null,
  examples: null,
  kanjiParts: null,
  verb: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VOCAB_DETAILS: {
      const data = action.payload;
      console.log(data);
      return {
        ...state,
        vocab: data.vocab.vocab,
        meaning: data.vocab.meaning
          ? data.vocab.meaning
          : data.details.japanese[0].reading,
        status: {
          known: data.vocab.known,
          nowLearning: data.vocab.nowLearning,
          inProgress: data.vocab.inProgress
        },
        metadata: {
          slug: data.details.slug
        },
        tags: getTags(
          data.details.tags,
          data.vocab.verb,
          data.details.jlpt,
          data.details.is_common
        ),
        translations: getTranslations(data.details.senses),
        antonyms: getAntonyms(data.vocab.antonyms, data.details.senses),
        otherForms: getOtherForms(data.details.japanese), // wykluczyć 1 element
        additionalExplanation: data.vocab.additionalExplanation,
        examples: data.vocab.examples,
        kanjiParts: null,
        verb: data.vocab.verb ? {
          ...data.vocab.verb
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
  ));

  dispatch(getVocabularyDetailsAction({ name, vocab: vocab[0], details: response }));
};

export const getVocabularyDetails = (name, url, vocabTrueName) => (dispatch) => {
  dispatch(getVocabularyDetailsInitAction());

  const kanjiMeaning = url.split(URL_SEPARATOR)[1];

  fetchJisho(url || name)
    .then((response) => {
      if (vocabTrueName) {
        response.data.forEach((kanji) => {
          if (isCorrectVocabularyMeaning(kanji.japanese, name, kanjiMeaning)) {
            dispatch(getMeaning(kanji, name, url));
          }
        });
      } else {
        dispatch(getMeaning(response.data[0], name, url));
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};
