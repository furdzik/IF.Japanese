import vocab from '@data/vocabulary.json';
import _cloneDeep from 'lodash/cloneDeep';

import {
  LEVEL_5_VERBS,
  LEVEL_4_VERBS,
  LEVEL_3_VERBS,
  LEVEL_2_VERBS,
  LEVEL_1_VERBS,
  OTHER_VERBS
} from '@config/constants';

import { getSelectedFiltersInitialValue, oneOfN5toN1Filters, getKnownUnknownFilters } from './Verbs.utils';

const actionTypes = {
  GET_VERBS: 'VOCABULARY/GET_VOCAB',
  VERBS_SET_FILTERS: 'VOCABULARY/SET_FILTERS'
};

const initialState = {
  loading: false,
  verbs: null,
  verbsLength: {
    known: 0,
    inProgress: 0,
    notKnown: 0
  },
  selectedFilters: getSelectedFiltersInitialValue()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VERBS: {
      const verbsList = action.payload;
      const { selectedFilters } = state;
      let list = {
        knownList: [],
        notKnownList: [],
        inProgressList: [],
        n5: [],
        n4: [],
        n3: [],
        n2: [],
        n1: [],
        other: [],
        all: []
      };

      // N5..N1 filters
      if (oneOfN5toN1Filters(selectedFilters)) {
        if (selectedFilters.indexOf(LEVEL_5_VERBS) > -1) {
          list.n5 = verbsList.filter((item) => item.level === 5);
        }
        if (selectedFilters.indexOf(LEVEL_4_VERBS) > -1) {
          list.n4 = verbsList.filter((item) => item.level === 4);
        }
        if (selectedFilters.indexOf(LEVEL_3_VERBS) > -1) {
          list.n3 = verbsList.filter((item) => item.level === 3);
        }
        if (selectedFilters.indexOf(LEVEL_2_VERBS) > -1) {
          list.n2 = verbsList.filter((item) => item.level === 2);
        }
        if (selectedFilters.indexOf(LEVEL_1_VERBS) > -1) {
          list.n1 = verbsList.filter((item) => item.level === 1);
        }
        if (selectedFilters.indexOf(OTHER_VERBS) > -1) {
          list.other = verbsList.filter((item) => item.level === 0);
        }

        list.all = list.n5.concat(list.n4, list.n3, list.n2, list.n1, list.other);

        list = getKnownUnknownFilters(selectedFilters, list.all);
      } else {
        // known / not known filters
        list = getKnownUnknownFilters(selectedFilters, verbsList);
      }

      list.all = list.knownList.concat(list.inProgressList, list.notKnownList);

      return {
        ...state,
        verbs: list.all,
        verbsLength: {
          known: list.knownList.length,
          inProgress: list.inProgressList.length,
          all: list.all.length
        }
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
  const array = _cloneDeep(vocab);
  const verbs = array.filter((el) => el.verb);
  console.log(verbs);

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

  if (selectedFilters.indexOf(filter) > -1) {
    selectedFilters.splice(selectedFilters.indexOf(filter), 1);
  } else {
    selectedFilters.push(filter);
  }

  localStorage.setItem('verbsSelectedFilters', JSON.stringify(selectedFilters));
  dispatch(setFilters(selectedFilters));
  dispatch(getVerbs());
};
