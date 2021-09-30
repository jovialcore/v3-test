import { ActionTree, GetterTree, MutationTree } from 'vuex';
import $api from '@/services';

type BaseAuthType = {
  email: string;
  password: string;
};

type GlobalType = {
  login: BaseAuthType;
  register: BaseAuthType;
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
    email: '',
    password: '',
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
  SET_FORGOT_PASSWORD_DATA(state, data) {
    state.forgotPassword = data;
  },
};

export const actions: ActionTree<GlobalType, void> = {
  setLoginData: ({ commit }, data: BaseAuthType) => commit('SET_LOGIN_DATA', data),
  setRegisterData: ({ commit }, data: BaseAuthType) => commit('SET_LOGIN_DATA', data),
  setForgotPasswordData: ({ commit }, data:{email: string}) => commit('SET_LOGIN_DATA', data),
  async submitLogin({ state }) {
    const body = state.login;
    const response = await $api.auth.login(body);

    return response;
  },
  async submitRegister({ state }) {
    const body = state.register;
    const response = await $api.auth.login(body);

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
};
