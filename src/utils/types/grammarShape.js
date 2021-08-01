import PropTypes from 'prop-types';

export const grammarItemShape = PropTypes.shape({
  grammarId: PropTypes.string,
  grammarName: PropTypes.string,
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  nowLearning: PropTypes.bool,
  toRepeat: PropTypes.bool,
  level: PropTypes.number,
  levelGroup: PropTypes.string,
  originChapter: PropTypes.arrayOf(PropTypes.string)
});

export const grammarShape = PropTypes.arrayOf(grammarItemShape);
