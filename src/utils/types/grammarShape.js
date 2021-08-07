import PropTypes from 'prop-types';

export const similarGrammarShape = PropTypes.arrayOf(PropTypes.string); // grammarID

export const examplesShape = PropTypes.arrayOf(PropTypes.string);

export const problemsShape = PropTypes.arrayOf(PropTypes.string);

export const grammarItemShape = PropTypes.shape({
  grammarId: PropTypes.string,
  grammarName: PropTypes.string,
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  nowLearning: PropTypes.bool,
  toRepeat: PropTypes.bool,
  level: PropTypes.number,
  levelGroup: PropTypes.string,
  originChapter: PropTypes.arrayOf(PropTypes.string),
  similarGrammar: similarGrammarShape,
  examples: examplesShape,
  problems: problemsShape
});

export const grammarShape = PropTypes.arrayOf(grammarItemShape);
