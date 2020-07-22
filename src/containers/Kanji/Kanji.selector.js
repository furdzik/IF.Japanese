import { createSelector } from 'reselect';

const kanjiSelector = (store) => store.Vocabulary;

export default createSelector(
  kanjiSelector,
  (vocab) => ({
    ...vocab
  })
);
