<template>
    <Layout class="layout">
        <Form class="form">
            <FormItem>
                <h2>登录</h2>
            </FormItem>
            <FormItem label="账号">
                <Input v-model="form.username" prefix="ios-contact" type="text" placeholder="请输入账号" />
            </FormItem>
            <FormItem label="密码">
                <Input v-model="form.password" prefix="ios-lock" type="password" placeholder="请输入密码" />
            </FormItem>

            <FormItem label="验证码">
               <i-input v-model="form.captcha" type="text" placeholder="验证码">
                   <img @click="reUuid" style="display:block;" height="30" slot="append" :src="captcha" />
               </i-input>
            </FormItem>

            <FormItem>
                <Button :loading="loading" @click="handleLogin" long type="primary">登录</Button>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>
    import uuid from 'uuid'
    import axios from 'axios'
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                uuid: uuid(),
                loading: false,
                form: {
                    username: '',
                    password: '',
                    captcha: '',
                    uuid: ''
                }
            }
        },
        methods: {
            // 重新生成uuid
            ...mapMutations([
                'login'
            ]),
            reUuid() {
                this.uuid = uuid()
            },
            // 处理登录
            handleLogin() {
                // console.log(JSON.stringify(this.form, null, 4))
                this.loading = true
                axios({
                    method: 'post',
                    url: '/proxyapi/sys/login',
                    data: this.form,
                    // responseType: 'json', // 告诉后台我需要一个json结果
                    // responseEncoding: 'utf8', // 告诉后台我需要的结果的编码格式
                    headers: {
                        'Content-Type': 'application/json' //告诉后台请求的数据类型
                    }
                }).then(({data}) => { // 接收结果
                    this.loading = false
                    const { msg, code, token} = data
                    if (code === 0) {
                        this.$Notice.success({
                            title: '成功',
                            desc: `登录成功啦`
                        })
                        this.$router.replace('/admin')
                        this.login({
                            user: JSON.parse(JSON.stringify(this.form)),
                            token
                        })
                        // this.$store.commit('login', {
                        //     user: JSON.parse(JSON.stringify(this.form)),
                        //     token
                        // })
                    } else {
                        this.$Notice.error({
                            title: '错误',
                            desc: msg
                        })
                        this.uuid = uuid()
                    }
                }).catch(err => { // 捕获错误
                    console.log(err)
                })
            }
        },
        created() {
            this.form.uuid = this.uuid
        },
        watch: {
            uuid(v) {
                this.form.uuid = v
            }
        },
        computed: {
            captcha() {
                return '/proxyapi/captcha.jpg?uuid=' + this.uuid
            }
        }
    }
</script>

<style scoped>
    .layout {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .layout .form {
        width: 350px;
        background: #fff;
        padding: 20px;
        border-radius: 5px;
        border: 1px solid #ddd;
    }
</style>