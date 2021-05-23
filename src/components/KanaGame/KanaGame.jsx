import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { ENTER_CODE } from '@config/constants';

import {
  Wrapper,
  GameField,
  Input,
  RandomKana,
  Instructions
} from './KanaGame.styles.js';
import messages from './KanaGame.messages';

const getRandomKana = () => {
  console.log('getRandomKana');
  return 'か';
};

const KanaGame = () => {
  const intl = useIntl();

  const [value, setValue] = useState('');
  const [kana, setKana] = useState(getRandomKana());
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, seIsIncorrect] = useState(false);
  console.log('game');

  const onChangeHandler = (event) => {
    if (event) {
      setValue(event.target.value);
      setIsCorrect(false);
      seIsIncorrect(true);
      setKana('ら');
      console.log('value', value);
      console.log(event.keyCode);
    }
  };

  const onKeyPressHandler = (event) => {
    if (event.charCode === ENTER_CODE) {
      console.log(event.charCode);
    }
  };

  return (
    <Wrapper>
      <GameField>
        <RandomKana>{kana}</RandomKana>
        <Input
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          value={value}
          isIncorrect={isIncorrect}
          isCorrect={isCorrect}
          maxLength={2}
        />
      </GameField>
      <Instructions>{intl.formatMessage(messages.instructions)}</Instructions>
    </Wrapper>
  );
};

export default KanaGame;
