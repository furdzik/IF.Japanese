import { COUNTERS_GROUPS, NUMBERS } from '@constants';

export const shouldHaveMain = (counterGroup, number) => (
  (counterGroup === COUNTERS_GROUPS.tsu && number === NUMBERS.ten)
  || (counterGroup === COUNTERS_GROUPS.sai && number === NUMBERS.twenty)
);
