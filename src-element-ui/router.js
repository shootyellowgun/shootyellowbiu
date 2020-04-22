import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/Home.vue'
// import Login from './components/Login.vue'
import Addper from './components/Addper.vue'
import Addgoods from './components/Addgoods.vue'
import Adduser from './components/Adduser.vue'
import Text from './components/Text.vue'
import Person from './components/Person.vue'
import Goods from './components/Goods.vue'
import User from './components/User.vue'
import Addtext from './components/Addtext.vue'
var routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/person', component: Person
    },

    {
        path: '/addper', component: Addper
    },
    {
        path: '/goods', component: Goods
    },
    {
        path: '/addgoods', component: Addgoods
    },
    {
        path: '/user', component: User
    },
    {
        path: '/adduser', component: Adduser
    },
    {
        path: '/text', component: Text
    },
    {
        path:'/addtext',component:Addtext
    }
]

var router = new VueRouter({ routes, mode: 'history' })

export default router;