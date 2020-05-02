import PropTypes from 'prop-types';

export const itemShape = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.number
});
