import PropTypes from 'prop-types';

import { verbShape } from '@types/verbShape';
import {
  additionalExplanationShape,
  tagsShape,
  statusShape,
  kanjiReadingShape,
  metadataShape,
  problemsShape
} from '@types/commonDetailsShape';

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

export const vocabularyDetailsShape = PropTypes.shape({
  vocab: PropTypes.string,
  meaning: PropTypes.string,
  japaneseForm: japaneseFormShape,
  status: statusShape,
  metadata: metadataShape,
  tags: tagsShape,
  translations: translationsShape,
  antonyms: PropTypes.arrayOf(PropTypes.string),
  otherForms: otherFormsShape,
  additionalExplanation: additionalExplanationShape,
  problems: problemsShape,
  examples: PropTypes.arrayOf(PropTypes.string),
  kanjiParts: kanjiPartsShape,
  verb: verbShape
});
