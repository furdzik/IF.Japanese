import { grammarTypes, inflectionTypes, verbGroupTypes } from '@config/constants';

import messages from '../VerbConjugation.messages';

const isSpecialCasePastEnding = (grammar, verbGroup) => (
  (grammar !== grammarTypes.KANOU_FORM
    && grammar !== grammarTypes.UKEMI_FORM
    && grammar !== grammarTypes.SHIEKI_FORM
    && grammar !== grammarTypes.SHIEKIUKEMI_FORM
    && grammar !== grammarTypes.SHIEKIUKEMI_SHORT_FORM)
  && (
    verbGroup === verbGroupTypes.group1Gu
    || verbGroup === verbGroupTypes.group1Bu
    || verbGroup === verbGroupTypes.group1Mu
    || verbGroup === verbGroupTypes.group1Nu
  )
);

export const getBaseEnding = (grammar, verbGroup, inflection, politeForm, notInTheEnd = false) => {
  if (
    grammar === grammarTypes.JISHOU_FORM
    || grammar === grammarTypes.KANOU_FORM
    || grammar === grammarTypes.UKEMI_FORM
    || grammar === grammarTypes.SHIEKI_FORM
    || grammar === grammarTypes.SHIEKIUKEMI_FORM
    || grammar === grammarTypes.SHIEKIUKEMI_SHORT_FORM
    || notInTheEnd
  ) {
    switch (inflection) {
      case inflectionTypes.NORMAL: {
        if (politeForm) {
          return (messages.basePoliteFormEnding).defaultMessage;
        }

        return (
          verbGroup === verbGroupTypes.group2
          || grammar === grammarTypes.KANOU_FORM
          || grammar === grammarTypes.UKEMI_FORM
          || grammar === grammarTypes.SHIEKI_FORM
          || grammar === grammarTypes.SHIEKIUKEMI_FORM
          || grammar === grammarTypes.SHIEKIUKEMI_SHORT_FORM
        )
          ? (messages.baseNegativeRuEnding)?.defaultMessage
          : messages[`jishouFormEnding_${verbGroup}`]?.defaultMessage;
      }

      case inflectionTypes.NEGATIVE: {
        return politeForm
          ? (messages.basePoliteNegativeFormEnding)?.defaultMessage
          : (messages.baseNegativeFormEnding)?.defaultMessage;
      }

      case inflectionTypes.PAST: {
        let pastEnding;

        if (isSpecialCasePastEnding(grammar, verbGroup)) {
          pastEnding = (messages.basePast2FormEnding)?.defaultMessage;
        } else {
          pastEnding = (messages.basePastFormEnding)?.defaultMessage;
        }

        return politeForm
          ? (messages.basePolitePastFormEnding)?.defaultMessage
          : pastEnding;
      }

      case inflectionTypes.PAST_NEGATIVE: {
        return politeForm
          ? (messages.basePoliteNegativePastFormEnding)?.defaultMessage
          : (messages.baseNegativePastFormEnding)?.defaultMessage;
      }

      default:
        return null;
    }
  } else {
    return '';
  }
};
