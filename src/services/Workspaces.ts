import BaseService from '@/services/Base';

import $api from '@/services/api';

const BASE_PATH = 'workspace';

export default class WorkspacesService extends BaseService {
  static create({ workspaceName, company, team }:
    {workspaceName: string, company: string, team: string[]}) {
    return WorkspacesService.consume(
      $api.post(`${BASE_PATH}`, { workspaceName, company, team }),
    );
  }

  static get() {
    return WorkspacesService.consume(
      $api.get(`${BASE_PATH}`),
    );
  }

  static getById(id: string) {
    return WorkspacesService.consume(
      $api.get(`${BASE_PATH}/${id}`),
    );
  }
}
