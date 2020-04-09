<template>
  <div class="home">
    <el-button type="primise"
               :key="comp"
               v-for="comp in compNames">{{comp}}
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compNames: []
    }
  },
  beforeMount() {
    let compNames = []
    const requireComponents = require.context('./', false, /\.vue/)
    requireComponents.keys().forEach(fileName => {
      const reqCom = requireComponents(fileName)
      // 截取路径作为组件名
      const compName = fileName.replace(/\.\//, '').replace(/\.vue/, '')
      if (compName !== 'Home') {
        compNames.push(compName)
      }
    })
    this.compNames = compNames
  }
}
</script>
