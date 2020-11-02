import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { vocabShape } from '../VocabularyList/VocabularyList.types';
import { bunpouTypes, inflectionTypes, verbGroupTypes } from '@config/constants';

import messages from './VerbConjugation.messages';

const VerbConjugation = (props) => {
  const intl = useIntl();

  const getBaseEnd = (bunpou, verbGroup, inflection, teineiKei) => {
    switch (inflection) {
      case inflectionTypes.NORMAL: {
        if (teineiKei) {
          return intl.formatMessage(messages.baseTeineiKeiEnding);
        } else {
          return (
            verbGroup === verbGroupTypes.group2
            || bunpou === bunpouTypes.KANOU_KEI
            || bunpou === bunpouTypes.UKEMI_KEI
            || bunpou === bunpouTypes.SHIEKI_KEI
            || bunpou === bunpouTypes.SHIEKIUKEMI_KEI
            || bunpou === bunpouTypes.SHIEKIUKEMI_SHORT_KEI
          )
            ? intl.formatMessage(messages.baseNaiRuEnding)
            : intl.formatMessage(messages[`jishouKeiEnding_${verbGroup}`]);
        }
      }

      case inflectionTypes.NEGATIVE: {
        return teineiKei
          ? intl.formatMessage(messages.baseTeineiNaiKeiEnding)
          : intl.formatMessage(messages.baseNaiKeiEnding);
      }

      case inflectionTypes.PAST: {
        let pastEnding;
        if (
          (
            bunpou !== bunpouTypes.KANOU_KEI
            && bunpou !== bunpouTypes.UKEMI_KEI
            && bunpou !== bunpouTypes.SHIEKI_KEI
            && bunpou !== bunpouTypes.SHIEKIUKEMI_KEI
            && bunpou !== bunpouTypes.SHIEKIUKEMI_SHORT_KEI)
          && (
            verbGroup === verbGroupTypes.group1Gu
            || verbGroup === verbGroupTypes.group1Bu
            || verbGroup === verbGroupTypes.group1Mu
          )
        ) {
          pastEnding = intl.formatMessage(messages.basePast2KeiEnding);
        } else {
          pastEnding = intl.formatMessage(messages.basePastKeiEnding);
        }

        return teineiKei
          ? intl.formatMessage(messages.baseTeineiPastKeiEnding)
          : pastEnding;
      }

      case inflectionTypes.PAST_NEGATIVE: {
        return teineiKei
          ? intl.formatMessage(messages.baseTeineiNaiPastKeiEnding)
          : intl.formatMessage(messages.baseNaiPastKeiEnding);
      }

      default:
        return null;
    }
  }

  const getBunpouTransformation = (bunpou, verbGroup, inflection, teineiKei) => {
    switch (bunpou) {
      case bunpouTypes.JISHOU_KEI: {
        if (verbGroup === verbGroupTypes.group2) {
          return '';
        }

        if (teineiKei) {
          return intl.formatMessage(messages[`jishouKei_${verbGroup}_teinei`]);
        }

        switch (inflection) {
          case inflectionTypes.NEGATIVE:
          case inflectionTypes.PAST_NEGATIVE: {
            return !teineiKei ? (
              intl.formatMessage(messages[`jishouNaiKei_${verbGroup}`])
            ) : '';
          }
          case inflectionTypes.PAST: {
            return !teineiKei ? (
              intl.formatMessage(messages[`jishouPastKei_${verbGroup}`])
            ) : '';
          }

          default:
            return '';
        }
      }

      default:
        return intl.formatMessage(messages[`${bunpou}_${verbGroup}`]);
    }
  }

  const specialInflectionEnding = (bunpou, verbGroup, inflection, teineiKei) => {
    switch (props.bunpou) {
      case bunpouTypes.TAI_KEI: {
        const end = teineiKei ? intl.formatMessage(messages.desu) : '';
        let pre = '';
        if (verbGroup !== verbGroupTypes.group2) {
          pre = intl.formatMessage(messages[`jishouKei_${verbGroup}_teinei`]);
        }

        switch (inflection) {
          case inflectionTypes.NORMAL: {
            return  pre + intl.formatMessage(messages.taiKeiEnding) + end;
          }
          case inflectionTypes.NEGATIVE: {
            return  pre + intl.formatMessage(messages.taiNaiKeiEnding) + end;
          }
          case inflectionTypes.PAST: {
            return  pre + intl.formatMessage(messages.taiPastKeiEnding) + end;
          }
          case inflectionTypes.PAST_NEGATIVE: {
            return  pre + intl.formatMessage(messages.taiNaiPastKeiEnding) + end;
          }
          default:
            return '';
        }
      }

      case bunpouTypes.TE_KEI: {
        let ending;
        let inflectionPart = '';

        if (inflection === inflectionTypes.NORMAL
          && (
            verbGroup === verbGroupTypes.group1Gu
            || verbGroup === verbGroupTypes.group1Bu
            || verbGroup === verbGroupTypes.group1Mu
          )
        ) {
          ending = intl.formatMessage(messages.te2KeiEnding);
        } else {
          ending = intl.formatMessage(messages.teKeiEnding);
        }

        if (inflection === inflectionTypes.NORMAL) {
          inflectionPart = verbGroup !== verbGroupTypes.group2 ? intl.formatMessage(messages[`jishouPastKei_${verbGroup}`]) : '';
        } else {
          inflectionPart = (verbGroup !== verbGroupTypes.group2 ? intl.formatMessage(messages[`jishouNaiKei_${verbGroup}`]) : '') + intl.formatMessage(messages.teNaiKeiEnding);
        }

        return inflectionPart + ending;
      }

      case bunpouTypes.IKOU_KEI: {
        return intl.formatMessage(messages[`ikouKei_${verbGroup}`]) + intl.formatMessage(messages.ikouKeiEnding);
      }

      case bunpouTypes.MEIREI_KEI: {
        if (inflection === inflectionTypes.NEGATIVE) {
          const end = getBaseEnd(bunpou, verbGroup, inflectionTypes.NORMAL, false)
          return end + intl.formatMessage(messages.meireiNaiKei);
        }

        return intl.formatMessage(messages[`meireiKei_${verbGroup}`]);
      }

      default:
        return '';
    }
  }

  const inflectionEnding = (bunpou, verbGroup, inflection, teineiKei) => {
    let preEnd = '';
    if (
      verbGroup !== verbGroupTypes.specialVerb1
      && verbGroup !== verbGroupTypes.specialVerb2
    ) {
      preEnd = getBunpouTransformation(bunpou, verbGroup, inflection, teineiKei);
    }

    const end = getBaseEnd(bunpou, verbGroup, inflection, teineiKei);

    return preEnd + end;
  }



  const getEnding = () => {
    switch (props.bunpou) {
      case bunpouTypes.TAI_KEI:
      case bunpouTypes.TE_KEI:
      case bunpouTypes.IKOU_KEI:
      case bunpouTypes.MEIREI_KEI:
      case bunpouTypes.KINSHI_KEI:
      case bunpouTypes.JOUKEN_TARA_KEI: {
        return specialInflectionEnding(
          props.bunpou, props.verb?.verbGroup, props.inflection, props.teineiKei
        );
      }

      default:
        return inflectionEnding(
          props.bunpou, props.verb?.verbGroup, props.inflection, props.teineiKei
        );
    }
  };

  return (
    <div className={props.className}>
      {props.verb?.main}
      {getEnding()}
    </div>
  );
}

VerbConjugation.propTypes = {
  bunpou: PropTypes.string.isRequired,
  inflection: PropTypes.number.isRequired,
  verb: vocabShape.isRequired,
  className: PropTypes.string,
  teineiKei: PropTypes.bool
};

VerbConjugation.defaultProps = {
  teineiKei: false,
  className: ''
}

export default VerbConjugation;
