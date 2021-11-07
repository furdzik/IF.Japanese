import { alternativeKanjiApiUrl } from '@config/environment';
import api from '@config/api';

export const fetchKanjiAlternative = (kanji) => (
  api.get(`${alternativeKanjiApiUrl}${kanji}`)
);
