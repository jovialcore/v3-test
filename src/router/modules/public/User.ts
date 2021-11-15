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
      path: 'reset/:token/password',
      redirect: { name: 'ForgotPassword' },
    },
  ],
};
