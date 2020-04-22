import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Recommend from './components/Recommend.vue'
import Ranking from './components/Ranking.vue'
import Search from './components/Search.vue'
import Hot from './components/Hot.vue'
import History from './components/History.vue'
var routes = [
    {
        path: '/', component: Recommend
    },
    {
        path: '/ranking', component: Ranking
    },
    {
        path: '/search', component: Search, children: [
            {
                path: '/search/hot', component: Hot
            },
            {
                path: '/search/history', component: History
            }
        ]
    },

]

//创建路由实例
var router = new VueRouter({ routes, mode: 'history' })

export default router;