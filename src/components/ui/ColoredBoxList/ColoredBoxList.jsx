import React from 'react';
import PropTypes from 'prop-types';

import {
  BoxList,
  BoxItem,
  LinkStyled
} from './ColoredBoxList.styles';

const ColoredBoxList = (props) => (
  <BoxList>
    {
      props.list.map((menuItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <BoxItem key={index}>
          <LinkStyled to={menuItem.link}>{menuItem.name}</LinkStyled>
        </BoxItem>
      ))
    }
  </BoxList>
);

ColoredBoxList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ColoredBoxList;
