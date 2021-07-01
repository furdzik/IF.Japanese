import styled, { css } from 'styled-components';

const SwitcherWrapper = styled.div`
  position: relative;
  width: 3.4rem;
  height: 1.4rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondaryColorHover};
  transition: all .3s ease-in;
  cursor: pointer;
  &::before {
    display: inline-block;
    position: absolute;
    top: -.3rem;
    left: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.secondaryColor};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .2);
    transition: all .3s ease-in;
    content: '';
  }
  ${(props) => props.checked && css`
    background-color: ${props.theme.colors.tartaryColor};
    &::before {
      right: 0;
      left: auto;
      background: ${props.theme.colors.primaryColor};
    }
  `}
  ${(props) => props.disabled && css`
    background-color: ${props.theme.colors.primaryColor};
    &::before {
      right: 0;
      left: auto;
      background: ${props.theme.colors.primaryColor};
    }
  `}
`;

export {
  SwitcherWrapper
};
