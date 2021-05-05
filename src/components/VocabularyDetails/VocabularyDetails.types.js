import PropTypes from 'prop-types';

export const vocabType = PropTypes.arrayOf(PropTypes.shape({
  vocab: PropTypes.string,
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  nowLearning: PropTypes.bool,
  pitch: PropTypes.string
}));

export const vocabLengthType = PropTypes.shape({
  all: PropTypes.number,
  inProgress: PropTypes.number,
  notKnown: PropTypes.number
});
