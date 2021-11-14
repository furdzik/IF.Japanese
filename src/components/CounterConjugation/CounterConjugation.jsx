import React from 'react';
import PropTypes from 'prop-types';

import { japaneseFormShape, countersGroupShape } from '@types/vocabularyDetails';

import KanjiWithFurigana from '@components/ui/KanjiWithFurigana';

import { getNumberReading, hasAlternative, getFurigana } from './utils';

import {
  Wrapper,
  Box,
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
      <Box>
        {
          getNumberReading(props.number, props.counterGroup)
        }
        {
          !props.noMain ? main() : null
        }
      </Box>
      {
        hasAlternative(props.number, props.counterGroup) ? (
          <AlternativeBox>
            {
              getNumberReading(props.number, props.counterGroup, true)
            }
            {
              !props.noMain ? main() : null
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
  className: PropTypes.string,
  noMain: PropTypes.bool
};

CounterConjugation.defaultProps = {
  className: '',
  noMain: false
};

export default CounterConjugation;
