import vocabJson from '@data/vocabulary.json';

import { getFurigana, getKanji } from '@utils/kanji';

export const getOppositeVerb = (oppositeVerb, oppositeVerbDetails) => {
  const data = vocabJson.filter((el) => el.vocab === oppositeVerb)[0];

  if (!oppositeVerbDetails || !data) {
    return null;
  }

  return {
    opposite: oppositeVerb,
    verbType: data.verb?.verbType,
    status: {
      known: data.known,
      nowLearning: data.nowLearning,
      inProgress: data.inProgress
    },
    japaneseForm: oppositeVerbDetails?.japanese[0]?.reading !== data.vocab ? {
      kanji: getKanji(data.vocab),
      furigana: getFurigana(
        data.vocab, oppositeVerbDetails?.japanese[0]?.reading
      )
    } : null
  };
};
