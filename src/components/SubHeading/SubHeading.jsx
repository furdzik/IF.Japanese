import React from 'react';
import PropTypes from 'prop-types';

import {
  Title
} from './SubHeading.styles.js';

const SubHeading = (props) => (
  <Title
    className={props.className}
    bigger={props.bigger}
  >
    {props.children}
  </Title>
);

SubHeading.propTypes = {
  children: PropTypes.node.isRequired,
  bigger: PropTypes.bool,
  className: PropTypes.string
};

SubHeading.defaultProps = {
  bigger: false,
  className: ''
};

export default SubHeading;
