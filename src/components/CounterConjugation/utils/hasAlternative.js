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
        || counterGroup === COUNTERS_GROUPS.so
        || counterGroup === COUNTERS_GROUPS.gatsu
        || counterGroup === COUNTERS_GROUPS.nichi
        || counterGroup === COUNTERS_GROUPS.nen
        || counterGroup === COUNTERS_GROUPS.f
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
        || counterGroup === COUNTERS_GROUPS.so
        || counterGroup === COUNTERS_GROUPS.gatsu
        || counterGroup === COUNTERS_GROUPS.nichi
      );
    }

    case NUMBERS.ten:
    case NUMBERS.thirty: {
      return !(
        counterGroup === COUNTERS_GROUPS.default
        || counterGroup === COUNTERS_GROUPS.tsu
        || counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.nin
        || counterGroup === COUNTERS_GROUPS.gatsu
        || counterGroup === COUNTERS_GROUPS.nichi
        || counterGroup === COUNTERS_GROUPS.nen
      );
    }

    default:
      return false;
  }
};
