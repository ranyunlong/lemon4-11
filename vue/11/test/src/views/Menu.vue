<template>
    <div>
        <h1>菜单管理页面</h1>
        {{abc}}
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    // createNamespacedHelpers 帮助函数
    // 用于获取vuex 仓库中的模块中的数据
    // createNamespacedHelpers('模块名称')
    const user = createNamespacedHelpers('users')
    export default {
        computed: {
            ...user.mapGetters([
                'abc'
            ])
        },
        methods: {
            ...user.mapActions([
                'USER_TEST'
            ])
        },
        created() {
            this.USER_TEST()
        }
    }
</script>

<style scoped>

</style>