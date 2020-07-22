import api from './api';

export const fetchKaniKaniKanji = () => (
  api.get(`https://api.wanikani.com/v2/`)
);
