import Vue from 'vue'
import Router from 'vue-router'


// import Home from '@/views/Home/index'
// import Login from '@/views/Login'
// import Register from '@/views/Register'
// import Admin from '@/views/Admin/index'

const Home = () => import('@/views/Home/index.vue')
const Login = () => import('@/views/Login')
const Register = () => import('@/views/Register')
const Admin = () => import('@/views/Admin/index')

Vue.use(Router)

export default new Router({
    mode: 'history',
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
            path: '/reg',
            component: Register
        },
        {
            path: '/admin',
            meta: { // 配置该路由的一些信息的，（完全自定义的）
                auth_login: true
            },
            name: 'Admin',
            component: Admin
        }
    ]
})
