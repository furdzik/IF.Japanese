import styled, { css } from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const Header = styled.div`
  display: block;
  margin-bottom: 2rem;

  @media print {
    display: block;
    justify-content: left;
  }

  ${breakpointMixin.laptop`
    display: flex;
    align-items: center;
  `}
`;

const Legend = styled.div`
  margin-left: auto;
  padding: .5rem 1rem .3rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.secondaryColor};

  ${breakpointMixin.phablet`
    display: inline-block;
    width: 30rem;
  `}

  @media print {
    display: flex;
    padding: 0;
    background: none;
  }
`;

const LegendElement = styled.span`
  display: flex;
  justify-content: space-between;

  @media print {
    margin-left: auto;
  }
`;

const FiltersWrapper = styled.div`
  border-radius: ${(props) => props.theme.layout.borderRadius};
  margin-bottom: 1.5rem;

  ${breakpointMixin.laptop`
    min-width: 41rem;
    min-height: 6.2rem;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  `}

  ${(props) => !props.secondary && !props.additional && css`
    background: ${props.theme.colors.secondaryColor};
    margin-right: auto;
  `}

  ${(props) => props.additional && css`
    margin-top: 1rem;
  `}

  ${(props) => props.noHeight && css`
    ${breakpointMixin.laptop`
      min-height: auto;
    `}
  `}

  @media print {
    justify-content: left;
    min-height: auto;
    margin-bottom: 1rem;

    ${(props) => !props.secondary && css`
      background: none;
    `}
  }
`;

export {
  Header,
  Legend,
  LegendElement,
  FiltersWrapper
};
