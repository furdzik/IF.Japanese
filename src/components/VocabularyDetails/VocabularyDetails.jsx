import React from 'react';
import PropTypes from 'prop-types';

import { VocabularyDetailsWrapper } from './VocabularyDetails.styles.js';

const VocabularyDetails = (props) => (
  <VocabularyDetailsWrapper>
    {props.name}
  </VocabularyDetailsWrapper>
);

VocabularyDetails.propTypes = {
  name: PropTypes.string.isRequired
};

export default VocabularyDetails;
