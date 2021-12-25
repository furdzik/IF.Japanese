import React from 'react';

import { NUMBERS, COUNTERS_GROUPS } from '@constants';

import KanjiWithFurigana from '@components/ui/KanjiWithFurigana';

import messages from '@lang/defaultMessages/counters.messages';

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
        || counterGroup === COUNTERS_GROUPS.so
        || counterGroup === COUNTERS_GROUPS.f
      ) {
        return (messages.oneGroupKHS)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.oneGroupNichi)?.defaultMessage;
      }

      return (messages.oneGroupDefault)?.defaultMessage;
    }

    case NUMBERS.two: {
      if (
        counterGroup === COUNTERS_GROUPS.tsu
        || counterGroup === COUNTERS_GROUPS.nin
      ) {
        return (messages.twoGroupTsu)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.twoGroupNichi)?.defaultMessage;
      }

      return (messages.twoGroupDefault)?.defaultMessage;
    }

    case NUMBERS.three: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.threeGroupTsu)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.threeGroupNichi)?.defaultMessage;
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
        || counterGroup === COUNTERS_GROUPS.nen
      ) {
        return (messages.fourGroupJNinNen)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.gatsu) {
        return (messages.fourGroupDefaultAlternative)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.fourGroupNichi)?.defaultMessage;
      }

      return (messages.fourGroupDefault)?.defaultMessage;
    }

    case NUMBERS.five: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.fiveGroupTsu)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.fiveGroupNichi)?.defaultMessage;
      }

      return (messages.fiveGroupDefault)?.defaultMessage;
    }

    case NUMBERS.six: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.sixGroupTsu)?.defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.k
        || counterGroup === COUNTERS_GROUPS.h
        || counterGroup === COUNTERS_GROUPS.f
      ) {
        return (messages.sixGroupKH)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.sixGroupNichi)?.defaultMessage;
      }

      return (messages.sixGroupDefault)?.defaultMessage;
    }

    case NUMBERS.seven: {
      if (alternative) {
        return (messages.sevenGroupDefaultAlternative)?.defaultMessage;
      }

      if (
        counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.gatsu
      ) {
        return (messages.sevenGroupDefaultAlternative)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.sevenGroupNichi)?.defaultMessage;
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
        || counterGroup === COUNTERS_GROUPS.so
        || counterGroup === COUNTERS_GROUPS.f
      ) {
        return (messages.eightGroupKHS)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.eightGroupNichi)?.defaultMessage;
      }

      return (messages.eightGroupDefault)?.defaultMessage;
    }

    case NUMBERS.nine: {
      if (counterGroup === COUNTERS_GROUPS.tsu) {
        return (messages.nineGroupTsu)?.defaultMessage;
      } else if (
        counterGroup === COUNTERS_GROUPS.ji
        || counterGroup === COUNTERS_GROUPS.gatsu
      ) {
        return (messages.nineGroupDefaultAlternative)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.nineGroupNichi)?.defaultMessage;
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
        || counterGroup === COUNTERS_GROUPS.so
        || counterGroup === COUNTERS_GROUPS.f
      ) {
        return (messages.tenGroupKHS)?.defaultMessage;
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.tenGroupNichi)?.defaultMessage;
      }

      return (messages.tenGroupDefault)?.defaultMessage;
    }

    case NUMBERS.eleven: {
      return (messages.tenGroupDefault)?.defaultMessage
        + (messages.oneGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twelve: {
      return (messages.tenGroupDefault)?.defaultMessage
        + (messages.twoGroupDefault)?.defaultMessage;
    }

    case NUMBERS.thirteen: {
      return (messages.tenGroupDefault)?.defaultMessage
        + (messages.threeGroupDefault)?.defaultMessage;
    }

    case NUMBERS.fourteen: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.tenGroupDefault)?.defaultMessage
          + (messages.fourGroupNichi)?.defaultMessage;
      }

      return (messages.tenGroupDefault)?.defaultMessage
        + (messages.fourGroupDefault)?.defaultMessage;
    }

    case NUMBERS.fifteen: {
      return (messages.tenGroupDefault)?.defaultMessage
        + (messages.fiveGroupDefault)?.defaultMessage;
    }

    case NUMBERS.sixteen: {
      return (messages.tenGroupDefault)?.defaultMessage
        + (messages.sixGroupDefault)?.defaultMessage;
    }

    case NUMBERS.seventeen: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.tenGroupDefault)?.defaultMessage
          + (messages.sevenGroupDefaultAlternative)?.defaultMessage;
      }

      return (messages.tenGroupDefault)?.defaultMessage
        + (messages.sevenGroupDefault)?.defaultMessage;
    }

    case NUMBERS.eighteen: {
      return (messages.tenGroupDefault)?.defaultMessage
        + (messages.eightGroupDefault)?.defaultMessage;
    }

    case NUMBERS.nineteen: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.tenGroupDefault)?.defaultMessage
          + (messages.nineGroupDefaultAlternative)?.defaultMessage;
      }

      return (messages.tenGroupDefault)?.defaultMessage
        + (messages.nineGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twenty: {
      if (counterGroup === COUNTERS_GROUPS.sai) {
        return (
          <KanjiWithFurigana
            kanji={(messages.twentyGroupSaiKanji)?.defaultMessage.split('')}
            furigana={(messages.twentyGroupSaiFurigana)?.defaultMessage.split('')}
          />
        );
      } else if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.twentyGroupNichi)?.defaultMessage;
      }

      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twentyOne: {
      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.oneGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twentyTwo: {
      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.twoGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twentyThree: {
      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.threeGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twentyFour: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.twoGroupDefault)?.defaultMessage
          + (messages.tenGroupDefault)?.defaultMessage
          + (messages.fourGroupNichi)?.defaultMessage;
      }

      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.fourGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twentyFive: {
      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.fiveGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twentySix: {
      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.sixGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twentySeven: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.twoGroupDefault)?.defaultMessage
          + (messages.tenGroupDefault)?.defaultMessage
          + (messages.sevenGroupDefaultAlternative)?.defaultMessage;
      }

      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.sevenGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twentyEight: {
      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.eightGroupDefault)?.defaultMessage;
    }

    case NUMBERS.twentyNine: {
      if (counterGroup === COUNTERS_GROUPS.nichi) {
        return (messages.twoGroupDefault)?.defaultMessage
          + (messages.tenGroupDefault)?.defaultMessage
          + (messages.nineGroupDefaultAlternative)?.defaultMessage;
      }

      return (messages.twoGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.nineGroupDefault)?.defaultMessage;
    }

    case NUMBERS.thirty: {
      if (alternative) {
        return (
          <KanjiWithFurigana
            kanji={(messages.thirtyGroupFunAlternativeKanji)?.defaultMessage.split('')}
            furigana={(messages.thirtyGroupFunAlternativeFurigana)?.defaultMessage.split('')}
          />
        );
      }

      if (counterGroup === COUNTERS_GROUPS.f) {
        return (messages.threeGroupDefault)?.defaultMessage
          + (messages.tenGroupKHS)?.defaultMessage;
      }
      return (messages.threeGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage;
    }

    case NUMBERS.thirtyOne: {
      return (messages.threeGroupDefault)?.defaultMessage
        + (messages.tenGroupDefault)?.defaultMessage
        + (messages.oneGroupDefault)?.defaultMessage;
    }

    default:
      return '';
  }
};
