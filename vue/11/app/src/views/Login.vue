<template>
    <div>
        <h1>login</h1>
        <div>
            <div>
                <input v-model="form.user" type="text" placeholder="账号">
            </div>

            <div>
                <input v-model="form.password" type="password" placeholder="密码">
            </div>
            <button @click="login">登录</button>

            <router-link to="/test">test</router-link>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    user: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                // 发送ajax请求
                // 根据请求的结果来判断是否登录成功
                // 如果登录成功跳转至admin管理页面

                // this.$router
                // push
                // 直接给一个地址
                // 仅仅只想跳转一个地址
                // this.$router.push('/admin')

                // 想跳转一个地址 并且给另外一个页面传递参数 查询字符串参数
                // this.$router.push({
                //     path: '/admin',
                //     query: { user: this.form.user } // 添加查询字符串参数
                // })

                // 跳转动态路由 使用路由，因为路由的地址不确定
                // 使用路由名称跳转路由，给动态路由添加参数
                // this.$router.push({
                //     name: 'Admin', 
                //     params: { user: this.form.user, password: this.form.password, a: 100 }
                // })

                // replace 它是用来替换路径的
                // 它可以替换当前的路径为新的路径，在浏览器的历史记录里抹掉当前路径的访问信息
                // this.$router.replace({
                //     name: 'Admin',
                //     params: { user: this.form.user, password: this.form.password, a: 100 }
                // })

                // this.$router.addRoutes([
                //     {
                //         path: '/test',
                //         component: {
                //             template: `<div>test</div>`
                //         }
                //     }
                // ])

                // this.$router.push('/test')


                // go
                // back
                // push
                // replace
                // addRoutes 动态添加新的路由
                

            }
        }
    }
</script>

<style scoped>

</style>