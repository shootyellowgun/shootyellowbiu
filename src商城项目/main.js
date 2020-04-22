import Vue from 'vue'
import App from './App.vue'
import './eventbus'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import './remscale.js'
import animate from 'animate.css'
import router from './router.js'
import store from './store.js'

import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  animate,
  store
}).$mount('#app')
