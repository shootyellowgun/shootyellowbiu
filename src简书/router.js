import VueRouter from 'vue-router'
import Vue from 'vue'
import Content from './components/Content'
import Add from './components/Add'
import Abc from './components/Abc'
import Details from './components/Details'
import Update from './components/Update'
Vue.use(VueRouter)


var routes = [
    {
        path: '/', component: Content
    }, {
        path: '/add', component: Add
    }, {
        path: '/luan', component: Abc
    }, {
        path: '/details:id', component: Details
    }, {
        path: '/update:id', component: Update
    },
]

var router = new VueRouter({ routes, mode: 'history' })

export default router;