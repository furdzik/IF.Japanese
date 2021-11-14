import { NUMBERS, COUNTERS_GROUPS } from '@constants';

export const hasAlternative = (number, counterGroup) => {
  switch (number) {
    case NUMBERS.four: {
      return !(
        counterGroup === COUNTERS_GROUPS.default
        || counterGroup === COUNTERS_GROUPS.tsu
        || counterGroup === COUNTERS_GROUPS.nin
        || counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.ke
        || counterGroup === COUNTERS_GROUPS.s
        || counterGroup === COUNTERS_GROUPS.sai
      );
    }

    case NUMBERS.seven: {
      return !(
        counterGroup === COUNTERS_GROUPS.default
        || counterGroup === COUNTERS_GROUPS.tsu
        || counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.ke
        || counterGroup === COUNTERS_GROUPS.s
        || counterGroup === COUNTERS_GROUPS.sai
      );
    }

    case NUMBERS.ten: {
      return !(
        counterGroup === COUNTERS_GROUPS.default
        || counterGroup === COUNTERS_GROUPS.tsu
        || counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.nin
      );
    }

    default:
      return false;
  }
};
