import { GRAMMAR_TYPES, INFLECTION_TYPES, VERB_GROUP_TYPES } from '@constants';

import messages from '../VerbConjugation.messages';

const isSpecialCasePastEnding = (grammar, verbGroup) => (
  (grammar !== GRAMMAR_TYPES.kanouForm
    && grammar !== GRAMMAR_TYPES.ukemiForm
    && grammar !== GRAMMAR_TYPES.shiekiForm
    && grammar !== GRAMMAR_TYPES.shiekiukemiForm
    && grammar !== GRAMMAR_TYPES.shiekiukemiShortForm)
  && (
    verbGroup === VERB_GROUP_TYPES.group1Gu
    || verbGroup === VERB_GROUP_TYPES.group1Bu
    || verbGroup === VERB_GROUP_TYPES.group1Mu
    || verbGroup === VERB_GROUP_TYPES.group1Nu
  )
);

export const getBaseEnding = (grammar, verbGroup, inflection, politeForm, notInTheEnd = false) => {
  if (
    grammar === GRAMMAR_TYPES.jishouForm
    || grammar === GRAMMAR_TYPES.kanouForm
    || grammar === GRAMMAR_TYPES.ukemiForm
    || grammar === GRAMMAR_TYPES.shiekiForm
    || grammar === GRAMMAR_TYPES.shiekiukemiForm
    || grammar === GRAMMAR_TYPES.shiekiukemiShortForm
    || notInTheEnd
  ) {
    switch (inflection) {
      case INFLECTION_TYPES.normal: {
        if (politeForm) {
          return (messages.basePoliteFormEnding).defaultMessage;
        }

        return (
          verbGroup === VERB_GROUP_TYPES.group2
          || grammar === GRAMMAR_TYPES.kanouForm
          || grammar === GRAMMAR_TYPES.ukemiForm
          || grammar === GRAMMAR_TYPES.shiekiForm
          || grammar === GRAMMAR_TYPES.shiekiukemiForm
          || grammar === GRAMMAR_TYPES.shiekiukemiShortForm
        )
          ? (messages.baseNegativeRuEnding)?.defaultMessage
          : messages[`jishouFormEnding_${verbGroup}`]?.defaultMessage;
      }

      case INFLECTION_TYPES.negative: {
        return politeForm
          ? (messages.basePoliteNegativeFormEnding)?.defaultMessage
          : (messages.baseNegativeFormEnding)?.defaultMessage;
      }

      case INFLECTION_TYPES.past: {
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

      case INFLECTION_TYPES.pastNegative: {
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
