import { COUNTERS_GROUPS, NUMBERS } from '@constants';

export const shouldHaveMain = (counterGroup, number, alternative = false) => (
  (counterGroup === COUNTERS_GROUPS.tsu && number === NUMBERS.ten)
  || (counterGroup === COUNTERS_GROUPS.sai && number === NUMBERS.twenty)
  || (counterGroup === COUNTERS_GROUPS.f && number === NUMBERS.thirty && alternative === true)
);
