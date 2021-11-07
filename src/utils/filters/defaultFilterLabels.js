import { FILTERS_IDS } from '@constants';
import defaultMessages from '@lang/defaultMessages/default.messages';

export const getFilterLabels = (hasToRepeat = false) => {
  const newFilters = [];

  const filters = [
    {
      value: FILTERS_IDS.KNOWN,
      label: (defaultMessages.known).defaultMessage,
      helper: (defaultMessages.knownHelper).defaultMessage
    },
    {
      value: FILTERS_IDS.NOW_LEARNING,
      label: (defaultMessages.nowLearning).defaultMessage,
      helper: (defaultMessages.nowLearningHelper).defaultMessage
    },
    {
      value: FILTERS_IDS.IN_PROGRESS,
      label: (defaultMessages.inProgress).defaultMessage,
      helper: (defaultMessages.inProgressHelper).defaultMessage
    },
    {
      value: FILTERS_IDS.TO_REPEAT,
      label: (defaultMessages.toRepeat).defaultMessage,
      helper: (defaultMessages.toRepeatHelper).defaultMessage
    },
    {
      value: FILTERS_IDS.NOT_KNOWN,
      label: (defaultMessages.notKnown).defaultMessage,
      helper: (defaultMessages.notKnownHelper).defaultMessage
    }
  ];

  filters.forEach((el) => {
    if ((hasToRepeat) || (el.value !== FILTERS_IDS.TO_REPEAT && !hasToRepeat)) {
      newFilters.push(el);
    }
  });

  return newFilters;
};

export const secondaryFilterLabels = [
  {
    value: FILTERS_IDS.LEVEL_5,
    label: (defaultMessages.n5).defaultMessage
  },
  {
    value: FILTERS_IDS.LEVEL_4,
    label: (defaultMessages.n4).defaultMessage
  },
  {
    value: FILTERS_IDS.LEVEL_3,
    label: (defaultMessages.n3).defaultMessage
  },
  {
    value: FILTERS_IDS.LEVEL_2,
    label: (defaultMessages.n2).defaultMessage
  },
  {
    value: FILTERS_IDS.LEVEL_1,
    label: (defaultMessages.n1).defaultMessage
  },
  {
    value: FILTERS_IDS.OTHER,
    label: (defaultMessages.other).defaultMessage
  }
];
