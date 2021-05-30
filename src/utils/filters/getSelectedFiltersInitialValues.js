export const getSelectedFiltersInitialValues = (localStorageKey, IDS) => !localStorage
  .getItem(localStorageKey)
  ? [IDS.KNOWN, IDS.IN_PROGRESS, IDS.NOT_KNOWN]
  : JSON.parse(localStorage.getItem(localStorageKey));

