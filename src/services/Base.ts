export default class BaseService {
  protected static async consume(request: Promise<any>): Promise<any> {
    const response = await request;

    return {
      data: response.data || undefined,
      error: response.error || undefined,
    };
  }
}
