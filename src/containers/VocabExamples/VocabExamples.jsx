import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { simpleExamplesShape, vocabExamplesShape } from '@types/vocabExamples';

import Loader from '@components/ui/Loader';
import VocabExamplesComponent from '@components/VocabExamples';

import selector from './VocabExamples.selector';
import { getVocabExamples } from './VocabExamples.reducer';

const VocabExamples = (props) => {
  useEffect(() => {
    props.getVocabExamples(props.examples);
  }, []);

  return !props.loading ? (
    <VocabExamplesComponent
      getVocabExamples={props.getVocabExamples}
      apiError={props.apiError}
      examples={props.examples}
      vocabExamples={props.vocabExamples}
      showLoadMoreButton={props.showLoadMoreButton}
      showMoreLoading={props.showMoreLoading}
    />
  ) : <Loader center={false} static />;
};

VocabExamples.propTypes = {
  getVocabExamples: PropTypes.func.isRequired,
  apiError: PropTypes.bool,
  examples: simpleExamplesShape,
  loading: PropTypes.bool,
  showLoadMoreButton: PropTypes.bool,
  showMoreLoading: PropTypes.bool,
  vocabExamples: vocabExamplesShape
};

VocabExamples.defaultProps = {
  apiError: false,
  examples: null,
  loading: false,
  showLoadMoreButton: false,
  showMoreLoading: false,
  vocabExamples: null
};

const mapDispatchToProps = {
  getVocabExamples
};

export default connect(selector, mapDispatchToProps)(VocabExamples);
