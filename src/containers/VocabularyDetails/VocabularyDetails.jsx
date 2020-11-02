import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      inProgress={props.inProgress}
      pitch={props.pitch}
      level={props.level}
      verb={props.verb}
      japanese={props.japanese}
    />
  ) : <Loader covered />;
};

VocabularyDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  getVocabularyDetailsData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  senses: PropTypes.arrayOf(PropTypes.object).isRequired,
  reading: PropTypes.string,
  jlpt: PropTypes.arrayOf(PropTypes.string),
  isCommon: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  pitch: PropTypes.string,
  verb: PropTypes.object,
  japanese: PropTypes.arrayOf(PropTypes.object)
};

VocabularyDetails.defaultProps = {
  jlpt: [],
  isCommon: null,
  tags: [],
  reading: '',
  know: false,
  inProgress: false,
  pitch: '',
  verb: {},
  japanese: []
};

const mapDispatchToProps = {
  getVocabularyDetailsData
};

export default connect(selector, mapDispatchToProps)(VocabularyDetails);
