<template>
  <div class="home">
    <h2>请选择需要展示的页面：</h2>
    <el-button type="primise"
               :key="comp"
               @click="handleClick(comp)"
               v-for="comp in compNames">{{ comp }}
    </el-button>
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
    const requireComponents = require.context('./main-page/', false, /\.vue/)
    requireComponents.keys().forEach(fileName => {
      const compName = fileName.replace(/\.\//, '').replace(/\.vue/, '')
      if (compName !== 'Home') {
        compNames.push(compName)
      }
    })
    this.compNames = compNames
  },
  methods: {
    handleClick (comp) {
      this.$router.push({ name: 'page', query: { name: comp } })
    }
  }
}
</script>
