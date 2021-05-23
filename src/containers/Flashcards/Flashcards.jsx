import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { flashcardShape, additionalInfoShape } from '@types/flashcardShape';

import FlashcardsComponent from '@components/Flashcards';

import { getFlashcardFn } from './Flashcards.reducer';

import selector from './Flashcards.selector';

const Flashcards = (props) => {
  useEffect(() => {
    props.getFlashcard();
  }, []);

  return (
    <FlashcardsComponent
      flashcard={props.flashcard}
      getFlashcard={props.getFlashcard}
      additionalInfo={props.additionalInfo}
      loading={props.loading}
    />
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

const mapDispatchToProps = {
  getFlashcard: getFlashcardFn
};

export default connect(selector, mapDispatchToProps)(Flashcards);
