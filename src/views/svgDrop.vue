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
         ref="svg"
         @drop="drop"
         @dragover="allowDrop"></div>
  </div>
</template>

<script>
import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import '@svgdotjs/svg.panzoom.js'
const abc = ''
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
      e.dataTransfer.getData('Text')
      if (abc) {
        abc.setAttribute('stroke', '#f06')
      }
    },
    allowDrop (e) {
      // if (e.target.nodeName === 'path') {
      //   abc = e.target
      //   e.target.setAttribute('stroke', 'yellow')
      // } else {
      //   if (abc) {
      //     abc.setAttribute('stroke', '#f06')
      //   }
      // }
      // e.preventDefault()
    },
    dragStart (e) {
      e.dataTransfer.setData('Text', e.target.id)
    },
    draeLineStart (draw) {
      let node = this.node
      this.$refs.svg.onclick = (e) => {
        if (node) {
          if (this.isNe(e)) {
            // draw.path('M200 150 H400').stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
            let node1 = node.getBBox()
            let node2 = e.target.getBBox()
            if (node1.x > node2.x) {
              const t = node1
              node1 = node2
              node2 = t
            }
            const line = draw.line(node1.x + node1.width, node1.y + node1.height / 2, node2.x, node2.y + node2.height / 2)
            line.stroke({ color: '#f06', width: 10, linecap: 'round' })
          }
          node && node.setAttribute('stroke', 'none')
          node = null
        }
        console.log('e', e)
        if (this.isNe(e)) {
          e.target.setAttribute('stroke', 'red')
          node = e.target
        }
      }
      this.node = node
    },
    isNe (e) {
      return e.target.classList.value === 'ne'
    },
    init () {
      const draw = SVG()
        .addTo('.svg')
        .size(1000, 800)
      this.draeLineStart(draw)
      const rect = draw.rect(100, 100).move(0, 0)
      // draw.path('M100 50 H400').stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
      // const path = draw.path('M200 150 H400').stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
      // path.click(function (e) {
      //   var point = path.point(e.pageX, e.pageY) // {x, y}
      //   console.log(`point`, point)
      // })
      const rect2 = draw.rect(100, 100).move(400, 0)

      rect.draggable()
      rect.addClass('ne')
      rect2.addClass('ne')
      // rect.click(function (e) {
      //   this.stroke({
      //     color: 'red',
      //     width: 3
      //   })
      // })
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
