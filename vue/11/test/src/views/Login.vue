<template>
    <Layout class="layout">
        <Form class="form">
            <FormItem>
                <h2>登录</h2>
            </FormItem>
            <FormItem label="账号">
                <Input prefix="ios-contact" type="text" />
            </FormItem>
            <FormItem label="密码">
                <Input prefix="ios-lock" type="password" />
            </FormItem>

            <FormItem>
                <Button long type="primary">登录</Button>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>
    export default {
        
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