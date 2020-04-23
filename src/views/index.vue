<template>
  <div class="container">
    <component v-if="$route.query.name"
               :is="$route.query.name"></component>
    <template v-else>
      <h2>请选择需要展示的页面：</h2>
      <el-button type="primise"
                 :key="comp"
                 @click="handleClick(comp)"
                 v-for="comp in compNames">{{ comp }}
      </el-button>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      compNames: []
    }
  },
  beforeMount () {
    const compNames = []
    const requireComponents = require.context('./', false, /\.vue/)
    requireComponents.keys().forEach(fileName => {
      const compName = fileName.replace(/\.\//, '').replace(/\.vue/, '')
      if (compName !== 'index') {
        compNames.push(compName)
      }
    })
    this.compNames = compNames
  },
  methods: {
    handleClick (comp) {
      console.log('comp > ', comp)
      this.$router.push({ name: 'views', query: { name: comp } })
    }
  }
}
</script>

<style scoped lang="less">
</style>
