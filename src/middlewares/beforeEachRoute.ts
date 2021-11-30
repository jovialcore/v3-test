import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
// import $api from '../services';

import { setupStore } from '../store'
import AuthService from '@/services/Auth';

function getLang(backendLang: string) {
  if(backendLang === 'br')
    return 'pt-BR'

  return 'en-US'
}

const AUTH_ROUTES_NAMES = [
  'ActivateRegistration',
  'CheckEmail',
  'ForgotPassword',
  'Login',
  'Logout',
  'RegisterFinished',
  'RegisterStep1',
  'RegisterStep2',
  'RegisterStep3',
  'ResetPassword',
  'Settings',
  'TestArea',
];

async function isAuthenticated(): Promise<boolean | string> {  const store = await setupStore();
  const response = await AuthService.currentUser();
  if (!response.errors) {
    store.dispatch('auth/setCurrentUser', response.data)
    window.localStorage.setItem('lang', getLang(response.data.language))
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
