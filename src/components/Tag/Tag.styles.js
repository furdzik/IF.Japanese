import styled, { css } from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`
  display: inline-block;
  padding: .3rem 1rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  margin-bottom: 1rem;
  margin-right: 1rem;

  ${(props) => props.isVerb && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.isCommon && css`
    background: #64ad5b;
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.isJlpt && css`
    background: #7d88a7;
    color: ${props.theme.colors.white};
  `}

  ${breakpointMixin.landscapePhone`
    margin-right: 2rem;
    margin-bottom: 2rem;

  `}
`;

export {
  Wrapper
};
