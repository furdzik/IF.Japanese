import { createSelector } from 'reselect';

const flashcardsSelector = (store) => store.Flashcards;

export default createSelector(
  flashcardsSelector,
  (flashcards) => ({
    ...flashcards
  })
);
