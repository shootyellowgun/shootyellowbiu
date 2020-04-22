import Vue from 'vue'
import App from './App.vue'
import VueJsonp from 'vue-jsonp'
// import animated from 'animate.css'
require('../node_modules/animate.css/animate.min.css')
// Vue.use(animated)
Vue.use(VueJsonp)
Vue.config.productionTip = false
import store from './store.js'
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

