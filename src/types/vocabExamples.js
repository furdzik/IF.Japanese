import PropTypes from 'prop-types';

import { statusShape, tagsShape } from '@types/commonDetails';

export const vocabExampleShape = PropTypes.shape({
  vocab: PropTypes.string,
  meaning: PropTypes.string,
  reading: PropTypes.string,
  status: statusShape,
  tags: tagsShape
});

export const vocabExamplesShape = PropTypes.arrayOf(vocabExampleShape);

export const simpleExampleShape = PropTypes.shape({
  vocab: PropTypes.string,
  reading: PropTypes.string
});

export const simpleExamplesShape = PropTypes.arrayOf(simpleExampleShape);
