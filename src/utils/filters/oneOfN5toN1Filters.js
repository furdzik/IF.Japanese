export const oneOfN5toN1Filters = (selectedFilters, IDS) => selectedFilters
  .indexOf(IDS.level5) > -1
  || selectedFilters.indexOf(IDS.level4) > -1
  || selectedFilters.indexOf(IDS.level3) > -1
  || selectedFilters.indexOf(IDS.level2) > -1
  || selectedFilters.indexOf(IDS.level1) > -1
  || selectedFilters.indexOf(IDS.other) > -1;
