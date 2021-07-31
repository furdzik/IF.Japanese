import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const StyledReactTooltip = styled(ReactTooltip)`
  &.__react_component_tooltip { /* to override default styles */
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colors.secondaryColorHover};
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.white};
    opacity: 1;
    &.show {
      opacity: 1;
    }
    &.place-top {
      margin-top: -.5rem;
      &::after {
        border-color: ${(props) => props.theme.colors.secondaryColorHover} transparent;
      }
    }
    &.place-bottom {
      &::after {
        border-color: ${(props) => props.theme.colors.secondaryColorHover} transparent;
      }
    }
  }
`;

export {
  StyledReactTooltip
};
