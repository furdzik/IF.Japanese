import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { simpleExamplesShape, vocabExamplesShape } from '@types/vocabExamplesShape';

import Loader from '@components/ui/Loader';
import VocabExamplesComponent from '@components/VocabExamples';

import selector from './VocabExamples.selector';
import { getVocabExamples } from './VocabExamples.reducer';

const VocabExamples = (props) => {
  useEffect(() => {
    props.getVocabExamples(props.examples);
  }, [props.examples]);

  return !props.loading ? (
    <VocabExamplesComponent
      getVocabExamples={props.getVocabExamples}
      examples={props.examples}
      vocabExamples={props.vocabExamples}
      showLoadMoreButton={props.vocabExamples.length < props.examples.length}
    />
  ) : <Loader center={false} static />;
};

VocabExamples.propTypes = {
  getVocabExamples: PropTypes.func.isRequired,
  examples: simpleExamplesShape,
  loading: PropTypes.bool,
  vocabExamples: vocabExamplesShape
};

VocabExamples.defaultProps = {
  examples: null,
  loading: false,
  vocabExamples: null
};

const mapDispatchToProps = {
  getVocabExamples
};

export default connect(selector, mapDispatchToProps)(VocabExamples);
