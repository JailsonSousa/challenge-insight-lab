import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/',
});

api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default api;
