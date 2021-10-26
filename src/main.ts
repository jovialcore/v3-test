import '@/assets/styles/main.scss';
import '@/assets/styles/form.scss';
import '@/assets/styles/description.scss';
import '@/assets/styles/sidebar.scss';
import 'vue-tel-input/dist/vue-tel-input.css';

import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import Maska from 'maska';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import { setupBaseComponents } from './configs/BaseComponents';
import setupGoogleAPI from './configs/SetupGoogleAPI';

import router from './router';
import { setupStore } from './store';
import { i18n } from './i18n';

async function main() {
  const app = createApp(App);

  library.add(fas);
  app.component('font-awesome-icon', FontAwesomeIcon);

  setupGoogleAPI();
  setupBaseComponents(app);

  app.use(router);
  app.use(await setupStore());
  app.use(i18n);
  app.use(VueLazyLoad);
  app.use(Maska);

  app.mount('#app');
}

main();
