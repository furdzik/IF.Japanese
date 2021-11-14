import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { NUMBERS, COUNTERS_GROUPS } from '@constants';

import { japaneseFormShape, countersGroupShape } from '@types/vocabularyDetails';

import CounterConjugation from '@components/CounterConjugation';

import {
  Table,
  Tr,
  Th,
  Td,
  Number
} from './CounterConjugationTable.styles.js';
import messages from './CounterConjugationTable.messages';

const CounterConjugationTable = (props) => {
  const intl = useIntl();
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

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
              <Td><Number>{number}</Number></Td>
              <Td>
                <CounterConjugation
                  vocab={props.vocab}
                  counterGroup={props.counterGroup}
                  japaneseForm={props.japaneseForm}
                  noMain={props.counterGroup === COUNTERS_GROUPS.tsu && number === NUMBERS.ten}
                  number={number}
                />
              </Td>
            </Tr>
          ))
        }
      </tbody>
    </Table>
  );
};

CounterConjugationTable.propTypes = {
  counterGroup: countersGroupShape.isRequired,
  japaneseForm: japaneseFormShape.isRequired,
  vocab: PropTypes.string.isRequired
};

export default CounterConjugationTable;
