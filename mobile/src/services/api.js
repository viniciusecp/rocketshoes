import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.13.5.71:3333',
});

export default api;
