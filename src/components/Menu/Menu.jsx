import React from 'react';
import PropTypes from 'prop-types';

import {
  MenuWrapper,
  MenuItem,
  LinkStyled
} from './Menu.styles.js';

const Menu = (props) => (
  <MenuWrapper>
    {
      props.list.map((el) => (
        <MenuItem key={el.id}>
          <LinkStyled
            active={props.active === el.id ? 1 : 0}
            to={`${el.link}`}
            data-tip={el.label}
          >
            {el.name}
          </LinkStyled>
        </MenuItem>
      ))
    }
  </MenuWrapper>
);

Menu.propTypes = {
  active: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Menu;
