import { ActionTree, GetterTree, MutationTree } from 'vuex';
import CompaniesService from '@/services/Companies';

export const state: any = {
  companies: [],
  company: {
    companyName: '',
    description: '',
    subsidiary: undefined,
  },
};

export const mutations: MutationTree<any> = {
  SET_COMPANY(state, data) {
    state.company = data;
  },
  SET_COMPANIES(state, data) {
    state.companies = data;
  },
};

export const actions: ActionTree<any, void> = {
  clearCurrent({ commit }) {
    commit('SET_COMPANY', {
      companyName: '',
      description: '',
      subsidiary: undefined,
    });
  },

  async create({ state }) {
    const response = await CompaniesService.create(state.company);
    return response;
  },

  async getCompanies({ commit }) {
    const { data } = await CompaniesService.get();
    commit('SET_COMPANIES', data);
  },

  async remove(_, _id) {
    const response = await CompaniesService.delete(_id);
    return response;
  },

  async select({ commit, state }, index) {
    //needed to clone the object to avoid changing the array object while editing
    const selected = Object.assign({}, state.companies[index]);

    selected.subsidiary = selected.subsidiary?._id;
    commit('SET_COMPANY', selected);
  },
  
  async update({ state }) {
    const response = await CompaniesService.patch(state.company._id, state.company);
    return response;
  },
};

export const getters: GetterTree<any, void> = {
  get: (state) => state.companies,
  getCompany: (state) => state.company,
};
