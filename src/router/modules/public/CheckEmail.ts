export default {
  path: '/check-email',
  component: () => import('@/layouts/Public.vue'),
  children: [
    {
      name: 'CheckEmail',
      path: '',
      component: () => import('@/views/Public/CheckEmail.vue'),
    },
  ],
};
