import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper
} from './PartOfSpeechBox.styles.js';

const PartOfSpeechBox = (props) => (
  <Wrapper small={props.small}>
    {props.children}
  </Wrapper>
);

PartOfSpeechBox.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool
};

PartOfSpeechBox.defaultProps = {
  small: false
};

export default PartOfSpeechBox;
