import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import _isEqual from 'lodash/isEqual';

import { QUESTION_JAPANESE_FORM } from '@constants';

import { japaneseFormShape, countersGroupShape } from '@types/vocabularyDetails';

import { getFurigana } from '@utils/counters/getFurigana';

import CounterConjugation from '@components/CounterConjugation';
import KanjiWithFurigana from '@components/KanjiWithFurigana';

import { hasSpecialNumberConjugation } from './utils';

import {
  Table,
  Tr,
  Th,
  Td,
  Number,
  NumberInner,
  QuestionWrapper
} from './CounterConjugationTable.styles.js';
import messages from './CounterConjugationTable.messages';

const CounterConjugationTable = (props) => {
  const intl = useIntl();

  const numbers = Array
    .from({ length: 10 }, (_, i) => i + 1)
    .concat(props.additionalNumbers);

  return (
    <Table>
      <thead>
        <Tr>
          <Th>{intl.formatMessage(messages.FirstRowLabel)}</Th>
          <Th>{intl.formatMessage(messages.SecondRowLabel)}</Th>
        </Tr>
      </thead>
      <tbody>
        {
          numbers.map((number) => (
            <Tr key={number}>
              <Td>
                <Number
                  specialConjugation={hasSpecialNumberConjugation(props.counterGroup, number)}
                  specialPronunciation={
                    !_isEqual(getFurigana(
                      number, props.counterGroup, props.japaneseForm?.furigana
                    ), props.japaneseForm?.furigana)
                  }
                >
                  <NumberInner>{number}</NumberInner>
                </Number>
              </Td>
              <Td>
                <CounterConjugation
                  vocab={props.vocab}
                  counterGroup={props.counterGroup}
                  japaneseForm={props.japaneseForm}
                  number={number}
                />
              </Td>
            </Tr>
          ))
        }
        <Tr key="question" question>
          <Td><Number>{intl.formatMessage(messages.questionMark)}</Number></Td>
          <Td>
            <QuestionWrapper>
              <KanjiWithFurigana
                kanji={
                  props.question
                    ? props.question.japaneseForm.kanji
                    : QUESTION_JAPANESE_FORM.kanji
                }
                furigana={
                  props.question
                    ? props.question.japaneseForm.furigana
                    : QUESTION_JAPANESE_FORM.furigana
                }
              />
              {
                !props.question ? (
                  <KanjiWithFurigana
                    kanji={props.japaneseForm?.kanji}
                    furigana={props.japaneseForm?.furigana}
                  />
                ) : null
              }
            </QuestionWrapper>
          </Td>
        </Tr>
      </tbody>
    </Table>
  );
};

CounterConjugationTable.propTypes = {
  counterGroup: countersGroupShape.isRequired,
  japaneseForm: japaneseFormShape.isRequired,
  vocab: PropTypes.string.isRequired,
  additionalNumbers: PropTypes.arrayOf(PropTypes.number),
  question: japaneseFormShape
};

CounterConjugationTable.defaultProps = {
  additionalNumbers: [],
  question: null
};

export default CounterConjugationTable;
