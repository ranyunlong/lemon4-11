// 1.添加vue
import Vue from 'vue'
// 2.添加vue路由
import VueRouter from 'vue-router'

// 3.在vue里注册路由插件
Vue.use(VueRouter)

// 导入页面组件
import Home from '@/views/Home'
import Login from '@/views/Login'
import About from '@/views/About'

// 4.创建路由
export default new VueRouter({
    mode: 'history',  // hash模式  history模式
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/about',
            component: About
        }
    ]
})