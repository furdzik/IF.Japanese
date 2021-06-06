import vocabJson from '@data/vocabulary.json';

import { localStorageKeyVerbs, FILTERS_IDS } from '@config/constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getLength,
  lengthInitialState
} from '@utils/filters';

const actionTypes = {
  GET_VERBS: 'VERBS/GET_VERBS',
  VERBS_SET_FILTERS: 'VERBS/SET_FILTERS'
};

const initialState = {
  loading: false,
  verbs: null,
  verbsLength: lengthInitialState,
  selectedFilters: getSelectedFiltersInitialValues(localStorageKeyVerbs, FILTERS_IDS)
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VERBS: {
      const verbsList = action.payload;
      const { selectedFilters } = state;

      const list = getSelectedFiltersList(verbsList, selectedFilters, FILTERS_IDS);

      return {
        ...state,
        verbs: list.all,
        verbsLength: getLength(list)
      };
    }

    case actionTypes.VERBS_SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload
      };
    }

    default:
      return state;
  }
}

const getVerbsAction = (payload) => ({
  type: actionTypes.GET_VERBS,
  payload
});

const setFiltersAction = (payload) => ({
  type: actionTypes.VERBS_SET_FILTERS,
  payload
});

export const getVerbs = () => (dispatch) => {
  const array = vocabJson;
  const verbs = array.filter((el) => el.verb);

  dispatch(getVerbsAction(verbs));
};

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Verbs;

  setChangeFilters(filter, selectedFilters, localStorageKeyVerbs);

  dispatch(setFiltersAction(selectedFilters));
  dispatch(getVerbs());
};
