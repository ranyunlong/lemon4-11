// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

// 使用路由守卫拦截路由
router.beforeEach((to, from, next) => {
  // 全局拦截
  // 验证必须登陆
  const { user, token } = store.state
  if (to.meta.auth_login) {
    if (user && token) {
      return next()
    }
    next({
      path: '/login'
    })
  } else if (to.meta.auth_not_login) { // 验证必须没登录
    // 如果没有登录的情况下可以进入到登录页面
    if (!(user && token)) {
      return next()
    }
    // 反之返回到之前页面
    next(from.fullPath)
  } else {
    next()
  }
})

Vue.use(iview)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,    // 添加store到实例
  components: { App },
  template: '<App/>'
})