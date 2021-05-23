import kana from '@data/kana.json';

const MIN_INDEX = 0;
const MAX_INDEX = kana.length - 1;

export default () => {
  const min = MIN_INDEX;
  const max = Math.floor(MAX_INDEX);
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

  return kana[randomIndex].kana;
};
