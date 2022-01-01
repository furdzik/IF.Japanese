const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin, EnvironmentPlugin, DefinePlugin } = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

const webpackCommon = require('./webpack.common');
const dotenv = require('dotenv');

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
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/', to: './' },
      ]
    }),
    new EnvironmentPlugin({
      APP_URL: 'http://if.japanese.local:2017'
    }),
    new HotModuleReplacementPlugin()
  ]
});

module.exports = (options) => {
  console.log('webpack merge dev:', options, process.env);
  return merge(webpackCommon(options), webpackDevelopment());
};
