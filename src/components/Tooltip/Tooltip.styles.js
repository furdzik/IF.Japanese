import styled from '@emotion/styled';

import { Tooltip } from 'react-tooltip';

const StyledTooltip = styled(Tooltip)`
  &.react-tooltip { /* to override default styles */
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colors.darkGray};
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.white};
    opacity: 1;
    &.show {
      opacity: 1;
    }
    &.place-top {
      margin-top: -.5rem;
      &::after {
        border-color: ${(props) => props.theme.colors.darkGray} transparent;
      }
    }
    &.place-bottom {
      &::after {
        border-color: ${(props) => props.theme.colors.darkGray} transparent;
      }
    }
    &.place-left {
      &::after {
        border-color: transparent ${(props) => props.theme.colors.darkGray};
      }
    }
    &.place-right {
      &::after {
        border-color: transparent ${(props) => props.theme.colors.darkGray};
      }
    }
  }
`;

export {
  StyledTooltip
};
