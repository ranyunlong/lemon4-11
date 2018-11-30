<template>
    <Layout class="layout">
        <Header class="header">
            <router-link to="/admin" class="logo">
                <img src="@/assets/logo.png" />
                <h1>后台管理系统</h1>
            </router-link>

            <div class="userinfo">欢迎您 {{user.username}}
                <Button type="success" @click="logout">安全退出</Button>
            </div>
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
    export default {
        created() {
            this.GET_USER_INFO()
        },
        methods: {
            ...mapMutations([
                'logout'
            ]),
            ...mapActions([
                'GET_USER_INFO'
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