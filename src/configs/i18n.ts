import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { Messages } from '@/i18n';

function SetupI18n(app: App): void {
  const i18n = createI18n({
    locale: window.localStorage.getItem('lang') || 'br',
    messages: Messages,
  });

  app.use(i18n);
}

export default SetupI18n;
