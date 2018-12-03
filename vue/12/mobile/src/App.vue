<template>
  <div id="app">
    <transition
      :enter-active-class="enter"
      :leave-active-class="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      enter: 'animated slideInRight',
      leave: 'animated slideOutLeft'
    }
  },
  watch: {
    $route(v, o) {
      const to = v.path.split('/').length
      const from = o.path.split('/').length

      if (to > from ) {
        this.enter = 'animated slideInRight'
        this.leave = 'animated slideOutLeft'
      } else if(to < from) {
        this.enter = 'animated slideInLeft'
        this.leave = 'animated slideOutRight'
      }

    }
  }
}
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
@import './assets/styles/base.less';
.mint-header {
    background: @primary;
}
</style>
