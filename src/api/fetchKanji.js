import { kanjiAliveApiKey } from '@config/environment';

import api from './api';

export const fetchKanji = (kanji) => (
  api.get(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`,
    {
      headers: {
        'x-rapidapi-key': kanjiAliveApiKey,
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
        useQueryString: true
      }
    })
);
