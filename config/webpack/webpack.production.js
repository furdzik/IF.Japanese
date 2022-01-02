const { merge } = require('webpack-merge');
const { join } = require('path');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const dotenv = require('dotenv');

const webpackCommon = require('./webpack.common');


const webpackProduction = () => {
  const config = {
    entry: 'src/index.jsx',
    mode: 'production',
    devtool: 'source-map',
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[id].[name].[hash].js',
      path: join(__dirname, '../../dist'),
      sourceMapFilename: '[name].[hash].js.map',
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: './public/', to: './' }
        ]
      }),
      new WebpackCdnPlugin({
        modules: [
          {
            name: 'react',
            var: 'React',
            path: 'umd/react.production.min.js',
          },
          {
            name: 'react-dom',
            var: 'ReactDOM',
            path: 'umd/react-dom.production.min.js',
          }
        ]
      }),
    ]
  };
  console.log('dotenv', dotenv.config().parsed);
  console.log('process.env prod', process.env);
  return config;
};

module.exports = (options) => merge(webpackCommon(options), webpackProduction());
