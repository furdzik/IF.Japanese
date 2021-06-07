import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem
} from './Tile.styles.js';

const Tile = (props) => (
  <ListItem
    className={props.className}
    inProgress={props.inProgress}
    nowLearning={props.nowLearning}
    known={props.known}
    level={props.level}
    joyo={props.joyo}
    noOrder={props.noOrder}
  >
    {props.children}
  </ListItem>
);

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  inProgress: PropTypes.bool.isRequired,
  known: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired,
  className: PropTypes.string,
  joyo: PropTypes.bool,
  noOrder: PropTypes.bool,
  nowLearning: PropTypes.bool
};

Tile.defaultProps = {
  className: '',
  joyo: null,
  noOrder: false,
  nowLearning: false
};

export default Tile;
