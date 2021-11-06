const { resolve } = require('path');
const { LoaderOptionsPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const { version } = require('../../package');

module.exports = ({ production }) => ({
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    mainFields: ['browser', 'main', 'module'],
    modules: [resolve('./'), resolve('node_modules')]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ["babel-plugin-styled-components", {
              "pure": !!production,
              "displayName": !production
            }]
          ]
        }
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        exclude: /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=assets/fonts/[name].[ext]"
      },
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new Dotenv(),
    new LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebpackPlugin({
      title: 'IF.Japanese',
      template: './src/index.hbs',
      favicon: './public/favicon.ico',
      appVersion: `${version}`,
      noscript: 'Proszę włączyć obsługę JavaScript w przeglądarce.',
      appUrl: production ? '#{APP_URL}#' : 'http://if.japanese.local:2017',
      base: '/',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: false,
        removeEmptyAttributes: true
      }
    })
  ]
});
