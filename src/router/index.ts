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
        path: '',
        name: 'RegisterStep1',
        component: () => import('@/views/Public/Register.vue'),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
