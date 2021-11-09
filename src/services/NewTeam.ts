import BaseService from '@/services/Base';

import $api from '@/services/api';

const BASE_PATH = 'auth';

export default class AuthService extends BaseService {
  static currentUser() {
    return AuthService.consume(
      $api.get(`${BASE_PATH}/currentUser`),
    );
  }

  static login({ email, password }: {email: string, password: string}) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/login`, { email, password }),
    );
  }

  static logout() {
    return AuthService.consume(
      $api.get(`${BASE_PATH}/logout`),
    );
  }

  static register({ email, password, language }:
    { email: string, password: string, language: string }) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/register`, { email, password, language }),
    );
  }
}
