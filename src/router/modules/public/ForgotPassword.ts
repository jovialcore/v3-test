import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/forgot-password',
  component: () => import('@/layouts/Public.vue'),
  children: [
    {
      name: 'ForgotPassword',
      path: ':token?',
      component: () => import('@/views/Public/ForgotPassword.vue'),
      props: true,
    },
  ],
} as RouteRecordRaw;
