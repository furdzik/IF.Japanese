import { createSelector } from 'reselect';

const vocabExamplesSelector = (store) => store.VocabExamples;

export default createSelector(
  vocabExamplesSelector,
  (vocabExamples) => ({
    ...vocabExamples
  })
);
