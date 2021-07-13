import { isKanji } from 'wanakana';

export const getKanjiParts = (vocab) => {
  const newArray = [];
  const vocabArray = vocab.split('');

  vocabArray.forEach((el) => {
    if (isKanji(el)) {
      newArray.push(el);
    }
  });

  return newArray;
};
