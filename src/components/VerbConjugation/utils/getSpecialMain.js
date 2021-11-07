import { grammarTypes, inflectionTypes, verbGroupTypes } from '@constants';

import messages from '../VerbConjugation.messages';

export const getSpecialMain = (grammar, verbGroup, inflection, politeForm) => {
  switch (verbGroup) {
    case verbGroupTypes.specialVerb1: {
      switch (grammar) {
        case grammarTypes.JISHOU_FORM: {
          if (
            inflection === inflectionTypes.NORMAL
            && !politeForm
          ) {
            return (messages.mainSuru_su)?.defaultMessage;
          }

          return (messages.mainSuru)?.defaultMessage;
        }

        case grammarTypes.KANOU_FORM: {
          return (messages.mainSuru_de)?.defaultMessage;
        }

        case grammarTypes.MEIREI_FORM: {
          if (inflection === inflectionTypes.NEGATIVE) {
            return (messages.mainSuru_su)?.defaultMessage;
          }

          return (messages.mainSuru)?.defaultMessage;
        }

        case grammarTypes.JOUKEN_BA_FORM: {
          if (inflection === inflectionTypes.NEGATIVE) {
            return (messages.mainSuru)?.defaultMessage;
          }

          return (messages.mainSuru_su)?.defaultMessage;
        }

        case grammarTypes.UKEMI_FORM:
        case grammarTypes.SHIEKI_FORM:
        case grammarTypes.SHIEKIUKEMI_FORM:
        case grammarTypes.SHIEKIUKEMI_SHORT_FORM: {
          return (messages.mainSuru_sa)?.defaultMessage;
        }

        default:
          return (messages.mainSuru)?.defaultMessage;
      }
    }

    case verbGroupTypes.specialVerb2: {
      switch (grammar) {
        case grammarTypes.JISHOU_FORM: {
          if (
            inflection === inflectionTypes.NORMAL
            && !politeForm
          ) {
            return (messages.mainKuru_ku)?.defaultMessage;
          } else if (
            (inflection === inflectionTypes.NEGATIVE
              || inflection === inflectionTypes.PAST_NEGATIVE
            ) && !politeForm) {
            return (messages.mainKuru)?.defaultMessage;
          }

          return (messages.mainKuru_ki)?.defaultMessage;
        }

        case grammarTypes.TAI_FORM: {
          return (messages.mainKuru_ki)?.defaultMessage;
        }

        case grammarTypes.TE_FORM:
        case grammarTypes.JOUKEN_TARA_FORM: {
          if (
            inflection === inflectionTypes.NEGATIVE
          ) {
            return (messages.mainKuru)?.defaultMessage;
          }

          return (messages.mainKuru_ki)?.defaultMessage;
        }

        case grammarTypes.MEIREI_FORM:
        case grammarTypes.JOUKEN_BA_FORM: {
          if (inflection === inflectionTypes.NEGATIVE) {
            return (messages.mainKuru_ku)?.defaultMessage;
          }

          return (messages.mainKuru)?.defaultMessage;
        }

        default:
          return (messages.mainKuru)?.defaultMessage;
      }
    }

    default:
      return '';
  }
};
