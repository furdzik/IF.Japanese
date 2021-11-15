import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { QUESTION_JAPANESE_FORM } from '@constants';

import { japaneseFormShape, countersGroupShape } from '@types/vocabularyDetails';

import CounterConjugation from '@components/CounterConjugation';
import KanjiWithFurigana from '@components/ui/KanjiWithFurigana';

import { shouldBeAdditionalNumber, shouldHaveMain } from './utils';

import {
  Table,
  Tr,
  Th,
  Td,
  Number,
  QuestionWrapper
} from './CounterConjugationTable.styles.js';
import messages from './CounterConjugationTable.messages';

const CounterConjugationTable = (props) => {
  const intl = useIntl();

  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  const counterConjugation = (number) => (
    <CounterConjugation
      vocab={props.vocab}
      counterGroup={props.counterGroup}
      japaneseForm={props.japaneseForm}
      noMain={shouldHaveMain(props.counterGroup, number)}
      number={number}
    />
  );

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
                <Number>
                  {number}
                </Number>
              </Td>
              <Td>
                {counterConjugation(number)}
              </Td>
            </Tr>
          ))
        }
        {
          props.additionalNumbers.map((number) => (
            <Tr key={number}>
              <Td>
                <Number additionalNumber={shouldBeAdditionalNumber(props.counterGroup)}>
                  {number}
                </Number>
              </Td>
              <Td>
                {counterConjugation(number)}
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
