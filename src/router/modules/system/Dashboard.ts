import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/System.vue'),
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/System/index.vue'),
    },
  ],
} as RouteRecordRaw;
