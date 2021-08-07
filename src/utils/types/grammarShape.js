import PropTypes from 'prop-types';

export const examplesShape = PropTypes.arrayOf(PropTypes.string);

export const problemsShape = PropTypes.arrayOf(PropTypes.string);
export const explanationShape = PropTypes.string;

const grammarItem = {
  grammarId: PropTypes.string,
  grammarName: PropTypes.string,
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  nowLearning: PropTypes.bool,
  toRepeat: PropTypes.bool,
  level: PropTypes.number,
  levelGroup: PropTypes.string,
  originChapter: PropTypes.arrayOf(PropTypes.string),
  explanation: explanationShape,
  examples: examplesShape,
  problems: problemsShape
};

export const similarGrammarDetailsShape = PropTypes.arrayOf(PropTypes.shape({
  ...grammarItem,
  similarGrammar: PropTypes.arrayOf(PropTypes.string)
}));

export const similarGrammarShape = PropTypes.arrayOf(PropTypes.string);

export const grammarItemShape = PropTypes.shape({
  ...grammarItem,
  similarGrammar: similarGrammarShape
});

export const grammarShape = PropTypes.arrayOf(grammarItemShape);


