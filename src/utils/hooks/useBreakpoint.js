import { useState, useEffect } from 'react';
import _throttle from 'lodash/throttle';

import { VIEWPORT_SIZE_CHECKING_DELAY } from '@config/constants';

export default function (breakpoint) {
  const [isPortrait, setIsPortrait] = useState(window.innerWidth <= breakpoint);
  const calculateIsPortrait = _throttle(() => {
    setIsPortrait(window.innerWidth <= breakpoint);
  }, VIEWPORT_SIZE_CHECKING_DELAY);

  useEffect(() => {
    window.addEventListener('resize', calculateIsPortrait);

    return () => {
      window.removeEventListener('resize', calculateIsPortrait);
    };
  });

  return isPortrait;
}
