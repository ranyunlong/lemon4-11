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
            <Sider class="sider" hide-trigger>
                <Menu 
                    width="auto">
                    <Submenu
                        v-if="item.type === 0"
                        :name="item.menuId" 
                        v-for="item in menuList" 
                        :key="item.menuId">
                        <template slot="title">{{item.name}}</template>
                        <Menu-Item 
                            v-if="child.type === 1"
                            :name="child.menuId" 
                            v-for="child in item.children"
                            :to="child.url.replace('sys', '/admin')"
                            :key="child.menuId">
                            {{child.name}}
                        </Menu-Item>
                    </Submenu>
                </Menu>
            </Sider>
            <Content class="content">
                <div class="router-view">
                    <!-- 作为admin的子路由切换位置 -->
                    <router-view />
                </div>
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
            this.GET_SYS_MENU_LIST()
        },
        methods: {
            ...mapMutations([
                'logout'
            ]),
            ...mapActions([
                'GET_USER_INFO',
                'GET_SYS_MENU_LIST'
            ])
        },
        computed: {
            // 以后就不在使用 this.$store.getters
            // gettes 里面是变量成员
            ...mapGetters([
                'user',
                'token',
                'menu'
            ]),
            menuList() {
                // 过滤出顶级菜单
                const menus = this.menu.filter(k => k.parentId === 0)

                // 递归菜单
                const deep = (arr) => {
                    if(!Array.isArray(arr)) return;
                    arr.forEach(value => {
                        value.children = this.menu.filter(k => k.parentId === value.menuId)
                        deep(value.children)
                    })
                }
                deep(menus)
                return menus
            }
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
                // background: blue;
            }
            .content {
                padding: 15px;
                background: #ccc;
            }
        }
        .router-view {
            background: #fff;
            height: 100%;
        }
    }
</style>