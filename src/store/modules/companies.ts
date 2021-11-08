import { ActionTree, GetterTree, MutationTree } from 'vuex';
import $api from '@/services';
import CompaniesService from '@/services/Companies';

export const state: any = {
  companies: undefined,
};

export const mutations: MutationTree<any> = {
  SET_COMPANIES(state, data) {
    console.log('setting', data);
    state.companies = data;
  },
};

export const actions: ActionTree<any, void> = {
  async getUser({ commit }) {
    const response = await $api.auth.currentUser();

    commit('SET_CURRENT_USER', response.data);

    return response;
  },
  async getCompanies({ commit }) {
    const { data } = await CompaniesService.get();
    commit('SET_COMPANIES', data);
  },
};

export const getters: GetterTree<any, void> = {
  get: (state) => state.companies,
};
