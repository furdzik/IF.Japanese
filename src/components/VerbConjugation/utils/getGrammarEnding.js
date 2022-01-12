import { GRAMMAR_TYPES, INFLECTION_TYPES, VERB_GROUP_TYPES } from '@constants';

import { getBaseEnding } from './getBaseEnding';

import messages from '../VerbConjugation.messages';

const isGroupTwoAndSpecial = (verbGroup) => (
  verbGroup === VERB_GROUP_TYPES.group2
  || verbGroup === VERB_GROUP_TYPES.specialVerb1
  || verbGroup === VERB_GROUP_TYPES.specialVerb2
);

const getJishouFormEnding = (grammar, verbGroup, inflection, isPolite) => {
  if (isGroupTwoAndSpecial(verbGroup)) {
    return '';
  }

  if (isPolite) {
    return (messages[`jishouForm_${verbGroup}_polite`]).defaultMessage;
  }

  switch (inflection) {
    case INFLECTION_TYPES.negative:
    case INFLECTION_TYPES.pastNegative: {
      return !isPolite
        ? (messages[`jishouNegativeForm_${verbGroup}`]).defaultMessage
        : '';
    }
    case INFLECTION_TYPES.past: {
      return !isPolite
        ? (messages[`jishouPastForm_${verbGroup}`]).defaultMessage
        : '';
    }

    default:
      return '';
  }
};

export const getGrammarEnding = (grammar, verbGroup, inflection, isPolite) => {
  switch (grammar) {
    case GRAMMAR_TYPES.jishouForm: {
      return getJishouFormEnding(grammar, verbGroup, inflection, isPolite);
    }

    case GRAMMAR_TYPES.taiForm: {
      const end = isPolite ? (messages.desu).defaultMessage : '';
      let pre = '';
      if (!isGroupTwoAndSpecial(verbGroup)) {
        pre = (messages[`jishouForm_${verbGroup}_polite`]).defaultMessage;
      }

      switch (inflection) {
        case INFLECTION_TYPES.normal: {
          return pre + (messages.taiFormEnding).defaultMessage + end;
        }
        case INFLECTION_TYPES.negative: {
          return pre + (messages.taiNegativeFormEnding).defaultMessage + end;
        }
        case INFLECTION_TYPES.past: {
          return pre + (messages.taiPastFormEnding).defaultMessage + end;
        }
        case INFLECTION_TYPES.pastNegative: {
          return pre + (messages.taiNegativePastFormEnding).defaultMessage + end;
        }
        default:
          return '';
      }
    }

    // TODO: To refactor
    case GRAMMAR_TYPES.teForm: {
      let ending;
      let inflectionPart = '';

      if (
        inflection === INFLECTION_TYPES.normal
        && (
          verbGroup === VERB_GROUP_TYPES.group1Gu
          || verbGroup === VERB_GROUP_TYPES.group1Bu
          || verbGroup === VERB_GROUP_TYPES.group1Mu
          || verbGroup === VERB_GROUP_TYPES.group1Nu
        )
      ) {
        ending = (messages.te2FormEnding).defaultMessage;
      } else {
        ending = (messages.teFormEnding).defaultMessage;
      }

      if (inflection === INFLECTION_TYPES.normal) {
        inflectionPart = !isGroupTwoAndSpecial(verbGroup)
          ? (messages[`jishouPastForm_${verbGroup}`]).defaultMessage
          : '';
      } else {
        inflectionPart = (
          !isGroupTwoAndSpecial(verbGroup)
            ? (messages[`jishouNegativeForm_${verbGroup}`]).defaultMessage
            : ''
        ) + (messages.teNegativeFormEnding).defaultMessage;
      }

      return inflectionPart + ending;
    }

    case GRAMMAR_TYPES.ikouForm: {
      return (messages[`ikouForm_${verbGroup}`]).defaultMessage + (messages.ikouFormEnding).defaultMessage;
    }

    case GRAMMAR_TYPES.meireiForm: {
      if (inflection === INFLECTION_TYPES.negative) {
        const end = getBaseEnding(
          grammar, verbGroup, INFLECTION_TYPES.normal, false, true
        );
        return end + (messages.meireiNegativeForm).defaultMessage;
      }

      return (messages[`meireiForm_${verbGroup}`]).defaultMessage;
    }

    case GRAMMAR_TYPES.joukenBaForm: {
      switch (inflection) {
        case INFLECTION_TYPES.negative: {
          return (
            !isGroupTwoAndSpecial(verbGroup)
              ? (messages[`jishouNegativeForm_${verbGroup}`]).defaultMessage
              : ''
          ) + (messages.joukenNegativeFormEnding).defaultMessage;
        }

        default:
          return (messages[`joukenForm_${verbGroup}`]).defaultMessage
            + (messages.joukenFormEnding).defaultMessage;
      }
    }

    case GRAMMAR_TYPES.joukenTaraForm: {
      const ending = (messages.joukenTaraFormEnding).defaultMessage;

      let grammarEnding;
      let baseEnding;

      if (inflection === INFLECTION_TYPES.negative) {
        grammarEnding = getJishouFormEnding(
          GRAMMAR_TYPES.jishouForm, verbGroup, INFLECTION_TYPES.pastNegative, false
        );
        baseEnding = getBaseEnding(
          GRAMMAR_TYPES.jishouForm, verbGroup, INFLECTION_TYPES.pastNegative, false
        );
      } else {
        grammarEnding = getJishouFormEnding(
          GRAMMAR_TYPES.jishouForm, verbGroup, INFLECTION_TYPES.past, false
        );
        baseEnding = getBaseEnding(
          GRAMMAR_TYPES.jishouForm, verbGroup, INFLECTION_TYPES.past, false
        );
      }

      return grammarEnding + baseEnding + ending;
    }

    default:
      return (messages[`${grammar}_${verbGroup}`]).defaultMessage;
  }
};
