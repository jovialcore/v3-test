export default {
  path: '/contacts',
  component: () => import('@/layouts/System.vue'),
  children: [
    {
      path: '',
      name: 'Contacts',
      components: {
        default: () => import('@/views/System/Contacts.vue'),
      },
    },
  ],
};
