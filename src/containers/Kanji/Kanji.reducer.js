import kanjiJson from '@data/kanji.json';

import { LOCAL_STORAGE_KEY_KANJI, FILTERS_IDS } from '@constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getLength,
  lengthInitialState
} from '@utils/filters';

const actionTypes = {
  GET_KANJI_INIT: 'KANJI/GET_KANJI_INIT',
  GET_KANJI: 'KANJI/GET_KANJI',
  KANJI_SET_FILTERS: 'KANJI/SET_FILTERS'
};

const initialState = {
  loading: true,
  kanji: null,
  kanjiLength: lengthInitialState,
  selectedFilters: getSelectedFiltersInitialValues(LOCAL_STORAGE_KEY_KANJI, FILTERS_IDS)
};

export default function kanjiReducer (state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_KANJI: {
      const kanjiList = action.payload;
      const { selectedFilters } = state;

      const list = getSelectedFiltersList(kanjiList, selectedFilters, FILTERS_IDS, true);

      return {
        ...state,
        kanji: list.all,
        kanjiLength: getLength(list),
        loading: false
      };
    }

    case actionTypes.KANJI_SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload,
        loading: false
      };
    }

    case actionTypes.GET_KANJI_INIT: {
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

const getKanjiInitAction = () => ({
  type: actionTypes.GET_KANJI_INIT
});

const getKanjiAction = (payload) => ({
  type: actionTypes.GET_KANJI,
  payload
});

const setFiltersAction = (payload) => ({
  type: actionTypes.KANJI_SET_FILTERS,
  payload
});

export const getKanji = () => (dispatch) => {
  dispatch(getKanjiInitAction());
  dispatch(getKanjiAction(kanjiJson));
};

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Kanji;

  setChangeFilters(filter, selectedFilters, LOCAL_STORAGE_KEY_KANJI);

  dispatch(setFiltersAction(selectedFilters));
  dispatch(getKanji());
};
