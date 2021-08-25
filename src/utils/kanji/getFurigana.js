import { isHiragana, isKanji } from 'wanakana';

import { getKanji } from './getKanji';

const { fit } = require('furigana');

export const getFurigana = (kanji, furigana) => {
  let furiganaArray = [];
  const newArray = [];
  const kanjiArray = getKanji(kanji);

  const detailedFurigana = fit(kanji, furigana, { type: 'object' });

  detailedFurigana.forEach((el) => {
    if (isHiragana(el.w) && el.w.length > 1) {
      const splitHiragana = el.r.split('');
      furiganaArray = furiganaArray.concat(splitHiragana);
    } else if (isKanji(el.w) && el.w.length > 1) {
      furiganaArray.push(...el.r.split(''));
    } else {
      furiganaArray.push(el.r);
    }
  });

  kanjiArray.forEach((kanjiCharacter, kanjiIndex) => {
    furiganaArray.forEach((furiganaCharacter, furiganaIndex) => {
      if (kanjiIndex === furiganaIndex) {
        newArray.push(kanjiCharacter !== furiganaCharacter ? furiganaCharacter : ' ');
      }
    });
  });

  return newArray;
};
