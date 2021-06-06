import { useEffect, useState } from 'react';
import _throttle from 'lodash/throttle';

export const useBreakpoint = (query) => {
  const hasWindowObject = typeof window !== 'undefined';

  if (!hasWindowObject) {
    return null;
  }

  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);

    mediaMatch.addListener(handler);

    return () => mediaMatch.removeListener(handler);
  });

  return matches;
};

export const useBreakpointWithThrottle = (breakpoint) => {
  const [isPortrait, setIsPortrait] = useState(window.innerWidth <= breakpoint);
  const calculateIsPortrait = _throttle(() => {
    setIsPortrait(window.innerWidth <= breakpoint);
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', calculateIsPortrait);

    return () => {
      window.removeEventListener('resize', calculateIsPortrait);
    };
  });

  return isPortrait;
};
