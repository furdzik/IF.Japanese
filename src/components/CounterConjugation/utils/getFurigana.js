import _cloneDeep from 'lodash/cloneDeep';

import {
  NUMBERS,
  COUNTERS_GROUPS,
  FURIGANA_RENDAKU,
  FURIGANA_RENDAKU_LETTER_FROM,
  FURIGANA_RENDAKU_LETTER_TO
} from '@constants';

import messages from '../CounterConjugation.messages';

const FIRST_MOJI_INDEX = 0;

const getChangedFirstMoji = (furiganaFirstMoji, rendakuFrom, rendakuTo) => {
  switch (furiganaFirstMoji) {
    case FURIGANA_RENDAKU[`${rendakuFrom}a`]: {
      return (messages[`${rendakuTo}aFurigana`])?.defaultMessage;
    }
    case FURIGANA_RENDAKU[`${rendakuFrom}i`]: {
      return (messages[`${rendakuTo}iFurigana`])?.defaultMessage;
    }
    case FURIGANA_RENDAKU[`${rendakuFrom}u`]: {
      return (messages[`${rendakuTo}uFurigana`])?.defaultMessage;
    }
    case FURIGANA_RENDAKU[`${rendakuFrom}e`]: {
      return (messages[`${rendakuTo}eFurigana`])?.defaultMessage;
    }
    case FURIGANA_RENDAKU[`${rendakuFrom}o`]: {
      return (messages[`${rendakuTo}oFurigana`])?.defaultMessage;
    }

    default:
      return furiganaFirstMoji;
  }
};

export const getFurigana = (number, counterGroup, originalFurigana) => {
  const copyOriginalFurigana = _cloneDeep(originalFurigana);
  const firstIndexAfterFirstMoji = originalFurigana[FIRST_MOJI_INDEX].split('');
  const furiganaFirstMoji = firstIndexAfterFirstMoji.shift();

  copyOriginalFurigana.shift();

  const originalFuriganaBesidesFirstMoji = copyOriginalFurigana;

  const newFurigana = [];

  let newFirstIndex;
  let newFirstMoji = furiganaFirstMoji;

  switch (counterGroup) {
    case COUNTERS_GROUPS.nin: {
      if (number === NUMBERS.one || number === NUMBERS.two) {
        return (messages.ninSpecialFurigana)?.defaultMessage.split('');
      }

      return originalFurigana;
    }

    case COUNTERS_GROUPS.h:
    case COUNTERS_GROUPS.f: {
      if (
        number === NUMBERS.one
        || number === NUMBERS.six
        || number === NUMBERS.eight
        || number === NUMBERS.ten
      ) {
        newFirstMoji = getChangedFirstMoji(
          furiganaFirstMoji,
          FURIGANA_RENDAKU_LETTER_FROM.rendakuH,
          FURIGANA_RENDAKU_LETTER_TO.handakutenH
        );
      }

      if (number === NUMBERS.three) {
        newFirstMoji = getChangedFirstMoji(
          furiganaFirstMoji,
          FURIGANA_RENDAKU_LETTER_FROM.rendakuH,
          FURIGANA_RENDAKU_LETTER_TO.dakutenH
        );
      }

      newFirstIndex = newFirstMoji + firstIndexAfterFirstMoji;
      newFurigana.push(newFirstIndex, ...originalFuriganaBesidesFirstMoji);

      return newFurigana;
    }

    case COUNTERS_GROUPS.so: {
      if (number === NUMBERS.three) {
        newFirstMoji = getChangedFirstMoji(
          furiganaFirstMoji,
          FURIGANA_RENDAKU_LETTER_FROM.rendakuS,
          FURIGANA_RENDAKU_LETTER_TO.dakutenS
        );
      }

      newFirstIndex = newFirstMoji + firstIndexAfterFirstMoji;
      newFurigana.push(newFirstIndex, ...originalFuriganaBesidesFirstMoji);

      return newFurigana;
    }

    case COUNTERS_GROUPS.ke: {
      if (number === NUMBERS.three) {
        newFirstMoji = getChangedFirstMoji(
          furiganaFirstMoji,
          FURIGANA_RENDAKU_LETTER_FROM.rendakuK,
          FURIGANA_RENDAKU_LETTER_TO.dakutenK
        );
      }

      newFirstIndex = newFirstMoji + firstIndexAfterFirstMoji;
      newFurigana.push(newFirstIndex, ...originalFuriganaBesidesFirstMoji);

      return newFurigana;
    }

    default:
      return originalFurigana;
  }
};
