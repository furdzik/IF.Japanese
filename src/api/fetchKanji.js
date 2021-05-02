import api from './api';

export const fetchKanji = (kanji) => (
  api.get(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`,
    {
      headers: {
        'x-rapidapi-key': '908ebbc49dmshee56b09303a632cp137b8cjsnd81e0d8a84ab',
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
        useQueryString: true
      }
    }));
