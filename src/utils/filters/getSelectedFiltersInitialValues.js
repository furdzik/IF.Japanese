const getIdsArray = (IDS, hasToRepeat) => hasToRepeat
  ? [IDS.KNOWN, IDS.IN_PROGRESS, IDS.NOW_LEARNING, IDS.TO_REPEAT, IDS.NOT_KNOWN]
  : [IDS.KNOWN, IDS.IN_PROGRESS, IDS.NOW_LEARNING, IDS.NOT_KNOWN];

export const getSelectedFiltersInitialValues = (localStorageKey, IDS, hasToRepeat) => !localStorage
  .getItem(localStorageKey)
  ? getIdsArray(IDS, hasToRepeat)
  : JSON.parse(localStorage.getItem(localStorageKey));

