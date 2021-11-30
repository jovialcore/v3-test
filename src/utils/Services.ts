import { AxiosResponse } from 'axios';
import { RequestError } from '@/types/services';

export function getRequestError(response: AxiosResponse):RequestError {
  return {
    status: response.request.status,
    statusText: response.request.statusText,
  };
}
