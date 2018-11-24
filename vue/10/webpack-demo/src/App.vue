<template>
    <div>
        <h1>Hello Vue</h1>
        <button @click="handler">请求</button>
        <img src="@/assert/image/1.jpg" alt="">
    </div>
</template>

<script>
    import $ from 'jquery'
    import Test from '@/components/Test'
    export default {
        methods: {
            handler() {
                $.get('http://console.ranyunlong.com:8080/renren-fast/sys/role/select', function(e){
                    console.log(e)
                })
            }
        }
    }
</script>

<style scoped>

</style>