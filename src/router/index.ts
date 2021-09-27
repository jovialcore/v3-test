import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

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
        path: 'step/1',
        name: 'RegisterStep1',
        component: () => import('@/views/Public/Register.vue'),
      },
      {
        path: 'step/2',
        name: 'RegisterStep2',
        component: () => import('@/views/Public/Step2.vue'),
      },
    ],
  },
  {
    path: '/forgot-password',
    component: () => import('@/layouts/Public.vue'),
    children: [
      {
        name: 'ForgotPassword',
        path: '',
        component: () => import('@/views/Public/ForgotPassword.vue'),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
