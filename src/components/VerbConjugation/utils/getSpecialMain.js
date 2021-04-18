import { bunpouTypes, inflectionTypes, verbGroupTypes } from '@config/constants';

import messages from '../VerbConjugation.messages';

export default (bunpou, verbGroup, inflection, teineiKei) => {
  switch (verbGroup) {
    case verbGroupTypes.specialVerb1: {
      switch (bunpou) {
        case bunpouTypes.JISHOU_KEI: {
          if (
            inflection === inflectionTypes.NORMAL
            && !teineiKei
          ) {
            return (messages.mainSuru_su)?.defaultMessage;
          }

          return (messages.mainSuru)?.defaultMessage;
        }

        case bunpouTypes.KANOU_KEI: {
          return (messages.mainSuru_de)?.defaultMessage;
        }

        case bunpouTypes.MEIREI_KEI: {
          if (inflection === inflectionTypes.NEGATIVE) {
            return (messages.mainSuru_su)?.defaultMessage;
          }

          return (messages.mainSuru)?.defaultMessage;
        }

        case bunpouTypes.JOUKEN_BA_KEI: {
          if (inflection === inflectionTypes.NEGATIVE) {
            return (messages.mainSuru)?.defaultMessage;
          }

          return (messages.mainSuru_su)?.defaultMessage;
        }

        case bunpouTypes.UKEMI_KEI:
        case bunpouTypes.SHIEKI_KEI:
        case bunpouTypes.SHIEKIUKEMI_KEI:
        case bunpouTypes.SHIEKIUKEMI_SHORT_KEI: {
          return (messages.mainSuru_sa)?.defaultMessage;
        }

        default:
          return (messages.mainSuru)?.defaultMessage;
      }
    }

    case verbGroupTypes.specialVerb2: {
      switch (bunpou) {
        case bunpouTypes.JISHOU_KEI: {
          if (
            inflection === inflectionTypes.NORMAL
            && !teineiKei
          ) {
            return (messages.mainKuru_ku)?.defaultMessage;
          } else if (
            (inflection === inflectionTypes.NEGATIVE
              || inflection === inflectionTypes.PAST_NEGATIVE
            ) && !teineiKei) {
            return (messages.mainKuru)?.defaultMessage;
          }

          return (messages.mainKuru_ki)?.defaultMessage;
        }

        case bunpouTypes.TAI_KEI: {
          return (messages.mainKuru_ki)?.defaultMessage;
        }

        case bunpouTypes.TE_KEI:
        case bunpouTypes.JOUKEN_TARA_KEI: {
          if (
            inflection === inflectionTypes.NEGATIVE
          ) {
            return (messages.mainKuru)?.defaultMessage;
          }

          return (messages.mainKuru_ki)?.defaultMessage;
        }

        case bunpouTypes.MEIREI_KEI:
        case bunpouTypes.JOUKEN_BA_KEI: {
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
