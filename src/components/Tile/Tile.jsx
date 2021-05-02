import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from './Tile.styles.js';

const Tile = (props) => (
  <ListItem
    className={props.className}
    known={props.known}
    inProgress={props.inProgress}
    level={props.level}
    joyo={props.joyo}
  >
    {props.children}
  </ListItem>
);

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  known: PropTypes.bool.isRequired,
  inProgress: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired,
  className: PropTypes.string,
  joyo: PropTypes.bool
};

Tile.defaultProps = {
  className: '',
  joyo: false
};

export default Tile;
