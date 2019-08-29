import axios from 'axios';

import { gateway } from '@config/environment';

const instance = axios.create({
  baseURL: gateway,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache'
  }
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => { throw error; }
);

export default instance;
