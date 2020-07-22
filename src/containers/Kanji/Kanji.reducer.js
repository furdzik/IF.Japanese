import kanji from '@data/kanji.json';

import {
  LEVEL_5_KANJI,
  LEVEL_4_KANJI,
  LEVEL_3_KANJI,
  LEVEL_2_KANJI,
  LEVEL_1_KANJI,
  OTHER_KANJI
} from '@config/constants';

import { getSelectedFiltersInitialValue, oneOfN5toN1Filters, getKnownUnknownFilters } from './Kanji.utils';

const actionTypes = {
  GET_KANJI: 'KANJI/GET_KANJI',
  KANJI_SET_FILTERS: 'KANJI/SET_FILTERS'
};

const initialState = {
  loading: false,
  kanji: null,
  kanjiLength: {
    known: 0,
    inProgress: 0,
    notKnown: 0
  },
  selectedFilters: getSelectedFiltersInitialValue()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_KANJI: {
      const kanjiList = action.payload;
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
        if (selectedFilters.indexOf(LEVEL_5_KANJI) > -1) {
          list.n5 = kanjiList.filter((item) => item.level === 5);
        }
        if (selectedFilters.indexOf(LEVEL_4_KANJI) > -1) {
          list.n4 = kanjiList.filter((item) => item.level === 4);
        }
        if (selectedFilters.indexOf(LEVEL_3_KANJI) > -1) {
          list.n3 = kanjiList.filter((item) => item.level === 3);
        }
        if (selectedFilters.indexOf(LEVEL_2_KANJI) > -1) {
          list.n2 = kanjiList.filter((item) => item.level === 2);
        }
        if (selectedFilters.indexOf(LEVEL_1_KANJI) > -1) {
          list.n1 = kanjiList.filter((item) => item.level === 1);
        }
        if (selectedFilters.indexOf(OTHER_KANJI) > -1) {
          list.other = kanjiList.filter((item) => item.level === 0);
        }

        list.all = list.n5.concat(list.n4, list.n3, list.n2, list.n1, list.other);

        list = getKnownUnknownFilters(selectedFilters, list.all);
      } else {
        // known / not known filters
        list = getKnownUnknownFilters(selectedFilters, kanjiList);
      }

      list.all = list.knownList.concat(list.inProgressList, list.notKnownList);

      return {
        ...state,
        kanji: list.all,
        kanjiLength: {
          known: list.knownList.length,
          inProgress: list.inProgressList.length,
          all: list.all.length
        }
      };
    }

    case actionTypes.SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload
      };
    }

    default:
      return state;
  }
}

export const getKanji = () => ({
  type: actionTypes.GET_KANJI,
  payload: kanji
});

export const setFilters = (payload) => ({
  type: actionTypes.KANJI_SET_FILTERS,
  payload
});

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Kanji;

  if (selectedFilters.indexOf(filter) > -1) {
    selectedFilters.splice(selectedFilters.indexOf(filter), 1);
  } else {
    selectedFilters.push(filter);
  }

  localStorage.setItem('kanjiSelectedFilters', JSON.stringify(selectedFilters));
  dispatch(setFilters(selectedFilters));
  dispatch(getKanji());
};
