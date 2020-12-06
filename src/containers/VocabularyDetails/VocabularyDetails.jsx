import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { objectShape } from '@utils/types/objectShape';

import VocabularyDetailsComponent from '@components/VocabularyDetails';

import Loader from '@components/ui/Loader';
import { getVocabularyDetailsData } from './VocabularyDetails.reducer';
import selector from './VocabularyDetails.selector';

const VocabularyDetails = (props) => {
  useEffect(() => {
    props.getVocabularyDetailsData(props.name);
  }, [props.name]);

  return !props.loading ? (
    <VocabularyDetailsComponent
      name={props.name}
      reading={props.reading}
      senses={props.senses}
      jlpt={props.jlpt}
      isCommon={props.isCommon}
      tags={props.tags}
      known={props.known}
      pitch={props.pitch}
      isVerb={props.verb && props.verb.main}
      additionalExplanation={props.additionalExplanation}
      examples={props.examples}
      inProgress={props.inProgress}
      japanese={props.japanese}
    />
  ) : <Loader covered />;
};

VocabularyDetails.propTypes = {
  getVocabularyDetailsData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  senses: PropTypes.arrayOf(PropTypes.object).isRequired,
  additionalExplanation: PropTypes.string,
  examples: PropTypes.arrayOf(PropTypes.string),
  inProgress: PropTypes.bool,
  isCommon: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  japanese: PropTypes.arrayOf(PropTypes.object),
  jlpt: PropTypes.arrayOf(PropTypes.string),
  known: PropTypes.bool,
  pitch: PropTypes.string,
  reading: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  verb: objectShape
};

VocabularyDetails.defaultProps = {
  additionalExplanation: '',
  jlpt: [],
  isCommon: null,
  examples: [],
  tags: [],
  reading: '',
  pitch: '',
  known: false,
  inProgress: false,
  japanese: [],
  verb: ''
};

const mapDispatchToProps = {
  getVocabularyDetailsData
};

export default connect(selector, mapDispatchToProps)(VocabularyDetails);
