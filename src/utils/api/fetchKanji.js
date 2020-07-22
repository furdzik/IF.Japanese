import api from './api';

export const fetchKanji = (kanji) => (
  api.get(`https://kanjiapi.dev/v1/kanji/${kanji}`)
);
