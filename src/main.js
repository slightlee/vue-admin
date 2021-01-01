import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式
import './styles/index.less'
// 引入 Element Plus
import elementPlus from './plugins/element.js'

createApp(App)
.use(store)
.use(router)
.use(elementPlus)
.mount('#app')
