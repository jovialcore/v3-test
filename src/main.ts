import '@/assets/styles/main.scss';
import '@/assets/styles/form.scss';
import '@/assets/styles/description.scss';
import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import GAuth from 'vue3-google-oauth2';
import App from './App.vue';
import setupBaseComponents from './configs/setupBaseComponents';
import setupI18n from './configs/setupI18n';
import router from './router';
import store from './store';

const gAuthOptions = {
  clientId: '279866144341-4cd5e7rkjm41sll9p1iic8pqvpqh7jj7.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: false,
};

const app = createApp(App);

app.use(GAuth, gAuthOptions);
setupBaseComponents(app);
setupI18n(app);
app.use(VueLazyLoad);
app.use(store);
app.use(router);
app.mount('#app');
