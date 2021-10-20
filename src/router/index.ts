import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import beforeEachRoute from '@/middlewares/beforeEachRoute';

const routes: Array<RouteRecordRaw> = [
  {
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
        name: 'Settings',
        components: {
          default: () => import('@/views/Dashboard/Settings.vue'),
          OptionsSidebar: () => import('@/views/Dashboard/OptionsSidebar/Settings.vue'),
        },
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
  },
  {
    path: '/login',
    component: () => import('@/layouts/Public.vue'),
    children: [
      {
        name: 'Login',
        path: '',
        component: () => import('@/views/Public/Login.vue'),
      },
    ],
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('@/layouts/Public.vue'),
    children: [
      {
        path: '',
        name: 'RegisterStep1',
        component: () => import('@/views/Public/Register/Step1.vue'),
      },
      {
        path: 'step/2/:token/:isGoogle?',
        name: 'RegisterStep2',
        component: () => import('@/views/Public/Register/Step2.vue'),
      },
      {
        path: 'step/3/:token/:isGoogle?',
        name: 'RegisterStep3',
        component: () => import('@/views/Public/Register/Step3.vue'),
      },
      {
        path: 'finished',
        name: 'RegisterFinished',
        component: () => import('@/views/Public/Register/Finished.vue'),
      },
    ],
  },
  {
    path: '/forgot-password',
    component: () => import('@/layouts/Public.vue'),
    children: [
      {
        name: 'ForgotPassword',
        path: ':token?',
        component: () => import('@/views/Public/ForgotPassword.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/check-email',
    component: () => import('@/layouts/Public.vue'),
    children: [
      {
        name: 'CheckEmail',
        path: '',
        component: () => import('@/views/Public/CheckEmail.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('@/layouts/Public.vue'),
    children: [
      {
        name: 'Activation',
        path: 'activate/:token',
        redirect: { name: 'RegisterStep2' },
      },
      {
        name: 'ResetPassword',
        path: 'reset/:token',
        redirect: { name: 'ForgotPassword' },
      },
    ],
  },
  {
    path: '/test-area',
    name: 'TestArea',
    component: () => import('@/views/TestArea.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/layouts/Public.vue'),
    children: [
      {
        name: 'Fallback',
        path: '',
        component: () => import('@/views/Public/NotFound.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(beforeEachRoute);

export default router;
