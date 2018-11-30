<template>
    <div class="layout">
        <header>
            <Input v-model="search" search style="width:150px; margin-right:10px;" placeholder="用户名" />
            <Button type="success">新增</Button>
        </header>
        <Table :columns="columns" :data="data" />
        <div class="pager">
            <div></div>
            <Page @on-page-size-change="x => limit = x" @on-change="x => currPage = x" :total="totalCount" show-sizer size="small" />
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                columns: [
                    {
                        type: 'selection'
                    },
                    {
                        title: 'Id',
                        key: 'userId',
                        align: 'center'
                    },
                    {
                        title: '用户名',
                        key: 'username',
                        align: 'center'
                    },
                    {
                        title: '邮箱',
                        key: 'email',
                        align: 'center'
                    },
                    {
                        title: '手机',
                        key: 'mobile',
                        align: 'center'
                    }
                ],
                currPage: 1,
                totalCount: 1,
                limit: 10,
                search: '',
                data: []
            }
        },
        created() {
            this.getList()
        },
        watch: {
            search(v) {
                this.currPage = 1
                this.getList()
            },
            currPage() {
                this.getList()
            },
            limit() {
                this.getList()
            }
        },
        methods: {
            getList() {
                this.GET_SYS_USER_LIST({
                    page: this.currPage,
                    limit: this.limit,
                    username: this.search
                }).then(({data}) =>{
                    const { code, msg, page } = data
                    if (code === 0) {
                        const { currPage, list, totalCount } = page
                        this.currPage = currPage
                        this.data = list
                        this.totalCount = totalCount
                    }
                })
            },
            ...mapActions([
                'GET_SYS_USER_LIST'
            ])
        }
    }
</script>

<style scoped lang="less">
    .layout {
        header {
            margin-bottom: 15px;
        }
        padding: 15px;
        .pager {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>