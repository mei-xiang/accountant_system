<template>
  <!-- 
        简单模态框
        三种状态：
            1. 有标题无icon
            2. 有标题有icon
            3. 无标题有icon
            根据属性 hasTitle hasTitleicon hasIcon进行相应修改
     -->
  <el-dialog
    :visible.sync="centerDialogVisible"
    :width="dialogWidth"
    class="jr-dialog"
    :show-close="false"
    center
  >
    <div slot="title" class="jr-title">
      <span class="jr-title-text">請輸入管理員密碼</span>
    </div>
    <div class="jr-content">
      <span>{{ content }}</span>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button class="confirm" @click="centerDialogVisible = false"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      dialogWidth: '400px',
      content: '請輸入操作密碼'
    }
  },
  methods: {
    open() {
      this.centerDialogVisible = !this.centerDialogVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.jr-title {
  text-align: left;
  padding: 16px 20px 0;
  background: #f9f9f9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.jr-title::after {
  content: ' ';
  display: block;
  position: relative;
  top: -18px;
  width: 4px;
  height: 16px;
  border-radius: 4px;
  background-color: $color-blue-100;
}
.jr-title-text {
  font-size: 18px;
  margin-left: 14px;
}
.jr-content {
  font-size: 14px;
}
.dialog-footer {
  text-align: right;
}
.confirm {
  color: $color-golden-100;
  background-color: $color-blue-100;
}
.confirm:hover {
  color: $color-golden-100;
  background-color: $color-blue-60;
}
.jr-dialog /deep/ .el-dialog__header {
  padding: 0;
}
.jr-dialog /deep/ .el-dialog__body {
  padding: 0px 21px 24px;
}
.jr-dialog /deep/ .el-dialog__footer {
  padding: 0 20px 20px;
}
.icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-size: 30px 30px;
  background-position: center center;
  background-repeat: no-repeat;
}
.ml40 {
  margin-left: 40px;
}
</style>
