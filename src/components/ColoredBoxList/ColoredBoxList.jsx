import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { objectShape } from '@types/object';

import Tooltip from '@components/Tooltip';

import {
  BoxList,
  BoxItem,
  LinkStyled
} from './ColoredBoxList.styles';

const COLORED_BOX_TOOLTIP_ID = 'colored_box';

const ColoredBoxList = (props) => (
  <React.Fragment>
    <BoxList>
      {
        props.list.map((menuItem) => (
          <BoxItem
            key={uuidv4()}
            data-tooltip-content={menuItem.label}
            data-tooltip-id={COLORED_BOX_TOOLTIP_ID}
          >
            <LinkStyled to={menuItem.link}>{menuItem.name}</LinkStyled>
          </BoxItem>
        ))
      }
    </BoxList>
    <Tooltip id={COLORED_BOX_TOOLTIP_ID} place="bottom" />
  </React.Fragment>
);

ColoredBoxList.propTypes = {
  list: PropTypes.arrayOf(objectShape).isRequired
};

export default ColoredBoxList;
