import BaseService from '@/services/Base';

import $api from '@/services/api';

const BASE_PATH = 'company';

export default class CompaniesService extends BaseService {
  static create({ companyName, description, subsidiary }:
    {companyName: string, description: string, subsidiary: string}) {
    return CompaniesService.consume(
      $api.post(`${BASE_PATH}`, { companyName, description, subsidiary }),
    );
  }

  static get() {
    return CompaniesService.consume(
      $api.get(`${BASE_PATH}`),
    );
  }

  static getById(id: string) {
    return CompaniesService.consume(
      $api.get(`${BASE_PATH}/${id}`),
    );
  }
}
