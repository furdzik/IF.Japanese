import PropTypes from 'prop-types';

export const kanjiDetailsShape = PropTypes.shape({
  all: PropTypes.number,
  inProgress: PropTypes.number,
  notKnown: PropTypes.number,
  nowLearning: PropTypes.number,
  started: PropTypes.number
});
