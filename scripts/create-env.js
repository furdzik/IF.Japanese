const fs = require('fs');

fs.writeFileSync(
  './.env',
  `NODE_ENV=production\nAPP_URL=${process.env.APP_URL}\nKANJIALIVE_API_KEY=${process.env.KANJIALIVE_API_KEY}\nJISHO_API_URL=${process.env.JISHO_API_URL}\nKANJIALIVE_API_URL=${process.env.KANJIALIVE_API_URL}\nALTERNATIVE_KANJI_API_URL=${process.env.ALTERNATIVE_KANJI_API_URL}\n`
);
