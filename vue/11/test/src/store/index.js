// 使用vuex第一步安装vuex
// npm i vuex
// yarn add vuex
// https://vuex.vuejs.org/zh/

// 使用vuex 第二步导入vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 第三步 注册vuex
Vue.use(Vuex)

// 从本地存储里取出登录凭证
const token = localStorage.getItem('token')

// 第四步 创建仓库
export default new Vuex.Store({
    state: { // 原始数据  
        user: {}, // 保存用户的数据
        token: token, // 保存已登录的凭证
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
        }
    }, 
    // 修改器 可以有很多个修改器
    // 每一个修改器呢可以做不同的修改操作
    mutations: {
        // mutaion成员只能接受2个参数， 第一个参数是原始数据， 
        // 第二个是使用这个 修改器传递的参数
        // setToken(state, token) {
        //     state.token = token
        // },
        setUser(state, user) {
            state.user = user
        },
        login(state, data) {
            const { user, token } = data
            state.user = user
            state.token = token
            localStorage.setItem('token', token)
        }
    }, 
})

// 第五步 在实例中添加store