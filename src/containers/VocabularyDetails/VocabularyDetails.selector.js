import { createSelector } from 'reselect';

const vocabularyDetailsSelector = (store) => store.VocabularyDetails;

export default createSelector(
  vocabularyDetailsSelector,
  (vocabDetails) => ({
    ...vocabDetails
  })
);
