module.exports = {
  appUrl: process.env.APP_URL,
  production: process.env.NODE_ENV === 'production',
  kanjiAliveApiKey: process.env.KANJIALIVE_API_KEY
};
