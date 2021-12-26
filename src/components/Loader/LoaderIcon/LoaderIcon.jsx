import React from 'react';

import {
  Svg,
  Circle
} from './LoaderIcon.styles';

const LoaderIcon = () => (
  <Svg
    width="65"
    height="65"
    viewBox="0 0 66 66"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
      cx="33"
      cy="33"
      r="20"
    />
  </Svg>
);

export default LoaderIcon;
