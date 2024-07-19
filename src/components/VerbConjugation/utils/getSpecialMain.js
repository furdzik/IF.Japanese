import { GRAMMAR_TYPES, INFLECTION_TYPES, VERB_GROUP_TYPES } from '@constants';

import messages from '../VerbConjugation.messages';

export const getSpecialMain = (grammar, verbGroup, inflection, politeForm) => {
  switch (verbGroup) {
    case VERB_GROUP_TYPES.specialVerb1: {
      switch (grammar) {
        case GRAMMAR_TYPES.jishouForm: {
          if (
            inflection === INFLECTION_TYPES.normal
            && !politeForm
          ) {
            return (messages.mainSuru_su)?.defaultMessage;
          }

          return (messages.mainSuru)?.defaultMessage;
        }

        case GRAMMAR_TYPES.kanouForm: {
          return (messages.mainSuru_de)?.defaultMessage;
        }

        case GRAMMAR_TYPES.meireiForm: {
          if (inflection === INFLECTION_TYPES.negative) {
            return (messages.mainSuru_su)?.defaultMessage;
          }

          return (messages.mainSuru)?.defaultMessage;
        }

        case GRAMMAR_TYPES.joukenBaForm: {
          if (inflection === INFLECTION_TYPES.negative) {
            return (messages.mainSuru)?.defaultMessage;
          }

          return (messages.mainSuru_su)?.defaultMessage;
        }

        case GRAMMAR_TYPES.ukemiForm:
        case GRAMMAR_TYPES.shiekiForm:
        case GRAMMAR_TYPES.shiekiukemiForm:
        case GRAMMAR_TYPES.shiekiukemiShortForm: {
          return (messages.mainSuru_sa)?.defaultMessage;
        }

        default:
          return (messages.mainSuru)?.defaultMessage;
      }
    }

    case VERB_GROUP_TYPES.specialVerb2: {
      switch (grammar) {
        case GRAMMAR_TYPES.jishouForm: {
          if (
            inflection === INFLECTION_TYPES.normal
            && !politeForm
          ) {
            return (messages.mainKuru_ku)?.defaultMessage;
          } else if (
            (inflection === INFLECTION_TYPES.negative
              || inflection === INFLECTION_TYPES.pastNegative
            ) && !politeForm) {
            return (messages.mainKuru)?.defaultMessage;
          }

          return (messages.mainKuru_ki)?.defaultMessage;
        }

        case GRAMMAR_TYPES.taiForm: {
          return (messages.mainKuru_ki)?.defaultMessage;
        }

        case GRAMMAR_TYPES.teForm:
        case GRAMMAR_TYPES.joukenTaraForm: {
          if (
            inflection === INFLECTION_TYPES.negative
          ) {
            return (messages.mainKuru)?.defaultMessage;
          }

          return (messages.mainKuru_ki)?.defaultMessage;
        }

        case GRAMMAR_TYPES.meireiForm: {
          if (inflection === INFLECTION_TYPES.negative) {
            return (messages.mainKuru_ku)?.defaultMessage;
          }

          return (messages.mainKuru)?.defaultMessage;
        }

        case GRAMMAR_TYPES.joukenBaForm: {
          if (inflection === INFLECTION_TYPES.negative) {
            return (messages.mainKuru)?.defaultMessage;
          }

          return (messages.mainKuru_ku)?.defaultMessage;
        }

        default:
          return (messages.mainKuru)?.defaultMessage;
      }
    }

    default:
      return '';
  }
};
