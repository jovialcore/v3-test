import Axios from 'axios';
import { JURIDOC_API } from '../configs/Environment';
import AuthService from './Auth';
import TeamService from './Team';

const BASE_URL = JURIDOC_API;

const api = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => ({
    error: error.response.data.message,
  })
  // (error) => {
  //   throw new Error(error.response.data.message);
  // }

  // const canThrowAnError = error.request.status === 0 || error.request.status === 500;

  // if (canThrowAnError) {
  //   throw new Error(error.message);
  // }

  // return error;
  ,
);

export default {
  auth: AuthService(api),
  team: TeamService(api),
};
