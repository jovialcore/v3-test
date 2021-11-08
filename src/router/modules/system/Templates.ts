export default {
  path: '/templates',
  component: () => import('@/layouts/System.vue'),
  children: [
    {
      path: '',
      name: 'Templates',
      components: {
        default: () => import('@/views/System/Templates.vue'),
      },
    },
  ],
};
