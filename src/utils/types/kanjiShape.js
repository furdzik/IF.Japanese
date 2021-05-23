import PropTypes from 'prop-types';

export const kanjiShape = PropTypes.arrayOf(PropTypes.shape({
  kanji: PropTypes.string,
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  joyo: PropTypes.bool
}));
