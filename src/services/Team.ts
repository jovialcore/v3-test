import BaseService from '@/services/Base';

import $api from '@/services/api';

const BASE_PATH = 'team';

export default class TeamService extends BaseService {
  static get() {
    return TeamService.consume(
      $api.get(`${BASE_PATH}/`),
    );
  }
  static getByCompanyId(companyId: string) {
    return TeamService.consume(
      $api.get(`${BASE_PATH}/${companyId}`),
    );
  }
  static delete(_id: string) {
    return TeamService.consume(
      $api.delete(`${BASE_PATH}/${_id}`),
    );
  }
  static invite({ firstName, lastName, company, email, role, language }: {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    role: string;
    language: string;
  }) {
    return TeamService.consume(
      $api.post(`${BASE_PATH}/invite`, { firstName, lastName, company, email, role, language }),
    );
  }
}
