import { getKanji } from './getKanji';

const { fit } = require('furigana');

export const getFurigana = (kanji, furigana) => {
  const furiganaArray = [];
  const newArray = [];
  const kanjiArray = getKanji(kanji);

  const furiganaObject = fit(kanji, furigana, { type: 'object' });

  furiganaObject.forEach((el) => {
    furiganaArray.push(el.r);
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
