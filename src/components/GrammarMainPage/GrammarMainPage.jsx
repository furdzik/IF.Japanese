import React from 'react';
import { useIntl } from 'react-intl';

import { grammarMenu, menuId } from '@config/constants';

import {
  List,
  ListItem,
  LinkStyled
} from './GrammarMainPage.styles.js';
import messages from './GrammarMainPage.messages';

const GrammarMainPage = () => {
  const intl = useIntl();

  return (
    <List>
      {
        grammarMenu.map((menuItem, index) => (
          <ListItem key={index}>
            <LinkStyled to={menuItem.link}>{menuItem.name}</LinkStyled>
          </ListItem>
        ))
      }
    </List>
  );
};

export default GrammarMainPage;
