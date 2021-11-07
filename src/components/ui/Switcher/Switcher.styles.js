import styled from '@emotion/styled';
import { css } from '@emotion/react';

const SwitcherWrapper = styled.div`
  position: relative;
  width: 3.4rem;
  height: 1.4rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.darkGray};
  transition: all .3s ease-in;
  cursor: pointer;
  &::before {
    position: absolute;
    top: -.3rem;
    left: 0;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.mainColors.secondary};
    box-shadow: 0 1px 4px 0 rgba(0 0 0 / .2);
    transition: all .3s ease-in;
    content: '';
  }
  ${(props) => props.checked && css`
    background-color: ${props.theme.mainColors.tartary};
    &::before {
      right: 0;
      left: auto;
      background: ${props.theme.mainColors.primary};
    }
  `};
  ${(props) => props.disabled && css`
    background-color: ${props.theme.mainColors.primary};
    &::before {
      right: 0;
      left: auto;
      background: ${props.theme.mainColors.primary};
    }
  `};
`;

export {
  SwitcherWrapper
};
