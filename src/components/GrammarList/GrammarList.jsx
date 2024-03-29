import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { GRAMMAR_MENU } from '@constants';

import { grammarShape } from '@types/grammar';

import Tooltip from '@components/Tooltip';

import {
  List,
  ListItem,
  LinkStyled,
  GrammarBoxWrapper,
  GrammarBox,
  GrammarBoxLink
} from './GrammarList.styles.js';

const GRAMMAR_TOOLTIP_ID = 'grammar';

const GrammarList = (props) => (
  <React.Fragment>
    <List>
      {
        GRAMMAR_MENU.map((menuItem) => (
          <ListItem
            key={uuidv4()}
            data-tooltip-content={menuItem.label}
            data-tooltip-id={GRAMMAR_TOOLTIP_ID}
          >
            <LinkStyled to={menuItem.link}>{menuItem.name}</LinkStyled>
          </ListItem>
        ))
      }
    </List>
    {
      props.grammar ? (
        <GrammarBoxWrapper>
          {
            props.grammar.map((grammar) => (
              <GrammarBox
                key={grammar.grammarId}
                grammarName={grammar.grammarName}
                grammarId={grammar.grammarId}
                level={grammar.level}
                known={grammar.known}
                inProgress={grammar.inProgress}
                nowLearning={grammar.nowLearning}
                toRepeat={grammar.toRepeat}
              >
                <GrammarBoxLink to={`/grammar/${grammar.grammarId}`}>
                  {grammar.grammarName}
                </GrammarBoxLink>
              </GrammarBox>
            ))
          }
        </GrammarBoxWrapper>
      ) : null
    }
    <Tooltip id={GRAMMAR_TOOLTIP_ID} />
  </React.Fragment>
);

GrammarList.propTypes = {
  grammar: grammarShape.isRequired
};

export default GrammarList;
