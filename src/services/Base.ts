import { AxiosInstance } from 'axios';

import { RequestError } from '@/types/services';
import { getRequestError } from '@/utils/Services';

export default class AuthService {
  private BASE_PATH: string;

  private api: AxiosInstance;

  constructor(BASE_PATH: string, api: AxiosInstance) {
    this.BASE_PATH = BASE_PATH;
    this.api = api;
    this.consume(new Promise(() => {}));
  }

  private async consume(request: Promise<R>): Promise<R> {
    const response = await request;

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
}
