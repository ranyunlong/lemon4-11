// 使用vuex第一步安装vuex
// npm i vuex
// yarn add vuex
// https://vuex.vuejs.org/zh/

// 使用vuex 第二步导入vuex
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import { http } from '../utils'

// 第三步 注册vuex
Vue.use(Vuex)

// 从本地存储里取出登录凭证
const token = localStorage.getItem('token')

// 第四步 创建仓库
export default new Vuex.Store({
    state: { // 原始数据  
        user: {}, // 保存用户的数据
        token: token, // 保存已登录的凭证
        menu: []
    }, 
    // 可以有很多个查询器
    // 每一个查询器 做不同的工作
    getters: {  
        token(state) {
            // 取出state里的相关数据
            // 这里的state 不是原始数据
            // 它只是一个复制版
            return state.token
        },
        user(state) {
            return state.user
        },
        menu(state) {
            return state.menu
        }
    }, 
    // 修改器 可以有很多个修改器
    // 每一个修改器呢可以做不同的修改操作
    mutations: {
        // mutaion成员只能接受2个参数， 第一个参数是原始数据， 
        // 第二个是使用这个 修改器传递的参数
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        setUser(state, user) {
            state.user = user
        },
        logout(state) {
            // 在vuex存储里清除 token
            // 在本地存储里清除 token
            state.token = ''
            state.user = {}
            localStorage.removeItem('token')
            // 退出之后，去到登录页面
            router.push('/login')
        },
        setMenu(state, menu) {
            state.menu = menu
        }
    },
    actions: {
        // 获取用户信息
        GET_USER_INFO({ commit }) {
            http.get('/proxyapi/sys/user/info').then(({data}) => {
                const { code, user } = data
                if (code === 0) {
                    commit('setUser', user)
                } else {
                    router.push('/login')
                }
            })
        },
        // 登录
        LOGIN(store, data) {
            // res axios 请求的结果
            const res = http.post('/proxyapi/sys/login', data)

            // 在这里先拦截结果
            res.then(({data}) => {
                const { code, token } = data
                // code 0 登录成功了
                if (code === 0) {
                    // store 的commit方法可以用来触发 mutation
                    store.commit('setToken', token)
                }
            })

            // 交给页面获取结果
            return res
        },
        // 获取系统菜单
        GET_SYS_MENU_LIST({commit}) {
            http.get('/proxyapi/sys/menu/list').then(({data}) => {
                commit('setMenu', data)
            })
        },
        // 获取系统管理员
        GET_SYS_USER_LIST({commit}, params = {}) {
            const { page = 1, limit = 10, sidx = 'userId', order = "desc", username ='' } = params
            const res = http.get('/proxyapi/sys/user/list', {
                params: {
                    page,
                    limit,
                    sidx,
                    order,
                    username
                }
            })

            return res
        }
    }
})

// 第五步 在实例中添加store