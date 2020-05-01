import PropTypes from 'prop-types';

export const vocabType = PropTypes.arrayOf(PropTypes.shape({
  vocab: PropTypes.string,
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  pitch: PropTypes.string
}));
