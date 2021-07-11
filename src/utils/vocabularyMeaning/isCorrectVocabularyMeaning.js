export const isCorrectVocabularyMeaning = (japanese, vocab, meaning) => {
  const apiMeaningOne = japanese[0];
  const apiMeaningTwo = japanese[1];

  return !!((apiMeaningOne && apiMeaningOne.word === vocab && apiMeaningOne.reading === meaning)
    || (apiMeaningTwo && apiMeaningTwo.word === vocab && apiMeaningTwo.reading === meaning));
};

