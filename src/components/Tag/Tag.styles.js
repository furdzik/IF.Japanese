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
    background: ${props.theme.mainColors.primary};
    color: ${props.theme.colors.white};
  `}
  ${(props) => (props.tagType === tagTypes.IS_COMMON || props.tagType === tagTypes.JOYO) && css`
    background: ${props.theme.colors.lightGreen};
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.tagType === tagTypes.JLPT && css`
    background: ${props.theme.colors.lightViolet};
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.tagType === tagTypes.LEVEL_GROUP && css`
    background: ${props.theme.colors.blue};
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.tagType === tagTypes.GRAMMAR_ORIGIN && css`
    background: ${props.theme.colors.lightBlue};
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
