const webpackDevelopment = require('./config/webpack/webpack.development.js');
const webpackProduction = require('./config/webpack/webpack.production.js');

module.exports = (options) => {
  if (options.production) {
    return webpackProduction(options);
  }
  return webpackDevelopment(options);
};
