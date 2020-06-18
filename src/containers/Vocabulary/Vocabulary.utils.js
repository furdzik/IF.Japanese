import {
  KNOWN_VOCAB,
  IN_PROGRESS_VOCAB,
  NOT_KNOWN_VOCAB,
  LEVEL_5_VOCAB,
  LEVEL_4_VOCAB,
  LEVEL_3_VOCAB,
  LEVEL_2_VOCAB,
  LEVEL_1_VOCAB,
  OTHER_VOCAB
} from '@config/constants';

export const getSelectedFiltersInitialValue = () => !localStorage.getItem('selectedFilters')
  ? [KNOWN_VOCAB, IN_PROGRESS_VOCAB, NOT_KNOWN_VOCAB]
  : JSON.parse(localStorage.getItem('selectedFilters'));

export const oneOfN5toN1Filters = (selectedFilters) => selectedFilters.indexOf(LEVEL_5_VOCAB) > -1
  || selectedFilters.indexOf(LEVEL_4_VOCAB) > -1
  || selectedFilters.indexOf(LEVEL_3_VOCAB) > -1
  || selectedFilters.indexOf(LEVEL_2_VOCAB) > -1
  || selectedFilters.indexOf(LEVEL_1_VOCAB) > -1
  || selectedFilters.indexOf(OTHER_VOCAB) > -1;

export const getKnownUnknownFilters = (selectedFilters, list) => {
  let knownList = [];
  let notKnownList = [];
  let inProgressList = [];

  if (selectedFilters.indexOf(KNOWN_VOCAB) > -1) {
    knownList = list.filter((item) => item.known && !item.inProgress);
  }
  if (selectedFilters.indexOf(IN_PROGRESS_VOCAB) > -1) {
    inProgressList = list.filter((item) => item.inProgress);
  }
  if (selectedFilters.indexOf(NOT_KNOWN_VOCAB) > -1) {
    notKnownList = list.filter((item) => !item.known && !item.inProgress);
  }
  return {
    knownList,
    notKnownList,
    inProgressList
  };
};
