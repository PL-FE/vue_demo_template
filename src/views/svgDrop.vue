<template>
  <div class="flex">
    <div class="img">
      <img src="1.png"
           alt="">
      <img src="2.png"
           alt="">
    </div>
    <div class="svg"></div>
  </div>
</template>

<script>
import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import '@svgdotjs/svg.panzoom.js'

export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(this.init)
  },
  methods: {
    init () {
      const draw = SVG()
        .addTo('.svg')
        .size(1000, 800)
      const rect = draw.rect(100, 100).move(0, 0)
      draw.path('M100 50 H400').stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })

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
