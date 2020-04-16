<template>
  <el-table ref="multipleTable"
            :data="formatData"
            @select="select"
            border
            :row-class-name="showRow"
            v-bind="$attrs">
    <el-table-column type="selection"></el-table-column>
    <el-table-column type="index"></el-table-column>
    <el-table-column v-for="(column, index) in columns"
                     :key="column.value"
                     :label="column.text"
                     :width="column.width">
      <template slot-scope="{row, $index}">
        <template v-if="column.isCustom">
          <slot :name="`col-${column.value}`"
                :row="row"></slot>
        </template>
        <template v-else>
          <template v-for="space in row._level">
            <span v-if="index === 0"
                  :key="space"
                  class="ms-tree-space" />
          </template>
          <span v-if="iconShow(index,row)"
                class="tree-ctrl"
                @click="toggleExpanded($index)">
            <i :class="row._expanded?'el-icon-caret-bottom':'el-icon-caret-right'"></i>
          </span>
          {{ row[column.value] }}
        </template>
      </template>
    </el-table-column>
    <slot />
  </el-table>
</template>
 
<script>
import treeToArray from "./eval.js";
export default {
  name: "TreeTable",
  data () {
    return {
      chooseson: true, //全选
      key: true, //单个点击直到全部选中
      odd: [0],
      pTemp: []
    };
  },
  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 格式化数据源
    formatData () {
      let tmp;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        tmp = this.data;
      }
      const func = this.evalFunc || treeToArray;
      const args = this.evalArgs
        ? [tmp, this.expandAll].concat(this.evalArgs)
        : [tmp, this.expandAll];
      return func.apply(null, args);
    }
  },
  methods: {
    showRow ({ row, rowIndex }) {
      const show = row.parent
        ? row.parent._expanded && row.parent._show
        : true;
      row._show = show;
      if (show) {
        this.odd[0] = this.odd[0] + 1
      }
      let row2 = this.odd[0] % 2 ? '' : 'highlight_row'
      if (rowIndex === this.formatData.length - 1) this.odd[0] = 0
      return show
        ? row2
        : 'cdisplay';
    },
    // 切换下级是否展开
    toggleExpanded (trIndex) {
      const record = this.formatData[trIndex];
      record._expanded = !record._expanded;
    },
    // 图标显示
    iconShow (index, record) {
      return index === 0 && record.child && record.child.length > 0;
    },
    select (selection, row) {
      let isSelect = selection.includes(row)
      if (row.child) {
        this.deepFunc(row, 'child', isSelect, this.$refs.multipleTable.toggleRowSelection)
      }
      if (row.parent) {
        this.treeToArray(row, 'parent', 'init')
        let allF = this.pTemp
        allF.forEach(it => {
          isSelect = it.child.every(it => selection.includes(it))
          this.$refs.multipleTable.toggleRowSelection(it, isSelect)
        })
      }
    },
    treeToArray (nodes, key, p) {
      if (p) {
        this.pTemp = []
      }
      if (nodes[key]) {
        this.pTemp.push(nodes[key])
        this.treeToArray(nodes[key], key)
      }
    },

    // 递归勾选或者取消
    deepFunc (data, key, isSelect, func) {
      if (data[key]) {
        if (data[key].length) {
          data[key].forEach(c => {
            func(c, isSelect)
            if (c[key]) {
              this.deepFunc(c, key, isSelect, func)
            }
          })
        } else {
          func(data[key], isSelect)
          if (data[key][key]) {
            this.deepFunc(data[key], key, isSelect, func)
          }
        }
      }
    }
  }
};
</script>
 
<style lang="less" scoped>
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: 18px;
  height: 14px;
}
.ms-tree-space::before {
  content: '';
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}
.tree-ctrl {
  position: relative;
  cursor: pointer;
  margin-left: -18px;
}

/deep/.highlight_row {
  background-color: #c8c8ff;
}
/deep/.cdisplay {
  display: none !important;
}
</style>
