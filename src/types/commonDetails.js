import PropTypes from 'prop-types';

import { TAG_TYPES } from '@constants';

export const tagTypeShape = PropTypes.oneOf([
  TAG_TYPES.isCommon,
  TAG_TYPES.isVerb,
  TAG_TYPES.jlpt,
  TAG_TYPES.joyo,
  TAG_TYPES.jinmeiyo,
  TAG_TYPES.other,
  TAG_TYPES.grade,
  TAG_TYPES.levelGroup,
  TAG_TYPES.grammarOrigin,
  TAG_TYPES.counter
]);

export const additionalExplanationShape = PropTypes.arrayOf(PropTypes.string);

export const problemShape = PropTypes.shape({
  problem: PropTypes.string,
  frequency: PropTypes.number, // scale: from 1 - 10
  resolved: PropTypes.bool,
  info: PropTypes.arrayOf(PropTypes.string)
});

export const problemsShape = PropTypes.arrayOf(problemShape);

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
