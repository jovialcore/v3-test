import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import beforeEachRoute from '../middlewares/beforeEachRoute';

export async function setupRouter() {
  const routes: Array<RouteRecordRaw> = [];

  const files = import.meta.glob('./modules/**/*.ts');

  for (const file in files) {
    const module = await files[file]();

    routes.push(module.default);
  }

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  //router.beforeEach(beforeEachRoute);

  return router;
}
