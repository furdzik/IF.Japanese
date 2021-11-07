import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
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
