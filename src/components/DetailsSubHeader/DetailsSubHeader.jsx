import React from 'react';
import PropTypes from 'prop-types';

import {
  Title
} from './DetailsSubHeader.styles.js';

const DetailsSubHeader = (props) => (
  <Title
    className={props.className}
    bigger={props.bigger}
  >
    {props.children}
  </Title>
);

DetailsSubHeader.propTypes = {
  children: PropTypes.node.isRequired,
  bigger: PropTypes.bool,
  className: PropTypes.string
};

DetailsSubHeader.defaultProps = {
  bigger: false,
  className: ''
};

export default DetailsSubHeader;
