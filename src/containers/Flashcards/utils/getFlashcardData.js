import { getOnlyVocab } from '@utils/vocabulary';

export const getFlashcardData = (japanese, senses, randomVocab) => {
  const apiMeaningOne = japanese[0];
  const apiSensesTwo = senses[0];
  const { meaning, vocab } = randomVocab;

  return {
    reading: apiMeaningOne.reading,
    meaning: apiSensesTwo.english_definitions.join(', '),
    vocab,
    moreLink: `${meaning ? `${getOnlyVocab(vocab)},${meaning},${vocab}` : vocab}`
  };
};
