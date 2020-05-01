import api from './api';

export const fetchWaniKani = () => (
  api.get('kanji')
);
