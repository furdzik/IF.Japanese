import vocab from '@data/vocabulary.json';

import { fetchJisho } from '@utils/api';

import { URL_SEPARATOR } from '@config/constants';

const actionTypes = {
  GET_VOCAB_DETAILS_INIT: 'VOCABULARY/GET_VOCAB_DETAILS_INIT',
  GET_VOCAB_DETAILS: 'VOCABULARY/GET_VOCAB_DETAILS'
};

const initialState = {
  loading: false,
  reading: null,
  additionalExplanation: null,
  antonyms: null,
  senses: [],
  jlpt: null,
  isCommon: null,
  tags: [],
  known: null,
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

const getVocabularyDetails = (vocabDetails) => ({
  type: actionTypes.GET_VOCAB_DETAILS,
  payload: vocabDetails
});

const getVocabularyDetailsInit = () => ({
  type: actionTypes.GET_VOCAB_DETAILS_INIT
});

const getMeaning = (response, name, vocabTrueName) => (dispatch) => vocab.forEach((el) => {
  if (el.vocab === name || (vocabTrueName && el.vocab === vocabTrueName)) {
    dispatch(getVocabularyDetails({ name, vocab: el, details: response }));
  }
});

export const getVocabularyDetailsData = (name, url, vocabTrueName) => (dispatch) => {
  dispatch(getVocabularyDetailsInit());
  console.log(name, url, vocabTrueName);
  const kanjiMeaning = url.split(URL_SEPARATOR)[1];

  fetchJisho(url || name)
    .then((response) => {
      if (vocabTrueName) {
        console.log('if');
        response.data.forEach((kanji) => {
          const newName = name.replace('〜', '');
          if (
            (kanji.japanese[0]
              && kanji.japanese[0].word === newName && kanji.japanese[0].reading === kanjiMeaning)
            || (kanji.japanese[1]
            && kanji.japanese[1].word === newName && kanji.japanese[1].reading === kanjiMeaning)
          ) {
            dispatch(getMeaning(kanji, name, vocabTrueName));
          }
        });
      } else {
        console.log('else', response.data[0]);
        dispatch(getMeaning(response.data[0], name, vocabTrueName));
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};
