import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Link } from 'react-router-dom';

import { GRAMMAR_LEVELS } from '@constants';

const List = styled.ul`
  display: flex;
  margin: 3rem 0;
  padding: 0 0 3rem;
  border-bottom: .2rem solid ${(props) => props.theme.colors.lightGray};
  list-style: none;
`;

const ListItem = styled.li`
  & + & {
    margin-left: 3rem;
  }
`;

const LinkStyled = styled(Link)`
  display: block;
  font-size: 2.7rem;

  &:hover {
    color: ${(props) => props.theme.mainColors.primary};
    transition: ${(props) => props.theme.layout.transition};
  }
`;

const GrammarBoxWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-right: -1rem;
  margin-left: -1rem;
`;

const GrammarBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 1rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.darkGray};
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  white-space: nowrap;

  ${(props) => props.level === GRAMMAR_LEVELS.level5 && css`
    background: ${props.theme.colors.blue};
  `};
  ${(props) => props.level === GRAMMAR_LEVELS.level4 && css`
    background: ${props.theme.colors.green};
  `};
  ${(props) => props.level === GRAMMAR_LEVELS.level3 && css`
    background: ${props.theme.colors.yellow};
  `};
  ${(props) => props.level === GRAMMAR_LEVELS.level2 && css`
    background: ${props.theme.colors.orange};
  `};
  ${(props) => props.level === GRAMMAR_LEVELS.level1 && css`
    background: ${props.theme.colors.violet};
  `};

  ${(props) => (props.known || props.inProgress || props.nowLearning || props.toRepeat) && css`
    &::after {
      content: '';
      position: absolute;
      top: .5rem;
      left: .5rem;
      width: 1.5rem;
      height: 1.5rem;
      border: .5px solid ${props.theme.colors.white};
      border-radius: 50%;
      ${props.known && css`
        background: ${props.theme.mainCategoriesStyle.known.background};
      `};
      ${props.inProgress && css`
        background: ${props.theme.mainCategoriesStyle.inProgress.background};
      `};
      ${props.nowLearning && css`
        background: ${props.theme.mainCategoriesStyle.nowLearning.background};
      `};
      ${props.toRepeat && css`
        background: ${props.theme.mainCategoriesStyle.toRepeat.background};
      `};
    }
  `};
  ${(props) => props.level && props.level !== 0 && css`
    &::before {
      content: '${props.level}';
      position: absolute;
      top: 0;
      right: .3rem;
      font-family: 'Arial', 'Calibri', 'Helvetica', sans-serif;
      font-size: 1rem;
      color: inherit;

    }
  `};
`;

const GrammarBoxLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  color: inherit;
`;

export {
  List,
  ListItem,
  LinkStyled,
  GrammarBoxWrapper,
  GrammarBox,
  GrammarBoxLink
};
