import { createGlobalStyle } from 'styled-components';

import IconsFontWoff from '@assets/fonts/icons.woff';
import IconsFontTtf from '@assets/fonts/icons.ttf';
import IconsFontSvg from '@assets/fonts/icons.svg';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');
  @font-face {
    font-family: 'Icons';
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url(${IconsFontWoff}) format('woff'), /* standards */
      url(${IconsFontTtf}) format('truetype'), /* Safari, Android, iOS */
      url(${IconsFontSvg}) format('svg'); /* legacy iOS */
  }
  
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    background: #ffffff;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.5;
    font-size: 1.8rem;
    overflow-x: hidden;
  }
  button {
    font: inherit;
    background: none;
    border: 0;
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
      box-shadow: 0 0 0 1000px #ffffff;
    }
    &:required {
      box-shadow: none;
    }
  }
`;

export { GlobalStyles };
