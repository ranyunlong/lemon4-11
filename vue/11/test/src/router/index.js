import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import User from '@/views/User'
import Role from '@/views/Role'
import Menu from '@/views/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin'
    },
    {
      path: '/login',
      component: Login,
      meta: {
        auth_not_login: true, // 验证未登陆 (必须没有登陆才能访问)
      }
    },
    {
      path: '/admin',
      meta: { // 路由的元信息, 这里的属性都是自定义的
        auth_login: true, // 表示验证已登录 （必须登陆才能访问）
      },
      component: Admin,
      children: [
        {
          path: 'user',
          component: User
        },
        {
          path: 'role',
          component: Role
        },
        {
          path: 'menu',
          component: Menu
        }
      ]
    }
  ]
})
