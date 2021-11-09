import { ActionTree, GetterTree, MutationTree } from 'vuex';
import $api from '@/services';

export type InviteType = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  role: string;
  language: string;
};

type GlobalType = {
  invite: InviteType;
};

export const state: GlobalType = {
  invite: {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    role: '',
    language: '',
  },
};

export const mutations: MutationTree<GlobalType> = {
  SET_RESET_INVITE(state) {
    state.invite = {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      role: '',
      language: '',
    };
  },
};

export const actions: ActionTree<GlobalType, void> = {
  resetInvite: ({ commit }) => commit('SET_RESET_INVITE'),
  async submitInvite({ state }) {
    const body = state.invite;
    const response = await $api.team.invite(body);

    return response;
  },
  async getTeam({ state }) {
    const body = state.invite;
    const response = await $api.team.invite(body);

    return response;
  },

};

export const getters: GetterTree<GlobalType, void> = {
  getInvite: (state):InviteType => state.invite,
};
