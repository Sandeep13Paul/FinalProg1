import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import ToastPlugin from 'vue-toast-notification';
import {LoadingPlugin} from 'vue-loading-overlay';

import 'vue-toast-notification/dist/theme-bootstrap.css';


const app = createApp(App);
const pinia = createPinia();
 
pinia.use(piniaPluginPersistedstate);
 
app.use(pinia);
app.use(router);
app.use(LoadingPlugin);
app.mount('#app')
app.use(ToastPlugin);