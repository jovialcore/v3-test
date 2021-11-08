export default {
  path: '/help',
  component: () => import('@/layouts/System.vue'),
  children: [
    {
      path: '',
      name: 'Help',
      components: {
        default: () => import('@/views/TestArea.vue'),
      },
    },
  ],
};
