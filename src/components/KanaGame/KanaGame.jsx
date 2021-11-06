import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import _cloneDeep from 'lodash/cloneDeep';

import { ENTER_CODE, KANA_GAME_INIT, KANA_TYPE } from '@config/constants';

import CheckboxList from '@components/ui/CheckboxList';

import { getRandomKana, isAnswerCorrect } from './utils';

import {
  Wrapper,
  Title,
  FiltersWrapper,
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

  const [selectedFilters, setSelectedFilters] = useState(KANA_GAME_INIT);

  const [kana, setKana] = useState(getRandomKana(selectedFilters));
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const kanaTypeCheckbox = [
    {
      id: 1,
      value: KANA_TYPE.katakana,
      label: intl.formatMessage(messages.katakana)
    },
    {
      id: 2,
      value: KANA_TYPE.hiragana,
      label: intl.formatMessage(messages.hiragana)
    }
  ];

  const cleatAll = () => {
    setIsCorrect(false);
    setIsIncorrect(false);
  };

  const onCheckboxClickHandler = (kanaType) => {
    cleatAll();

    const newSelectedFilter = _cloneDeep(selectedFilters);

    if (newSelectedFilter.indexOf(kanaType) === -1) {
      newSelectedFilter.push(kanaType);
    } else {
      newSelectedFilter.splice(selectedFilters.indexOf(kanaType), 1);
    }

    setSelectedFilters(newSelectedFilter);
    setKana(getRandomKana(newSelectedFilter));
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    cleatAll();
  };

  const onKeyPressHandler = (event) => {
    if (event.charCode === ENTER_CODE) {
      if (isAnswerCorrect(value, kana)) {
        setIsCorrect(true);
        setIsIncorrect(false);

        setTimeout(() => {
          setValue(CLEAR_VALUE);
          setKana(getRandomKana(selectedFilters));
          cleatAll();
        }, CLEAR_TIMEOUT);
      } else {
        setIsCorrect(false);
        setIsIncorrect(true);

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
      <FiltersWrapper>
        <CheckboxList
          name="kana-type"
          onCheckboxClick={onCheckboxClickHandler}
          items={kanaTypeCheckbox}
          selected={selectedFilters}
          centered
        />
      </FiltersWrapper>
      {
        selectedFilters.length ? (
          <GameField>
            <RandomKana>{kana}</RandomKana>
            <Input
              onChange={onChangeHandler}
              onKeyPress={onKeyPressHandler}
              value={value}
              isIncorrect={isIncorrect}
              isCorrect={isCorrect}
              maxLength={4}
            />
            <Instructions>{intl.formatMessage(messages.instructions)}</Instructions>
          </GameField>
        ) : intl.formatMessage(messages.noSelectedFiltersErrorMsg)
      }
    </Wrapper>
  );
};

export default KanaGame;
