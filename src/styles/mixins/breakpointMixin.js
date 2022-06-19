import { breakpoints, breakpointMinWidthMixin } from 'css-in-js-styles-utils';

export const breakpointMixin = Object
  .keys(breakpoints)
  .reduce(
    (acc, current) => breakpointMinWidthMixin(acc, current, breakpoints), {}
  );
