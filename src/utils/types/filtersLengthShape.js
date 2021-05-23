import PropTypes from 'prop-types';

export const filtersLengthShape = PropTypes.shape({
  all: PropTypes.number,
  inProgress: PropTypes.number,
  notKnown: PropTypes.number
});
