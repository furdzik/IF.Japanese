const merge = require('webpack-merge');
const { join } = require('path');
const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const webpackCommon = require('./webpack.common');

const { version } = require('../../package');

const webpackProduction = () => ({
  entry: 'src/index.jsx',
  mode: 'production',
  devtool: 'sourcemap',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[id].[name].[hash].js',
    path: join(__dirname, '../../dist'),
    sourceMapFilename: '[name].[hash].js.map',
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCssnanoPlugin({
        cssnanoOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCaseOnly',
              importLoaders: 2,
              modules: {
                localIdentName: 'hash:base64:5]',
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackCdnPlugin({
      modules: [
        { name: 'react', var: 'React', path: 'umd/react.production.min.js' },
        { name: 'react-dom', var: 'ReactDOM', path: 'umd/react-dom.production.min.js' }
      ],
      publicPath: '/node_modules'
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new EnvironmentPlugin({
      GATEWAY: '#{GATEWAY}#',
      APP_URL: '#{APP_URL}#'
    }),
    new WebpackCleanupPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[name].[hash].css'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../reports/bundle-analyzer-report.html',
      openAnalyzer: false,
      defaultSizes: 'gzip'
    }),
    new CopyPlugin([
      { from: './public/', to: './' }
    ]),
  ]
});


module.exports = (options) => {
  return merge(webpackCommon(options), webpackProduction());
};
