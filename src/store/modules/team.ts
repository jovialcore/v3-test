import { ActionTree, GetterTree, MutationTree } from 'vuex';
import $api from '@/services';
import TeamService from '@/services/NewTeam';

export type InviteType = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  role: string;
  language: string;
};

export const state = {
  invite: {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    role: '',
    language: '',
  },
  teams: [],
};

export const mutations: MutationTree<any> = {
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
  SET_TEAMS(state, data) {
    state.teams = data;
  }
};

export const actions: ActionTree<any, void> = {
  resetInvite: ({ commit }) => commit('SET_RESET_INVITE'),
  async submitInvite({ state }) {
    const body = state.invite;
    const response = await $api.team.invite(body);

    return response;
  },
  async getTeams({ commit }) {
    const {data} = await TeamService.get();
    console.log(data)
    commit('SET_TEAMS', data)
  },

};

export const getters: GetterTree<any, void> = {
  getInvite: (state):InviteType => state.invite,
  get: (state) => state.teams,
};
