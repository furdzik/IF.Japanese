export const getOnlyJoyoKanji = (selectedFilters, item, IDS) => selectedFilters
  .indexOf(IDS.joyoKanji) > -1
  ? item.joyo === true
  : (item.joyo === true || item.joyo === false);

export const getKnownUnknownFilters = (selectedFilters, list, IDS, isKanji = false) => {
  let knownList = [];
  let toRepeatList = [];
  let nowLearningList = [];
  let inProgressList = [];
  let notKnownList = [];

  if (selectedFilters.indexOf(IDS.known) > -1) {
    knownList = list.filter((item) => item.known && !item.inProgress && !item.nowLearning);

    if (isKanji) {
      knownList = knownList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  if (selectedFilters.indexOf(IDS.toRepeat) > -1) {
    // Only grammar
    toRepeatList = list.filter(
      (item) => item.toRepeat && !item.known && !item.inProgress && !item.nowLearning
    );
  }

  if (selectedFilters.indexOf(IDS.inProgress) > -1) {
    inProgressList = list.filter((item) => item.inProgress && !item.nowLearning);

    if (isKanji) {
      inProgressList = inProgressList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  if (selectedFilters.indexOf(IDS.nowLearning) > -1) {
    nowLearningList = list.filter((item) => item.nowLearning && !item.inProgress);

    if (isKanji) {
      nowLearningList = nowLearningList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  if (selectedFilters.indexOf(IDS.notKnown) > -1) {
    notKnownList = list.filter(
      (item) => !item.known && !item.toRepeat && !item.inProgress && !item.nowLearning
    );

    if (isKanji) {
      notKnownList = notKnownList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  return {
    knownList,
    toRepeatList,
    nowLearningList,
    inProgressList,
    notKnownList
  };
};
