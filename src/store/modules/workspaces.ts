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


  async remove(_, _id) {
    const response = await WorkspacesService.delete(_id);
    return response;
  },

  select({ commit, state }, index) {
    const workspace = Object.assign({}, state.workspaces[index]);
    workspace.company = workspace.company._id;
    commit('SET_WORKSPACE', workspace);
  },  

  setTeam({ commit, state }, team) {
    commit('SET_WORKSPACE', Object.assign(state.workspace, {team}));
  },
};

export const getters: GetterTree<any, void> = {
  get: (state) => state.workspaces,
  getWorkspace: (state) => state.workspace,
};
