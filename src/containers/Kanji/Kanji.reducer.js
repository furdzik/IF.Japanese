import kanjiJson from '@data/kanji.json';

import { localStorageKeyKanji, FILTERS_IDS } from '@config/constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getLength,
  lengthInitialState
} from '@utils/filters';

const actionTypes = {
  GET_KANJI: 'KANJI/GET_KANJI',
  KANJI_SET_FILTERS: 'KANJI/SET_FILTERS'
};

const initialState = {
  loading: false,
  kanji: null,
  kanjiLength: lengthInitialState,
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
        kanjiLength: getLength(list)
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

const getKanjiAction = (payload) => ({
  type: actionTypes.GET_KANJI,
  payload
});

const setFiltersAction = (payload) => ({
  type: actionTypes.KANJI_SET_FILTERS,
  payload
});

export const getKanji = () => (dispatch) => {
  dispatch(getKanjiAction(kanjiJson));
};

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Kanji;

  setChangeFilters(filter, selectedFilters, localStorageKeyKanji);

  dispatch(setFiltersAction(selectedFilters));
  dispatch(getKanji());
};
