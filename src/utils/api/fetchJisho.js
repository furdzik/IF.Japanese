import api from './api';

export const fetchJisho = (name) => (
  api.get(`http://jisho.org/api/v1/search/words?keyword=${name}`)
);
