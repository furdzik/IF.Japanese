import vocabJson from '@data/vocabulary.json';

import { fetchJisho } from '@api';

import { URL_SEPARATOR } from '@config/constants';

import { isCorrectVocabularyMeaning } from '@utils/vocabularyMeaning';

import { PROPER_NAME_TYPE, getProperName } from './utils';

const actionTypes = {
  GET_VOCAB_DETAILS_INIT: 'VOCABULARY/GET_VOCAB_DETAILS_INIT',
  GET_VOCAB_DETAILS: 'VOCABULARY/GET_VOCAB_DETAILS'
};

const initialState = {
  loading: true,
  reading: null,
  additionalExplanation: null,
  antonyms: null,
  senses: [],
  jlpt: null,
  isCommon: null,
  tags: [],
  known: null,
  nowLearning: null,
  meaning: null,
  inProgress: null,
  pitch: null,
  level: null,
  verb: null,
  examples: null,
  japanese: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VOCAB_DETAILS: {
      const data = action.payload;

      const { tags } = data.details;

      data.details.tags.forEach((el, index) => {
        const waniKaniLevel = el.replace('wanikani', '');

        tags[index] = `wanikani: level ${waniKaniLevel}`;
      });
      data.details.tags = tags;

      return {
        ...state,
        ...data.vocab,
        meaning: data.vocab.meaning ? data.vocab.meaning : null,
        antonyms: data.vocab.antonyms ? data.vocab.antonyms : null,
        japanese: data.details.japanese,
        reading: data.details.japanese[0].reading,
        senses: data.details.senses,
        jlpt: data.details.jlpt,
        isCommon: data.details.is_common,
        tags,
        slug: data.details.slug,
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
