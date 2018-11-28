// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

// 触发  setToke mutation修改 token
// store.commit('setToken', '464564')
// console.log(store.getters.token)

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
