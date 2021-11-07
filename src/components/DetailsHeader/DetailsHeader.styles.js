import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { DETAILS_HEADER_ICON_TYPES } from '@config/constants';

import { breakpointMixin } from '@styles/mixins';

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.typography.fontSize.headingBig};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};

  ${breakpointMixin.landscapeTablet(css`
    font-size: ${(props) => props.theme.typography.fontSize.desktop.headingBig};
  `)};

  ${(props) => props.small && css`
    font-size: ${props.theme.typography.fontSize.medium};

     ${breakpointMixin.landscapeTablet(css`
      font-size: ${props.theme.typography.fontSize.desktop.medium};
    `)};
  `};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-right: 2rem;
  padding: .7rem;
  border-radius: 50%;

  ${(props) => props.iconType === DETAILS_HEADER_ICON_TYPES.attention && css`
    background: ${props.theme.colors.yellow};
  `};
  ${(props) => props.iconType === DETAILS_HEADER_ICON_TYPES.problem && css`
    background: ${props.theme.colors.red};
    fill: ${props.theme.colors.white};
  `};
`;

export {
  Title,
  IconWrapper
};
