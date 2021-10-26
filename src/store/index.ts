import { createStore, ModuleTree } from 'vuex';

export async function setupStore() {
  const files = import.meta.glob('./modules/*.ts');

  const modules: ModuleTree<any> = {};
  for (const file in files) {
    const structures = file.split('/');
    const fileName = structures[structures.length - 1].replace('.ts', '');
    const module = await files[file]();

    modules[fileName] = {
      namespaced: true,
      ...module,
    };
  }

  return createStore({
    modules,
  });
}
