import { colors, typography } from './basic';

export default {
  colors,
  typography,

  mainColors: {
    primary: colors.red,
    secondary: colors.gray,
    tartary: colors.pink,
    quaternary: colors.darkPink
  },

  mainCategoriesStyle: {
    known: {
      background: colors.red,
      color: colors.white,
      textShadow: `-1px 1px 8px ${colors.veryDarkPink}`
    },

    toRepeat: {
      background: `repeating-linear-gradient(45deg, #ef8888, #fba5a5 1px, ${colors.red} 2px, ${colors.pink} 5px)`,
      color: colors.white,
      textShadow: `-1px 1px 6px ${colors.red}`
    },

    nowLearning: {
      background: `repeating-linear-gradient(45deg, #ef8888, #fba5a5 1px, ${colors.darkPink} 2px, ${colors.darkPink} 5px)`,
      borderSize: '2px',
      border: `2px solid ${colors.red}`,
      color: colors.white,
      textShadow: `-1px 1px 8px ${colors.veryDarkPink}`
    },

    inProgress: {
      background: `repeating-linear-gradient(45deg, #ef8888, #fba5a5 2px, ${colors.pink} 4px, ${colors.pink} 6px)`,
      color: colors.white,
      textShadow: `-1px 1px 8px ${colors.veryDarkPink}`
    },

    notKnown: {
      background: colors.gray,
      color: colors.black
    },

    joyo: {
      borderSize: '1px',
      border: '1px solid #a0a0a0'
    }
  },

  layout: {
    borderRadius: '.4rem',
    containerWidth: '128rem',
    padding: '0 2rem',
    mobilePadding: '0 1rem',
    transition: 'all .3s ease-in'
  }
};
