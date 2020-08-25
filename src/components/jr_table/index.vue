<template>
  <div class="table-wrap">
    <el-table
      :data="tableData"
      v-bind="$attrs"
      :row-class-name="tableRowClassName"
    >
      <template v-for="(column, index) of columns">
        <!-- render -->
        <el-table-column
          v-if="column.render"
          v-bind="Object.assign({}, defaultColumnConfig, column)"
          :key="index"
        >
          <template slot-scope="scope">
            <extend :render="column.render" :params="scope"></extend>
          </template>
        </el-table-column>

        <!-- no render -->
        <el-table-column
          v-else
          v-bind="Object.assign({}, defaultColumnConfig, column)"
          :key="index"
        ></el-table-column>
      </template>
    </el-table>

    <div style="margin-top:20px; text-align: center" v-if="isShowPagenation">
      <el-pagination
        background
        class="jr-normal-pagination"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="sizeList"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Extend from './Extend.js'
export default {
  components: {
    Extend
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    isShowPagenation: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    defaultColumnConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    sizeList: {
      type: Array,
      default: () => {
        return [300, 500]
      }
    },
    pageSize: {
      type: Number,
      default: 300
    },
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    tableRowClassName({ row, rowIndex }) {
      rowIndex += 1
      if (rowIndex % 2 !== 0) {
        return 'stripe-row'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
// 表格樣式


/deep/ .el-table thead {
  font-size: 16px;
  color: #606067;
}

/deep/ .el-table {
  font-size: 16px;
  color: #2b2b2f;
}
/deep/ .el-table .stripe-row {
  background: #f9fbff;
}

// 斑馬紋
/deep/ .el-table__row.el-table__row--striped {
  background-color: lime !important;
}

/deep/ .el-table--border td {
  border-right: 1px dashed #eeeeee;
  border-bottom: 1px dashed #eeeeee;
}
/*
  分页的樣式
  jr-normal-pagination 
*/
.jr-normal-pagination.is-background /deep/ .el-pager li:not(.disabled).active {
  background-color: $color-golden-100;
  color: $color-blue-100;
}
.jr-normal-pagination.is-background /deep/ .el-pager li {
  background-color: $color-white;
  border: 1px solid #dddddd;
  min-width: 36px;
  border-radius: 4px;
  font-size: 16px;
}
.jr-normal-pagination /deep/ .el-pager li {
  height: 36px;
  line-height: 36px;
}
.jr-normal-pagination.is-background /deep/ .el-pager li:not(.disabled):hover {
  color: $color-blue-100;
}
.jr-normal-pagination.is-background /deep/ .btn-prev,
.jr-normal-pagination.is-background /deep/ .btn-next {
  min-width: 36px;
  border-radius: 4px;
  height: 36px;
  line-height: 36px;
  background-color: $color-white;
  border: 1px solid #dddddd;
}
.jr-normal-pagination.is-background /deep/ .el-pagination__total {
  height: 36px;
  line-height: 36px;
  font-size: 16px;
}
.jr-normal-pagination.is-background /deep/ .el-pagination__sizes {
  height: 36px;
  line-height: 36px;
}
.jr-normal-pagination.is-background
  /deep/
  .el-pagination__sizes
  .el-input__inner {
  height: 36px;
  line-height: 36px;
  font-size: 16px;
}
.jr-normal-pagination.is-background
  /deep/
  .el-pagination__sizes
  .is-focus
  .el-input__inner {
  border-color: $color-blue-100;
}
.jr-normal-pagination.is-background
  /deep/
  .el-pagination__sizes
  .el-input__inner:hover {
  border-color: $color-blue-40;
}
.jr-normal-pagination.is-background
  /deep/
  .el-pagination__sizes
  .el-select
  .el-input__inner:focus {
  border-color: $color-blue-60;
}
.jr-normal-pagination.is-background /deep/ .el-pagination__jump {
  height: 36px;
  line-height: 36px;
}
.jr-normal-pagination.is-background
  /deep/
  .el-pagination__editor.el-input
  .el-input__inner {
  height: 36px;
}
.jr-normal-pagination.is-background
  /deep/
  .el-pagination__editor.el-input
  .el-input__inner:hover {
  border-color: $color-blue-40;
}
.jr-normal-pagination.is-background
  /deep/
  .el-pagination__editor.el-input
  .el-input__inner:focus {
  border-color: $color-blue-60;
}
</style>
