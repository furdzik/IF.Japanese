import vocabJson from '@data/vocabulary.json';

import { fetchJisho } from '@api';
import getRandomVocab from './utils/getRandomVocab';

const actionTypes = {
  GET_FLASHCARD_INIT: 'FLASHCARDS/GET_FLASHCARD_INIT',
  GET_FLASHCARD: 'FLASHCARDS/GET_FLASHCARD'
};

const initialState = {
  flashcard: null,
  additionalInfo: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_FLASHCARD_INIT: {
      return {
        ...state,
        loading: true
      };
    }

    case actionTypes.GET_FLASHCARD: {
      const data = action.payload;

      return {
        ...state,
        flashcard: data.flashcard,
        additionalInfo: data.additionalInfo,
        loading: false
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

export const getFlashcardFn = () => (dispatch) => {
  dispatch(getFlashcardInit());

  const randomVocab = getRandomVocab(vocabJson);

  fetchJisho(randomVocab.meaning || randomVocab.vocab)
    .then((response) => {
      const flashcard = {
        reading: response.data[0].japanese[0].reading,
        meaning: response.data[0].senses[0].english_definitions.join(', '),
        vocab: randomVocab.vocab
      };

      dispatch(getFlashcard({
        flashcard,
        additionalInfo: randomVocab
      }));
    })
    .catch((error) => {
      throw new Error(error);
    });
};
