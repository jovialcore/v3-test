import { createStore, ModuleTree } from 'vuex';

const files = import.meta.glob('./modules/*.ts');

const modules: ModuleTree<any> = {};

Object.keys(files).forEach(async (file) => {
  const structures = file.split('/');
  const fileName = structures[structures.length - 1].replace('.ts', '');
  const module = await files[file]();

  modules[fileName] = {
    namespaced: true,
    ...module,
  };
});

export const store = createStore({
  modules,
});
