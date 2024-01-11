/* eslint-disable import/extensions */
import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
