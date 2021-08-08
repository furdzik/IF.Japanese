import React from 'react';
import PropTypes from 'prop-types';

import { sectionTypes } from '@config/constants';

import {
  Wrapper
} from './DetailsSection.styles.js';

const DetailsSection = (props) => (
  <Wrapper
    className={props.className}
    type={props.type}
    wide={props.wide}
  >
    {props.children}
  </Wrapper>
);

DetailsSection.propTypes = {
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

DetailsSection.defaultProps = {
  className: '',
  type: sectionTypes.OTHER,
  wide: false
};

export default DetailsSection;
