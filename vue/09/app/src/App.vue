<template>
  <div id="app">
    <Icon name="cloud" :size="100" color="red" />
    <Button type="success" icon="minus">xxx</Button>
    <Button type="success" icon="pencil">xxx</Button>
    <Progress :value="30" />
  </div>
</template>

<script>
import Icon from './components/Icon.vue'
import Button from './components/Button.vue'
import Progress from './components/Progress.vue'
export default {
  components: {
    Icon,
    Button,
    Progress
  }
}
</script>

<style>
</style>

