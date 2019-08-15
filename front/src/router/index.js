import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// helloWorld路由
const index = () => import('@/views/index.vue')

let routes = [
    {
        path: '/',
        name: 'index',
        component: index
    }
]

export default new Router({
    routes: routes
})