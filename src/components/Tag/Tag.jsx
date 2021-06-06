import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper
} from './Tag.styles.js';

const Tag = (props) => (
  <Wrapper
    isCommon={props.isCommon}
    isJlpt={props.isJlpt}
    isVerb={props.isVerb}
  >
    {props.children}
  </Wrapper>
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  isCommon: PropTypes.bool,
  isJlpt: PropTypes.bool,
  isVerb: PropTypes.bool
};

Tag.defaultProps = {
  isCommon: false,
  isJlpt: false,
  isVerb: false
};

export default Tag;
