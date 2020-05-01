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

const successResponseHandler = (response) => {
  if (response.data) {
    return response.data;
  }

  return response.status;
};

instance.interceptors.response.use(
  (response) => successResponseHandler(response),
  (error) => { throw error; }
);

export default instance;
