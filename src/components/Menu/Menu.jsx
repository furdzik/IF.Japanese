import React from 'react';
import PropTypes from 'prop-types';

import { objectShape } from '@types/object';

import Tooltip from '@components/Tooltip';

import {
  MenuWrapper,
  MenuItem,
  LinkStyled
} from './Menu.styles.js';

const MENU_TOOLTIP_ID = 'menu';

const Menu = (props) => (
  <React.Fragment>
    <MenuWrapper>
      {
        props.list.map((el) => (
          <MenuItem key={el.id}>
            <LinkStyled
              active={props.active === el.id ? 1 : 0}
              to={`${el.link}`}
              data-tip={el.label}
              data-for={MENU_TOOLTIP_ID}
            >
              {el.name}
            </LinkStyled>
          </MenuItem>
        ))
      }
    </MenuWrapper>
    <Tooltip id={MENU_TOOLTIP_ID} />
  </React.Fragment>
);

Menu.propTypes = {
  active: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(objectShape).isRequired
};

export default Menu;
