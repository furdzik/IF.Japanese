import { oneOfN5toN1Filters } from './oneOfN5toN1Filters';
import { getKnownUnknownFilters } from './getKnownUnknownFilters';

export const getSelectedFiltersList = (originalList, selectedFilters, IDS, isKanji = false) => {
  let list = {
    knownList: [],
    notKnownList: [],
    inProgressList: [],
    n5: [],
    n4: [],
    n3: [],
    n2: [],
    n1: [],
    other: [],
    all: []
  };

  // N5..N1 filters
  if (oneOfN5toN1Filters(selectedFilters, IDS)) {
    if (selectedFilters.indexOf(IDS.LEVEL_5) > -1) {
      list.n5 = originalList.filter((item) => item.level === 5);
    }
    if (selectedFilters.indexOf(IDS.LEVEL_4) > -1) {
      list.n4 = originalList.filter((item) => item.level === 4);
    }
    if (selectedFilters.indexOf(IDS.LEVEL_3) > -1) {
      list.n3 = originalList.filter((item) => item.level === 3);
    }
    if (selectedFilters.indexOf(IDS.LEVEL_2) > -1) {
      list.n2 = originalList.filter((item) => item.level === 2);
    }
    if (selectedFilters.indexOf(IDS.LEVEL_1) > -1) {
      list.n1 = originalList.filter((item) => item.level === 1);
    }
    if (selectedFilters.indexOf(IDS.OTHER) > -1) {
      list.other = originalList.filter((item) => item.level === 0);
    }

    list.all = list.n5.concat(list.n4, list.n3, list.n2, list.n1, list.other);

    list = getKnownUnknownFilters(selectedFilters, list.all, IDS, isKanji);
  } else {
    // known / not known filters
    list = getKnownUnknownFilters(selectedFilters, originalList, IDS, isKanji);
  }

  list.all = list.knownList.concat(list.inProgressList, list.notKnownList);

  return list;
};
