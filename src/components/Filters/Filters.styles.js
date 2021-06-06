import styled, { css } from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`
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

const FiltersBox = styled.div`
  margin-bottom: 1.5rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};

  & + & {
    margin-top: 1rem;
  }

  ${breakpointMixin.laptop`
    display: flex;
    align-items: center;
    min-height: 6.4rem;
    margin-bottom: 0;
    padding: 0 1rem;
  `}

  ${(props) => props.primary && css`
    width: 100%;
    background: none;

    ${breakpointMixin.laptop`
      width: 44%;
      background: ${props.theme.colors.secondaryColor};
    `}
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

const FiltersGroup = styled.div`
  margin-left: auto;

  ${breakpointMixin.laptop`
    width: 50%;
  `}
`;

export {
  Wrapper,
  FiltersBox,
  FiltersGroup
};
