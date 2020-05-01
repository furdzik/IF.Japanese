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
`;

export { GlobalStyles };
