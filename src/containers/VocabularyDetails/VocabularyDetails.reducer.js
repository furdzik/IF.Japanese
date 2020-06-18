import { fetchJisho } from '@utils/api';

const actionTypes = {
  GET_VOCAB_DETAILS: 'VOCABULARY/GET_VOCAB_DETAILS'
};

const initialState = {
  loading: false,
  details: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VOCAB_DETAILS: {
      return {
        ...state,
        details: action.payload
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

export const getVocabularyDetailsData = (name) => (dispatch) => {
  const vocabDetails = {
    name: '女王',
    reading: 'じょおう',
    myData: {
      known: true,
      inProgress: false,
      pitch: '0' // ?
    }
  };

  fetchJisho(name).then(() => {
  });

  dispatch(getVocabularyDetails(vocabDetails));
};
