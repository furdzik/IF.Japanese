import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MenuWrapper, MenuItem } from './Menu.styles.js';

const Menu = (props) => (
  <MenuWrapper>
    {
      props.list.map((el) => (
        <MenuItem
          key={el.id}
          active={props.active === el.id ? 1 : 0}
        >
          <Link to={`${el.link}`}>
            {el.name}
          </Link>
        </MenuItem>
      ))
    }
  </MenuWrapper>
);

Menu.propTypes = {
  list: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired
};

export default Menu;
