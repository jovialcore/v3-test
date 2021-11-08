import BaseService from '@/services/Base';

import $api from '@/services/api';

const BASE_PATH = 'company';

export default class CompaniesService extends BaseService {
  static create({ name, description, subsidiaryId }:
    {name: string, description: string, subsidiaryId: string}) {
    return CompaniesService.consume(
      $api.post(`${BASE_PATH}`, { name, description, subsidiaryId }),
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
