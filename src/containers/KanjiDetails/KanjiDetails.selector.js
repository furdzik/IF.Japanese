import { createSelector } from 'reselect';

const kanjiDetailsSelector = (store) => store.KanjiDetails;

export default createSelector(
  kanjiDetailsSelector,
  (kanjiDetails) => ({
    ...kanjiDetails
  })
);
