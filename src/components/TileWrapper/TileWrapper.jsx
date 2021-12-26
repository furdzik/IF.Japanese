import React from 'react';
import PropTypes from 'prop-types';

import {
  List
} from './TileWrapper.styles.js';

const TileWrapper = (props) => (
  <List className={props.className}>
    {props.children}
  </List>
);

TileWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

TileWrapper.defaultProps = {
  className: ''
};

export default TileWrapper;
