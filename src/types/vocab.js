import PropTypes from 'prop-types';

import { verbItemShape } from '@types/verb';

export const vocabItemShape = PropTypes.shape({
  vocab: PropTypes.string,
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  nowLearning: PropTypes.bool,
  pitch: PropTypes.string,
  meaning: PropTypes.string,
  verb: verbItemShape
});

export const vocabShape = PropTypes.arrayOf(vocabItemShape);
