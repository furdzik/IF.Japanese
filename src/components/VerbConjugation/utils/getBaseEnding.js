import { bunpouTypes, inflectionTypes, verbGroupTypes } from '@config/constants';

import messages from '../VerbConjugation.messages';

export const isSpecialCasePastEnding = (bunpou, verbGroup) => (
  (bunpou !== bunpouTypes.KANOU_KEI
    && bunpou !== bunpouTypes.UKEMI_KEI
    && bunpou !== bunpouTypes.SHIEKI_KEI
    && bunpou !== bunpouTypes.SHIEKIUKEMI_KEI
    && bunpou !== bunpouTypes.SHIEKIUKEMI_SHORT_KEI)
  && (
    verbGroup === verbGroupTypes.group1Gu
    || verbGroup === verbGroupTypes.group1Bu
    || verbGroup === verbGroupTypes.group1Mu
  )
);

export const getBaseEnding = (bunpou, verbGroup, inflection, teineiKei, notInTheEnd = false) => {
  if (
    bunpou === bunpouTypes.JISHOU_KEI
    || bunpou === bunpouTypes.KANOU_KEI
    || bunpou === bunpouTypes.UKEMI_KEI
    || bunpou === bunpouTypes.SHIEKI_KEI
    || bunpou === bunpouTypes.SHIEKIUKEMI_KEI
    || bunpou === bunpouTypes.SHIEKIUKEMI_SHORT_KEI
    || notInTheEnd
  ) {
    switch (inflection) {
      case inflectionTypes.NORMAL: {
        if (teineiKei) {
          return (messages.baseTeineiKeiEnding).defaultMessage;
        }

        return (
          verbGroup === verbGroupTypes.group2
          || bunpou === bunpouTypes.KANOU_KEI
          || bunpou === bunpouTypes.UKEMI_KEI
          || bunpou === bunpouTypes.SHIEKI_KEI
          || bunpou === bunpouTypes.SHIEKIUKEMI_KEI
          || bunpou === bunpouTypes.SHIEKIUKEMI_SHORT_KEI
        )
          ? (messages.baseNaiRuEnding)?.defaultMessage
          : messages[`jishouKeiEnding_${verbGroup}`]?.defaultMessage;
      }

      case inflectionTypes.NEGATIVE: {
        return teineiKei
          ? (messages.baseTeineiNaiKeiEnding)?.defaultMessage
          : (messages.baseNaiKeiEnding)?.defaultMessage;
      }

      case inflectionTypes.PAST: {
        let pastEnding;

        if (isSpecialCasePastEnding(bunpou, verbGroup)) {
          pastEnding = (messages.basePast2KeiEnding)?.defaultMessage;
        } else {
          pastEnding = (messages.basePastKeiEnding)?.defaultMessage;
        }

        return teineiKei
          ? (messages.baseTeineiPastKeiEnding)?.defaultMessage
          : pastEnding;
      }

      case inflectionTypes.PAST_NEGATIVE: {
        return teineiKei
          ? (messages.baseTeineiNaiPastKeiEnding)?.defaultMessage
          : (messages.baseNaiPastKeiEnding)?.defaultMessage;
      }

      default:
        return null;
    }
  } else {
    return '';
  }
};
