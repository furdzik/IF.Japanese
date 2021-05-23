import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { mdiChevronRight } from '@mdi/js';

import { flashcardShape, additionalInfoShape } from '@types/flashcardShape';

import defaultMessages from '@utils/default.messages';

import Button from '@components/ui/Button';

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
  SeeMoreLink,
  IconStyled
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

  return (
    <Wrapper>
      <Title>{intl.formatMessage(messages.title)}</Title>
      <Box>
        {
          isVocabCardVisible ? (
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
          isReadingCardVisible ? (
            <MeaningCard>
              <TileStyled
                known={props.additionalInfo?.known}
                inProgress={props.additionalInfo?.inProgress}
                nowLearning={props.additionalInfo?.inProgress}
                level={props.additionalInfo?.level}
                noOrder
              >
                {props.flashcard?.vocab}
              </TileStyled>
              <ReadingWrapper>{props.flashcard?.reading}</ReadingWrapper>
              {
                props.flashcard?.vocab !== props.flashcard?.reading ? (
                  <MeaningWrapper>{props.flashcard?.meaning}</MeaningWrapper>
                ) : null
              }
              <SeeMoreLink
                to={
                  `/vocab/${props.flashcard?.vocab}`
                }
              >
                {intl.formatMessage(defaultMessages.seeMoreText)}
                <IconStyled size={1.7} path={mdiChevronRight} />
              </SeeMoreLink>
              <Button onClick={(event) => meaningCardClickHandler(event)}>
                {intl.formatMessage(defaultMessages.next)}
              </Button>
            </MeaningCard>
          ) : null
        }
      </Box>
    </Wrapper>
  );
};

Flashcards.propTypes = {
  getFlashcard: PropTypes.func.isRequired,
  additionalInfo: additionalInfoShape,
  flashcard: flashcardShape,
  loading: PropTypes.bool
};

Flashcards.defaultProps = {
  additionalInfo: null,
  flashcard: null,
  loading: false
};

export default Flashcards;
