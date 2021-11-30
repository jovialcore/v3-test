export type RequestError = {
  status: number;
  statusText: string;
} | undefined;

export type ServiceBasicReturn = {
  data: { msg: string } | undefined;
  errors: RequestError | undefined;
}
