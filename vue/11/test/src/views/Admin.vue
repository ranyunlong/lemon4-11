<template>
    <Layout class="layout">
        <Header class="header">
            <router-link to="/admin" class="logo">
                <img src="@/assets/logo.png" />
                <h1>后台管理系统</h1>
            </router-link>

            <div class="userinfo">欢迎您 {{user.username}}</div>
        </Header>
        <Layout class="main">
            <Sider class="sider" hide-trigger>Sider</Sider>
            <Content>
                
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import axios from 'axios'
    import { mapGetters, mapActions, mapMutations } from 'vuex'
    // const obj = {
    //     user() {
    //         // 由computed 自动去vuex里去取数据
    //         return this.$store.getters.user
    //     },
    //     token() {
    //         return this.$store.getters.token
    //     }
    // }
    export default {
        created() {
            //  vue-router
            // this.$router
            // this.$route

            // vuex 
            // this.$store

            // console.log(this.$store)
            if (this.token) {
                axios({
                    url: '/proxyapi/sys/user/info',
                    headers: {
                        token: this.token
                    }
                }).then(({data}) => {
                    const { code, msg, user } = data

                    if (code === 0) {
                        // this.$store.commit('setUser', user)
                        this.setUser(user)
                    }
                })
            }
            console.log(this)
        },
        methods: {
            // 这个就不在用 this.$store.commit
            // 这个可以用来代替 commit 方法提交数据
            // 直接把 Mutations 的方法 拿到组件实例中来使用Mutation
            ...mapMutations([
                'setUser'
            ])
        },
        computed: {
            // 以后就不在使用 this.$store.getters
            // gettes 里面是变量成员
            ...mapGetters([
                'user',
                'token'
            ])
        }
    }
</script>

<style scoped lang="less">
    .layout {
        height: 100%;
        .header {
            background: #fff;
            border-bottom: 1px solid #ddd;
            display: flex;
            padding: 10px;
            justify-content: space-between;
            align-items: center;
            .logo {
                display: flex;
                align-items: center;
                img {
                    height: 40px;
                }
            }
        }
        .main {
            .sider {
                background: blue;
            }
        }
    }
</style>