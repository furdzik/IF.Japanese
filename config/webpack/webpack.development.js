const merge = require('webpack-merge');
const { HotModuleReplacementPlugin, EnvironmentPlugin } = require('webpack');

const webpackCommon = require('./webpack.common');

const PORT = '2017';

const webpackDevelopment = () => ({
  entry: 'src/index.jsx',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scs{2}$/,
        exclude: /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,
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
        ]
      }
    ]
  },
  devServer: {
    port: PORT,
    host: 'if.japanese.local',
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: [
    new EnvironmentPlugin({
      APP_URL: 'http://if.japanese.local:2017'
    }),
    new HotModuleReplacementPlugin()
  ]
});

module.exports = (options) => merge(webpackCommon(options), webpackDevelopment());
