import { RequestError, ServiceBasicReturn } from '.';
import { UserType } from '../User';

export type ServiceReturnUser = {
  data: UserType | undefined;
  errors: RequestError | undefined;
}

export type ServiceReturnMsgAndUser = {
  data: { msg: string } & UserType | undefined;
  errors: RequestError | undefined;
}

export type RegisterParams = {
  email: string;
  password: RequestError;
  language: RequestError;
}

export type ActivationParams = {
  activationToken: string;
  firstName: string;
  lastName: string;
  whatBringsYouHere: string;
  phone: string;
  company: string;
  size: number;
  industry: string;
  CRM: string;
}

export type GoogleRegisterParams = {
  tokenId: string;
  firstName: string;
  lastName: string;
  whatBringsYouHere: string;
  phone: string;
  company: string;
  size: number;
  industry: string;
  CRM: string;
}

export type LoginParams = {
  email: string;
  password: string;
}

export type ForgotPasswordParams = {
  email: string;
  language: string;
}

export type ResetPasswordParams = {
  token: string;
  newPassword: string;
  passwordConfirm: string;
}

export interface AuthServiceInterface {
  register({ email, password, language }:RegisterParams): Promise<ServiceBasicReturn>;
  activation({
    activationToken, firstName, lastName, whatBringsYouHere, phone, company, size, industry, CRM,
  }:ActivationParams): Promise<ServiceReturnMsgAndUser>;
  login({ email, password }:LoginParams): Promise<ServiceReturnUser>;
  currentUser(): Promise<ServiceReturnUser>;
  forgotPassword({ email, language }: ForgotPasswordParams): Promise<ServiceBasicReturn>;
  resetPassword({
    token, newPassword, passwordConfirm,
  }:ResetPasswordParams): Promise<ServiceBasicReturn>;
  logout(): Promise<ServiceBasicReturn>;
  googleLogin(tokenId: string): Promise<ServiceReturnUser>;
  googleRegister({
    tokenId, firstName, lastName, whatBringsYouHere, phone, company, size, industry, CRM,
  }:GoogleRegisterParams): Promise<ServiceReturnMsgAndUser>;
}
