import { FILTERS_IDS } from '@config/constants';
import defaultMessages from '@utils/defaultMessages/default.messages';

export const filterLabels = [
  {
    value: FILTERS_IDS.KNOWN,
    label: (defaultMessages.known).defaultMessage
  },
  {
    value: FILTERS_IDS.IN_PROGRESS,
    label: (defaultMessages.inProgress).defaultMessage
  },
  {
    value: FILTERS_IDS.NOW_LEARNING,
    label: (defaultMessages.nowLearning).defaultMessage
  },
  {
    value: FILTERS_IDS.NOT_KNOWN,
    label: (defaultMessages.notKnown).defaultMessage
  }
];

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
