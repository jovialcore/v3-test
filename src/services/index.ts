import Axios from 'axios';
import AuthService from './Auth';

const BASE_URL = process.env.VUE_APP_BASE_URL_JURIDOC_API || 'http://localhost:3000/';

const api = Axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
  // xsrfCookieName: 'token',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const canThrowAnError = error.request.status === 0 || error.request.status === 500;

    if (canThrowAnError) {
      throw new Error(error.message);
    }

    return error;
  },
);

export default {
  auth: AuthService(api),
};
