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
  clientId: '609637486455-flh50nlbb5ev4tk53iir101j69nrekdo.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: true,
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
