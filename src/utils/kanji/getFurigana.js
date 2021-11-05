import _cloneDeep from 'lodash/cloneDeep';
import { isHiragana, isKatakana, isKanji } from 'wanakana';

import { LIST_OF_READING_EXCEPTIONS, KATAKANA_FURIGANA_EXCEPTIONS } from '@config/constants';

import { getKanji } from './getKanji';

const { fit } = require('furigana');

export const getFurigana = (kanji, furigana) => {
  let furiganaArray = [];
  const newArray = [];
  const kanjiArray = getKanji(kanji);
  let newFurigana = furigana;

  if (kanji === LIST_OF_READING_EXCEPTIONS.periodOfMonths.kanji) {
    newFurigana = LIST_OF_READING_EXCEPTIONS.periodOfMonths.furigana;
  }

  const detailedFurigana = fit(kanji, newFurigana, { type: 'object' });

  const newDetailedFurigana = _cloneDeep(detailedFurigana);

  detailedFurigana.forEach((el, index) => {
    if ((isHiragana(el.w) || isKatakana(el.w)) && el.w.length > 1) {
      const splitHiragana = el.r.split('');
      furiganaArray = furiganaArray.concat(splitHiragana);
    } else if (isKanji(el.w) && el.w.length > 1) {
      furiganaArray.push(...el.r.split(''));
    } else {
      if (el.w === KATAKANA_FURIGANA_EXCEPTIONS.smallKa.kanji) {
        newDetailedFurigana[index].r = KATAKANA_FURIGANA_EXCEPTIONS.smallKa.furigana;
      }
      furiganaArray.push(newDetailedFurigana[index].r);
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
