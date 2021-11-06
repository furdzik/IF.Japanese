import grammarJson from '@data/grammar.json';

import { localStorageKeyGrammar, FILTERS_IDS, GRAMMAR_HAS_TO_REPEAT } from '@config/constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getLength,
  lengthInitialState
} from '@utils/filters';

const actionTypes = {
  GET_GRAMMAR_INIT: 'GRAMMAR/GET_VOCAB_INIT',
  GET_GRAMMAR: 'GRAMMAR/GET_VOCAB',
  GRAMMAR_SET_FILTERS: 'GRAMMAR/SET_FILTERS'
};

const initialState = {
  loading: true,
  vocab: null,
  vocabLength: lengthInitialState,
  selectedFilters: getSelectedFiltersInitialValues(
    localStorageKeyGrammar, FILTERS_IDS, GRAMMAR_HAS_TO_REPEAT
  )
};

export default function grammarReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_GRAMMAR: {
      const grammarList = action.payload;
      const { selectedFilters } = state;

      const list = getSelectedFiltersList(grammarList, selectedFilters, FILTERS_IDS);

      return {
        ...state,
        grammar: list.all,
        grammarLength: getLength(list),
        loading: false
      };
    }

    case actionTypes.GRAMMAR_SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload,
        loading: false
      };
    }

    case actionTypes.GET_GRAMMAR_INIT: {
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

const getGrammarInitAction = () => ({
  type: actionTypes.GET_GRAMMAR_INIT
});

const getGrammarAction = (payload) => ({
  type: actionTypes.GET_GRAMMAR,
  payload
});

const setFiltersAction = (payload) => ({
  type: actionTypes.GRAMMAR_SET_FILTERS,
  payload
});

export const getGrammar = () => (dispatch) => {
  dispatch(getGrammarInitAction());
  dispatch(getGrammarAction(grammarJson));
};

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Grammar;

  setChangeFilters(filter, selectedFilters, localStorageKeyGrammar);

  dispatch(setFiltersAction(selectedFilters));
  dispatch(getGrammar());
};
