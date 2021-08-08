export const getOnlyJoyoKanji = (selectedFilters, item, IDS) => selectedFilters
  .indexOf(IDS.JOYO_KANJI) > -1
  ? item.joyo === true
  : (item.joyo === true || item.joyo === false);

export const getKnownUnknownFilters = (selectedFilters, list, IDS, isKanji = false) => {
  let knownList = [];
  let toRepeatList = [];
  let nowLearningList = [];
  let inProgressList = [];
  let notKnownList = [];

  if (selectedFilters.indexOf(IDS.KNOWN) > -1) {
    knownList = list.filter((item) => item.known && !item.inProgress && !item.nowLearning);

    if (isKanji) {
      knownList = knownList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  if (selectedFilters.indexOf(IDS.TO_REPEAT) > -1) {
    // Only grammar
    toRepeatList = list.filter(
      (item) => item.toRepeat && !item.known && !item.inProgress && !item.nowLearning
    );
  }

  if (selectedFilters.indexOf(IDS.IN_PROGRESS) > -1) {
    inProgressList = list.filter((item) => item.inProgress && !item.nowLearning);

    if (isKanji) {
      inProgressList = inProgressList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  if (selectedFilters.indexOf(IDS.NOW_LEARNING) > -1) {
    nowLearningList = list.filter((item) => item.nowLearning && !item.inProgress);

    if (isKanji) {
      nowLearningList = nowLearningList
        .filter((item) => getOnlyJoyoKanji(selectedFilters, item, IDS));
    }
  }

  if (selectedFilters.indexOf(IDS.NOT_KNOWN) > -1) {
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
