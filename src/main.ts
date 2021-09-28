import '@/assets/styles/main.scss';
import '@/assets/styles/form.scss';
import '@/assets/styles/description.scss';
import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import App from './App.vue';
import SetupBaseComponents from './configs/SetupBaseComponents';
import SetupI18n from './configs/SetupI18n';
import router from './router';
import store from './store';
import SetupGoogleAuth from './configs/SetupGoogleAuth';

const app = createApp(App);

SetupBaseComponents(app);
SetupI18n(app);
SetupGoogleAuth(app);

app.use(VueLazyLoad);
app.use(store);
app.use(router);
app.mount('#app');
