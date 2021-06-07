import vocabJson from '@data/vocabulary.json';

import { fetchJisho } from '@api';

import { localStorageKeyFlashcards, FILTERS_IDS } from '@config/constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getLength,
  lengthInitialState
} from '@utils/filters';

import { getRandomVocab } from './utils';

const actionTypes = {
  GET_FLASHCARD_INIT: 'FLASHCARDS/GET_FLASHCARD_INIT',
  GET_FLASHCARD: 'FLASHCARDS/GET_FLASHCARD',
  FLASHCARD_SET_FILTERS: 'FLASHCARDS/SET_FILTERS'
};

const initialState = {
  flashcard: null,
  flashcardLength: lengthInitialState,
  additionalInfo: null,
  selectedFilters: getSelectedFiltersInitialValues(localStorageKeyFlashcards, FILTERS_IDS)
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_FLASHCARD: {
      const { list, flashcard, additionalInfo } = action.payload;

      return {
        ...state,
        flashcard,
        additionalInfo,
        flashcardLength: getLength(list),
        loading: false
      };
    }

    case actionTypes.GET_FLASHCARD_INIT: {
      return {
        ...state,
        loading: true
      };
    }

    case actionTypes.FLASHCARD_SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload
      };
    }

    default:
      return state;
  }
}

const getFlashcardInitAction = () => ({
  type: actionTypes.GET_FLASHCARD_INIT
});

const getFlashcardAction = (data) => ({
  type: actionTypes.GET_FLASHCARD,
  payload: data
});

const setFiltersAction = (payload) => ({
  type: actionTypes.FLASHCARD_SET_FILTERS,
  payload
});

export const getFlashcard = () => (dispatch, getStore) => {
  dispatch(getFlashcardInitAction());
  const { selectedFilters } = getStore().Flashcards;

  const list = getSelectedFiltersList(vocabJson, selectedFilters, FILTERS_IDS);

  const randomVocab = getRandomVocab(list.all);

  fetchJisho(randomVocab.meaning || randomVocab.vocab)
    .then((response) => {
      const flashcard = {
        reading: response.data[0].japanese[0].reading,
        meaning: response.data[0].senses[0].english_definitions.join(', '),
        vocab: randomVocab.vocab
      };

      dispatch(getFlashcardAction({
        list,
        flashcard,
        additionalInfo: randomVocab
      }));
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Flashcards;

  setChangeFilters(filter, selectedFilters, localStorageKeyFlashcards);

  dispatch(setFiltersAction(selectedFilters));
  dispatch(getFlashcard());
};
