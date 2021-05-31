import kanji from '@data/kanji.json';

import { localStorageKeyKanji, FILTERS_IDS } from '@config/constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getNotKnownLength
} from '@utils/filters';

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
    nowLearning: 0,
    notKnown: 0,
    all: 0
  },
  selectedFilters: getSelectedFiltersInitialValues(localStorageKeyKanji, FILTERS_IDS)
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_KANJI: {
      const kanjiList = action.payload;
      const { selectedFilters } = state;

      const list = getSelectedFiltersList(kanjiList, selectedFilters, FILTERS_IDS, true);

      return {
        ...state,
        kanji: list.all,
        kanjiLength: {
          known: list.knownList.length,
          inProgress: list.inProgressList.length,
          nowLearning: list.nowLearningList.length,
          notKnown: getNotKnownLength(list),
          all: list.all.length
        }
      };
    }

    case actionTypes.KANJI_SET_FILTERS: {
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

  setChangeFilters(filter, selectedFilters, localStorageKeyKanji);

  dispatch(setFilters(selectedFilters));
  dispatch(getKanji());
};
