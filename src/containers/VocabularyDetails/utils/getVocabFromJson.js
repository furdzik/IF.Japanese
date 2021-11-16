import vocabJson from '@data/vocabulary.json';

import { getProperName, PROPER_NAME_TYPE } from './getProperName';

export const getVocabFromJson = (url) => vocabJson.filter((el) => (
  el.meaning && el.meaning === getProperName(url, PROPER_NAME_TYPE.MEANING)
) || (
  !el.meaning && el.vocab === getProperName(url, PROPER_NAME_TYPE.KANJI)
))[0];
