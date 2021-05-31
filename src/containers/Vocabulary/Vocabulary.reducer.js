import vocab from '@data/vocabulary.json';

import { localStorageKeyVocab, FILTERS_IDS } from '@config/constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getNotKnownLength
} from '@utils/filters';

const actionTypes = {
  GET_VOCAB: 'VOCABULARY/GET_VOCAB',
  VOCAB_SET_FILTERS: 'VOCABULARY/SET_FILTERS'
};

const initialState = {
  loading: false,
  vocab: null,
  vocabLength: {
    known: 0,
    inProgress: 0,
    notKnown: 0
  },
  selectedFilters: getSelectedFiltersInitialValues(localStorageKeyVocab, FILTERS_IDS)
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VOCAB: {
      const vocabList = action.payload;
      const { selectedFilters } = state;

      const list = getSelectedFiltersList(vocabList, selectedFilters, FILTERS_IDS);

      return {
        ...state,
        vocab: list.all,
        vocabLength: {
          known: list.knownList.length,
          inProgress: list.inProgressList.length,
          nowLearning: list.nowLearningList.length,
          notKnown: getNotKnownLength(list),
          all: list.all.length
        }
      };
    }

    case actionTypes.VOCAB_SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload
      };
    }

    default:
      return state;
  }
}

export const getVocabulary = () => ({
  type: actionTypes.GET_VOCAB,
  payload: vocab
});

export const setFilters = (payload) => ({
  type: actionTypes.VOCAB_SET_FILTERS,
  payload
});

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Vocabulary;

  setChangeFilters(filter, selectedFilters, localStorageKeyVocab);

  dispatch(setFilters(selectedFilters));
  dispatch(getVocabulary());
};
