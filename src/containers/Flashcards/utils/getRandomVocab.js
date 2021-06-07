export const getRandomVocab = (vocab) => {
  const MIN_INDEX = 0;
  const MAX_INDEX = vocab.length - 1;

  const min = MIN_INDEX;
  const max = Math.floor(MAX_INDEX);
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

  return vocab[randomIndex];
};
