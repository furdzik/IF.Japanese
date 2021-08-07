import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { statusShape, tagsShape } from '@types/commonDetailsShape';
import { similarGrammarShape } from '@types/grammarShape';

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
      tags={props.tags}
      similarGrammar={props.similarGrammar}
    />
  ) : <Loader covered />;
};

GrammarDetails.propTypes = {
  getGrammarDetails: PropTypes.func.isRequired,
  grammarId: PropTypes.string.isRequired,
  grammarName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  status: statusShape.isRequired,
  similarGrammar: similarGrammarShape,
  tags: tagsShape
};

GrammarDetails.defaultProps = {
  similarGrammar: [],
  tags: []
};

const mapDispatchToProps = {
  getGrammarDetails
};

export default connect(selector, mapDispatchToProps)(GrammarDetails);
