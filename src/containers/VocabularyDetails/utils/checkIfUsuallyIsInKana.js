const USUALLY_IN_KANA_TEXT = 'Usually written using kana alone';
const USUALLY_IN_KANA_PERCENT = 50;

export const checkIfUsuallyIsInKana = (senses) => {
  if (!senses) {
    return false;
  }

  const isInKanaArray = senses.map((sens) => sens.tags.includes(USUALLY_IN_KANA_TEXT) ? 1 : 0);
  const sum = isInKanaArray.reduce((a, b) => a + b, 0);
  const percent = (sum * 100) / isInKanaArray.length;

  return percent > USUALLY_IN_KANA_PERCENT;
};
