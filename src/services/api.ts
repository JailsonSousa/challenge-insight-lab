import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jobs.github.com/',
});

api.defaults.headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export default api;
