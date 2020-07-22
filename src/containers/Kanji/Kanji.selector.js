import { createSelector } from 'reselect';

const kanjiSelector = (store) => store.Kanji;

export default createSelector(
  kanjiSelector,
  (kanji) => ({
    ...kanji
  })
);
