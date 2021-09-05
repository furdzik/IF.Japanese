import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { statusShape, tagsShape, problemsShape } from '@types/commonDetailsShape';
import {
  examplesShape,
  shortExplanationShape,
  similarGrammarDetailsShape
} from '@types/grammarShape';

import Loader from '@components/ui/Loader';

import GrammarDetailsComponent from '@components/GrammarDetails';

import selector from './GrammarDetails.selector';
import { getGrammarDetails } from './GrammarDetails.reducer';

const GrammarDetails = (props) => {
  useEffect(() => {
    props.getGrammarDetails(props.grammarId);
  }, [props.grammarId]);

  return !props.loading ? (
    <GrammarDetailsComponent
      grammarId={props.grammarId}
      grammarName={props.grammarName}
      status={props.status}
      examples={props.examples}
      shortExplanation={props.shortExplanation}
      problems={props.problems}
      similarGrammar={props.similarGrammar}
      tags={props.tags}
      wide={props.wide}
    />
  ) : <Loader covered />;
};

GrammarDetails.propTypes = {
  getGrammarDetails: PropTypes.func.isRequired,
  grammarId: PropTypes.string.isRequired,
  grammarName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  status: statusShape.isRequired,
  examples: examplesShape,
  problems: problemsShape,
  shortExplanation: shortExplanationShape,
  similarGrammar: similarGrammarDetailsShape,
  tags: tagsShape,
  wide: PropTypes.bool
};

GrammarDetails.defaultProps = {
  examples: [],
  problems: [],
  shortExplanation: null,
  similarGrammar: [],
  tags: [],
  wide: false
};

const mapDispatchToProps = {
  getGrammarDetails
};

export default connect(selector, mapDispatchToProps)(GrammarDetails);
