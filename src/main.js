import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { store } from './Store';
import {Router} from './Router';


const vueApp = createApp(App)


vueApp.use(store)
vueApp.use(Router)
vueApp.mount('#app')
