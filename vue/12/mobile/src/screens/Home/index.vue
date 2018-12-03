<template>
    <mt-screen>
        <mt-header title="首页">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-swipe class="swipe">
            <mt-swipe-item>
                <img src="https://m.360buyimg.com/mobilecms/jfs/t26872/217/2278570477/97990/3ff13a50/5bfe3196Ne2b50d8e.jpg!cr_1125x549_0_72">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t26227/296/2184936844/141672/6953045f/5c0219beN38cd723d.jpg!cr_1125x549_0_72!q70.jpg.dpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://m.360buyimg.com/mobilecms/jfs/t29503/347/534812383/86678/52287cdd/5bff6601Ncf1b8946.jpg!cr_1125x549_0_72">
            </mt-swipe-item>
        </mt-swipe>
        <ul
            class="scroll-view"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <NewsItem @click="click">xxx</NewsItem>
        </ul>
    </mt-screen>
</template>

<script>
    import NewsItem from '../components/NewsItem'
    export default {
        methods: {
            loadMore() {
                
            },
            click() {
                this.$router.push('/home/news/1')
            }
        },
        components: {
            NewsItem
        }
    }
</script>

<style lang="less">
.swipe {
    background: red;
    height: 340px;
    img {
        width: 100%;
    }
}
.scroll-view {
    flex: 1;
    overflow: auto;
    list-style: none;
    padding: 12px;
}
</style>