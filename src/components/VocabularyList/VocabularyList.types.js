import PropTypes from 'prop-types';

import { verbShape } from '@components/VerbsList/VerbsList.types';

export const vocabShape = PropTypes.shape({
  vocab: PropTypes.string,
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  pitch: PropTypes.string,
  verb: verbShape
});

export const vocabType = PropTypes.arrayOf(vocabShape);

export const vocabLengthType = PropTypes.shape({
  all: PropTypes.number,
  inProgress: PropTypes.number,
  notKnown: PropTypes.number
});
