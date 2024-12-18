import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import '@/assets/styles/reset.css'
import '@/utils/permission.ts'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
