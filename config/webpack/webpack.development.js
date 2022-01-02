const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin, EnvironmentPlugin, DefinePlugin } = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

const dotenv = require('dotenv');

const webpackCommon = require('./webpack.common');

const PORT = '2017';

const webpackDevelopment = () => ({
  entry: 'src/index.jsx',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: PORT,
    host: 'if.japanese.local',
    historyApiFallback: true,
    static: './'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './public/', to: './' },
      ]
    }),
    new HotModuleReplacementPlugin()
  ]
});

module.exports = (options) => merge(webpackCommon(options), webpackDevelopment());
