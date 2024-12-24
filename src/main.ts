import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import SvgIcon from '@/components/SvgIcon/index.vue'
import './assets/iconfont/index.js'
import '@/assets/styles/reset.css'
import '@/utils/permission.ts'

const pinia = createPinia()

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(router).use(pinia).mount('#app')
