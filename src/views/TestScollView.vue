<template>
  <div class="container">
    ScollView
    <ScollView width="60%">
      <div class="d"
           v-for="i in 10"
           :key="i"></div>
    </ScollView>
    <span>这是右边行内元素</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () { }
}
</script>

<style scoped lang="less">
.d {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: red;
  margin: 0 10px;
}
</style>
