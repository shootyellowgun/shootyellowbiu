import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/Home.vue'
import Classify from './components/Classify.vue'
import Car from './components/Car.vue'
import Mine from './components/Mine.vue'
// import History from './components/History.vue'
var routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/classify', component: Classify
    },
    {
        path: '/car', component: Car
    },
    {
        path: '/mine', component: Mine
    },
]

//创建路由实例
var router = new VueRouter({ routes, mode: 'history' })

export default router;