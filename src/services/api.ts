import Axios from 'axios';
import { JURIDOC_API } from '../configs/Environment';

const api = Axios.create({
  baseURL: JURIDOC_API,
  withCredentials: true,
  // xsrfCookieName: 'token',
});

export default api;
