import vocabJson from '@data/vocabulary.json';

import { getTags } from '@utils/commonDetails';
import { getKanji, getFurigana } from '@utils/kanji';

const IS_SHORT = true;

export const getVocabExampleFromResponse = (response, exampleElement) => {
  const data = response?.data
    ? response?.data.filter((el) => el.japanese[0]?.word === exampleElement.vocab
      && (exampleElement.reading ? exampleElement.reading === el.japanese[0]?.reading : true))[0]
    : null;

  const vocabArray = vocabJson.filter((el) => data?.japanese[0]?.word === el?.vocab
    && (el.meaning ? el.meaning === exampleElement.reading : true));
  const vocab = vocabArray ? vocabArray[0] : null;

  if (!data && !vocab) {
    return null;
  }

  return {
    vocab: data?.japanese[0]?.word,
    reading: data?.japanese[0]?.reading,
    meaning: data?.senses[0]?.english_definitions.filter((el, index) => index < 2).join(', '),
    japaneseForm: {
      kanji: getKanji(data?.japanese[0]?.word),
      furigana: getFurigana(
        data?.japanese[0]?.word, data?.japanese[0]?.reading
      )
    },
    original: vocab ? {
      ...vocab
    } : null,
    tags: getTags({
      jlpt: data?.jlpt,
      isCommon: data?.is_common
    }, IS_SHORT),
    status: {
      known: vocab?.known || false,
      inProgress: vocab?.inProgress || false,
      nowLearning: vocab?.nowLearning || false
    }
  };
};
