import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getFilterLabels, secondaryFilterLabels } from '@utils/filters';

import { flashcardShape, additionalInfoShape } from '@types/flashcard';
import { filtersLengthShape, selectedFiltersShape } from '@types/filters';

import Filters from '@components/Filters';
import Legend from '@components/Legend';
import ProgressBar from '@components/ProgressBar';
import FlashcardsComponent from '@components/Flashcards';

import { getFlashcard, changeFilters, setReveal } from './Flashcards.reducer';

import selector from './Flashcards.selector';

const Flashcards = (props) => {
  useEffect(() => {
    props.getFlashcard();
  }, []);

  return (
    <React.Fragment>
      <Filters
        length={props.flashcardLength}
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={getFilterLabels()}
        secondaryFilterList={secondaryFilterLabels}
      />
      <Legend length={props.flashcardLength} />
      <ProgressBar length={props.flashcardLength} />
      <FlashcardsComponent
        flashcard={props.flashcard}
        getFlashcard={props.getFlashcard}
        additionalInfo={props.additionalInfo}
        apiError={props.apiError}
        loading={props.loading}
        error={props.error}
        isRevealed={props.isRevealed}
        setReveal={props.setReveal}
      />
    </React.Fragment>
  );
};

Flashcards.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  flashcardLength: filtersLengthShape.isRequired,
  getFlashcard: PropTypes.func.isRequired,
  selectedFilters: selectedFiltersShape.isRequired,
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

const mapDispatchToProps = {
  getFlashcard,
  changeFilters,
  setReveal
};

export default connect(selector, mapDispatchToProps)(Flashcards);
