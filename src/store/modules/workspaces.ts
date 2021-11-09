import { ActionTree, GetterTree, MutationTree } from 'vuex';
import $api from '@/services';
import WorkspacesService from '@/services/Workspaces';

export const state: any = {
  workspace: {
    company: '',
    workspaceName: '',
    team: ['617942fcf230ed8890e49a95'],
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
    commit('SET_WORKSPACE', undefined);
  },
  async create({ state }) {
    const response = await WorkspacesService.create(state.workspace);

    return response;
  },
  async getWorkspaces({ commit }) {
    const { data } = await WorkspacesService.get();
    commit('SET_WORKSPACES', data);
  },
};

export const getters: GetterTree<any, void> = {
  get: (state) => state.workspaces,
  getWorkspace: (state) => state.workspace,
};
