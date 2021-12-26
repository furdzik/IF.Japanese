import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { vocabShape } from '@types/vocab';
import { filtersLengthShape, selectedFiltersShape } from '@types/filters';

import { getFilterLabels, secondaryFilterLabels } from '@utils/filters';

import Filters from '@components/Filters';
import Legend from '@components/Legend';
import Loader from '@components/Loader';
import ProgressBar from '@components/ProgressBar';
import VocabularyList from '@components/VocabularyList';

import { changeFilters, getVocabulary } from './Vocabulary.reducer';
import selector from './Vocabulary.selector';

const Vocabulary = (props) => {
  useEffect(() => {
    props.getVocabulary();
  }, [props.selectedFilters]);

  return !props.loading ? (
    <React.Fragment>
      <Filters
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={getFilterLabels()}
        secondaryFilterList={secondaryFilterLabels}
      />
      <Legend length={props.vocabLength} />
      <ProgressBar length={props.vocabLength} />
      <VocabularyList vocab={props.vocab} />
    </React.Fragment>
  ) : <Loader />;
};

Vocabulary.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  getVocabulary: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedFilters: selectedFiltersShape.isRequired,
  vocabLength: filtersLengthShape.isRequired,
  vocab: vocabShape
};

Vocabulary.defaultProps = {
  vocab: null
};

const mapDispatchToProps = {
  changeFilters,
  getVocabulary
};

export default connect(selector, mapDispatchToProps)(Vocabulary);
