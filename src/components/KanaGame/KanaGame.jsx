import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { ENTER_CODE } from '@config/constants';

import { getRandomKana, isAnswerCorrect } from './utils';

import {
  Wrapper,
  Title,
  GameField,
  Input,
  RandomKana,
  Instructions
} from './KanaGame.styles.js';
import messages from './KanaGame.messages';

const CLEAR_VALUE = '';
const CLEAR_TIMEOUT = 100;

const KanaGame = () => {
  const intl = useIntl();

  const [value, setValue] = useState('');
  const [kana, setKana] = useState(getRandomKana());
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, seIsIncorrect] = useState(false);

  const cleatAll = () => {
    setIsCorrect(false);
    seIsIncorrect(false);
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    cleatAll();
  };

  const onKeyPressHandler = (event) => {
    if (event.charCode === ENTER_CODE) {
      if (isAnswerCorrect(value, kana)) {
        setIsCorrect(true);
        seIsIncorrect(false);

        setTimeout(() => {
          setValue(CLEAR_VALUE);
          setKana(getRandomKana());
          cleatAll();
        }, CLEAR_TIMEOUT);
      } else {
        setIsCorrect(false);
        seIsIncorrect(true);

        setTimeout(() => {
          setValue(CLEAR_VALUE);
          cleatAll();
        }, CLEAR_TIMEOUT);
      }
    }
  };

  return (
    <Wrapper>
      <Title>{intl.formatMessage(messages.title)}</Title>
      <GameField>
        <RandomKana>{kana}</RandomKana>
        <Input
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          value={value}
          isIncorrect={isIncorrect}
          isCorrect={isCorrect}
          maxLength={3}
        />
        <Instructions>{intl.formatMessage(messages.instructions)}</Instructions>
      </GameField>
    </Wrapper>
  );
};

export default KanaGame;
