import { createSelector } from 'reselect';

const grammarDetailsSelector = (store) => store.GrammarDetails;

export default createSelector(
  grammarDetailsSelector,
  (grammarDetails) => ({
    ...grammarDetails
  })
);
