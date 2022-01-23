const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

const dotenv = require('dotenv');
const {DefinePlugin} = require('webpack');

module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  core: {
    builder: 'webpack5',
  },
  addons: [
    "@storybook/addon-links",
    '@storybook/addon-essentials',
    "@storybook/theming"
  ],
  webpackFinal: async (config) => {
    const envVariables = dotenv.config().parsed;

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": path.resolve("node_modules/@emotion/react"),
          "@emotion/styled": path.resolve("node_modules/@emotion/styled"),
          "emotion-theming": path.resolve("node_modules/@emotion/react"),
          "@emotion/react": path.resolve("node_modules/@emotion/react"),
        }
      },
      plugins: [
        ...config.plugins,
        new DefinePlugin({
          NODE_ENV: JSON.stringify(envVariables.NODE_ENV),
          APP_URL: JSON.stringify(envVariables.APP_URL),
          KANJIALIVE_API_KEY: JSON.stringify(envVariables.KANJIALIVE_API_KEY),
          JISHO_API_URL: JSON.stringify(envVariables.JISHO_API_URL),
          KANJIALIVE_API_URL: JSON.stringify(envVariables.KANJIALIVE_API_URL),
          ALTERNATIVE_KANJI_API_URL: JSON.stringify(envVariables.ALTERNATIVE_KANJI_API_URL)
        })
      ]
    };
  }
};
