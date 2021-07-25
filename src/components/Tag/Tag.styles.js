import styled, { css } from 'styled-components';

import { tagTypes } from '@config/constants';

import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: .3rem 1rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  text-transform: uppercase;

  ${(props) => props.tagType === tagTypes.IS_VERB && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
  `}
  ${(props) => (props.tagType === tagTypes.IS_COMMON || props.tagType === tagTypes.JOYO) && css`
    background: #15bb00;
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.tagType === tagTypes.JLPT && css`
    background: #8350c7;
    color: ${props.theme.colors.white};
  `}

  ${breakpointMixin.landscapePhone`
    margin-right: 2rem;
    margin-bottom: 2rem;
  `}

  ${(props) => props.small && css`
    margin-right: .5rem;
    margin-bottom: .5rem;
    padding: 0 .5rem;
    font-size: 1.2rem;

    ${breakpointMixin.landscapePhone`
      margin-right: .5rem;
      margin-bottom: .5rem;
    `}
  `}
`;

export {
  Wrapper
};
