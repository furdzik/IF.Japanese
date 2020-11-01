import { createSelector } from 'reselect';

const verbsSelector = (store) => store.Verbs;

export default createSelector(
  verbsSelector,
  (verbs) => ({
    ...verbs
  })
);
