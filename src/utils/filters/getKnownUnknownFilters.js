export const getOnlyJoyoKanji = (selectedFilters, item, IDS) => selectedFilters
  .indexOf(IDS.JOYO_KANJI) > -1
  ? item.joyo === true
  : (item.joyo === true || item.joyo === false);

export const getKnownUnknownFilters = (selectedFilters, list, IDS, isKanji = false) => {
  let knownList = [];
  let notKnownList = [];
  let inProgressList = [];

  if (selectedFilters.indexOf(IDS.KNOWN) > -1) {
    knownList = list.filter((item) => item.known && !item.inProgress);

    if (isKanji) {
      knownList = knownList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  if (selectedFilters.indexOf(IDS.IN_PROGRESS) > -1) {
    inProgressList = list.filter((item) => item.inProgress);

    if (isKanji) {
      inProgressList = inProgressList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  if (selectedFilters.indexOf(IDS.NOT_KNOWN) > -1) {
    notKnownList = list.filter((item) => !item.known && !item.inProgress);

    if (isKanji) {
      notKnownList = notKnownList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  return {
    knownList,
    notKnownList,
    inProgressList
  };
};
