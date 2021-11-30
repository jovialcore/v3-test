import { ActionTree, GetterTree, MutationTree } from 'vuex';
import TeamService from '@/services/Team';

// export type InviteType = {
//   firstName: string;
//   lastName: string;
//   company: string;
//   email: string;
//   role: string;
//   language: string;
// };

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
  team: []
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
  SET_TEAM(state, data) {
    state.team = data;
  },
  SET_TEAMS(state, data) {
    state.teams = data;
  }
};

export const actions: ActionTree<any, void> = {
  async filterTeam({ commit }, companyId: string) {
    const {data} = await TeamService.getByCompanyId(companyId);
    commit('SET_TEAM', data)
  },

  async getTeams({ commit }) {
    const {data} = await TeamService.get();
    commit('SET_TEAMS', data)
  },

  async remove(_, _id) {
    const {data} = await TeamService.delete(_id);
  },

  resetInvite: ({ commit }) => commit('SET_RESET_INVITE'),

  async submitInvite({ state }) {
    const response = await TeamService.invite(state.invite);

    return response;
  },

};

export const getters: GetterTree<any, void> = {
  get: (state) => state.teams,
  getInvite: (state) => state.invite,
  getTeam: (state) => state.team,
};
