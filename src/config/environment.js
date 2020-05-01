module.exports = {
  appUrl: process.env.APP_URL,
  gateway: process.env.GATEWAY,
  production: process.env.NODE_ENV === 'production'
};
