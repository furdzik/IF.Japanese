import PropTypes from 'prop-types';

export const itemShape = PropTypes.shape({
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
});

export const itemIconShape = PropTypes.shape({
  [PropTypes.number]: PropTypes.string
});
