const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin, EnvironmentPlugin } = require('webpack');

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
    new EnvironmentPlugin({
      APP_URL: 'http://if.japanese.local:2017'
    }),
    new HotModuleReplacementPlugin()
  ]
});

module.exports = (options) => merge(webpackCommon(options), webpackDevelopment());
