import Vue from 'vue'
import App from './App.vue'
import './eventbus'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import axios from 'axios'
import router from './router.js'
import { InfiniteScroll } from 'mint-ui';
// import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import store from './store.js'

Vue.use(InfiniteScroll);

Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
