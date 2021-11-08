export default {
  path: '/library',
  component: () => import('@/layouts/System.vue'),
  children: [
    {
      path: '',
      name: 'Library',
      components: {
        default: () => import('@/views/System/Library.vue'),
      },
    },
  ],
};
