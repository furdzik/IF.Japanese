export const getSelectedFiltersInitialValue = (localStorageKey, IDS) => !localStorage
  .getItem(localStorageKey)
  ? [IDS.KNOWN, IDS.IN_PROGRESS, IDS.NOT_KNOWN]
  : JSON.parse(localStorage.getItem(localStorageKey));

export const oneOfN5toN1Filters = (selectedFilters, IDS) => selectedFilters
  .indexOf(IDS.LEVEL_5) > -1
  || selectedFilters.indexOf(IDS.LEVEL_4) > -1
  || selectedFilters.indexOf(IDS.LEVEL_3) > -1
  || selectedFilters.indexOf(IDS.LEVEL_2) > -1
  || selectedFilters.indexOf(IDS.LEVEL_1) > -1
  || selectedFilters.indexOf(IDS.OTHER) > -1;

export const getKnownUnknownFilters = (selectedFilters, list, IDS) => {
  let knownList = [];
  let notKnownList = [];
  let inProgressList = [];

  if (selectedFilters.indexOf(IDS.KNOWN) > -1) {
    knownList = list.filter((item) => item.known && !item.inProgress);
  }
  if (selectedFilters.indexOf(IDS.IN_PROGRESS) > -1) {
    inProgressList = list.filter((item) => item.inProgress);
  }
  if (selectedFilters.indexOf(IDS.NOT_KNOWN) > -1) {
    notKnownList = list.filter((item) => !item.known && !item.inProgress);
  }
  return {
    knownList,
    notKnownList,
    inProgressList
  };
};
// vocabSelectedFilters
