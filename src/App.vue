<template>
  <div id="app">
      <el-button type="primary">el-button</el-button>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
