import { css } from '@emotion/react';

import { breakpoints } from '../basic/breakpoints';

export const breakpointMixin = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
