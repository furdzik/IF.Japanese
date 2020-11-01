import {
  KNOWN_VERBS,
  IN_PROGRESS_VERBS,
  NOT_KNOWN_VERBS,
  LEVEL_5_VERBS,
  LEVEL_4_VERBS,
  LEVEL_3_VERBS,
  LEVEL_2_VERBS,
  LEVEL_1_VERBS,
  OTHER_VERBS
} from '@config/constants';

export const getSelectedFiltersInitialValue = () => !localStorage.getItem('verbsSelectedFilters')
  ? [KNOWN_VERBS, IN_PROGRESS_VERBS, NOT_KNOWN_VERBS]
  : JSON.parse(localStorage.getItem('verbsSelectedFilters'));

export const oneOfN5toN1Filters = (selectedFilters) => selectedFilters.indexOf(LEVEL_5_VERBS) > -1
  || selectedFilters.indexOf(LEVEL_4_VERBS) > -1
  || selectedFilters.indexOf(LEVEL_3_VERBS) > -1
  || selectedFilters.indexOf(LEVEL_2_VERBS) > -1
  || selectedFilters.indexOf(LEVEL_1_VERBS) > -1
  || selectedFilters.indexOf(OTHER_VERBS) > -1;

export const getKnownUnknownFilters = (selectedFilters, list) => {
  let knownList = [];
  let notKnownList = [];
  let inProgressList = [];

  if (selectedFilters.indexOf(KNOWN_VERBS) > -1) {
    knownList = list.filter((item) => item.known && !item.inProgress);
  }
  if (selectedFilters.indexOf(IN_PROGRESS_VERBS) > -1) {
    inProgressList = list.filter((item) => item.inProgress);
  }
  if (selectedFilters.indexOf(NOT_KNOWN_VERBS) > -1) {
    notKnownList = list.filter((item) => !item.known && !item.inProgress);
  }
  return {
    knownList,
    notKnownList,
    inProgressList
  };
};
