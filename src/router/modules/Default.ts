import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/layouts/Public.vue'),
  children: [
    {
      name: 'Fallback',
      path: '',
      component: () => import('@/views/Public/NotFound.vue'),
    },
  ],
} as RouteRecordRaw;
