import React from 'react';
import PropTypes from 'prop-types';

import {
  Title
} from './DetailsHeader.styles.js';

const DetailsHeader = (props) => (
  <Title className={props.className}>{props.children}</Title>
);

DetailsHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

DetailsHeader.defaultProps = {
  className: ''
};

export default DetailsHeader;
