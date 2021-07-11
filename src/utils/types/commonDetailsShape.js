import PropTypes from 'prop-types';

import { tagTypes } from '@config/constants';

export const tagTypeShape = PropTypes.oneOf([
  tagTypes.IS_COMMON,
  tagTypes.IS_VERB,
  tagTypes.JLPT,
  tagTypes.JOYO,
  tagTypes.OTHER
]);

export const tagShape = PropTypes.shape({
  tagType: tagTypeShape,
  label: PropTypes.string
});

export const tagsShape = PropTypes.arrayOf(tagShape);
