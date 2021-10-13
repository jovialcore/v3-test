import '@/assets/styles/main.scss';
import '@/assets/styles/form.scss';
import '@/assets/styles/description.scss';

import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import Maska from 'maska';
import App from './App.vue';
import setupBaseComponents from './configs/setupBaseComponents';
import SetupGoogleAPI from './configs/SetupGoogleAPI';

import router from './router';
import store from './store';
import i18n from './i18n';

SetupGoogleAPI();

const app = createApp(App);
app.use(Maska);

setupBaseComponents(app);

app.use(i18n);
app.use(VueLazyLoad);
app.use(store);
app.use(router);

app.mount('#app');
