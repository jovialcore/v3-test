export default {
  path: '/documents',
  component: () => import('@/layouts/System.vue'),
  children: [
    {
      path: '',
      name: 'Documents',
      components: {
        default: () => import('@/views/System/Settings/Account.vue'),
      },
    },
    {
      path: '',
      name: 'Templates',
      components: {
        default: () => import('@/views/System/Settings/Account.vue'),
      },
    },
  ],
};
