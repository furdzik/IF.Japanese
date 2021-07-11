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

  ${(props) => props.tagType === tagTypes.IS_VERB && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
  `}
  ${(props) => (props.tagType === tagTypes.IS_COMMON || props.tagType === tagTypes.JOYO) && css`
    background: #64ad5b;
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.tagType === tagTypes.JLPT && css`
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
