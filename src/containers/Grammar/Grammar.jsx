import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { GRAMMAR_HAS_TO_REPEAT_FILTER } from '@constants';

import { grammarShape } from '@types/grammar';
import { filtersLengthShape, selectedFiltersShape } from '@types/filters';

import { getFilterLabels, secondaryFilterLabels } from '@utils/filters';

import Filters from '@components/Filters';
import GrammarList from '@components/GrammarList';
import Legend from '@components/Legend';
import Loader from '@components/Loader';
import ProgressBar from '@components/ProgressBar';

import { getGrammar, changeFilters } from './Grammar.reducer';
import selector from './Grammar.selector';

const Grammar = (props) => {
  useEffect(() => {
    props.getGrammar();
  }, [props.selectedFilters]);

  return !props.loading ? (
    <React.Fragment>
      <Filters
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={getFilterLabels(GRAMMAR_HAS_TO_REPEAT_FILTER)}
        secondaryFilterList={secondaryFilterLabels}
      />
      <Legend length={props.grammarLength} hasToRepeat={GRAMMAR_HAS_TO_REPEAT_FILTER} />
      <ProgressBar length={props.grammarLength} />
      <GrammarList grammar={props.grammar} />
    </React.Fragment>
  ) : <Loader />;
};

Grammar.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  getGrammar: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedFilters: selectedFiltersShape.isRequired,
  grammar: grammarShape,
  grammarLength: filtersLengthShape
};

Grammar.defaultProps = {
  grammar: null,
  grammarLength: null
};

const mapDispatchToProps = {
  changeFilters,
  getGrammar
};

export default connect(selector, mapDispatchToProps)(Grammar);
