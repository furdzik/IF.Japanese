import vocabJson from '@data/vocabulary.json';

import { getTags } from '@utils/commonDetails';

const IS_SHORT = true;

export const getVocabExampleFromResponse = (response, exampleElement) => {
  const data = response?.data ? response?.data
    .filter((el) => el.japanese[0]?.word === exampleElement.vocab)[0] : null;

  console.log(response, exampleElement.vocab);
  const vocabArray = vocabJson.filter((el) => data?.japanese[0]?.word === el?.vocab);
  const vocab = vocabArray ? vocabArray[0] : null;

  if (!data && !vocab) {
    return null;
  }

  return {
    vocab: data?.japanese[0]?.word,
    reading: data?.japanese[0]?.reading,
    meaning: data?.senses[0]?.english_definitions.join(', '),
    tags: getTags({
      jlpt: data?.jlpt,
      isCommon: data?.is_common
    }, IS_SHORT),
    status: vocab ? {
      known: vocab?.known,
      inProgress: vocab?.inProgress,
      nowLearning: vocab?.nowLearning
    } : null
  };
};
