import { kanjiAliveApiUrl, kanjiAliveApiKey } from '@config/environment';
import api from '@config/api';

export const fetchKanji = (kanji) => (
  api.get(`${kanjiAliveApiUrl}${kanji}`,
    {
      headers: {
        'x-rapidapi-key': kanjiAliveApiKey,
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
        useQueryString: true
      }
    })
);
