const fontFamily = {
  mainFont: 'Noto Sans JP',
  mainFontAlt: 'NotoSansJP',
  fallback: 'sans-serif',
  fallbackIos: '-apple-system',
  fallbackAndroid: 'Roboto',
  appleEmoji: 'Apple Color Emoji',
  windowsEmoji: 'Segoe UI Emoji',
  windowsSymbol: 'Segoe UI Symbol'
};

const fontSize = {
  base: '62.5%',
  // @TODO: change to my typography
  headingLarge: '',
  headingBig: '',
  headingMedium: '',
  headingSmall: '',
  medium: '2rem',
  normal: '1.8rem',
  small: '1.6rem',
  extraSmall: '1.4rem',
  desktop: {
    headingLarge: '',
    headingBig: '',
    headingMedium: '',
    headingSmall: '',
    medium: '2rem',
    normal: '1.8rem',
    small: '1.6rem',
    extraSmall: '1.4rem'
  }
};

const lineHeight = {
  normal: 1.5
  // @TODO: change to my typography
};
const fontWeight = {
  light: 100,
  regular: 300,
  semibold: 500,
  bold: 700,
  extrabold: 900
};

export const typography = {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight
};
