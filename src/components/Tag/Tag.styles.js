import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { TAG_TYPES } from '@constants';

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

  ${(props) => props.tagType === TAG_TYPES.isVerb && css`
    background: ${props.theme.mainColors.primary};
    color: ${props.theme.colors.white};
  `};
  ${(props) => (props.tagType === TAG_TYPES.isCommon || props.tagType === TAG_TYPES.joyo) && css`
    background: ${props.theme.colors.lightGreen};
    color: ${props.theme.colors.white};
  `};
  ${(props) => (props.tagType === TAG_TYPES.jinmeiyo) && css`
    background: ${props.theme.colors.blue};
    color: ${props.theme.colors.white};
  `};
  ${(props) => props.tagType === TAG_TYPES.jlpt && css`
    background: ${props.theme.colors.lightViolet};
    color: ${props.theme.colors.white};
  `};
  ${(props) => props.tagType === TAG_TYPES.levelGroup && css`
    background: ${props.theme.colors.blue};
    color: ${props.theme.colors.white};
  `};
  ${(props) => props.tagType === TAG_TYPES.grammarOrigin && css`
    background: ${props.theme.colors.lightBlue};
    color: ${props.theme.colors.white};
  `};
  ${(props) => props.tagType === TAG_TYPES.counter && css`
    background: ${props.theme.colors.neoDarkPink};
    color: ${props.theme.colors.white};
  `};

  ${breakpointMixin.landscapePhone(css`
    margin-right: 2rem;
    margin-bottom: 2rem;
  `)};

  ${(props) => props.small && css`
    margin-right: .5rem;
    margin-bottom: .5rem;
    padding: 0 .5rem;
    font-size: 1.2rem;

    ${breakpointMixin.landscapePhone(css`
      margin-right: .5rem;
      margin-bottom: .5rem;
    `)};
  `}
`;

export {
  Wrapper
};
