import Vue from 'vue'
import App from './App.vue'
import './eventbus'
import './assets/css/reset.css'
import './assets/font/iconfont.css'

import router from './router.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
