import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  additionalExplanationShape,
  statusShape,
  tagsShape,
  problemsShape
} from '@types/commonDetailsShape';
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
  const params = useParams();

  useEffect(() => {
    props.getGrammarDetails(params.grammarId);
  }, [params.grammarId]);

  return !props.loading ? (
    <GrammarDetailsComponent
      grammarId={params.grammarId}
      grammarName={props.grammarName}
      status={props.status}
      additionalExplanation={props.additionalExplanation}
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
  grammarName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  status: statusShape.isRequired,
  additionalExplanation: additionalExplanationShape,
  examples: examplesShape,
  problems: problemsShape,
  shortExplanation: shortExplanationShape,
  similarGrammar: similarGrammarDetailsShape,
  tags: tagsShape,
  wide: PropTypes.bool
};

GrammarDetails.defaultProps = {
  additionalExplanation: null,
  examples: null,
  problems: null,
  shortExplanation: null,
  similarGrammar: null,
  tags: null,
  wide: false
};

const mapDispatchToProps = {
  getGrammarDetails
};

export default connect(selector, mapDispatchToProps)(GrammarDetails);
