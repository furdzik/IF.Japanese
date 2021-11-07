import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { breakpointMixin } from '@styles/mixins';

const Title = styled.h3`
  width: 100%;
  margin-bottom: .5rem;
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};

  ${(props) => props.bigger && css`
    margin-bottom: 1.5rem;
    font-size: ${props.theme.typography.fontSize.headingSmall};
  `};

  ${breakpointMixin.landscapeTablet`
    font-size: ${(props) => props.theme.typography.fontSize.desktop.medium};

    ${(props) => props.bigger && css`
      font-size: ${props.theme.typography.fontSize.desktop.headingSmall};
    `};
  `};
`;

export {
  Title
};
