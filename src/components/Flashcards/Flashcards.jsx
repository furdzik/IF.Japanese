import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { mdiChevronRight } from '@mdi/js';

import { flashcardShape, additionalInfoShape } from '@types/flashcard';

import defaultMessages from '@lang/defaultMessages/default.messages';

import Button from '@components/ui/Button';
import ErrorMessageBox from '@components/ui/ErrorMessageBox';
import Switcher from '@components/ui/Switcher';

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
  SwitcherWrapper,
  SwitcherLabel
} from './Flashcards.styles.js';
import messages from './Flashcards.messages';

const Flashcards = (props) => {
  const intl = useIntl();

  const [isVocabCardVisible, setIsVocabCardVisible] = useState(true);
  const [isReadingCardVisible, setIsReadingCardVisible] = useState(false);

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
                        <VocabWrapper>{props.flashcard?.vocab}</VocabWrapper>
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
