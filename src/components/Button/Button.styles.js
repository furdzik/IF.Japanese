import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { BUTTONS_VARIANTS } from '@constants';

const ButtonWrapper = styled.button`
  padding: .5rem 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  border: .2rem solid;

  ${(props) => props.variant === BUTTONS_VARIANTS.primary && css`
    background: ${props.theme.mainColors.primary};
    border-color: ${props.theme.mainColors.primary};
    color: ${props.theme.colors.white};
  `};
  ${(props) => props.variant === BUTTONS_VARIANTS.secondary && css`
    background: ${props.theme.colors.white};
    border-color: ${props.theme.mainColors.primary};
    color: ${props.theme.mainColors.primary};
  `};
`;

export {
  ButtonWrapper
};
