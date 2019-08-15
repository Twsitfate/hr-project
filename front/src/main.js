import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import url from '@/modules/url.js'
import axios from 'axios' 

// 将请求地址挂载到vue上
Vue.prototype.$url = url 

/**
 *  将axios挂载到vue上  Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。 
 *  参考文档 http://www.axios-js.com/zh-cn/docs/
 */
Vue.prototype.$http = axios 

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
