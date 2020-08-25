<template>
  <div class="addHukou-wrap">
    <el-card class="header">
      <jr-form :formData="formData" :formConfig="formConfig"></jr-form>
    </el-card>

    <div class="middle">
      <span></span>

      <div class="center">
        <el-button type="primary">
          <span>更新戶口</span>
        </el-button>
        <el-button type="primary">
          <span>轉換圖片</span>
        </el-button>
        <el-button type="primary">
          <span>返回</span>
        </el-button>
      </div>

      <span></span>
    </div>

    <el-card class="bottom">
      <el-tabs v-model="activeName" @tab-click="handleTabClick" class="jr-tabs">
        <el-tab-pane label="護照" name="first"> </el-tab-pane>
        <el-tab-pane label="身份證" name="second"></el-tab-pane>
        <el-tab-pane label="通行證" name="third"></el-tab-pane>
        <el-tab-pane label="臨時" name="fourth"></el-tab-pane>
        <el-tab-pane label="簽名" name="five"></el-tab-pane>
      </el-tabs>

      <jr-form
        :formData="passportData"
        :formConfig="passportFromConfig"
      ></jr-form>
    </el-card>
  </div>
</template>

<script>
import JrForm from '@/components/jr_form/JrForm'
import { formConfig, passportFromConfig } from './index'
export default {
  name: 'addHukou',
  components: { JrForm },
  data() {
    const addHukouInfo = formConfig(this)
    const psptFromConfig = passportFromConfig(this)
    return {
      // 最上方表單數據
      formData: {
        checkboxVal: []
      },
      formConfig: addHukouInfo,
      // tabs 表單
      activeName: 'first',
      passportFromConfig: psptFromConfig,
      passportData: {}
    }
  },
  mounted() {
    console.log(this.ha, '能夠拿得到test嗎')
  },
  methods: {
    // tabs切換
    handleTabClick() {
      console.log('tab切換')
    }
  }
}
</script>

<style lang="scss" scoped>
.addHukou-wrap {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  /deep/ .el-card__body {
    padding: 0;
  }

  .header {
    background-color: white;
    border-radius: 8px;
  }

  .middle {
    margin-top: 20px;
    margin-bottom: 36px;
    justify-content: space-between;
    display: flex;
    align-items: center;

    /deep/ .el-button + .el-button {
      margin-left: 15px;
    }

    .returnBtn {
      width: 36px;
      height: 36px;
      text-align: center;
      font-size: 24px;
      line-height: 36px;
      opacity: 0.6;
      background: #ffffff;
      border-radius: 4px;
      cursor: pointer;

      i {
        font-size: 24px;
        color: #d8d9da;
      }
    }
  }

  .bottom {
    border-radius: 8px;
  }
}
</style>
