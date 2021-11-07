import kana from '@data/kana.json';

import { KANA_GAME_INIT, KANA_TYPE } from '@constants';

const MIN_INDEX = 0;

export const getRandomKana = (selectedKana = KANA_GAME_INIT) => {
  let kanaArray = [];

  if (
    selectedKana.indexOf(KANA_TYPE.katakana) !== -1
    && selectedKana.indexOf(KANA_TYPE.hiragana) !== -1
  ) {
    kanaArray = kana;
  } else if (selectedKana.indexOf(KANA_TYPE.katakana) !== -1) {
    kanaArray = kana.filter((el) => el.kind === KANA_TYPE.katakana);
  } else if (selectedKana.indexOf(KANA_TYPE.hiragana) !== -1) {
    kanaArray = kana.filter((el) => el.kind === KANA_TYPE.hiragana);
  }

  const min = MIN_INDEX;
  const max = Math.floor(kanaArray.length) - 1;

  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

  return kanaArray[randomIndex]?.kana;
};
