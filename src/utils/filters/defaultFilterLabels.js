import { FILTERS_IDS } from '@constants';

import defaultMessages from '@lang/messages/default.messages';

export const getFilterLabels = (hasToRepeat = false) => {
  const newFilters = [];

  const filters = [
    {
      value: FILTERS_IDS.known,
      label: (defaultMessages.known).defaultMessage,
      helper: (defaultMessages.knownHelper).defaultMessage
    },
    {
      value: FILTERS_IDS.nowLearning,
      label: (defaultMessages.nowLearning).defaultMessage,
      helper: (defaultMessages.nowLearningHelper).defaultMessage
    },
    {
      value: FILTERS_IDS.inProgress,
      label: (defaultMessages.inProgress).defaultMessage,
      helper: (defaultMessages.inProgressHelper).defaultMessage
    },
    {
      value: FILTERS_IDS.toRepeat,
      label: (defaultMessages.toRepeat).defaultMessage,
      helper: (defaultMessages.toRepeatHelper).defaultMessage
    },
    {
      value: FILTERS_IDS.notKnown,
      label: (defaultMessages.notKnown).defaultMessage,
      helper: (defaultMessages.notKnownHelper).defaultMessage
    }
  ];

  filters.forEach((el) => {
    if ((hasToRepeat) || (el.value !== FILTERS_IDS.toRepeat && !hasToRepeat)) {
      newFilters.push(el);
    }
  });

  return newFilters;
};

export const secondaryFilterLabels = [
  {
    value: FILTERS_IDS.level5,
    label: (defaultMessages.n5).defaultMessage
  },
  {
    value: FILTERS_IDS.level4,
    label: (defaultMessages.n4).defaultMessage
  },
  {
    value: FILTERS_IDS.level3,
    label: (defaultMessages.n3).defaultMessage
  },
  {
    value: FILTERS_IDS.level2,
    label: (defaultMessages.n2).defaultMessage
  },
  {
    value: FILTERS_IDS.level1,
    label: (defaultMessages.n1).defaultMessage
  },
  {
    value: FILTERS_IDS.other,
    label: (defaultMessages.other).defaultMessage
  }
];
