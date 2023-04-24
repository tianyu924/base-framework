import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'

import ElementPlus from '@/plugins/element-plus'
import router from '@/router'
import { store, key } from '@/store'

createApp(App).use(router).use(store, key).use(ElementPlus).mount('#app')
