import {
  KNOWN_KANJI,
  IN_PROGRESS_KANJI,
  NOT_KNOWN_KANJI,
  LEVEL_5_KANJI,
  LEVEL_4_KANJI,
  LEVEL_3_KANJI,
  LEVEL_2_KANJI,
  LEVEL_1_KANJI,
  OTHER_KANJI,
  JOYO_KANJI
} from '@config/constants';

export const getSelectedFiltersInitialValue = () => !localStorage.getItem('kanjiSelectedFilters')
  ? [KNOWN_KANJI, IN_PROGRESS_KANJI, NOT_KNOWN_KANJI]
  : JSON.parse(localStorage.getItem('kanjiSelectedFilters'));

export const getOnlyJoyoKanji = (selectedFilters, item) => selectedFilters.indexOf(JOYO_KANJI) > -1
  ? item.joyo === true
  : (item.joyo === true || item.joyo === false);

export const oneOfN5toN1Filters = (selectedFilters) => selectedFilters.indexOf(LEVEL_5_KANJI) > -1
  || selectedFilters.indexOf(LEVEL_4_KANJI) > -1
  || selectedFilters.indexOf(LEVEL_3_KANJI) > -1
  || selectedFilters.indexOf(LEVEL_2_KANJI) > -1
  || selectedFilters.indexOf(LEVEL_1_KANJI) > -1
  || selectedFilters.indexOf(OTHER_KANJI) > -1;

export const getKnownUnknownFilters = (selectedFilters, list) => {
  let knownList = [];
  let notKnownList = [];
  let inProgressList = [];

  if (selectedFilters.indexOf(KNOWN_KANJI) > -1) {
    knownList = list.filter(
      (item) => item.known && !item.inProgress && getOnlyJoyoKanji(selectedFilters, item)
    );
  }
  if (selectedFilters.indexOf(IN_PROGRESS_KANJI) > -1) {
    inProgressList = list.filter(
      (item) => item.inProgress && getOnlyJoyoKanji(selectedFilters, item)
    );
  }
  if (selectedFilters.indexOf(NOT_KNOWN_KANJI) > -1) {
    notKnownList = list.filter(
      (item) => !item.known && !item.inProgress && getOnlyJoyoKanji(selectedFilters, item)
    );
  }

  return {
    knownList,
    notKnownList,
    inProgressList
  };
};
