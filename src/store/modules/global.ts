import { ActionTree, GetterTree, MutationTree } from 'vuex';

type GlobalType = {
  message: string;
  error: string;
  loading: boolean;
};

export const state: GlobalType = {
  message: '',
  error: '',
  loading: false,
};

export const mutations: MutationTree<GlobalType> = {
  SET_MESSAGE(state, data) {
    state.message = data;
  },
  SET_ERROR(state, data) {
    state.error = data;
  },
  SET_LOADING(state) {
    state.loading = !state.loading;
  },
};

export const actions: ActionTree<GlobalType, void> = {
  updateMessage: ({ commit }, { message }) => commit('SET_MESSAGE', message),
  updateError: ({ commit }, { error }) => commit('SET_ERROR', error),
  setLoading: ({ commit }) => commit('SET_LOADING'),
};

export const getters: GetterTree<GlobalType, void> = {
  getError: (state) => state.error,
  getMessage: (state) => state.message,
  getLoading: (state) => state.loading,
};
