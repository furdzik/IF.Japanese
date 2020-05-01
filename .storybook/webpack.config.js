const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  config.resolve = {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve('./'), 'node_modules'],
    alias: {
      'core-js/es6': 'core-js/es'
    }
  };

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          localsConvention: 'camelCaseOnly',
          importLoaders: 2,
          modules: {
            localIdentName: '[local]',
          },
          sourceMap: true
        }
      },
      'sass-loader',
      'postcss-loader'
    ],
    include: path.resolve(__dirname, '../')
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

  // Return the altered config
  return config;
};
