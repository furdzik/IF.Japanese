import api from './api';

export const fetchJisho = (name) => (
  api.get(`http://1024px.pl/japanese-dictionary.php?keyword=${name}`)
);
