import './assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SetupI18n from './configs/i18n';

const app = createApp(App);
SetupI18n(app);
app.use(store);
app.use(router);
app.mount('#app');
