import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { BootstrapVue3} from 'bootstrap-vue-3';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
