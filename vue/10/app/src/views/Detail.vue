<template>
    <div>
        <h1>{{title}}{{$route.params.id}}</h1>
        <p>{{content}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                content: ''
            }
        },
        watch: {
            $route(v) {
                setTimeout(() => {
                    this.title = '表体' + v.params.id,
                    this.content = '内容' + v.params.id
                }, 500)
            }
        },
        created() {
            // 用来读取路由的信息
            // 每个组件都能获取到路由信息
            // console.log(this.$route.params.id)
            console.log('组件创建了')
            
            // 用来处理路由的行为的
            console.log(this.$router)
            // 这两个对象是通过插件 mixin进来的

            
            // this.$router.push('/login')
        }
    }
</script>

<style scoped>

</style>