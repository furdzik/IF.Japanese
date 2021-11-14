import _cloneDeep from 'lodash/cloneDeep';

import {
  NUMBERS,
  COUNTERS_GROUPS,
  FURIGANA_RENDAKU,
  FURIGANA_RENDAKU_LETTER
} from '@constants';

import messages from '../CounterConjugation.messages';

const FIRST_MOJI_INDEX = 0;

const change = (furiganaFirstMoji, rendakuLetter) => {
  switch (furiganaFirstMoji) {
    case FURIGANA_RENDAKU.ha: {
      return (messages[`${rendakuLetter}aFurigana`])?.defaultMessage;
    }
    case FURIGANA_RENDAKU.hi: {
      return (messages[`${rendakuLetter}iFurigana`])?.defaultMessage;
    }
    case FURIGANA_RENDAKU.fu: {
      return (messages[`${rendakuLetter}uFurigana`])?.defaultMessage;
    }
    case FURIGANA_RENDAKU.he: {
      return (messages[`${rendakuLetter}eFurigana`])?.defaultMessage;
    }
    case FURIGANA_RENDAKU.ho: {
      return (messages[`${rendakuLetter}oFurigana`])?.defaultMessage;
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
        newFirstMoji = change(furiganaFirstMoji, FURIGANA_RENDAKU_LETTER.handakuten);
      }

      if (number === NUMBERS.three) {
        newFirstMoji = change(furiganaFirstMoji, FURIGANA_RENDAKU_LETTER.dakuten);
      }

      newFirstIndex = newFirstMoji + firstIndexAfterFirstMoji;
      newFurigana.push(newFirstIndex, ...originalFuriganaBesidesFirstMoji);

      return newFurigana;
    }

    default:
      return originalFurigana;
  }
};
