import PropTypes from 'prop-types';

import { tagTypes } from '@config/constants';

export const tagTypeShape = PropTypes.oneOf([
  tagTypes.IS_COMMON,
  tagTypes.IS_VERB,
  tagTypes.JLPT,
  tagTypes.JOYO,
  tagTypes.JINMEIYO,
  tagTypes.OTHER,
  tagTypes.GRADE,
  tagTypes.LEVEL_GROUP,
  tagTypes.GRAMMAR_ORIGIN
]);

export const tagShape = PropTypes.shape({
  tagType: tagTypeShape,
  label: PropTypes.string
});

export const tagsShape = PropTypes.arrayOf(tagShape);

export const statusShape = PropTypes.shape({
  inProgress: PropTypes.bool,
  known: PropTypes.bool,
  nowLearning: PropTypes.bool
});

export const metadataShape = PropTypes.shape({
  slug: PropTypes.string
});

export const kanjiReadingShape = PropTypes.shape({
  onyomi: PropTypes.string,
  kunyomi: PropTypes.string
});
