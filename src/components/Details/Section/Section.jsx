import React from 'react';
import PropTypes from 'prop-types';

import { sectionTypes } from '@constants';

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
    sectionTypes.PRIMARY,
    sectionTypes.SECONDARY,
    sectionTypes.NAME,
    sectionTypes.OTHER
  ]),
  wide: PropTypes.bool
};

Section.defaultProps = {
  className: '',
  type: sectionTypes.OTHER,
  wide: false
};

export default Section;
