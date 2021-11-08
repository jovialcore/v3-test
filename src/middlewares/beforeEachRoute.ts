import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
// import $api from '../services';
import AuthService from '@/services/NewAuth';

const AUTH_ROUTES_NAMES = [
  'Activation',
  'CheckEmail',
  'ForgotPassword',
  'Login',
  'Logout',
  'RegisterFinished',
  'RegisterStep1',
  'RegisterStep2',
  'RegisterStep3',
  'Settings',
  'TestArea',
];

async function isAuthenticated(): Promise<boolean | string> {
  // const response = await $api.auth.currentUser();
  const response = await AuthService.currentUser();
  if (!response.errors) {
    return !!response.data;
  }

  return false;
}

export default async function beforeEachRoute(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
): Promise<void> {
  try {
    const toName = to.name?.toString() || '';

    if (!AUTH_ROUTES_NAMES.includes(toName)) {
      const userAuthenticated = await isAuthenticated();

      if (!userAuthenticated) {
        next({ name: 'Login' });

        return;
      }
    }
  } catch (_) {
    next({ name: 'Login' });
    return;
  }

  next();
}
