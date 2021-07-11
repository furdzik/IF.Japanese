import { grammarTypes, inflectionTypes, verbGroupTypes } from '@config/constants';

import { getBaseEnding } from './getBaseEnding';

import messages from '../VerbConjugation.messages';

const isGroupTwoAndSpecial = (verbGroup) => (
  verbGroup === verbGroupTypes.group2
  || verbGroup === verbGroupTypes.specialVerb1
  || verbGroup === verbGroupTypes.specialVerb2
);

const getJishouFormEnding = (grammar, verbGroup, inflection, isPolite) => {
  if (isGroupTwoAndSpecial(verbGroup)) {
    return '';
  }

  if (isPolite) {
    return (messages[`jishouForm_${verbGroup}_polite`])?.defaultMessage;
  }

  switch (inflection) {
    case inflectionTypes.NEGATIVE:
    case inflectionTypes.PAST_NEGATIVE: {
      return !isPolite
        ? (messages[`jishouNegativeForm_${verbGroup}`])?.defaultMessage
        : '';
    }
    case inflectionTypes.PAST: {
      return !isPolite
        ? (messages[`jishouPastForm_${verbGroup}`])?.defaultMessage
        : '';
    }

    default:
      return '';
  }
};

export const getGrammarEnding = (grammar, verbGroup, inflection, isPolite) => {
  switch (grammar) {
    case grammarTypes.JISHOU_FORM: {
      return getJishouFormEnding(grammar, verbGroup, inflection, isPolite);
    }

    case grammarTypes.TAI_FORM: {
      const end = isPolite ? (messages.desu)?.defaultMessage : '';
      let pre = '';
      if (!isGroupTwoAndSpecial(verbGroup)) {
        pre = (messages[`jishouForm_${verbGroup}_polite`])?.defaultMessage;
      }

      switch (inflection) {
        case inflectionTypes.NORMAL: {
          return pre + (messages.taiFormEnding)?.defaultMessage + end;
        }
        case inflectionTypes.NEGATIVE: {
          return pre + (messages.taiNegativeFormEnding)?.defaultMessage + end;
        }
        case inflectionTypes.PAST: {
          return pre + (messages.taiPastFormEnding)?.defaultMessage + end;
        }
        case inflectionTypes.PAST_NEGATIVE: {
          return pre + (messages.taiNegativePastFormEnding)?.defaultMessage + end;
        }
        default:
          return '';
      }
    }

    // TODO: To refactor
    case grammarTypes.TE_FORM: {
      let ending;
      let inflectionPart = '';

      if (
        inflection === inflectionTypes.NORMAL
        && (
          verbGroup === verbGroupTypes.group1Gu
          || verbGroup === verbGroupTypes.group1Bu
          || verbGroup === verbGroupTypes.group1Mu
          || verbGroup === verbGroupTypes.group1Nu
        )
      ) {
        ending = (messages.te2FormEnding)?.defaultMessage;
      } else {
        ending = (messages.teFormEnding)?.defaultMessage;
      }

      if (inflection === inflectionTypes.NORMAL) {
        inflectionPart = !isGroupTwoAndSpecial(verbGroup)
          ? (messages[`jishouPastForm_${verbGroup}`])?.defaultMessage
          : '';
      } else {
        inflectionPart = (
          !isGroupTwoAndSpecial(verbGroup)
            ? (messages[`jishouNegativeForm_${verbGroup}`])?.defaultMessage
            : ''
        ) + (messages.teNegativeFormEnding)?.defaultMessage;
      }

      return inflectionPart + ending;
    }

    case grammarTypes.IKOU_FORM: {
      return (messages[`ikouForm_${verbGroup}`])?.defaultMessage + (messages.ikouFormEnding)?.defaultMessage;
    }

    case grammarTypes.MEIREI_FORM: {
      if (inflection === inflectionTypes.NEGATIVE) {
        const end = getBaseEnding(
          grammar, verbGroup, inflectionTypes.NORMAL, false, true
        );
        return end + (messages.meireiNegativeForm)?.defaultMessage;
      }

      return (messages[`meireiForm_${verbGroup}`])?.defaultMessage;
    }

    case grammarTypes.JOUKEN_BA_FORM: {
      switch (inflection) {
        case inflectionTypes.NEGATIVE: {
          return (
            !isGroupTwoAndSpecial(verbGroup)
              ? (messages[`jishouNegativeForm_${verbGroup}`])?.defaultMessage
              : ''
          ) + (messages.joukenNegativeFormEnding)?.defaultMessage;
        }

        default:
          return (messages[`joukenForm_${verbGroup}`])?.defaultMessage
            + (messages.joukenFormEnding)?.defaultMessage;
      }
    }

    case grammarTypes.JOUKEN_TARA_FORM: {
      const ending = (messages.joukenTaraFormEnding)?.defaultMessage;

      let grammarEnding;
      let baseEnding;

      if (inflection === inflectionTypes.NEGATIVE) {
        grammarEnding = getJishouFormEnding(
          grammarTypes.JISHOU_FORM, verbGroup, inflectionTypes.PAST_NEGATIVE, false
        );
        baseEnding = getBaseEnding(
          grammarTypes.JISHOU_FORM, verbGroup, inflectionTypes.PAST_NEGATIVE, false
        );
      } else {
        grammarEnding = getJishouFormEnding(
          grammarTypes.JISHOU_FORM, verbGroup, inflectionTypes.PAST, false
        );
        baseEnding = getBaseEnding(
          grammarTypes.JISHOU_FORM, verbGroup, inflectionTypes.PAST, false
        );
      }

      return grammarEnding + baseEnding + ending;
    }

    default:
      return (messages[`${grammar}_${verbGroup}`])?.defaultMessage;
  }
};
