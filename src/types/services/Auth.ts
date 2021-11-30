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
  password: string;
  language: string;
}

export type UserRegisterData = {
  firstName: string;
  lastName: string;
  job?: string;
  whatBringsYouHere?: string;
  phone?: string;
  company: string;
  size?: string;
  industry?: string;
  crm?: string;
  language?: string;
}

export type ActivationParams = {
  activationToken: string;
} & UserRegisterData;

export type GoogleRegisterParams = {
  tokenId: string;
} & UserRegisterData;

export type LoginParams = {
  email: string;
  password: string;
}

export type ForgotPasswordParams = {
  email: string;
  language: string;
}

export type ResendActivationParams = {
  email: string;
  language: string;
}

export type ResetPasswordParams = {
  token: string;
  newPassword: string;
  passwordConfirm: string;
}

export interface AuthServiceInterface {
  register(body: RegisterParams): Promise<ServiceBasicReturn>;
  activation(body: ActivationParams): Promise<ServiceReturnMsgAndUser>;
  login(body: LoginParams): Promise<ServiceReturnUser>;
  currentUser(): Promise<ServiceReturnUser>;
  forgotPassword(body: ForgotPasswordParams): Promise<ServiceBasicReturn>;
  resendActivation(body: ResendActivationParams): Promise<ServiceBasicReturn>;
  resetPassword(body: ResetPasswordParams): Promise<ServiceBasicReturn>;
  logout(): Promise<ServiceBasicReturn>;
  googleLogin(tokenId: string): Promise<ServiceReturnUser>;
  googleRegister(body: GoogleRegisterParams): Promise<ServiceReturnMsgAndUser>;
}
