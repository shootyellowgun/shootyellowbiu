import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Recommend from './components/Recommend.vue'
import Ranking from './components/Ranking.vue'
import Search from './components/Search.vue'
var routes = [
    {
        path: '/', component: Recommend
    },
    {
        path: '/Ranking', component: Ranking
    },
    {
        path: '/Search', component: Search
    }

]

//创建路由实例
var router = new VueRouter({ routes, mode: 'history' })

export default router;