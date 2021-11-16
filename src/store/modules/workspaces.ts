import { ActionTree, GetterTree, MutationTree } from 'vuex';
import WorkspacesService from '@/services/Workspaces';

export const state: any = {
  workspace: {
    company: '',
    workspaceName: '',
    team: [],
  },
  workspaces: [],
};

export const mutations: MutationTree<any> = {
  SET_WORKSPACE(state, data) {
    state.workspace = data;
  },
  SET_WORKSPACES(state, data) {
    state.workspaces = data;
  },
};

export const actions: ActionTree<any, void> = {
  clear({ commit }) {
    commit('SET_WORKSPACE', {
      company: '',
      workspaceName: '',
      team: [],
    });
  },
  
  async create({ state }) {
    const response = await WorkspacesService.create(state.workspace);
    return response;
  },

  async getWorkspaces({ commit }) {
    const { data } = await WorkspacesService.get();
    commit('SET_WORKSPACES', data);
  },

  select({ commit, state }, index) {
    commit('SET_WORKSPACE', state.workspaces[index]);
  },  

};

export const getters: GetterTree<any, void> = {
  get: (state) => state.workspaces,
  getWorkspace: (state) => state.workspace,
};
