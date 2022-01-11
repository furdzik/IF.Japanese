import vocabJson from '@data/vocabulary.json';

import { LOCAL_STORAGE_KEY_VERBS, FILTERS_IDS } from '@constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getLength,
  lengthInitialState
} from '@utils/filters';

const actionTypes = {
  GET_VERBS_INIT: 'VERBS/GET_VERBS_INIT',
  GET_VERBS: 'VERBS/GET_VERBS',
  VERBS_SET_FILTERS: 'VERBS/SET_FILTERS'
};

const initialState = {
  loading: true,
  verbs: [],
  verbsLength: lengthInitialState,
  selectedFilters: getSelectedFiltersInitialValues(LOCAL_STORAGE_KEY_VERBS, FILTERS_IDS)
};

export default function verbsReducer (state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_VERBS: {
      const verbsList = action.payload;
      const { selectedFilters } = state;

      const list = getSelectedFiltersList(verbsList, selectedFilters, FILTERS_IDS);

      return {
        ...state,
        verbs: list.all,
        verbsLength: getLength(list),
        loading: false
      };
    }

    case actionTypes.VERBS_SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload,
        loading: false
      };
    }

    case actionTypes.GET_VERBS_INIT: {
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

const getVerbsInitAction = () => ({
  type: actionTypes.GET_VERBS_INIT
});

const getVerbsAction = (payload) => ({
  type: actionTypes.GET_VERBS,
  payload
});

const setFiltersAction = (payload) => ({
  type: actionTypes.VERBS_SET_FILTERS,
  payload
});

export const getVerbs = () => (dispatch) => {
  dispatch(getVerbsInitAction());

  const array = vocabJson;
  const verbs = array.filter((el) => el.verb);

  dispatch(getVerbsAction(verbs));
};

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Verbs;

  setChangeFilters(filter, selectedFilters, LOCAL_STORAGE_KEY_VERBS);

  dispatch(setFiltersAction(selectedFilters));
  dispatch(getVerbs());
};
