import React from 'react';
import PropTypes from 'prop-types';

import { japaneseFormShape, countersGroupShape } from '@types/vocabularyDetails';

import { getFurigana } from '@utils/counters/getFurigana';

import KanjiWithFurigana from '@components/KanjiWithFurigana';

import { getNumberReading, hasAlternative, shouldHaveMain } from './utils';

import {
  Wrapper,
  AlternativeBox
} from './CounterConjugation.styles.js';

const CounterConjugation = (props) => {
  const main = () => props.vocab === props.japaneseForm?.kanji.join('') ? (
    <KanjiWithFurigana
      kanji={props.japaneseForm?.kanji}
      furigana={getFurigana(props.number, props.counterGroup, props.japaneseForm?.furigana)}
    />
  ) : props.vocab;

  return (
    <Wrapper className={props.className}>
      <div>
        {
          getNumberReading(props.number, props.counterGroup)
        }
        {
          !shouldHaveMain(props.counterGroup, props.number) ? main() : null
        }
      </div>
      {
        hasAlternative(props.number, props.counterGroup) ? (
          <AlternativeBox>
            {
              getNumberReading(props.number, props.counterGroup, true)
            }
            {
              !shouldHaveMain(props.counterGroup, props.number, true) ? main() : null
            }
          </AlternativeBox>
        ) : null
      }
    </Wrapper>
  );
};

CounterConjugation.propTypes = {
  counterGroup: countersGroupShape.isRequired,
  japaneseForm: japaneseFormShape.isRequired,
  number: PropTypes.number.isRequired,
  vocab: PropTypes.string.isRequired,
  className: PropTypes.string
};

CounterConjugation.defaultProps = {
  className: ''
};

export default CounterConjugation;
