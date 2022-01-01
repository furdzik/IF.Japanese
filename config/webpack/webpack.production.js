const { merge } = require('webpack-merge');
const { join } = require('path');
const { DefinePlugin } = require('webpack');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const webpackCommon = require('./webpack.common');

const webpackProduction = () => ({
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
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
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
});


module.exports = (options) => {
  console.log('webpack merge prod:', options, process.env);
  return merge(webpackCommon(options), webpackProduction());
};
