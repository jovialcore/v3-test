import BaseService from '@/services/Base';

import $api from '@/services/api';

const BASE_PATH = 'auth';

type UserRegistrationData = {
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

export default class AuthService extends BaseService {
  static activation(body: {
    activationToken: string;
  } & UserRegistrationData) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/activation`, body),
    );
  }

  static currentUser() {
    return AuthService.consume(
      $api.get(`${BASE_PATH}/currentUser`),
    );
  }

  static forgotPassword({email, language}: {
    email: string;
    language: string;
  }) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/forgotPassword`, {email, language})
    );
  }

  static googleLogin(tokenId: string) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/googleLogin`, { tokenId })
    );
  }

  static googleRegister(body: {
    tokenId: string;
  } & UserRegistrationData) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/googleRegister`, body),
    );
  }

  static inviteRegister({ email, password, inviteToken, language }:
    { email: string, password: string, inviteToken: string, language: string }) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/inviteRegister`, { email, password, inviteToken, language }),
    );
  }

  static login({ email, password }: {email: string, password: string}) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/login`, { email, password }),
    );
  }

  static logout() {
    return AuthService.consume(
      $api.get(`${BASE_PATH}/logout`),
    );
  }

  static register({ email, password, language }:
    { email: string, password: string, language: string }) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/register`, { email, password, language }),
    );
  }

  static resendActivation({ email } : {email: string }) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/resendActivation`, {email}),
    );
  }

  static resetPassword({ token, newPassword, passwordConfirm } : {
    token: string;
    newPassword: string;
    passwordConfirm: string;
  }) {
    return AuthService.consume(
      $api.post(`${BASE_PATH}/resetPassword`, { token, newPassword, passwordConfirm }),
    );
  }  
}
