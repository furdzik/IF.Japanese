import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { mdiChevronRight } from '@mdi/js';

import { flashcardShape, additionalInfoShape } from '@types/flashcard';
import { FLASHCARDS_MODES_TYPES, FLASHCARDS_MODES, BUTTONS_VARIANTS, FLASH_CARDS_MODE_KEY } from '@constants';

import defaultMessages from '@lang/messages/default.messages';

import Button from '@components/Button';
import ErrorMessageBox from '@components/ErrorMessageBox';
import Switcher from '@components/Switcher';

import {
  Wrapper,
  Title,
  Box,
  VocabCard,
  MeaningCard,
  VocabWrapper,
  TileStyled,
  ReadingWrapper,
  MeaningWrapper,
  ButtonsWrapper,
  SeeMoreLink,
  IconStyled,
  ModesWrapper,
  SwitcherWrapper,
  SwitcherLabel
} from './Flashcards.styles.js';
import messages from './Flashcards.messages';

const Flashcards = (props) => {
  const intl = useIntl();

  const [isVocabCardVisible, setIsVocabCardVisible] = useState(true);
  const [isReadingCardVisible, setIsReadingCardVisible] = useState(false);
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem(FLASH_CARDS_MODE_KEY)) || FLASHCARDS_MODES_TYPES.reading
  );

  const vocabCardClickHandler = () => {
    setIsVocabCardVisible(!isVocabCardVisible);
    setIsReadingCardVisible(!isReadingCardVisible);
  };

  const meaningCardClickHandler = () => {
    props.getFlashcard();

    setIsVocabCardVisible(!isVocabCardVisible);
    setIsReadingCardVisible(!isReadingCardVisible);
  };

  const handleSetReveal = () => {
    if (props.isRevealed && !isVocabCardVisible) {
      setIsVocabCardVisible(true);
      setIsReadingCardVisible(false);
    }

    props.setReveal(!props.isRevealed);
  };

  const getFrontOfTheCard = () => {
    switch (mode) {
      case FLASHCARDS_MODES_TYPES.reading:
        return props.flashcard?.vocab;
      case FLASHCARDS_MODES_TYPES.writing:
        return props.flashcard?.reading;
      case FLASHCARDS_MODES_TYPES.meaning:
        return props.flashcard?.meaning;
      default: props.flashcard?.vocab;
    }
  };

  return (
    <Wrapper hasApiError={props.apiError}>
      {
        props.apiError ? (
          <ErrorMessageBox message={intl.formatMessage(messages.apiErrorMsg)} />
        ) : null
      }
      <Title>{intl.formatMessage(messages.title)}</Title>
      {
        props.error ? (
          <div>{props.error}</div>
        ) : null
      }
      {
        !props.error && !props.apiError ? (
          <React.Fragment>
            <ModesWrapper>
              {
                FLASHCARDS_MODES.map((modeElement) => (
                  <Button
                    key={modeElement}
                    variant={modeElement === mode ? BUTTONS_VARIANTS.primary : BUTTONS_VARIANTS.secondary}
                    onClick={() => {
                      setMode(modeElement);
                      localStorage.setItem(FLASH_CARDS_MODE_KEY, JSON.stringify(modeElement));
                    }}
                  >
                    {intl.formatMessage(messages[`${modeElement}ModeLabel`])}
                  </Button>
                ))
              }
            </ModesWrapper>
            <SwitcherWrapper>
              <SwitcherLabel>{intl.formatMessage(messages.switcherLabel)}</SwitcherLabel>
              <Switcher
                onClick={() => handleSetReveal()}
                checked={props.isRevealed}
              />
            </SwitcherWrapper>
            <Box>
              {
                isVocabCardVisible && props.isRevealed === false ? (
                  <VocabCard onClick={(event) => vocabCardClickHandler(event)}>
                    {
                      !props.loading ? (
                        <VocabWrapper mode={mode}>{getFrontOfTheCard()}</VocabWrapper>
                      ) : null
                    }
                  </VocabCard>
                ) : null
              }
              {
                isReadingCardVisible || props.isRevealed ? (
                  <MeaningCard>
                    <TileStyled
                      known={props.additionalInfo?.known}
                      inProgress={props.additionalInfo?.inProgress}
                      nowLearning={props.additionalInfo?.nowLearning}
                      level={props.additionalInfo?.level}
                      noOrder
                    >
                      {props.flashcard?.vocab}
                    </TileStyled>
                    {
                      props.flashcard?.vocab !== props.flashcard?.reading ? (
                        <ReadingWrapper>{props.flashcard?.reading}</ReadingWrapper>
                      ) : null
                    }
                    <MeaningWrapper>{props.flashcard?.meaning}</MeaningWrapper>
                    <ButtonsWrapper>
                      <SeeMoreLink
                        to={
                          `/vocab/${props.flashcard?.moreLink}`
                        }
                        target="_blank"
                      >
                        {intl.formatMessage(defaultMessages.seeMoreText)}
                        <IconStyled size={1.7} path={mdiChevronRight} />
                      </SeeMoreLink>
                      <Button onClick={(event) => meaningCardClickHandler(event)}>
                        {intl.formatMessage(defaultMessages.next)}
                      </Button>
                    </ButtonsWrapper>
                  </MeaningCard>
                ) : null
              }
            </Box>
          </React.Fragment>
        ) : null
      }
    </Wrapper>
  );
};

Flashcards.propTypes = {
  getFlashcard: PropTypes.func.isRequired,
  setReveal: PropTypes.func.isRequired,
  additionalInfo: additionalInfoShape,
  apiError: PropTypes.bool,
  error: PropTypes.string,
  flashcard: flashcardShape,
  isRevealed: PropTypes.bool,
  loading: PropTypes.bool
};

Flashcards.defaultProps = {
  additionalInfo: null,
  apiError: false,
  error: null,
  flashcard: null,
  isRevealed: false,
  loading: false
};

export default Flashcards;
