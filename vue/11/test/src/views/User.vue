<template>
    <div class="layout">
        <header>
            <Input v-model="search" search style="width:150px; margin-right:10px;" placeholder="用户名" />
            <Button type="success" @click="showModal = true, modalTitle = '新增', actionType = 'add'">新增</Button>
        </header>
        <Table @on-selection-change="x => tableSelection = x" :columns="columns" :data="data" />
        <div class="pager">
            <div>
                <Button type="error" @click="deleleMany">批量删除</Button>
            </div>
            <Page @on-page-size-change="x => limit = x" @on-change="x => currPage = x" :total="totalCount" show-sizer size="small" />
        </div>
        <Modal
            @on-ok="handleAction"
            :title = "modalTitle"
            v-model="showModal">
            <Form
                style="width: 85%"
                :label-width="80"
                >
                <FormItem label="账号">
                    <Input v-model="form.username" />
                </FormItem>
                <FormItem label="密码">
                    <iInput v-model="form.password" :type="passwordType">
                        <Button slot="append" @click="passwordType === 'password' ? passwordType = 'text' : passwordType = 'password'">
                            {{passwordType === 'password' ? '显示密码' : '隐藏密码'}}
                        </Button>
                    </iInput>
                </FormItem>
                <FormItem label="邮箱">
                    <Input v-model="form.email" />
                </FormItem>
                <FormItem label="手机">
                    <Input v-model="form.mobile" />
                </FormItem>
                <FormItem label="状态">
                    <iSwitch :true-value="1" :false-value="0" v-model="form.status"></iSwitch>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                passwordType: "password",
                // 表单处理方式
                actionType: '', // add 新增 edit 修改
                // 表格的多选数据列表
                tableSelection: [],
                // 表头
                columns: [
                    {
                        type: 'selection',
                        width: 50
                    },
                    {
                        title: 'Id',
                        key: 'userId',
                        align: 'center',
                        sortable: true,
                        width: 100
                    },
                    {
                        title: '用户名',
                        key: 'username',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '邮箱',
                        key: 'email',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '手机',
                        key: 'mobile',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '状态',
                        key: 'status',
                        align: 'center',
                        render: (h, params) => {
                            return h('iSwitch', {
                                props: {
                                    value: params.row.status,
                                    trueValue: 1,
                                    falseValue: 0,
                                    size: 'large',
                                },
                                on: {
                                    'on-change': (v) => {
                                        const {
                                            userId,
                                            username,
                                            email,
                                            mobile,
                                            roleIdList
                                        } = params.row
                                        this.SYS_USER_UPDATE({
                                            userId,
                                            username,
                                            email,
                                            mobile,
                                            roleIdList,
                                            status: v
                                        }).then(({data}) => {
                                            const { msg, code } = data
                                            if (code === 0) {
                                                this.$Notice.success({
                                                    title: '成功',
                                                    desc: `用户${username}${v === 0 ? '禁用成功' : '启用成功'}！`
                                                })
                                                this.getList()
                                            }
                                        })
                                    }
                                }
                            }, [
                                h('span', {
                                    slot: 'open'
                                }, '启用'),
                                h('span', {
                                    slot: 'close'
                                }, '禁用')
                            ])
                        }
                    },
                    {
                        title: '创建时间',
                        key: 'createTime',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '操作',
                        key: 'status',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'primary'
                                    },
                                    style: {
                                        marginRight: '8px'
                                    },
                                    on: {
                                        click: () => {
                                            this.showModal = true
                                            this.modalTitle = '修改'
                                            this.actionType = 'edit'
                                            const {
                                                userId,
                                                username,
                                                email,
                                                mobile,
                                                status,
                                                roleIdList
                                            } = params.row
                                            this.form = {
                                                userId,
                                                username,
                                                email,
                                                mobile,
                                                status,
                                                roleIdList
                                            }
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'error'
                                    },
                                    on: {
                                        click: () => {
                                            this.$Modal.confirm({
                                                title: '提示',
                                                content: `您正在删除管理员${params.row.username}，确认要删除吗？`,
                                                loading: true,
                                                onOk:() => {
                                                    this.SYS_USER_DELETE([params.row.userId]).then(({data}) => {
                                                        this.$Modal.remove()
                                                        const { code, msg } = data
                                                        if (code === 0) {
                                                            this.$Notice.success({
                                                                title: '成功',
                                                                desc: `管理员${params.row.username} 已删除`
                                                            })
                                                            this.getList()
                                                        } else {
                                                            this.$Notice.error({
                                                                title: '成功',
                                                                desc: msg
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    },
                ],
                // 表单数据
                form: {
                    userId: 0,
                    username: "",
                    password: "",
                    email: "",
                    mobile: "",
                    status: 1,
                    roleIdList: []
                },
                // 模态框的表体
                modalTitle: '',
                // 模态框的显示状态
                showModal: false,
                // 页码
                currPage: 1,
                // 页码总数
                totalCount: 1,
                // 查询条数限制
                limit: 10,
                // 搜索框的值
                search: '',
                // 表格数据
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
            },
            showModal(v) {
                // 如果为false 时 表单关闭了
                if (!v) {
                    this.form = {
                        userId: 0,
                        username: "",
                        password: "",
                        email: "",
                        mobile: "",
                        status: 1,
                        roleIdList: []
                    }
                }
            }
        },
        methods: {
            // 批量删除
            deleleMany() {
                // console.log(this.tableSelection)

                const usernames = this.tableSelection.map(k => `<b>${k.username}</b>`)
                if (usernames.length === 0) {
                    return this.$Notice.error({
                        title:'错误',
                        desc: '请选择要删除的数据'
                    })
                }

                this.$Modal.confirm({
                    title: '提示',
                    content: `您正在删除管理员${usernames.join('，')} 确认要删除吗？`,
                    loading: true,
                    onOk: () => {
                        const ids = this.tableSelection.map(k => k.userId)
                        this.SYS_USER_DELETE(ids).then(({data}) => {
                            const { code, msg } = data
                            this.$Modal.remove()
                            if (code === 0) {
                                this.$Notice.success({
                                    title:'成功',
                                    desc: `管理员 ${usernames.join('，')}已删除！`
                                })
                                return this.getList()
                            }

                            this.$Notice.error({
                                title:'错误',
                                desc: msg
                            })
                        })
                    }
                })
            },
            // 获取管理员列表
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
            // 处理新增 修改
            handleAction() {
               if (this.actionType === 'add') {
                    this.SYS_USER_SAVE(this.form).then(({data}) => {
                        const { code, msg } = data
                        if (code === 0) {
                            // 调用自动获取列表的方法
                            this.getList()
                        } else {
                            this.$Notice.error({
                                title: '错误',
                                desc: msg
                            })
                        }
                    })
               } else if (this.actionType === 'edit') {
                   this.SYS_USER_UPDATE(this.form).then(({data}) => {
                        const { code, msg } = data
                        if (code === 0) {
                            // 调用自动获取列表的方法
                            this.getList()
                        } else {
                            this.$Notice.error({
                                title: '错误',
                                desc: msg
                            })
                        }
                    })
               }
            },
            ...mapActions([
                'GET_SYS_USER_LIST',
                'SYS_USER_SAVE',
                'SYS_USER_UPDATE',
                'SYS_USER_DELETE'
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