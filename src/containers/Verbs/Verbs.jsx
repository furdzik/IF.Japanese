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
import VerbsList from '@components/VerbsList';

import { changeFilters, getVerbs } from './Verbs.reducer';
import selector from './Verbs.selector';

const Verbs = (props) => {
  useEffect(() => {
    props.getVerbs();
  }, [props.selectedFilters]);

  return !props.loading ? (
    <React.Fragment>
      <Filters
        length={props.verbsLength}
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={getFilterLabels()}
        secondaryFilterList={secondaryFilterLabels}
      />
      <Legend length={props.verbsLength} />
      <ProgressBar length={props.verbsLength} />
      <VerbsList verbs={props.verbs} />
    </React.Fragment>
  ) : <Loader static />;
};

Verbs.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  getVerbs: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedFilters: selectedFiltersShape.isRequired,
  verbsLength: filtersLengthShape.isRequired,
  verbs: vocabShape
};

Verbs.defaultProps = {
  verbs: []
};

const mapDispatchToProps = {
  changeFilters,
  getVerbs
};

export default connect(selector, mapDispatchToProps)(Verbs);
