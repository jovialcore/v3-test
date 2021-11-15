import BaseService from '@/services/Base';

import $api from '@/services/api';

const BASE_PATH = 'team';

export default class TeamService extends BaseService {
  static get() {
    return TeamService.consume(
      $api.get(`${BASE_PATH}/`),
    );
  }

  // static login({ email, password }: {email: string, password: string}) {
  //   return AuthService.consume(
  //     $api.post(`${BASE_PATH}/login`, { email, password }),
  //   );
  // }

  // static logout() {
  //   return AuthService.consume(
  //     $api.get(`${BASE_PATH}/logout`),
  //   );
  // }

  // static register({ email, password, language }:
  //   { email: string, password: string, language: string }) {
  //   return AuthService.consume(
  //     $api.post(`${BASE_PATH}/register`, { email, password, language }),
  //   );
  // }
}
