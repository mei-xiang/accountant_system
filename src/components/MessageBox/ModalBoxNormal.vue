<template>
  <!-- 
        一般模态框
  -->
  <el-dialog
    :visible.sync="centerDialogVisible"
    :width="dialogWidth"
    class="jr-dialog"
    :show-close="false"
    center
  >
    <div slot="title" class="jr-title">
      <span class="jr-title-text">编辑</span>
      <!-- <span class="iconfont iconguanbi jr-icon" @click="centerDialogVisible = false"></span> -->
    </div>
    <div class="jr-content">
      <div class="top-modal">
        <span class="title">完成狀態</span>
        <el-radio v-model="isAlready" label="n" border class="jr-normal-radio">未完成</el-radio>
        <el-radio v-model="isAlready" label="y" border class="jr-normal-radio">已完成</el-radio>
      </div>
      <div class="middle-modal">
        <span class="title">内部備注</span>
        <el-input
          type="textarea"
          class="jr-normal-textarea"
          :rows="7"
          placeholder="请输入内容"
          v-model="textarea"
        ></el-input>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button class="confirm" icon="el-icon-refresh" @click="refresh">更新</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      dialogWidth: '800px',
      isAlready: 'n',
      textarea: ''
    }
  },
  methods: {
    open() {
      this.centerDialogVisible = !this.centerDialogVisible
    },
    refresh() {}
  }
}
</script>

<style lang="scss" scoped>
$bg-color: #f6f6f6;
$color-blue-100: rgba(0, 17, 104, 1);
$color-white: #ffffff;
$color-golden-100: rgba(231, 224, 131, 1);
$color-blue-hover: rgba(0, 17, 104, 0.6);
.jr-title {
  text-align: left;
  padding: 16px 20px 0;
  background: $bg-color;
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
  margin: 0 -1px;
}
.top-modal {
  padding: 10px;
  border-bottom: 1px solid $bg-color;
  background: $color-white;

  .title {
    display: inline-block;
    width: 100px;
    margin-right: 22px;
    text-align: right;
  }
}
.middle-modal {
  display: flex;
  padding: 10px 20px 10px 10px;
  border-bottom: 1px solid $bg-color;
  background: $color-white;

  .title {
    display: inline-block;
    width: 122px;
    margin-right: 22px;
    text-align: right;
  }
}
.dialog-footer {
  text-align: right;
  padding: 10px 20px 10px;
  background: $color-white;
}
.confirm {
  color: $color-golden-100;
  background-color: $color-blue-100;
}
.confirm:hover {
  color: $color-golden-100;
  background-color: $color-blue-hover;
}
.confirm:active {
  color: $color-golden-100;
  background-color: $color-blue-hover;
}
.confirm:focus {
  color: $color-golden-100;
  background-color: $color-blue-hover;
}
.jr-dialog /deep/ .el-dialog__header {
  padding: 0;
}
.jr-dialog /deep/ .el-dialog__body {
  padding: 0px 21px 0;
  background: $bg-color;
}
.jr-dialog /deep/ .el-dialog__footer {
  padding: 0 20px 20px;
  background: $bg-color;
}
.icon {
  // background: url('../../assets/image/mima.svg');
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
.jr-icon {
  font-size: 18px;
  float: right;
  cursor: pointer;
}
.jr-width /deep/ .el-input__inner {
  width: 360px;
}
.jr-width /deep/ .el-input__icon {
  line-height: 50px;
}
.jr-width /deep/ .el-input__suffix {
  right: -50px;
}
</style>