import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    Pragma: 'no-cache',
    'Authorization': 'Bearer 020305ee-ed61-4685-b063-a9ea6006b8f5'
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
