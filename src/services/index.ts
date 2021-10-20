import Axios from 'axios';
import { JURIDOC_API } from '../configs/Environment';
import AuthService from './Auth';

const BASE_URL = JURIDOC_API;

const api = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  // xsrfCookieName: 'token',
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const canThrowAnError = error.request.status === 0 || error.request.status === 500;

//     if (canThrowAnError) {
//       throw new Error(error.message);
//     }

//     return error;
//   },
// );

export default {
  auth: AuthService(api),
};
