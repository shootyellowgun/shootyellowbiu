import Vue from 'vue'
import App from './App.vue'

import router from './router.js'
import './eventbus'
import store from './store.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')
