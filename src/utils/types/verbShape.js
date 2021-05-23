import PropTypes from 'prop-types';

export const verbItemShape = PropTypes.shape({
  main: PropTypes.string,
  verbGroup: PropTypes.string,
  verbType: PropTypes.string
});

export const verbShape = PropTypes.arrayOf(verbItemShape);

export const verbsLengthType = PropTypes.shape({
  all: PropTypes.number,
  inProgress: PropTypes.number,
  notKnown: PropTypes.number
});
