import { createStore, ModuleTree } from 'vuex';

type ContextType = __WebpackModuleApi.RequireContext;
type ModuleType = {
  [key: string]: ContextType;
};

const files: ContextType = require.context('.', true, /\.ts$/);

const modules: ModuleTree<ModuleType> = {};

files.keys().forEach((fileName) => {
  if (fileName === './index.ts') return;

  const moduleName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .replace('modules/', '');

  modules[moduleName] = {
    namespaced: true,
    ...files(fileName),
  };
});

const store = createStore({
  modules,
});

export default store;
