import { oneOfN5toN1Filters } from './oneOfN5toN1Filters';
import { getKnownUnknownFilters } from './getKnownUnknownFilters';

export const getSelectedFiltersList = (originalList, selectedFilters, IDS, isKanji = false) => {
  let list = {
    knownList: [],
    toRepeatList: [],
    notKnownList: [],
    inProgressList: [],
    nowLearningList: [],
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
    if (selectedFilters.indexOf(IDS.level5) > -1) {
      list.n5 = originalList.filter((item) => item.level === 5);
    }
    if (selectedFilters.indexOf(IDS.level4) > -1) {
      list.n4 = originalList.filter((item) => item.level === 4);
    }
    if (selectedFilters.indexOf(IDS.level3) > -1) {
      list.n3 = originalList.filter((item) => item.level === 3);
    }
    if (selectedFilters.indexOf(IDS.level2) > -1) {
      list.n2 = originalList.filter((item) => item.level === 2);
    }
    if (selectedFilters.indexOf(IDS.level1) > -1) {
      list.n1 = originalList.filter((item) => item.level === 1);
    }
    if (selectedFilters.indexOf(IDS.other) > -1) {
      list.other = originalList.filter((item) => item.level === 0);
    }

    list.all = list.n5.concat(list.n4, list.n3, list.n2, list.n1, list.other);

    list = getKnownUnknownFilters(selectedFilters, list.all, IDS, isKanji);
  } else {
    // known / not known filters
    list = getKnownUnknownFilters(selectedFilters, originalList, IDS, isKanji);
  }

  list.all = list.knownList.concat(
    list.toRepeatList,
    list.nowLearningList,
    list.inProgressList,
    list.notKnownList
  );

  return list;
};
