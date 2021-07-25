import React from 'react';
import PropTypes from 'prop-types';

import {
  Title
} from './DetailsSubHeader.styles.js';

const DetailsSubHeader = (props) => (
  <Title className={props.className}>{props.children}</Title>
);

DetailsSubHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

DetailsSubHeader.defaultProps = {
  className: ''
};

export default DetailsSubHeader;
