export const getSelectedFiltersInitialValues = (localStorageKey, IDS) => !localStorage
  .getItem(localStorageKey)
  ? [IDS.KNOWN, IDS.IN_PROGRESS, IDS.NOW_LEARNING, IDS.NOT_KNOWN]
  : JSON.parse(localStorage.getItem(localStorageKey));

