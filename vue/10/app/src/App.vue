<template>
  <div id="app">
    <!-- 
      router-view
      是一个路由容器 让路由知道在哪里切换组件
     -->
     <!-- <a href="/">首页</a>
     <a href="/login">登录</a>
    <a href="/about">关于</a> -->
    <!-- 
      router-link 
      用来代替a标签跳转
      他可以自动识别是hash模式和history模式
     -->
    <router-link to="/">首页</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/news">新闻</router-link>
    
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
