import { AxiosInstance } from 'axios';
import { RequestError, ServiceBasicReturn } from '@/types/services';
import { InviteParams, TeamServiceInterface } from '@/types/services/Team';
import { getRequestError } from '@/utils/Services';

const BASE_ENDPOINT = '/team';

function TeamService(api: AxiosInstance):TeamServiceInterface {
  async function invite(body: InviteParams): Promise<ServiceBasicReturn> {
    const response = await api.post(`${BASE_ENDPOINT}/invite`, body);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }

  return {
    invite,
  };
}

export default TeamService;
