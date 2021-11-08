export default {
  path: '/addons',
  component: () => import('@/layouts/System.vue'),
  children: [
    {
      path: '',
      name: 'Addons',
      components: {
        default: () => import('@/views/System/Addons.vue'),
      },
    },
  ],
};
