const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.jsx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ],
  webpackFinal: async function (config) {
    const envVariables = dotenv.config().parsed;

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
        '@emotion/styled': toPath('node_modules/@emotion/styled'),
        'emotion-theming': toPath('node_modules/@emotion/react')
      },
      extensions: ['.js', '.jsx', '.json'],
      mainFields: ['browser', 'main', 'module'],
      modules: [path.resolve('./'), path.resolve('node_modules')]
    };

    // config.module.rules.push({
    //   test: /\.(scss|css)$/,
    //   use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    // });

    // config.module.rules.push({
    //   test: /\.(js|jsx)$/,
    //   exclude: /node_modules/,
    //   loader: 'babel-loader',
    //   options: {
    //     plugins: [
    //       ["babel-plugin-styled-components", {
    //         pure: false,
    //         displayName: true
    //       }]
    //     ]
    //   }
    // });
    console.log(config);
    config.plugins.push(
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
