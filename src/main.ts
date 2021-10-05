import '@/assets/styles/main.scss';
import '@/assets/styles/form.scss';
import '@/assets/styles/description.scss';

import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import GAuth from 'vue3-google-oauth2';
import Maska from 'maska';
import App from './App.vue';
import setupBaseComponents from './configs/setupBaseComponents';

import router from './router';
import store from './store';
import i18n from './i18n';

const gAuthOptions = {
  clientId: '832258936984-mcq1cubb16f8q8ke0gaj2ujuv3puq5n1.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: false,
};

const app = createApp(App);

app.use(GAuth, gAuthOptions);
app.use(Maska);

setupBaseComponents(app);

app.use(i18n);
app.use(VueLazyLoad);
app.use(store);
app.use(router);
app.mount('#app');
