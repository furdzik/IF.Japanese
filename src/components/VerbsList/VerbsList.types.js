import PropTypes from 'prop-types';

export const verbShape = PropTypes.shape({
  main: PropTypes.string,
  verbGroup: PropTypes.string,
  verbType: PropTypes.string
});

export const verbsLengthType = PropTypes.shape({
  all: PropTypes.number,
  inProgress: PropTypes.number,
  notKnown: PropTypes.number
});
