import React from 'react';
import PropTypes from 'prop-types';

import { TAG_TYPES } from '@constants';

import { tagTypeShape } from '@types/commonDetails';

import {
  Wrapper
} from './Tag.styles.js';

const Tag = (props) => (
  <Wrapper small={props.small} tagType={props.tagType}>
    {props.children}
  </Wrapper>
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  tagType: tagTypeShape
};

Tag.defaultProps = {
  small: false,
  tagType: TAG_TYPES.other
};

export default Tag;
