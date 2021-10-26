import { ServiceBasicReturn } from '.';

export type InviteParams = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  role: string;
  language: string;
}

export interface TeamServiceInterface {
  invite(body: InviteParams): Promise<ServiceBasicReturn>;

}
