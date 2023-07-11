import { css } from '@emotion/react';

import _map from 'lodash/map';

import { NormalizeStyles } from 'css-in-js-styles-utils';

import theme from '@styles/theme';

const baseFontFamily = _map(theme.typography.fontFamily, (el) => `${el}`).join(', ');

// const NormalizeStyles = (fontSize = '1.4rem', lineHeight = 1.5, base = '62.5%') => css`
//   html {
//     font-size: ${base};
//   }
//   body {
//     font-size: ${fontSize};
//     line-height: ${lineHeight};
//   }
//   a {
//     color: inherit;
//   }
// `;

const GlobalStyles = css`
  ${NormalizeStyles};

  html {
    background: ${theme.colors.lightGray};

    @media print {
      background: none;
    }
  }
  body {
    box-sizing: border-box;
    overflow: hidden scroll;
    background: ${theme.colors.white};
    font-family: ${baseFontFamily};
    font-weight: ${theme.typography.fontWeight.regular};
  }
`;

export {
  GlobalStyles
};
