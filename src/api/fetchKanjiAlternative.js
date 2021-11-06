import { alternativeKanjiApiUrl } from '@config/environment';

import api from './api';

export const fetchKanjiAlternative = (kanji) => (
  api.get(`${alternativeKanjiApiUrl}${kanji}`)
);
