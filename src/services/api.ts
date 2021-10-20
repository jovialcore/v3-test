import Axios from 'axios';
import { JURIDOC_API } from '../configs/Environment';

const BASE_URL = JURIDOC_API;

const api = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  // xsrfCookieName: 'token',
});

export default api;
