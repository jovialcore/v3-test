import { ActionTree, GetterTree, MutationTree } from 'vuex';
import $api from '@/services';

export type BaseAuthType = {
  email: string;
  password: string;
};

export type RegisterActivationStep2Type = {
  firstName: string;
  lastName: string;
  job: string;
  whatBringsYouHere: string;
  phone: string;
};

export type RegisterActivationStep3Type = {
  company: string;
  size: string;
  industry: string;
  crm: string;
};

export type RegisterActivationType =
  RegisterActivationStep2Type &
  RegisterActivationStep3Type & {
    activationToken: string;
  };

export type RegisterAccessDataType = BaseAuthType & { language: string };

export type RegisterType = {
  accessData: RegisterAccessDataType,
  activationData: RegisterActivationType,
  currentStep: string;
};

type GlobalType = {
  login: BaseAuthType;
  register: RegisterType;
  forgotPassword: {
    email: string;
    language: string;
  };
};

export const state: GlobalType = {
  login: {
    email: '',
    password: '',
  },
  register: {
    accessData: {
      email: '',
      password: '',
      language: '',
    },
    activationData: {
      activationToken: '',
      firstName: '',
      lastName: '',
      job: '',
      whatBringsYouHere: '',
      phone: '',
      company: '',
      size: '',
      industry: '',
      crm: '',
    },
    currentStep: '',
  },
  forgotPassword: {
    email: '',
    language: '',
  },
};

export const mutations: MutationTree<GlobalType> = {
  SET_LOGIN_DATA(state, data) {
    state.login = data;
  },
  SET_REGISTER_DATA(state, data) {
    state.register = data;
  },
  SET_REGISTER_ACCESS_DATA(state, data) {
    state.register.accessData = data;
  },
  SET_REGISTER_ACTIVATION_STEP2_DATA(state, data) {
    state.register.activationData.activationToken = data.activationToken;
    state.register.activationData.firstName = data.firstName;
    state.register.activationData.lastName = data.lastName;
    state.register.activationData.job = data.job;
    state.register.activationData.whatBringsYouHere = data.whatBringsYouHere;
    state.register.activationData.phone = data.phone.replace('+', '').replace(/ /g, '');
  },
  SET_REGISTER_ACTIVATION_STEP3_DATA(state, data) {
    state.register.activationData.company = data.company;
    state.register.activationData.size = data.size;
    state.register.activationData.industry = data.industry;
    state.register.activationData.crm = data.crm;
  },
  SET_REGISTER_STEP(state, data) {
    state.register.currentStep = data;
  },
  SET_FORGOT_PASSWORD_DATA(state, data) {
    state.forgotPassword = data;
  },
};

export const actions: ActionTree<GlobalType, void> = {
  setLoginData: ({ commit }, data: BaseAuthType) => commit('SET_LOGIN_DATA', data),

  setRegisterAccessData: ({ commit }, data: BaseAuthType & { language: string }) => commit('SET_REGISTER_ACCESS_DATA', data),

  setRegisterActivationStep2(
    { commit }, data: RegisterActivationStep2Type & { activationToken: string },
  ) { commit('SET_REGISTER_ACTIVATION_STEP2_DATA', data); },

  setRegisterActivationStep3({ commit }, data: RegisterActivationStep3Type) {
    commit('SET_REGISTER_ACTIVATION_STEP3_DATA', data);
  },

  setForgotPasswordData: ({ commit }, data:{ email: string }) => commit('SET_FORGOT_PASSWORD_DATA', data),
  async submitLogin({ state }) {
    const body = state.login;
    const response = await $api.auth.login(body);

    return response;
  },

  async submitRegister({ state }) {
    const body = state.register.accessData;
    const response = await $api.auth.register(body);

    return response;
  },

  async submitActivation({ state }) {
    const body = state.register.activationData;
    console.log(body);
    const response = await $api.auth.activation(body);

    return response;
  },

  async submitForgotPassword({ state }) {
    const body = state.forgotPassword;
    const response = await $api.auth.forgotPassword(body);

    return response;
  },
};

export const getters: GetterTree<GlobalType, void> = {
  getLoginData: (state) => state.login,
  getRegisterAccessData: (state): RegisterAccessDataType => state.register.accessData,
  getRegisterActivationData: (state): RegisterActivationType => state.register.activationData,
};
