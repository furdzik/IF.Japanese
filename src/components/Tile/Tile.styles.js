import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { breakpointMixin } from '@styles/mixins';

const baseMobilePaddingTop = '.6rem';
const baseMobilePaddingLeftRight = '1rem';
const baseMobilePaddingBottom = '.4rem';

const basePaddingLeftRight = '1.2rem';

const ListItem = styled.div`
  position: relative;
  order: 3;
  margin: .8rem;
  padding: ${baseMobilePaddingTop} ${baseMobilePaddingLeftRight} ${baseMobilePaddingBottom};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.mainCategoriesStyle.notKnown.background};
  font-size: 2rem;

  ${breakpointMixin.laptop(css`
    margin: 1rem;
    padding-right: ${basePaddingLeftRight};
    padding-left: ${basePaddingLeftRight};
  `)};

  @media print {
    && {
      display: inline-block;
      min-width: 4rem;
      height: 3.5rem;
      margin: .5rem;
      padding: .5rem;
      line-height: 1.2;
      text-align: center;
      page-break-inside: avoid;
      &::before {
        display: none;
      }
    }
  }

  ${(props) => props.joyo === false && css`
    padding: calc(${baseMobilePaddingTop} - ${props.theme.mainCategoriesStyle.joyo.borderSize})
             calc(${baseMobilePaddingLeftRight} - ${props.theme.mainCategoriesStyle.joyo.borderSize})
             calc(${baseMobilePaddingBottom} - ${props.theme.mainCategoriesStyle.joyo.borderSize});
    border: ${props.theme.mainCategoriesStyle.joyo.border};

    ${breakpointMixin.laptop(css`
      padding-right: calc(${basePaddingLeftRight} - ${props.theme.mainCategoriesStyle.joyo.borderSize});
      padding-left: calc(${basePaddingLeftRight} - ${props.theme.mainCategoriesStyle.joyo.borderSize});
    `)};
  `};

  ${(props) => props.known && css`
    order: 0;
    background: ${props.theme.mainCategoriesStyle.known.background};
    color: ${props.theme.mainCategoriesStyle.known.color};
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: ${props.theme.mainCategoriesStyle.known.textShadow};
    }

    ${props.joyo === false && css`
      border-color: ${props.theme.colors.veryDarkPink};
    `}
  `};

  ${(props) => props.toRepeat && css`
    order: 2;
    background: ${props.theme.mainCategoriesStyle.toRepeat.background};
    color: ${props.theme.mainCategoriesStyle.toRepeat.color};
    text-shadow: ${props.theme.mainCategoriesStyle.toRepeat.textShadow};
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: ${props.theme.mainCategoriesStyle.toRepeat.textShadow};
    }

    ${props.joyo === false && css`
      border-color: #f65e5e;
    `};

    @media print {
      background: #f65e5e;
      color: ${props.theme.colors.white};
      text-shadow: none;
    }
  `};

  ${(props) => props.nowLearning && css`
    order: 1;
    padding: .4rem .8rem .2rem;
    border: ${props.theme.mainCategoriesStyle.nowLearning.border};
    background: ${props.theme.mainCategoriesStyle.nowLearning.background};
    color: ${props.theme.mainCategoriesStyle.nowLearning.color};
    text-shadow: ${props.theme.mainCategoriesStyle.inProgress.textShadow};

    &::before {
      color: ${props.theme.mainCategoriesStyle.nowLearning.color};
      text-shadow: ${props.theme.mainCategoriesStyle.inProgress.textShadow};
    }

    ${breakpointMixin.laptop(css`
      padding-right: 1rem;
      padding-left: 1rem;
    `)};

    ${props.joyo === false && css`
      border-color: #c73636;
    `};
  `};

  ${(props) => props.inProgress && css`
    order: 2;
    background: ${props.theme.mainCategoriesStyle.inProgress.background};
    color: ${props.theme.mainCategoriesStyle.inProgress.color};
    text-shadow: ${props.theme.mainCategoriesStyle.inProgress.textShadow};
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: ${props.theme.mainCategoriesStyle.inProgress.textShadow};
    }

    ${props.joyo === false && css`
      border-color: #f65e5e;
    `};

    @media print {
      background: #fba5a5;
      color: ${props.theme.colors.black};
      text-shadow: none;
    }
  `};

  ${(props) => ((props.inProgress && props.known) || (props.inProgress && props.toRepeat) || (props.inProgress && props.nowLearning) || (props.known && props.nowLearning)) && css`
    order: 5 !important;
    background: ${props.theme.colors.black};
    color: ${props.theme.colors.white};
    &::before {
      color: ${props.theme.colors.white};
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

  ${(props) => props.noOrder && css`
    order: initial !important;
  `};
`;

export {
  ListItem
};
