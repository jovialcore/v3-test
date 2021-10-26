import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/Dashboard.vue'),
  redirect: { name: 'Dashboard' },
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard/index.vue'),
    },
    {
      path: 'documents',
      name: 'Documents',
      components: {
        default: () => import('@/views/Dashboard/Documents.vue'),
        OptionsSidebar: () => import('@/views/Dashboard/OptionsSidebar/Documents.vue'),
      },
    },
    {
      path: 'settings',
      components: {
        OptionsSidebar: () => import('@/views/Dashboard/OptionsSidebar/Settings.vue'),
      },
      children: [
        {
          path: '',
          name: 'Settings',
          components: {
            default: () => import('@/views/Dashboard/Settings/index.vue'),
          },
        },
        {
          path: 'team',
          name: 'Team',
          components: {
            default: () => import('@/views/Dashboard/Settings/Team.vue'),
          },
        },
      ],
    },
    {
      path: 'templates',
      name: 'Templates',
      components: {
        default: () => import('@/views/Dashboard/Templates.vue'),
        OptionsSidebar: () => import('@/views/Dashboard/OptionsSidebar/Templates.vue'),
      },
    },
    {
      path: 'library',
      name: 'Library',
      components: {
        default: () => import('@/views/Dashboard/Library.vue'),
        OptionsSidebar: () => import('@/views/Dashboard/OptionsSidebar/Library.vue'),
      },
    },
    {
      path: 'contacts',
      name: 'Contacts',
      components: {
        default: () => import('@/views/Dashboard/Contacts.vue'),
        OptionsSidebar: () => import('@/views/Dashboard/OptionsSidebar/Contacts.vue'),
      },
    },
    {
      path: 'addons',
      name: 'Addons',
      components: {
        default: () => import('@/views/Dashboard/Addons.vue'),
        OptionsSidebar: () => import('@/views/Dashboard/OptionsSidebar/Addons.vue'),
      },
    },
  ],
} as RouteRecordRaw;
