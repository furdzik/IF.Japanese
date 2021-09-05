import styled, { css } from 'styled-components';

import Icon from '@mdi/react';

import { DETAILS_HEADER_ICON_TYPES } from '@config/constants';

import { breakpointMixin } from '@styles/mixins';

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.typography.fontSize.headingBig};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};

  ${breakpointMixin.landscapeTablet`
    font-size: ${(props) => props.theme.typography.fontSize.desktop.headingBig};
  `}
`;

const StyledIcon = styled(Icon)`
  width: 4.7rem;
  margin-right: 2rem;
  padding: 1.3rem;
  border-radius: 50%;
  flex-shrink: 0;

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
  StyledIcon
};
