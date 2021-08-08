import { createSelector } from 'reselect';

const grammarSelector = (store) => store.Grammar;

export default createSelector(
  grammarSelector,
  (grammar) => ({
    ...grammar
  })
);
