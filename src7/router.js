import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/Home.vue'
import Classify from './components/Classify.vue'
import Car from './components/Car.vue'
import Mine from './components/Mine.vue'
import Homer from './components/Homer.vue'
import Fuck from './components/Fuck.vue'
import Game from './components/Game.vue'
import Classifyer from './components/Classifyer.vue'
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
    {
        path: '/homer/:id', component: Homer
    },
    {
        path: '/classifyer', component: Classifyer
    },
    {
        path:'/main/fuck',component:Fuck
    },
    {
        path:'/main/game',component:Game
    },
    {
        path:'*',redirect:'/'
    }
]

//创建路由实例
var router = new VueRouter({ routes, mode: 'history' })

export default router;