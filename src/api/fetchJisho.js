import { jishoApiUrl } from '@config/environment';

import api from './api';

export const fetchJisho = (name) => (
  api.get(`${jishoApiUrl}?keyword=${name}`)
);
