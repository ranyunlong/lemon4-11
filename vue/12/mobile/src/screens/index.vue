<template>
    <div>
        <router-view></router-view>
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="home">
                <mt-icon slot="icon" type="ios-home"></mt-icon>
                首页
            </mt-tab-item>
            <mt-tab-item id="club">
                <mt-icon slot="icon" type="ios-car"></mt-icon>
                车汇
            </mt-tab-item>
            <mt-tab-item id="sns">
                <mt-icon slot="icon" type="ios-chatbubbles"></mt-icon>
                消息
            </mt-tab-item>
            <mt-tab-item id="mine">
                <mt-icon slot="icon" type="ios-person"></mt-icon>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: 'home'
            }
        },
        watch: {
            selected(v) {
                this.$router.replace(`/${v}`)
            }
        }
    }
</script>

<style lang="less">
@import '../assets/styles/base.less';
.mint-tabbar {
    .mint-tab-item {
        color: #999;
        &.is-selected {
            color: @primary;
            background: transparent;
        }
    }
}
</style>