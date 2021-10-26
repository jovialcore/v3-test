import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/user',
  component: () => import('@/layouts/Public.vue'),
  children: [
    {
      name: 'Activation',
      path: 'activate/:token',
      redirect: { name: 'RegisterStep2' },
    },
    {
      name: 'ResetPassword',
      path: 'reset/:token',
      redirect: { name: 'ForgotPassword' },
    },
  ],
} as RouteRecordRaw;
