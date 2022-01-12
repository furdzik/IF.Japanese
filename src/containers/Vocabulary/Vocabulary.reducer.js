import vocabJson from '@data/vocabulary.json';

import { LOCAL_STORAGE_KEY_VOCAB, FILTERS_IDS } from '@constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getLength,
  lengthInitialState
} from '@utils/filters';

const actionTypes = {
  GET_VOCAB_INIT: 'VOCABULARY/GET_VOCAB_INIT',
  GET_VOCAB: 'VOCABULARY/GET_VOCAB',
  VOCAB_SET_FILTERS: 'VOCABULARY/SET_FILTERS'
};

const initialState = {
  loading: true,
  vocab: null,
  vocabLength: lengthInitialState,
  selectedFilters: getSelectedFiltersInitialValues(LOCAL_STORAGE_KEY_VOCAB, FILTERS_IDS)
};

export default function vocabularyReducer (state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_VOCAB: {
      const vocabList = action.payload;
      const { selectedFilters } = state;

      const list = getSelectedFiltersList(vocabList, selectedFilters, FILTERS_IDS);

      return {
        ...state,
        vocab: list.all,
        vocabLength: getLength(list),
        loading: false
      };
    }

    case actionTypes.VOCAB_SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload,
        loading: false
      };
    }

    case actionTypes.GET_VOCAB_INIT: {
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

const getVocabularyInitAction = () => ({
  type: actionTypes.GET_VOCAB_INIT
});

const getVocabularyAction = (payload) => ({
  type: actionTypes.GET_VOCAB,
  payload
});

const setFiltersAction = (payload) => ({
  type: actionTypes.VOCAB_SET_FILTERS,
  payload
});

export const getVocabulary = () => (dispatch) => {
  dispatch(getVocabularyInitAction());
  dispatch(getVocabularyAction(vocabJson));
};

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Vocabulary;

  setChangeFilters(filter, selectedFilters, LOCAL_STORAGE_KEY_VOCAB);

  dispatch(setFiltersAction(selectedFilters));
  dispatch(getVocabulary());
};
