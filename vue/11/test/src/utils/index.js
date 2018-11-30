import axios from 'axios'
import Qs from 'qs'
import store from '../store'

// 使用axios 生成一个http请求对象
export const http = axios.create({
    timeout: 1000 * 30,  // 30秒没有请求到数据就超时
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
})

// 设置请求前拦截
// 每一次请求前都会来调用这个方法
http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.token = token
    if (config.method === 'get') {
        config.params =  {
            ...config.params,
            t: new Date().getTime(),
            token
        }
        //
    }

    if (config.method === 'post') {
        config.data = {
            ...config.data,
            t: new Date().getTime(),
            token
        }
        // 如果是表单数据提交时 把对象处理成 查询字符串格式
        if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            config.data = Qs.stringify(config.data)
        }

        if (config.headers['Content-Type'] === 'application/json; charset=utf-8') {
            config.data = JSON.stringify(config.data)
        }
    }
    return config
})

// 设置相应到结果后的拦截
// 每一次收到结果都来条用这个方法
http.interceptors.response.use((response) => {
    if (response.data && response.data.code === 401) { // 401, token失效
        // 触发取消登录的mutation
        store.commit('logout')
    }
    return response
})