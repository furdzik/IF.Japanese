import similarKanjiJson from '@data/similar-kanji.json';

export const getSimilarKanjiData = (kanji) => {
  const similarKanji = [];

  similarKanjiJson.forEach((similarKanjiSet) => {
    if (similarKanjiSet.indexOf(kanji) !== -1) {
      similarKanji.push(...similarKanjiSet.filter((el) => el !== kanji));
    }
  });

  return similarKanji;
};
