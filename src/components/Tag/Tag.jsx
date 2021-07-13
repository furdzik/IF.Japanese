import React from 'react';
import PropTypes from 'prop-types';

import { tagTypes } from '@config/constants';

import { tagTypeShape } from '@types/commonDetailsShape';

import {
  Wrapper
} from './Tag.styles.js';

const Tag = (props) => (
  <Wrapper tagType={props.tagType}>
    {props.children}
  </Wrapper>
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  tagType: tagTypeShape
};

Tag.defaultProps = {
  tagType: tagTypes.OTHER
};

export default Tag;
