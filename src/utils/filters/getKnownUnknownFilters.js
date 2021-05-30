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
