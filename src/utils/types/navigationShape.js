import PropTypes from 'prop-types';

export const navigationShape = PropTypes.shape({
  currentStep: PropTypes.number,
  currentQuestion: PropTypes.number,
  allQuestions: PropTypes.number
});
