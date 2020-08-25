<template>
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
</template>

<script>
export default {
  name: 'jrPagination',
  props: {
    sizeList: {
      type: Array,
      default: () => {
        return []
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
    return {
      currentPage4: 1
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
/*
  分页
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
