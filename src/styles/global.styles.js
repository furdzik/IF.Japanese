import { createGlobalStyle } from 'styled-components';
import _map from 'lodash/map';

import { typography } from './typography';

const baseFontFamily = _map(typography.fontFamily, (el) => `${el}`).join(', ');

const GlobalStyles = createGlobalStyle`
  html {
    background: ${(props) => props.theme.colors.lightGray};
    font-size: ${(props) => props.theme.typography.fontSize.base};

    @media print {
      background: none;
    }
  }
  body {
    box-sizing: border-box;
    overflow: hidden scroll;
    background: ${(props) => props.theme.colors.white};
    font-family: ${baseFontFamily};
    font-size: ${(props) => props.theme.typography.fontSize.normal};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    line-height: ${(props) => props.theme.typography.lineHeight.normal};
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  input {
    padding: 0;
    border-radius: 0;
    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      pointer-events: none;
    }
    &::-webkit-contacts-auto-fill-button {
      display: none;
      position: absolute;
      right: 0;
      visibility: hidden;
      pointer-events: none;
    }
    &::-webkit-caps-lock-indicator,
    &::-webkit-credentials-auto-fill-button {
      display: none;
      pointer-events: none;
    }
    &:-webkit-autofill {
      box-shadow: 0 0 0 100rem ${(props) => props.theme.colors.white};
    }
    &:required {
      box-shadow: none;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: 0;
    background: none;
    font: inherit;
    text-transform: inherit;
    &:hover, &:active, &:focus {
      outline: none;
      cursor: pointer;
    }
  }
`;

export {
  GlobalStyles
};
