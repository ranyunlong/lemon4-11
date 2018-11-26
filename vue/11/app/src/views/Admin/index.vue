<template>
    <div>
        <header>
            <div>logo</div>
            <div>欢迎您管理, {{user}}.</div>
        </header>
        <h1>管理首页</h1>
        <button @click="back">返回上一个页面</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: ''
            }
        },
        created() {
            // $route 获取路由数据信息的
            // this.user = this.$route.query.user
            this.user = this.$route.params.user
            console.log(this.$route)
        },
        methods:{
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
    }
</style>