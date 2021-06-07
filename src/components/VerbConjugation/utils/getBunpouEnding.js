import { bunpouTypes, inflectionTypes, verbGroupTypes } from '@config/constants';

import { getBaseEnding } from './getBaseEnding';

import messages from '../VerbConjugation.messages';

const isGroupTwoAndSpecial = (verbGroup) => (
  verbGroup === verbGroupTypes.group2
  || verbGroup === verbGroupTypes.specialVerb1
  || verbGroup === verbGroupTypes.specialVerb2
);

const getJishouKeiEnding = (bunpou, verbGroup, inflection, isPolite) => {
  if (isGroupTwoAndSpecial(verbGroup)) {
    return '';
  }

  if (isPolite) {
    return (messages[`jishouKei_${verbGroup}_teinei`])?.defaultMessage;
  }

  switch (inflection) {
    case inflectionTypes.NEGATIVE:
    case inflectionTypes.PAST_NEGATIVE: {
      return !isPolite
        ? (messages[`jishouNaiKei_${verbGroup}`])?.defaultMessage
        : '';
    }
    case inflectionTypes.PAST: {
      return !isPolite
        ? (messages[`jishouPastKei_${verbGroup}`])?.defaultMessage
        : '';
    }

    default:
      return '';
  }
};

export const getBunpouEnding = (bunpou, verbGroup, inflection, isPolite) => {
  switch (bunpou) {
    case bunpouTypes.JISHOU_KEI: {
      return getJishouKeiEnding(bunpou, verbGroup, inflection, isPolite);
    }

    case bunpouTypes.TAI_KEI: {
      const end = isPolite ? (messages.desu)?.defaultMessage : '';
      let pre = '';
      if (!isGroupTwoAndSpecial(verbGroup)) {
        pre = (messages[`jishouKei_${verbGroup}_teinei`])?.defaultMessage;
      }

      switch (inflection) {
        case inflectionTypes.NORMAL: {
          return pre + (messages.taiKeiEnding)?.defaultMessage + end;
        }
        case inflectionTypes.NEGATIVE: {
          return pre + (messages.taiNaiKeiEnding)?.defaultMessage + end;
        }
        case inflectionTypes.PAST: {
          return pre + (messages.taiPastKeiEnding)?.defaultMessage + end;
        }
        case inflectionTypes.PAST_NEGATIVE: {
          return pre + (messages.taiNaiPastKeiEnding)?.defaultMessage + end;
        }
        default:
          return '';
      }
    }

    // TODO: To refactor
    case bunpouTypes.TE_KEI: {
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
        ending = (messages.te2KeiEnding)?.defaultMessage;
      } else {
        ending = (messages.teKeiEnding)?.defaultMessage;
      }

      if (inflection === inflectionTypes.NORMAL) {
        inflectionPart = !isGroupTwoAndSpecial(verbGroup)
          ? (messages[`jishouPastKei_${verbGroup}`])?.defaultMessage
          : '';
      } else {
        inflectionPart = (
          !isGroupTwoAndSpecial(verbGroup)
            ? (messages[`jishouNaiKei_${verbGroup}`])?.defaultMessage
            : ''
        ) + (messages.teNaiKeiEnding)?.defaultMessage;
      }

      return inflectionPart + ending;
    }

    case bunpouTypes.IKOU_KEI: {
      return (messages[`ikouKei_${verbGroup}`])?.defaultMessage + (messages.ikouKeiEnding)?.defaultMessage;
    }

    case bunpouTypes.MEIREI_KEI: {
      if (inflection === inflectionTypes.NEGATIVE) {
        const end = getBaseEnding(
          bunpou, verbGroup, inflectionTypes.NORMAL, false, true
        );
        return end + (messages.meireiNaiKei)?.defaultMessage;
      }

      return (messages[`meireiKei_${verbGroup}`])?.defaultMessage;
    }

    case bunpouTypes.JOUKEN_BA_KEI: {
      switch (inflection) {
        case inflectionTypes.NEGATIVE: {
          return (
            !isGroupTwoAndSpecial(verbGroup)
              ? (messages[`jishouNaiKei_${verbGroup}`])?.defaultMessage
              : ''
          ) + (messages.joukenNaiKeiEnding)?.defaultMessage;
        }

        default:
          return (messages[`joukenKei_${verbGroup}`])?.defaultMessage
            + (messages.joukenKeiEnding)?.defaultMessage;
      }
    }

    case bunpouTypes.JOUKEN_TARA_KEI: {
      const ending = (messages.joukenTaraKeiEnding)?.defaultMessage;

      let bunpouEnding;
      let baseEnding;

      if (inflection === inflectionTypes.NEGATIVE) {
        bunpouEnding = getJishouKeiEnding(
          bunpouTypes.JISHOU_KEI, verbGroup, inflectionTypes.PAST_NEGATIVE, false
        );
        baseEnding = getBaseEnding(
          bunpouTypes.JISHOU_KEI, verbGroup, inflectionTypes.PAST_NEGATIVE, false
        );
      } else {
        bunpouEnding = getJishouKeiEnding(
          bunpouTypes.JISHOU_KEI, verbGroup, inflectionTypes.PAST, false
        );
        baseEnding = getBaseEnding(
          bunpouTypes.JISHOU_KEI, verbGroup, inflectionTypes.PAST, false
        );
      }

      return bunpouEnding + baseEnding + ending;
    }

    default:
      return (messages[`${bunpou}_${verbGroup}`])?.defaultMessage;
  }
};
