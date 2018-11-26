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
import News from '@/views/News'
import Detail from '@/views/Detail'
import NotFound from '@/views/NotFound'
import Goods from '@/views/Goods'
import GoodsList from '@/views/GoodsList'
import GoodsInfo from '@/views/GoodsInfo'

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
        },
        {
            path: '/news',
            component: News,
            children: [ // 子路由
                {
                    path: ':id',
                    component: Detail
                }
            ]
        },
        {
            path: '/goods',
            component: Goods,
            children: [
                {
                    // 如果子路由里存在 '/'路径表示这个路径是上级路径的默认显示组件
                    // 上级路径就不能添加name 属性
                    path: '/',
                    component: GoodsList
                },
                {
                    path: 'info',
                    component: GoodsInfo
                }
            ]
        },
        {
            path: '/error.html',
            component: NotFound
        },
        {
            path: '*',                      // 星号是通配符 
            redirect: '/error.html',        // 重定向
            component: NotFound
        }
    ]
})


// 谁的children 就在谁的组件里显示
// 同级的路由跟上级路由没有什么关系

// alias 别名的作用 虽然显示的是当前组件的内容但是地址栏的地址是别名的地址
// 别名只能是父路径的地址


// 动态路由 适合用于页面结构相同 内容不同的情况
// 动态路由要获取到参数 必须通过在路由组件里使用 $route 对象来获取到当前路径的信息
// 动态路由的组件 只创建一次, 后面就使用相同的组件来切换内容