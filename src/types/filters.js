import PropTypes from 'prop-types';

export const filtersLengthShape = PropTypes.shape({
  all: PropTypes.number,
  inProgress: PropTypes.number,
  notKnown: PropTypes.number,
  nowLearning: PropTypes.number,
  started: PropTypes.number
});

export const selectedFiltersShape = PropTypes.arrayOf(PropTypes.number);

export const filterListShape = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.number,
  label: PropTypes.string
}));
