import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterLabels, secondaryFilterLabels } from '@utils/filters';

import { vocabShape } from '@types/vocabShape';
import { filtersLengthShape } from '@types/filtersLengthShape';

import Filters from '@components/Filters';
import VerbsList from '@components/VerbsList';
import ProgressBar from '@components/ProgressBar';

import { getVerbs, changeFilters } from './Verbs.reducer';

import selector from './Verbs.selector';

const Verbs = (props) => {
  useEffect(() => {
    props.getVerbs();
  }, [props.selectedFilters]);

  return props.verbs ? (
    <React.Fragment>
      <Filters
        length={props.verbsLength}
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={filterLabels}
        secondaryFilterList={secondaryFilterLabels}
      />
      <ProgressBar
        length={props.verbsLength}
      />
      <VerbsList
        verbs={props.verbs}
      />
    </React.Fragment>
  ) : null;
};

Verbs.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  getVerbs: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.number).isRequired,
  verbsLength: filtersLengthShape.isRequired,
  verbs: vocabShape
};

Verbs.defaultProps = {
  verbs: null
};

const mapDispatchToProps = {
  changeFilters,
  getVerbs
};

export default connect(selector, mapDispatchToProps)(Verbs);
