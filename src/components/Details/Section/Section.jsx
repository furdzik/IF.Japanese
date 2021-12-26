import React from 'react';
import PropTypes from 'prop-types';

import { SECTION_TYPES } from '@constants';

import {
  Wrapper
} from './Section.styles.js';

const Section = (props) => (
  <Wrapper
    className={props.className}
    type={props.type}
    wide={props.wide}
  >
    {props.children}
  </Wrapper>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    SECTION_TYPES.primary,
    SECTION_TYPES.secondary,
    SECTION_TYPES.name,
    SECTION_TYPES.other
  ]),
  wide: PropTypes.bool
};

Section.defaultProps = {
  className: '',
  type: SECTION_TYPES.other,
  wide: false
};

export default Section;
