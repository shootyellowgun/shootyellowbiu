import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/Home.vue'
import Classify from './components/Classify.vue'
import Car from './components/Car.vue'
import Mine from './components/Mine.vue'
import Details from './components/Details.vue'
import Login from './components/Login.vue'
import Legister from './components/Legister.vue'
// import Evealuateinner from './components/Evealuateinner.vue'
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
    {
        path: '/login', component: Login
    },
    {
        path: '/legister', component: Legister
    },
    // {
    //     path: '*', redirect: '/'
    // },
    {
        path: '/details/:id', component: Details,
    },
    // {
    //     path: '/evealuateinner', component: Evealuateinner
    // },

]

//创建路由实例
var router = new VueRouter({ routes, mode: 'history' })

export default router;