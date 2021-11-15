import { ActionTree, GetterTree, MutationTree } from 'vuex';
import $api from '@/services';
import { UserType } from '@/types/User';

type GlobalType = {
  currentUser: UserType;
};

export const state: GlobalType = {
  currentUser: undefined,
};

export interface User {
  email: string,
}

export const mutations: MutationTree<GlobalType> = {
  SET_CURRENT_USER(state, data) {
    state.currentUser = data;
  },
};

export const actions: ActionTree<GlobalType, void> = {
  // async getUser({ commit }) {
  //   const response = await $api.auth.currentUser();

  //   commit('SET_CURRENT_USER', response.data);

  //   return response;
  // },
  async setUser({ commit }, user: UserType) {
    commit('SET_CURRENT_USER', user);
  },
};

export const getters: GetterTree<GlobalType, void> = {
  getCurrentUser: (state) => state.currentUser,
};
