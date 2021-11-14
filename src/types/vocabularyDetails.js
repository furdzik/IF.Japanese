import PropTypes from 'prop-types';

import { COUNTERS_GROUPS } from '@constants';

import { verbShape } from '@types/verb';
import {
  additionalExplanationShape,
  tagsShape,
  statusShape,
  kanjiReadingShape,
  metadataShape,
  problemsShape
} from '@types/commonDetails';

export const japaneseFormShape = PropTypes.shape({
  kanji: PropTypes.arrayOf(PropTypes.string),
  furigana: PropTypes.arrayOf(PropTypes.string)
});

export const linksShape = PropTypes.shape({
  text: PropTypes.string,
  url: PropTypes.string
});

export const sourceShape = PropTypes.shape({
  language: PropTypes.string,
  word: PropTypes.string
});

export const translationShape = PropTypes.shape({
  englishDefinitions: PropTypes.arrayOf(PropTypes.string),
  info: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(linksShape),
  partsOfSpeech: PropTypes.arrayOf(PropTypes.string),
  restrictions: PropTypes.arrayOf(PropTypes.string),
  seeAlso: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.arrayOf(sourceShape),
  tags: PropTypes.arrayOf(PropTypes.string)
});

export const translationsShape = PropTypes.arrayOf(translationShape);

export const otherFormShape = PropTypes.shape({
  word: PropTypes.string,
  reading: PropTypes.string
});

export const otherFormsShape = PropTypes.arrayOf(otherFormShape);

export const kanjiPartShape = PropTypes.shape({
  kanji: PropTypes.string,
  meaning: PropTypes.string,
  reading: kanjiReadingShape,
  status: statusShape,
  tags: tagsShape
});

export const kanjiPartsShape = PropTypes.arrayOf(kanjiPartShape);

export const countersGroupShape = PropTypes.oneOf(Object.keys(COUNTERS_GROUPS));

export const counterShape = PropTypes.shape({
  countersGroup: countersGroupShape
});

export const vocabularyDetailsShape = PropTypes.shape({
  vocab: PropTypes.string,
  meaning: PropTypes.string,
  metadata: metadataShape,
  status: statusShape,
  translations: translationsShape,
  additionalExplanation: additionalExplanationShape,
  antonyms: PropTypes.arrayOf(PropTypes.string),
  counter: counterShape,
  examples: PropTypes.arrayOf(PropTypes.string),
  japaneseForm: japaneseFormShape,
  kanjiParts: kanjiPartsShape,
  otherForms: otherFormsShape,
  problems: problemsShape,
  tags: tagsShape,
  verb: verbShape
});
