const SAFARI_BAR_VH = 0.01;

// @WORKAROUND: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// function calculates css --vh variable (fix to mobile vh unit)
export const calculateViewportHeight = () => {
  const vh = window.innerHeight * SAFARI_BAR_VH;
  window.document.documentElement.style.setProperty('--vh', `${vh}px`);
};
