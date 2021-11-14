import { NUMBERS, COUNTERS_GROUPS } from '@constants';

import messages from '../CounterConjugation.messages';

export const getNumberReading = (number, counterGroup, alternative = false) => {
  switch (number) {
    case NUMBERS.one: {
      if (
        counterGroup === COUNTERS_GROUPS.tsu
        || counterGroup === COUNTERS_GROUPS.nin
      ) {
        return (messages.oneGroupTsu)?.defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.s
        || counterGroup === COUNTERS_GROUPS.sai
      ) {
        return (messages.oneGroupKHS)?.defaultMessage;
      }

      return (messages.oneGroupDefault)?.defaultMessage;
    }

    case NUMBERS.two: {
      if (
        counterGroup === COUNTERS_GROUPS.tsu
        || counterGroup === COUNTERS_GROUPS.nin
      ) {
        return (messages.twoGroupTsu)?.defaultMessage;
      }

      return (messages.twoGroupDefault)?.defaultMessage;
    }

    case NUMBERS.three: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.threeGroupTsu)?.defaultMessage;
      }

      return (messages.threeGroupDefault)?.defaultMessage;
    }

    case NUMBERS.four: {
      if (alternative) {
        return (messages.fourGroupDefaultAlternative)?.defaultMessage;
      }

      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.fourGroupTsu)?.defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.nin
      ) {
        return (messages.fourGroupJNin)?.defaultMessage;
      }

      return (messages.fourGroupDefault)?.defaultMessage;
    }

    case NUMBERS.five: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.fiveGroupTsu)?.defaultMessage;
      }

      return (messages.fiveGroupDefault)?.defaultMessage;
    }

    case NUMBERS.six: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.sixGroupTsu)?.defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.h
      ) {
        return (messages.sixGroupKH)?.defaultMessage;
      }

      return (messages.sixGroupDefault)?.defaultMessage;
    }

    case NUMBERS.seven: {
      if (alternative) {
        return (messages.sevenGroupDefaultAlternative)?.defaultMessage;
      }

      if (counterGroup === COUNTERS_GROUPS.ji) {
        return (messages.sevenGroupDefaultAlternative)?.defaultMessage;
      }

      return (messages.sevenGroupDefault)?.defaultMessage;
    }

    case NUMBERS.eight: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.eightGroupTsu)?.defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.s
        || counterGroup === COUNTERS_GROUPS.sai
      ) {
        return (messages.eightGroupKHS)?.defaultMessage;
      }

      return (messages.eightGroupDefault)?.defaultMessage;
    }

    case NUMBERS.nine: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.nineGroupTsu)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.ji) {
        return (messages.nineGroupJ)?.defaultMessage;
      }

      return (messages.nineGroupDefault)?.defaultMessage;
    }

    case NUMBERS.ten: {
      if (alternative) {
        return (messages.tenGroupDefaultAlternative)?.defaultMessage;
      }

      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.tenGroupTsu)?.defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.s
        || counterGroup === COUNTERS_GROUPS.sai
      ) {
        return (messages.tenGroupKHS)?.defaultMessage;
      }

      return (messages.tenGroupDefault)?.defaultMessage;
    }

    default:
      return '';
  }
};
