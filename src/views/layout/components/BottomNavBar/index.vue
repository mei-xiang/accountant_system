<template>
  <div class="bottomNavBar">
    <!-- 操作密码 -->
    <div class="operatePwd">
      <span class="label">
        操作碼
      </span>
      <el-input
        v-model="operateVal"
        placeholder="請輸入操作碼"
        size="big"
        style="width: 182px;"
      ></el-input>
    </div>
    <!-- 查收益 -->
    <center />

    <!-- 全局搜索相匹配关键字并以高亮展示 -->
    <div class="hightLightKeywords">
      <el-input
        v-model="operateVal"
        placeholder="请输入高亮展示关键字"
        size="big"
        style="width: 300px;"
      >
        <i
          class="iconfont iconsousuo"
          slot="suffix"
          @click="searchAllRange"
          style="font-size: 24px;position: relative; top: 5px;"
        >
        </i
      ></el-input>
    </div>
  </div>
</template>

<script>
import center from './components/center.vue'
export default {
  components: {
    center
  },
  data() {
    return {
      operateVal: ''
    }
  },
  computed: {},
  methods: {
    searchAllRange() {
      console.log('搜索全局关键字')
    }
  }
}
</script>

<style lang="scss" scoped>
.bottomNavBar {
  padding-left: 180px;
  padding-right: 20px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .operatePwd {
    display: flex;
    align-items: center;

    .label {
      opacity: 0.9;
      width: 61px;
      // display: block;
      margin-right: 8px;
      color: #ebd38c;
      font-size: 16px;
    }
  }

  // 格式化element ui 的样式
  /deep/ .el-input__suffix-inner {
    cursor: pointer;
  }

  /deep/ .el-input__inner {
    background-color: rgba($color: #000000, $alpha: 0);
    border: 1px solid #e7e083;
    color: #e7e083;
  }

  /deep/ .el-input__inner::placeholder {
    color: #e7e083;
    opacity: 0.6;
  }

  /deep/ .el-select .el-input .el-select__caret {
    color: #e7e083;
  }

  /deep/ .el-select .el-input.is-focus .el-input__inner {
    border-color: #e7e083;
  }

  /deep/ .el-select .el-input__inner:focus {
    border-color: #e7e083;
  }

  /deep/ .el-input__prefix,
  /deep/ .el-input__suffix {
    color: #e7e083;
  }

  /deep/ .el-button {
    border: 1px solid #e7e083;
    border-radius: 4px;
    color: 14px;
    color: #e7e083;
    background-color: rgba($color: #000000, $alpha: 0);
    padding: 12px 15px;
  }
}
</style>
