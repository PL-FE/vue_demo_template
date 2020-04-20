<template>
  <div class="containers">
    <div class="canvas"
         ref="canvas"></div>
  </div>
</template>

 <script>
// 引入相关的依赖
import BpmnModeler from 'bpmn-js/lib/Modeler'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'

import resizeAllModule from './lib/resize-all-rules';
import colorPickerModule from './lib/color-picker';
import nyanDrawModule from './lib/nyan/draw';
import nyanPaletteModule from './lib/nyan/palette';
import {
  xmlStr
} from '../utils/xmlStr' // 这里是直接引用了xml字符串
export default {
  name: '',
  components: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted () {
    this.init()
  },
  data () {
    return {
      // bpmn建模器
      bpmnModeler: null,
      container: null,
      canvas: null
    }
  },
  methods: {
    init () {
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas
      // 建模
      this.bpmnModeler = new BpmnModeler({
        container: canvas,

        //添加控制板
        propertiesPanel: {
          parent: '#js-properties-panel'
        },
        additionalModules: [
          // 左边工具栏以及节点
          propertiesProviderModule,

          resizeAllModule,
          colorPickerModule,
          nyanDrawModule,
          nyanPaletteModule
        ]
      })
      this.createNewDiagram()
    },
    createNewDiagram () {
      // 将字符串转换成图显示出来
      this.bpmnModeler.importXML(xmlStr, (err) => {
        if (err) {
          // console.error(err)
        } else {
          // 这里是成功之后的回调, 可以在这里做一系列事情
          this.success()
        }
      })
    },
    success () {
      // console.log('创建成功!')
    }
  }
}
</script>

<style scoped lang="less">
.containers {
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}
.canvas {
  width: 100%;
  height: 100%;
}
.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}
</style>
