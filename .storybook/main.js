const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

const dotenv = require('dotenv');
const {DefinePlugin} = require('webpack');
const {resolve} = require('path');

module.exports = {
  "features": {
    "storyStoreV7": true,
    "babelModeV7": true
  },
  "core": {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.jsx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-postcss"
  ],
  webpackFinal: async function (config) {
    const envVariables = dotenv.config().parsed;

    config.resolve = {
      ...config.resolve,
      extensions: ['.js', '.jsx', '.json'],
      mainFields: ['browser', 'main', 'module'],
      modules: [resolve('./'), resolve('node_modules')]
    };

    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        plugins: [
          ["babel-plugin-styled-components", {
            pure: false,
            displayName: true
          }]
        ]
      }
    });

    config.module.plugins.push(
      new DefinePlugin({
        NODE_ENV: JSON.stringify(envVariables.NODE_ENV),
        APP_URL: JSON.stringify(envVariables.APP_URL),
        KANJIALIVE_API_KEY: JSON.stringify(envVariables.KANJIALIVE_API_KEY),
        JISHO_API_URL: JSON.stringify(envVariables.JISHO_API_URL),
        KANJIALIVE_API_URL: JSON.stringify(envVariables.KANJIALIVE_API_URL),
        ALTERNATIVE_KANJI_API_URL: JSON.stringify(envVariables.ALTERNATIVE_KANJI_API_URL)
      })
    );

    return config;
  }
};
