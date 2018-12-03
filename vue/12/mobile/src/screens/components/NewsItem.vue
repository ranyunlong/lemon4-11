<template>
    <li class="list-item" @click="$emit('click')">
        <header>
            <div class="avatar"></div>
            <div class="info">
                <h3>用户名</h3>
                <div>
                    <span class="primary">今天 13:14</span>
                    <span>info</span>
                </div>
            </div>
            <div class="button">3</div>
        </header>
        <main>
            <p>今天玩的真开心</p>
        </main>
        <footer>

        </footer>
    </li>
</template>

<script>
    export default {
        props: {
            value: Object
        }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/styles/base.less';
    .list-item {
        header {
            height: 96px;
            display: flex;
            justify-content: space-between;
            align-items: center;    
            .avatar {
                width: 72px;
                height: 72px;
                background: @background;
                border-radius: 50%;
                img{
                    width: 100%;
                    overflow: hidden;
                }
            }
            .info {
                flex: 1;
                padding-left: 20px;
                display: flex;
                flex-direction: column;
                h3 {
                    margin: 0;
                    font-size: 32px;
                    color: #333;
                }
                span {
                    font-size: 20px;
                    color: #999;
                    &.primary {
                        color: @primary;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>