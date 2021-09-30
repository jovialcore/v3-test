import { AxiosInstance } from 'axios';
import { RequestError, ServiceBasicReturn } from '@/types/services';
import {
  ActivationParams,
  AuthServiceInterface,
  ForgotPasswordParams,
  GoogleRegisterParams,
  LoginParams,
  RegisterParams,
  ResetPasswordParams,
  ServiceReturnMsgAndUser,
  ServiceReturnUser,
} from '@/types/services/Auth';
import { getRequestError } from '@/utils/Services';

const BASE_ENDPOINT = '/auth/';

function AuthService(api: AxiosInstance):AuthServiceInterface {
  async function register({
    email,
    password,
    language,
  }:RegisterParams): Promise<ServiceBasicReturn> {
    const body = {
      email,
      password,
      language,
    };

    const response = await api.post(`${BASE_ENDPOINT}/register`, body);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
  async function activation({
    activationToken, firstName, lastName, whatBringsYouHere, phone, company, size, industry, CRM,
  }:ActivationParams): Promise<ServiceReturnMsgAndUser> {
    const body = {
      activationToken,
      firstName,
      lastName,
      whatBringsYouHere,
      phone,
      company,
      size,
      industry,
      CRM,
    };

    const response = await api.post(`${BASE_ENDPOINT}/activation`, body);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
  async function login({ email, password }:LoginParams): Promise<ServiceReturnUser> {
    const body = { email, password };

    const response = await api.post(`${BASE_ENDPOINT}/login`, body);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
  async function currentUser(): Promise<ServiceReturnUser> {
    const response = await api.get(`${BASE_ENDPOINT}/currentUser`);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
  async function forgotPassword({
    email,
    language,
  }: ForgotPasswordParams): Promise<ServiceBasicReturn> {
    const body = { email, language };

    const response = await api.post(`${BASE_ENDPOINT}/forgotPassword`, body);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
  async function resetPassword({
    token, newPassword, passwordConfirm,
  }:ResetPasswordParams): Promise<ServiceBasicReturn> {
    const body = {
      token,
      newPassword,
      passwordConfirm,
    };

    const response = await api.post(`${BASE_ENDPOINT}/resetPassword`, body);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
  async function logout(): Promise<ServiceBasicReturn> {
    const response = await api.get(`${BASE_ENDPOINT}/logout`);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
  async function googleLogin(tokenId: string): Promise<ServiceReturnUser> {
    const response = await api.post(`${BASE_ENDPOINT}/googleLogin`, { tokenId });

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
  async function googleRegister({
    tokenId, firstName, lastName, whatBringsYouHere, phone, company, size, industry, CRM,
  }:GoogleRegisterParams): Promise<ServiceReturnMsgAndUser> {
    const body = {
      tokenId,
      firstName,
      lastName,
      whatBringsYouHere,
      phone,
      company,
      size,
      industry,
      CRM,
    };

    const response = await api.post(`${BASE_ENDPOINT}/googleRegister`, body);

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
    register,
    activation,
    login,
    currentUser,
    forgotPassword,
    resetPassword,
    logout,
    googleLogin,
    googleRegister,
  };
}

export default AuthService;
