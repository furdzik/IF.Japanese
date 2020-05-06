import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '@components/Container';

import VocabularyDetailsComponent from '@components/VocabularyDetails';

import { getVocabularyDetailsData } from './VocabularyDetails.reducer';
import selector from './VocabularyDetails.selector';

const VocabularyDetails = (props) => {
  useEffect(() => {
    props.getVocabularyDetailsData(props.name);
  }, [props.name]);
  console.log('aaa');
  return props.name ? (
    <Container>
      <VocabularyDetailsComponent
        name={props.name}
      />
    </Container>
  ) : null;
};

VocabularyDetails.propTypes = {
  getVocabularyDetailsData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

const mapDispatchToProps = {
  getVocabularyDetailsData
};

export default connect(selector, mapDispatchToProps)(VocabularyDetails);
