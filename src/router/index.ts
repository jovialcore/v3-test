import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import beforeEachRoute from '@/middlewares/beforeEachRoute';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(beforeEachRoute);

export default router;
