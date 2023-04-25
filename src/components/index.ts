/**
 * 全局组件注册
 */
import type App from '@/App.vue'
import { type Component } from 'vue'

import Example from './example/index.vue'

const componentsMap: Record<string, Component> = {
  Example
}

export default {
  install (app: App<Element>) {
    for (const key in componentsMap) {
      app.component(key, componentsMap[key])
    }
  }
}
