import vocab from '@data/vocabulary.json';

import { fetchJisho } from '@utils/api';

const actionTypes = {
  GET_VOCAB_DETAILS_INIT: 'VOCABULARY/GET_VOCAB_DETAILS_INIT',
  GET_VOCAB_DETAILS: 'VOCABULARY/GET_VOCAB_DETAILS'
};

const initialState = {
  loading: false,
  reading: null,
  senses: [],
  jlpt: null,
  isCommon: null,
  tags: [],
  known: null,
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

      return {
        ...state,
        ...data.vocab,
        loading: false,
        japanese: data.details.data[0].japanese,
        reading: data.details.data[0].japanese[0].reading,
        senses: data.details.data[0].senses,
        jlpt: data.details.data[0].jlpt,
        isCommon: data.details.data[0].is_common,
        tags: data.details.data[0].tags
      };
    }

    case actionTypes.GET_VOCAB_DETAILS_INIT: {
      return {
        ...state,
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

export const getVocabularyDetailsData = (name) => (dispatch) => {
  dispatch(getVocabularyDetailsInit());

  fetchJisho(name)
    .then((response) => {
      const { tags } = response.data[0];
      response.data[0].tags.forEach((el, index) => {
        const waniKaniLevel = el.replace('wanikani', '');

        tags[index] = `wanikani: level ${waniKaniLevel}`;
      });
      response.tags = tags;
      vocab.forEach((el) => {
        if (el.vocab === name) {
          dispatch(getVocabularyDetails({ name, vocab: el, details: response }));
        }
      });
    })
    .catch((error) => {
      console.log('response error', error);
    });
};
