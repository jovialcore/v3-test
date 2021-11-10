import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/user',
  component: () => import('@/layouts/Public.vue'),
  children: [
    {
      name: 'ActivateRegistration',
      path: 'activate/:token/register',
      redirect: { name: 'RegisterStep2' },
    },
    {
      name: 'ResetPassword',
      path: 'reset/:token',
      redirect: { name: 'ForgotPassword' },
    },
    {
      path: '/xxx',
      name: 'XXX',
      component: () => import('@/views/TestArea.vue'),
    }
  ],
};
