import { createSelector } from 'reselect';

const vocabularySelector = (store) => store.Vocabulary;

export default createSelector(
  vocabularySelector,
  (vocab) => ({
    ...vocab
  })
);
