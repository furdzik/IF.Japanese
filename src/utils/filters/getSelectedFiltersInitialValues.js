const getIdsArray = (IDS, hasToRepeat) => hasToRepeat
  ? [IDS.known, IDS.inProgress, IDS.nowLearning, IDS.toRepeat, IDS.notKnown]
  : [IDS.known, IDS.inProgress, IDS.nowLearning, IDS.notKnown];

export const getSelectedFiltersInitialValues = (localStorageKey, IDS, hasToRepeat) => !localStorage
  .getItem(localStorageKey)
  ? getIdsArray(IDS, hasToRepeat)
  : JSON.parse(localStorage.getItem(localStorageKey));

