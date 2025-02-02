import React from 'react';

import { NUMBERS, COUNTERS_GROUPS } from '@constants';

import countersMessages from '@lang/messages/counters.messages';

import KanjiWithFurigana from '@components/KanjiWithFurigana';

export const getNumberReading = (number, counterGroup, alternative = false) => {
  switch (number) {
    case NUMBERS.one: {
      if (
        counterGroup === COUNTERS_GROUPS.tsu
        || counterGroup === COUNTERS_GROUPS.nin
      ) {
        return (countersMessages.oneGroupTsu).defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.ke
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.s
        || counterGroup === COUNTERS_GROUPS.sai
        || counterGroup === COUNTERS_GROUPS.so
        || counterGroup === COUNTERS_GROUPS.f
        || counterGroup === COUNTERS_GROUPS.t
      ) {
        return (countersMessages.oneGroupKHS).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.oneGroupNichi).defaultMessage;
      }

      return (countersMessages.oneGroupDefault).defaultMessage;
    }

    case NUMBERS.two: {
      if (
        counterGroup === COUNTERS_GROUPS.tsu
        || counterGroup === COUNTERS_GROUPS.nin
      ) {
        return (countersMessages.twoGroupTsu).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.twoGroupNichi).defaultMessage;
      }

      return (countersMessages.twoGroupDefault).defaultMessage;
    }

    case NUMBERS.three: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (countersMessages.threeGroupTsu).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.threeGroupNichi).defaultMessage;
      }

      return (countersMessages.threeGroupDefault).defaultMessage;
    }

    case NUMBERS.four: {
      if (alternative) {
        return (countersMessages.fourGroupDefaultAlternative).defaultMessage;
      }

      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (countersMessages.fourGroupTsu).defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.nin
        || counterGroup === COUNTERS_GROUPS.nen
      ) {
        return (countersMessages.fourGroupJNinNen).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.gatsu) {
        return (countersMessages.fourGroupDefaultAlternative).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.fourGroupNichi).defaultMessage;
      }

      return (countersMessages.fourGroupDefault).defaultMessage;
    }

    case NUMBERS.five: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (countersMessages.fiveGroupTsu).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.fiveGroupNichi).defaultMessage;
      }

      return (countersMessages.fiveGroupDefault).defaultMessage;
    }

    case NUMBERS.six: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (countersMessages.sixGroupTsu).defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.ke
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.f
      ) {
        return (countersMessages.sixGroupKH).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.sixGroupNichi).defaultMessage;
      }

      return (countersMessages.sixGroupDefault).defaultMessage;
    }

    case NUMBERS.seven: {
      if (alternative) {
        return (countersMessages.sevenGroupDefaultAlternative).defaultMessage;
      }

      if (
        counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.gatsu
      ) {
        return (countersMessages.sevenGroupDefaultAlternative).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.sevenGroupNichi).defaultMessage;
      }

      return (countersMessages.sevenGroupDefault).defaultMessage;
    }

    case NUMBERS.eight: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (countersMessages.eightGroupTsu).defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.ke
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.s
        || counterGroup === COUNTERS_GROUPS.sai
        || counterGroup === COUNTERS_GROUPS.so
        || counterGroup === COUNTERS_GROUPS.f
      ) {
        return (countersMessages.eightGroupKHS).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.eightGroupNichi).defaultMessage;
      }

      return (countersMessages.eightGroupDefault).defaultMessage;
    }

    case NUMBERS.nine: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (countersMessages.nineGroupTsu).defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.gatsu
      ) {
        return (countersMessages.nineGroupDefaultAlternative).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.nineGroupNichi).defaultMessage;
      }

      return (countersMessages.nineGroupDefault).defaultMessage;
    }

    case NUMBERS.ten: {
      if (alternative) {
        return (countersMessages.tenGroupDefaultAlternative).defaultMessage;
      }

      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (countersMessages.tenGroupTsu).defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.ke
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.s
        || counterGroup === COUNTERS_GROUPS.sai
        || counterGroup === COUNTERS_GROUPS.so
        || counterGroup === COUNTERS_GROUPS.f
        || counterGroup === COUNTERS_GROUPS.t
      ) {
        return (countersMessages.tenGroupKHS).defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.tenGroupNichi).defaultMessage;
      }

      return (countersMessages.tenGroupDefault).defaultMessage;
    }

    case NUMBERS.eleven: {
      return (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.oneGroupDefault).defaultMessage;
    }

    case NUMBERS.twelve: {
      return (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.twoGroupDefault).defaultMessage;
    }

    case NUMBERS.thirteen: {
      return (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.threeGroupDefault).defaultMessage;
    }

    case NUMBERS.fourteen: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.tenGroupDefault).defaultMessage
          + (countersMessages.fourGroupNichi).defaultMessage;
      }

      return (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.fourGroupDefault).defaultMessage;
    }

    case NUMBERS.fifteen: {
      return (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.fiveGroupDefault).defaultMessage;
    }

    case NUMBERS.sixteen: {
      return (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.sixGroupDefault).defaultMessage;
    }

    case NUMBERS.seventeen: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.tenGroupDefault).defaultMessage
          + (countersMessages.sevenGroupDefaultAlternative).defaultMessage;
      }

      return (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.sevenGroupDefault).defaultMessage;
    }

    case NUMBERS.eighteen: {
      return (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.eightGroupDefault).defaultMessage;
    }

    case NUMBERS.nineteen: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.tenGroupDefault).defaultMessage
          + (countersMessages.nineGroupDefaultAlternative).defaultMessage;
      }

      return (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.nineGroupDefault).defaultMessage;
    }

    case NUMBERS.twenty: {
      if (counterGroup === COUNTERS_GROUPS.sai) {
        return (
          <KanjiWithFurigana
            kanji={(countersMessages.twentyGroupSaiKanji).defaultMessage.split('')}
            furigana={(countersMessages.twentyGroupSaiFurigana).defaultMessage.split('')}
          />
        );
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.twentyGroupNichi).defaultMessage;
      }

      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage;
    }

    case NUMBERS.twentyOne: {
      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.oneGroupDefault).defaultMessage;
    }

    case NUMBERS.twentyTwo: {
      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.twoGroupDefault).defaultMessage;
    }

    case NUMBERS.twentyThree: {
      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.threeGroupDefault).defaultMessage;
    }

    case NUMBERS.twentyFour: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.twoGroupDefault).defaultMessage
          + (countersMessages.tenGroupDefault).defaultMessage
          + (countersMessages.fourGroupNichi).defaultMessage;
      }

      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.fourGroupDefault).defaultMessage;
    }

    case NUMBERS.twentyFive: {
      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.fiveGroupDefault).defaultMessage;
    }

    case NUMBERS.twentySix: {
      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.sixGroupDefault).defaultMessage;
    }

    case NUMBERS.twentySeven: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.twoGroupDefault).defaultMessage
          + (countersMessages.tenGroupDefault).defaultMessage
          + (countersMessages.sevenGroupDefaultAlternative).defaultMessage;
      }

      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.sevenGroupDefault).defaultMessage;
    }

    case NUMBERS.twentyEight: {
      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.eightGroupDefault).defaultMessage;
    }

    case NUMBERS.twentyNine: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (countersMessages.twoGroupDefault).defaultMessage
          + (countersMessages.tenGroupDefault).defaultMessage
          + (countersMessages.nineGroupDefaultAlternative).defaultMessage;
      }

      return (countersMessages.twoGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.nineGroupDefault).defaultMessage;
    }

    case NUMBERS.thirty: {
      if (alternative) {
        return (
          <KanjiWithFurigana
            kanji={(countersMessages.thirtyGroupFunAlternativeKanji).defaultMessage.split('')}
            furigana={(countersMessages.thirtyGroupFunAlternativeFurigana).defaultMessage.split('')}
          />
        );
      }

      if (counterGroup === COUNTERS_GROUPS.f) {
        return (countersMessages.threeGroupDefault).defaultMessage
          + (countersMessages.tenGroupKHS).defaultMessage;
      }
      return (countersMessages.threeGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage;
    }

    case NUMBERS.thirtyOne: {
      return (countersMessages.threeGroupDefault).defaultMessage
        + (countersMessages.tenGroupDefault).defaultMessage
        + (countersMessages.oneGroupDefault).defaultMessage;
    }

    default:
      return '';
  }
};
