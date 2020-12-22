import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/',
});

api.defaults.headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export default api;
