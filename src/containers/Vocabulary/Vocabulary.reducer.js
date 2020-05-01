import { useEffect } from 'react';

import vocab from '@data/vocabulary.json';

const actionTypes = {
  SUCCESS: 'VOCABULARY/SUCCESS'
};

const initialState = {
  loading: false,
  vocab: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS: {
      return {
        ...state,
        vocab: action.payload
      };
    }

    default:
      return state;
  }
}

const fetchSuccess = (data) => ({
  type: actionTypes.SUCCESS,
  payload: data
});

export const loadVocabularyData = () => (dispatch) => {
  useEffect(() => {
    dispatch(fetchSuccess(vocab));
  }, []);
};

