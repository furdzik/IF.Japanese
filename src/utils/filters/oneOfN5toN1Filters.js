export const oneOfN5toN1Filters = (selectedFilters, IDS) => selectedFilters
  .indexOf(IDS.LEVEL_5) > -1
  || selectedFilters.indexOf(IDS.LEVEL_4) > -1
  || selectedFilters.indexOf(IDS.LEVEL_3) > -1
  || selectedFilters.indexOf(IDS.LEVEL_2) > -1
  || selectedFilters.indexOf(IDS.LEVEL_1) > -1
  || selectedFilters.indexOf(IDS.OTHER) > -1;
