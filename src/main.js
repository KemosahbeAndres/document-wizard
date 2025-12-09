import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { db } from './firebase/index.js';

import * as BootstrapVueNext from 'bootstrap-vue-next'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import './assets/custom.scss'

//import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(BootstrapVueNext)

app.mount('#app')
