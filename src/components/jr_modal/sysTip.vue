<template>
  <!-- 
        弹框
        三种状态：
            1. 有标题无icon
            2. 有标题有icon
            3. 无标题有icon
            根据属性 hasTitle hasTitleicon hasIcon进行相应修改
     -->
  <el-dialog
    :visible.sync="centerDialogVisible"
    :width="width"
    class="jr-dialog"
    :show-close="false"
    center
  >
    <div slot="title" class="jr-title" v-if="hasTitle">
      <i class="icon" v-if="hasTitleicon"></i>
      <span :class="hasTitleicon === true ? 'jr-title-text' : ''"
        >科維賬房系統提示</span
      >
    </div>

    <div
      class="jr-content"
      :class="hasTitleicon === true && hasIcon === false ? 'ml40' : ''"
    >
      <i class="icon" v-if="hasIcon"></i>
      <span :class="hasIcon === true ? 'jr-title-text' : ''">{{
        content
      }}</span>
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
  props: {
    hasTitle: {
      type: Boolean,
      default: true
    },
    hasTitleicon: {
      type: Boolean,
      default: true
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: '请输入操作密码'
    },
    width: {
      type: String,
      default: '400px'
    }
  },
  data() {
    return {
      centerDialogVisible: false
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
}
.jr-title-text {
  position: relative;
  top: -10px;
  margin-left: 5px;
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
