import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

  html {
    background: ${(props) => props.theme.colors.lightGray};
    font-size: 62.5%;

    @media print {
      background: none;
    }
  }
  body {
    box-sizing: border-box;
    background: ${(props) => props.theme.colors.white};
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.8rem;
    line-height: 1.5;
    overflow-x: hidden;
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
      box-shadow: 0 0 0 1000px ${(props) => props.theme.colors.white};
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
    &:hover, &:active, &:focus {
      outline: none;
      cursor: pointer;
    }
  }
`;

export {
  GlobalStyles
};
