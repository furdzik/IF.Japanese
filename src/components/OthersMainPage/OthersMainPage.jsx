import React from 'react';

import { othersMenu } from '@config/constants';

import {
  ColoredBoxList,
  ColoredBoxItem,
  LinkStyled
} from './OthersMainPage.styles';

const OthersMainPage = () => (
  <ColoredBoxList>
    {
      othersMenu.map((menuItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ColoredBoxItem key={index}>
          <LinkStyled to={menuItem.link}>{menuItem.name}</LinkStyled>
        </ColoredBoxItem>
      ))
    }
  </ColoredBoxList>
);

export default OthersMainPage;
