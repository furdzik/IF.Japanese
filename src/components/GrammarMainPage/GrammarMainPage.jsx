import React from 'react';

import { grammarMenu } from '@config/constants';

import {
  List,
  ListItem,
  LinkStyled
} from './GrammarMainPage.styles.js';

const GrammarMainPage = () => (
  <List>
    {
      grammarMenu.map((menuItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListItem key={index}>
          <LinkStyled to={menuItem.link}>{menuItem.name}</LinkStyled>
        </ListItem>
      ))
    }
  </List>
);

export default GrammarMainPage;
