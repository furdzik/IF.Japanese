import api from './api';

export const fetchKanjiAlternative = (kanji) => (
  api.get(`https://kanjiapi.dev/v1/kanji/${kanji}`
  )
);
