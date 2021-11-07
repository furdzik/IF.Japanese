import vocabJson from '@data/vocabulary.json';

import { fetchJisho } from '@api';

import { localStorageKeyFlashcards, FILTERS_IDS } from '@constants';

import {
  getSelectedFiltersInitialValues,
  getSelectedFiltersList,
  setChangeFilters,
  getLength,
  lengthInitialState
} from '@utils/filters';
import { isCorrectVocabularyMeaning } from '@utils/vocabulary-meaning';

import { getRandomVocab, getFlashcardData } from './utils';
import messages from './Flashcards.messages';

const actionTypes = {
  GET_FLASHCARD_INIT: 'FLASHCARDS/GET_FLASHCARD_INIT',
  GET_FLASHCARD: 'FLASHCARDS/GET_FLASHCARD',
  FLASHCARD_SET_FILTERS: 'FLASHCARDS/SET_FILTERS',
  FLASHCARD_SET_REVEAL: 'FLASHCARDS/SET_REVEAL',
  FLASHCARD_SET_ERROR: 'FLASHCARDS/SET_ERROR'
};

const initialState = {
  flashcard: null,
  flashcardLength: lengthInitialState,
  additionalInfo: null,
  isRevealed: false,
  selectedFilters: getSelectedFiltersInitialValues(localStorageKeyFlashcards, FILTERS_IDS),
  error: null
};

export default function flashcardsReducer (state = initialState, action) {
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
        error: null,
        loading: true
      };
    }

    case actionTypes.FLASHCARD_SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload
      };
    }

    case actionTypes.FLASHCARD_SET_REVEAL: {
      return {
        ...state,
        isRevealed: action.payload
      };
    }

    case actionTypes.FLASHCARD_SET_ERROR: {
      return {
        ...state,
        error: action.payload
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

const setRevealAction = (payload) => ({
  type: actionTypes.FLASHCARD_SET_REVEAL,
  payload
});

const setErrorAction = (payload) => ({
  type: actionTypes.FLASHCARD_SET_ERROR,
  payload
});

export const getFlashcard = () => (dispatch, getStore) => {
  dispatch(getFlashcardInitAction());
  const { selectedFilters } = getStore().Flashcards;

  const list = getSelectedFiltersList(vocabJson, selectedFilters, FILTERS_IDS);

  if (list.all.length === 0) {
    dispatch(setErrorAction((messages.errorNoResults)?.defaultMessage));
    return;
  }

  const randomVocab = getRandomVocab(list.all);
  const { meaning } = randomVocab;

  fetchJisho(
    randomVocab.meaning
      ? `${randomVocab.vocab},${randomVocab.meaning},${randomVocab.vocab}`
      : randomVocab.vocab
  )
    .then((response) => {
      response.data.forEach((kanji) => {
        let flashcard;

        if (meaning) {
          if (isCorrectVocabularyMeaning(kanji.japanese, randomVocab.vocab, randomVocab.meaning)) {
            flashcard = getFlashcardData(kanji.japanese, kanji.senses, randomVocab);

            dispatch(getFlashcardAction({
              list,
              flashcard,
              additionalInfo: randomVocab
            }));
          }
        } else {
          flashcard = getFlashcardData(
            response.data[0].japanese, response.data[0].senses, randomVocab
          );

          dispatch(getFlashcardAction({
            list,
            flashcard,
            additionalInfo: randomVocab
          }));
        }
      });
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

export const setReveal = (isRevealed) => (dispatch) => {
  dispatch(setRevealAction(isRevealed));
};
