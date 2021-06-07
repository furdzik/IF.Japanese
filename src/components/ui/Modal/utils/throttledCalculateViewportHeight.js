import _throttle from 'lodash/throttle';

import { calculateViewportHeight } from './calculateViewportHeight';

const VIEWPORT_SIZE_CHECKING_DELAY = 500;

export const throttledCalculateViewportHeight = _throttle(
  calculateViewportHeight,
  VIEWPORT_SIZE_CHECKING_DELAY
);
