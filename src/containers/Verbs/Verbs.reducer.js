import vocab from '@data/vocabulary.json';

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

export const getVerbs = () => {
  const array = vocab;
  const verbs = array.filter((el) => el.verb);

  return {
    type: actionTypes.GET_VERBS,
    payload: verbs
  };
};

export const setFilters = (payload) => ({
  type: actionTypes.VERBS_SET_FILTERS,
  payload
});

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Verbs;

  setChangeFilters(filter, selectedFilters, localStorageKeyVerbs);

  dispatch(setFilters(selectedFilters));
  dispatch(getVerbs());
};
