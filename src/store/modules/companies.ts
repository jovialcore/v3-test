import { ActionTree, GetterTree, MutationTree } from 'vuex';
import $api from '@/services';
import CompaniesService from '@/services/Companies';

export const state: any = {
  companies: [],
  company: {
    companyName: '',
    description: '',
    subsidiary: '',
  },
};

export const mutations: MutationTree<any> = {
  SET_COMPANIES(state, data) {
    console.log('setting', data);
    state.companies = data;
  },
};

export const actions: ActionTree<any, void> = {
  async create({ state }) {
    const response = await CompaniesService.create(state.company);

    return response;
  },
  async getCompanies({ commit }) {
    const { data } = await CompaniesService.get();
    commit('SET_COMPANIES', data);
  },
};

export const getters: GetterTree<any, void> = {
  get: (state) => state.companies,
  getCompany: (state) => state.company,
};
