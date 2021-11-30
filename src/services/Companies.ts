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

  static delete(_id: string) {
    return CompaniesService.consume(
      $api.delete(`${BASE_PATH}/${_id}`),
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

  static patch(_id: string, { companyName, description, subsidiary }:
    {companyName: string, description: string, subsidiary?: string}) {
    return CompaniesService.consume(
      $api.patch(`${BASE_PATH}/${_id}`, { companyName, description, subsidiary  } ),
    );
  }

}
