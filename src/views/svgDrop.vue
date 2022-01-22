<template>
  <div class="flex">
    <div class="img"
         draggable="true">
      <img src="1.png"
           draggable="true"
           @dragstart="dragStart"
           alt="">
      <img src="2.png"
           alt="">
    </div>
    <div class="svg"
         @drop="drop"
         @dragover="allowDrop"></div>
  </div>
</template>

<script>
import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import '@svgdotjs/svg.panzoom.js'
let abc = ''
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(this.init)
  },
  methods: {
    drop (e) {
      e.preventDefault()
      var data = e.dataTransfer.getData('Text')
      console.log('data', data)
      if (abc) {
        abc.setAttribute('stroke', '#f06')
      }
    },
    allowDrop (e) {
      if (e.target.nodeName === 'path') {
        console.log('88', 88)
        abc = e.target
        e.target.setAttribute('stroke', 'yellow')
      } else {
        console.log('abc', abc)
        if (abc) {
          abc.setAttribute('stroke', '#f06')
        }
      }
      e.preventDefault()
    },
    dragStart (e) {
      e.dataTransfer.setData('Text', e.target.id)
    },
    init () {
      const draw = SVG()
        .addTo('.svg')
        .size(1000, 800)
      const rect = draw.rect(100, 100).move(0, 0)
      draw.path('M100 50 H400').stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
      draw.path('M200 150 H400').stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
      draw.rect(100, 100).move(400, 0)

      rect.draggable()
      draw.viewbox('0 0 1000 800')

      draw.panZoom({ zoomMin: 0.5, zoomMax: 2 })
    }
  }
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}
.img {
  width: 300px;
  height: 100vh;
  border: 1px solid;
  margin-right: 200px;
  img {
    border: 1px solid #989898;
    width: 100px;
    padding: 10px;
    margin: 10px;
  }
}
.svg {
  border: 1px solid red;
}
</style>
