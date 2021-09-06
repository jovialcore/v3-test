import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import BR from '../i18n/br.json';
import ES from '../i18n/es.json';
import FR from '../i18n/fr.json';
import US from '../i18n/us.json';

function SetupI18n(app: App): void {
  const i18n = createI18n({
    locale: window.localStorage.getItem('lang') || 'br',
    messages: {
      br: BR,
      es: ES,
      fr: FR,
      us: US,
    },
  });

  app.use(i18n);
}

export default SetupI18n;
