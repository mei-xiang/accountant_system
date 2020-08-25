<template>
  <!-- 
        帶slot 的modal
     -->
  <el-dialog
    :visible="openModal"
    :width="width"
    class="jr-dialog"
    :show-close="false"
    center
    v-bind="$attrs"
  >
    <div slot="title" class="jr-title">
      <div class="jr-title-text">
        <div class="line"></div>
        <span>{{ title }}</span>
      </div>
      <span class="iconfont iconguanbi jr-icon" @click="closeModal"></span>
    </div>

    <div class="jr-content">
      <slot></slot>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'jrModal',
  props: {
    width: {
      type: String,
      default: '80%'
    },
    title: {
      type: String,
      default: '默認標題'
    },
    openModal: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    openModal(newVal) {}
  },
  data() {
    return {
      centerDialogVisible: false,
      isAlready: 'n',
      textarea: ''
    }
  },
  methods: {
    open() {
      this.centerDialogVisible = !this.centerDialogVisible
    },
    closeModal() {
      // 修改父組件的值
      this.$emit('update:openModal', false)
      console.log(111)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
$bg-color: #f6f6f6;
$color-blue-hover: rgba(0, 31, 160, 1);
.jr-title {
  text-align: left;
  padding: 8px 20px;
  background-color: #f9f9f9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;

  .jr-title-text {
    width: 400px;
    font-size: 18px;
    font-weight: 600;
    color: #2b2b2f;
    display: flex;
    align-items: center;

    .line {
      width: 4px;
      height: 17px;
      border-radius: 4px;
      background-color: $color-blue-100;
      margin-right: 8px;
    }
  }

  .jr-icon {
    margin-left: auto;
    font-size: 36px;
    color: #8f9297;
  }
}

.jr-content {
  padding-bottom: 20px;
  background-color: #f9f9f9;
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
  padding: 0px 20px 0;
  background-color: #f9f9f9;
  border-radius: 8px;
  height: 750px;
  overflow: scroll;
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
  // background: url('../../assets/image/mima.svg');
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

/deep/.el-dialog {
  border-radius: 8px;
}
</style>
