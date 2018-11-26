// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugin from './plugin'

Vue.config.productionTip = false

// plugin.install(Vue, {})

Vue.use(plugin)




// 保安
router.beforeEach((to, from, next) => {
  // to 到哪去
  // from 从哪来
  // next 要不要让你去
  // if (to.fullPath === '/admin') {
  //   // 判断你有没有登录
  // } else {
  //   next()
  // }

  if (to.meta.auth_login) {
    next('/login')
  } else {
    next()
  }

  // if (to.fullPath !== '/admin') {
  //   next()
  // } else {
  //   next({
  //     path: '/login'
  //   })
  // }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created() {
    console.log(this)
  },
  router,
  components: { App },
  template: '<App/>'
})
