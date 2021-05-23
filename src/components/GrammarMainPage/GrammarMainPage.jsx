import React from 'react';
import PropTypes from 'prop-types';

import { grammarMenu } from '@config/constants';

import ColoredBoxList from '@components/ui/ColoredBoxList';

import {
  List,
  ListItem,
  LinkStyled
} from './GrammarMainPage.styles.js';

const GrammarMainPage = (props) => (
  <React.Fragment>
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
    {
      props.grammarList ? (
        <ColoredBoxList list={props.grammarList} />
      ) : null
    }
  </React.Fragment>
);

GrammarMainPage.propTypes = {
  grammarList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GrammarMainPage;
