import { jishoApiUrl } from '@config/environment';
import api from '@config/api';

export const fetchJisho = (name) => (
  api.get(`${jishoApiUrl}?keyword=${name}`)
);
