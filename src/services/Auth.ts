import { AxiosInstance } from 'axios';
import { RequestError, ServiceBasicReturn } from '@/types/services';
import {
  ActivationParams,
  AuthServiceInterface,
  ForgotPasswordParams,
  GoogleRegisterParams,
  LoginParams,
  RegisterParams,
  ResendActivationParams,
  ResetPasswordParams,
  ServiceReturnMsgAndUser,
  ServiceReturnUser,
} from '@/types/services/Auth';
import { getRequestError } from '@/utils/Services';

const BASE_ENDPOINT = '/auth';

function AuthService(api: AxiosInstance):AuthServiceInterface {
  async function register(body: RegisterParams): Promise<ServiceBasicReturn> {
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
  async function activation(body: ActivationParams): Promise<ServiceReturnMsgAndUser> {
    const response = await api.patch(`${BASE_ENDPOINT}/activation`, body);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }
  async function login(body: LoginParams): Promise<ServiceReturnUser> {
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

  async function forgotPassword(body: ForgotPasswordParams): Promise<ServiceBasicReturn> {
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

  async function resendActivation(body: ResendActivationParams): Promise<ServiceBasicReturn> {
    const response = await api.post(`${BASE_ENDPOINT}/resendActivation`, body);

    let errors: RequestError;

    if (!response.data) {
      errors = getRequestError(response);
    }

    return {
      data: response.data || undefined,
      errors,
    };
  }

  async function resetPassword(body: ResetPasswordParams): Promise<ServiceBasicReturn> {
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
  async function googleRegister(body: GoogleRegisterParams): Promise<ServiceReturnMsgAndUser> {
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
    resendActivation,
    resetPassword,
    logout,
    googleLogin,
    googleRegister,
  };
}

export default AuthService;
