import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterLabels, secondaryFilterLabels } from '@utils/filters';

import { flashcardShape, additionalInfoShape } from '@types/flashcardShape';
import { filtersLengthShape, selectedFiltersShape } from '@types/filtersShape';

import Filters from '@components/Filters';
import Legend from '@components/Legend';
import ProgressBar from '@components/ProgressBar';
import FlashcardsComponent from '@components/Flashcards';

import { getFlashcardFn, changeFilters } from './Flashcards.reducer';

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
        filterList={filterLabels}
        secondaryFilterList={secondaryFilterLabels}
      />
      <Legend length={props.flashcardLength} />
      <ProgressBar length={props.flashcardLength} />
      <FlashcardsComponent
        flashcard={props.flashcard}
        getFlashcard={props.getFlashcard}
        additionalInfo={props.additionalInfo}
        loading={props.loading}
      />
    </React.Fragment>
  );
};

Flashcards.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  flashcardLength: filtersLengthShape.isRequired,
  getFlashcard: PropTypes.func.isRequired,
  selectedFilters: selectedFiltersShape.isRequired,
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
  getFlashcard: getFlashcardFn,
  changeFilters
};

export default connect(selector, mapDispatchToProps)(Flashcards);
