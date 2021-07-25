import styled, { css } from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const ListItem = styled.div`
  position: relative;
  order: 3;
  margin: .8rem;
  padding: .6rem 1rem .4rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.mainCategoriesStyle.notKnown};
  font-size: 2rem;

  ${breakpointMixin.laptop`
    margin: 1rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  `};

  @media print {
    && {
      display: inline-block;
      min-width: 4rem;
      height: 3.5rem;
      margin: .5rem .5rem;
      padding: .5rem .5rem;
      line-height: 1.2;
      text-align: center;
      page-break-inside: avoid;
      &::before {
        display: none;
      }
    }
  }

  ${(props) => props.joyo === false && css`
    border: 1px solid #a0a0a0;
  `};

  ${(props) => props.known && css`
    background: ${props.theme.mainCategoriesStyle.known};
    color: ${props.theme.colors.white};
    order: 0;
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: -1px 1px 8px #750101;
    }

    ${props.joyo === false && css`
      border: 1px solid #750101;
    `}
  `};

  ${(props) => props.inProgress && css`
    background: ${props.theme.mainCategoriesStyle.inProgress};
    color: ${props.theme.colors.white};
    text-shadow: -1px 1px 8px #750101;
    order: 2;
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: -1px 1px 8px #750101;
    }

    ${props.joyo === false && css`
      border: 1px solid #f65e5e;
    `};

    @media print {
      background: #fba5a5;
      color: ${props.theme.colors.black};
      text-shadow: none;
    }
  `};

  ${(props) => props.nowLearning && css`
    background: ${props.theme.mainCategoriesStyle.nowLearning.background};
    border: ${props.theme.mainCategoriesStyle.nowLearning.border};
    padding: .4rem .8rem .2rem;
    color: ${props.theme.colors.white};
    order: 1;

    ${breakpointMixin.laptop`
      margin: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
    `}

    &::before {
      color: ${props.theme.colors.white};
    }
  `};

  ${(props) => ((props.inProgress && props.known) || (props.inProgress && props.nowLearning) || (props.known && props.nowLearning)) && css`
    background: ${props.theme.colors.black};
    color: ${props.theme.colors.white};
    order: 5 !important;
    &::before {
      color: ${props.theme.colors.white};
    }
  `};

  ${(props) => props.level && props.level !== 0 && css`
    &::before {
      position: absolute;
      top: 0;
      right: .3rem;
      color: inherit;
      font-family: Arial, Calibri, Helvetica, sans-serif;
      font-size: 1rem;
      content: '${props.level}';
    }
  `};

  ${(props) => props.noOrder && css`
    order: initial !important;
  `};
`;

export {
  ListItem
};
