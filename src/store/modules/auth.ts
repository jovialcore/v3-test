import { ActionTree, GetterTree, MutationTree } from 'vuex';
import AuthService from '@/services/Auth';
//* TODO: remove these reset methods *//

export type LoginDataType = {
  email: string;
  password: string;
};

export type RegisterActivationDataType ={
  firstName: string;
  lastName: string;
  job?: string;
  whatBringsYouHere?: string;
  phone?: string;
  company: string;
  size?: string;
  industry?: string;
  language?: string;
};

export type RegisterAccessDataType = LoginDataType & { language: string, inviteToken?: string };

export type RegisterType = {
  accessData: RegisterAccessDataType;
  data: RegisterActivationDataType;
  activationToken?: string;
  inviteToken?: string;
  tokenId?: string;
};

export type ForgotPasswordType = {
  email: string;
  language: string;
};

export type ResetPasswordType = {
  token: string;
  newPassword: string;
  passwordConfirm: string;
};

export type CheckEmailType = {
  email: string;
  language: string;
};

type GlobalType = {
  login: LoginDataType;
  register: RegisterType;
  forgotPassword: ForgotPasswordType;
  resetPassword: ResetPasswordType;
  checkEmail: CheckEmailType;
};

export const state = {
  login: {
    email: '',
    password: '',
  },
  checkEmail: {
    email: '',
    language: '',
  },
  register: {
    accessData: {
      email: '',
      password: '',
      language: '',
    },
    activationToken: '',
    tokenId: '',
    data: {
      firstName: '',
      lastName: '',
      company: '',
    },
  },
  forgotPassword: {
    email: '',
    language: '',
  },
  resetPassword: {
    token: '',
    newPassword: '',
    passwordConfirm: '',
  },
  currentUser: {
    createdAt: '',
    email: '',
    firstName: '',
    job: '',
    language: '',
    lastName: '',
    phone: '',
    picture: '',
    role: '',
    updatedAt: '',
    _id: '',
  },
};

export const mutations: MutationTree<any> = {
  SET_CURRENT_USER(state, data) {
    console.log(data);
    state.currentUser = data;
  },
  SET_LOGIN_DATA(state, data) {
    state.login = data;
  },
  SET_REGISTER_DATA(state, data) {
    state.register = data;
  },
  SET_REGISTER_ACCESS_DATA(state, data) {
    state.register.accessData = data;
  },
  SET_FORGOT_PASSWORD_DATA(state, data) {
    state.forgotPassword = data;
  },
  SET_CHECK_EMAIL_DATA(state, data) {
    state.checkEmail = data;
  },
  RESET_LOGIN_DATA(state) {
    state.login = {
      email: '',
      password: '',
    };
  },
  RESET_FORGOT_PASSWORD_DATA(state) {
    state.forgotPassword = {
      email: '',
      language: '',
    };
  },
  RESET_REGISTER_ACCESS_DATA(state) {
    state.register.accessData = {
      email: '',
      password: '',
      language: '',
    };
  },
  RESET_CHECK_EMAIL_DATA(state) {
    state.checkEmail = {
      email: '',
      language: '',
    };
  },
  RESET_PASSWORD_DATA(state) {
    state.resetPassword = {
      token: '',
      newPassword: '',
      passwordConfirm: '',
    };
  },
  RESET_REGISTER(state) {
    state.register = {
      accessData: {
        email: '',
        password: '',
        language: '',
      },
      activationToken: '',
      tokenId: '',
      data: {
        firstName: '',
        lastName: '',
        company: '',
      },
    };
  },
};

export const actions: ActionTree<any, void> = {
  setLoginData: ({ commit }, { email, password }: {email:string, password: string}) => commit('SET_LOGIN_DATA', { email, password }),
  setCheckEmailData: ({ commit }, data: CheckEmailType) => commit('SET_CHECK_EMAIL_DATA', data),
  setRegisterAccessData: ({ commit }, { email, password }: { email:string, password: string } & { language: string }) => commit('SET_REGISTER_ACCESS_DATA', { email, password }),
  setForgotPasswordData: ({ commit }, data: { email: string }) => commit('SET_FORGOT_PASSWORD_DATA', data),
  resetLoginData: ({ commit }) => commit('RESET_LOGIN_DATA'),
  resetCheckEmailData: ({ commit }) => commit('RESET_CHECK_EMAIL_DATA'),
  resetForgotPasswordData: ({ commit }) => commit('RESET_FORGOT_PASSWORD_DATA'),
  resetPasswordData: ({ commit }) => commit('RESET_PASSWORD_DATA'),
  resetRegisterAccessData: ({ commit }) => commit('RESET_REGISTER_ACCESS_DATA'),
  resetRegister: ({ commit }) => commit('RESET_REGISTER'),
  setCurrentUser({ commit }, data) {
    console.log('setting', data)
    commit('SET_CURRENT_USER', data);
  },
  
  async submitInviteRegister({ state }) {
    const body = state.register.accessData;
    const response = await AuthService.inviteRegister(body);
    return response;
  },
  async submitLogin({ commit, state }) {
    const body = state.login;
    const response = await AuthService.login(body);
    commit('SET_CURRENT_USER', response.data);

    return response;
  },
  async submitLogout() {
    const response = await AuthService.logout();
    return response;
  },

  async submitRegister({ state }) {
    const body = state.register.accessData;
    const response = await AuthService.register(body);
    return response;
  },

  async submitActivation({ state }) {
    const body = state.register.data;

    const response = await AuthService.activation({
      activationToken: state.register.activationToken || '',
      ...body,
    });

    return response;
  },

  async submitCheckEmail({ state }) {
    const body = state.checkEmail;
    const response = await AuthService.resendActivation(body);

    return response;
  },

  async submitGoogleLogin(_, tokenId: string) {
    const response = await AuthService.googleLogin(tokenId);

    return response;
  },

  async submitGoogleActivation({ state }) {
    const body = state.register.data;

    const response = await AuthService.googleRegister({
      tokenId: state.register.tokenId || '',
      ...body,
    });

    return response;
  },
  async submitForgotPassword({ state }) {
    const body = state.forgotPassword;
    const response = await AuthService.forgotPassword(body);

    return response;
  },
  async submitResetPassword({ state }) {
    const body = state.resetPassword;
    const response = await AuthService.resetPassword(body);

    return response;
  },
};

export const getters: GetterTree<any, void> = {
  getCurrentUser: (state): any => state.currentUser,
  getLoginData: (state): {email:string, password: string} => state.login,
  getRegisterAccessData: (state):RegisterAccessDataType => state.register.accessData,
  getRegisterActivationData: (state):RegisterActivationDataType => state.register.data,
  getRegisterData: (state): RegisterType => state.register,
  getCheckEmailData: (state):CheckEmailType => state.checkEmail,
  getForgotPasswordData: (state):ForgotPasswordType => state.forgotPassword,
  getResetPasswordData: (state):ResetPasswordType => state.resetPassword,
};
