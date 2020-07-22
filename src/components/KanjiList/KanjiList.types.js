import PropTypes from 'prop-types';

export const kanjiType = PropTypes.arrayOf(PropTypes.shape({
  vocab: PropTypes.string,
  known: PropTypes.bool,
  inProgress: PropTypes.bool
}));

export const kanjiTypeLengthType = PropTypes.shape({
  all: PropTypes.number,
  inProgress: PropTypes.number,
  notKnown: PropTypes.number
});
