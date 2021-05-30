import vocabJson from '@data/vocabulary.json';

import { fetchJisho } from '@api';

import { localStorageKeyFlashcards, FILTERS_IDS } from '@config/constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters
} from '@utils/filters';

import getRandomVocab from './utils/getRandomVocab';

const actionTypes = {
  GET_FLASHCARD_INIT: 'FLASHCARDS/GET_FLASHCARD_INIT',
  GET_FLASHCARD: 'FLASHCARDS/GET_FLASHCARD',
  FLASHCARD_SET_FILTERS: 'FLASHCARDS/SET_FILTERS'
};

const initialState = {
  flashcard: null,
  flashcardLength: {
    known: 0,
    inProgress: 0,
    notKnown: 0,
    all: 0
  },
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
        flashcardLength: {
          known: list.knownList.length,
          inProgress: list.inProgressList.length,
          notKnown: list.all.length - list.knownList.length - list.inProgressList.length,
          all: list.all.length
        },
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

export const getFlashcardInit = () => ({
  type: actionTypes.GET_FLASHCARD_INIT
});

export const getFlashcard = (data) => ({
  type: actionTypes.GET_FLASHCARD,
  payload: data
});

export const setFilters = (payload) => ({
  type: actionTypes.FLASHCARD_SET_FILTERS,
  payload
});

export const getFlashcardFn = () => (dispatch, getStore) => {
  dispatch(getFlashcardInit());
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

      dispatch(getFlashcard({
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

  dispatch(setFilters(selectedFilters));
  dispatch(getFlashcardFn());
};
