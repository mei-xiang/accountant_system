<template>
  <div class="addHukou-wrap">
    <el-card class="header">
      <jr-form
        :formData="formData"
        :formConfig="formConfig"
        :rules="rules"
        @addCountry="addCountry"
        @delCountry="delCountry"
        @addLanguage="addLanguage"
        @delLanguage="delLanguage"
        @addIndustry="addIndustry"
        @delIndustry="delIndustry"
        @addJob="addJob"
        @delJob="delJob"
      ></jr-form>
    </el-card>

    <div class="middle">
      <el-button type="primary">
        <i class="iconfont icondayin-xian"></i>
        <span>打印申請表</span>
      </el-button>

      <div class="center">
        <el-button type="primary" :disabled="true">
          <i class="iconfont iconbaocun"></i>
          <span>存儲編號</span>
        </el-button>
        <el-button type="primary" :disabled="true">
          <i class="iconfont iconxinzeng"></i>
          <span>新增戶口</span>
        </el-button>
        <el-button type="primary" :disabled="true">
          <i class="iconfont iconxinzeng"></i>
          <span>新增子戶口</span>
        </el-button>
        <el-button type="primary" :disabled="true">
          <i class="iconfont iconshuaxin"></i>
          <span>更新戶口</span>
        </el-button>
      </div>

      <div class="returnBtn">
        <i class="iconfont iconfanhui"></i>
      </div>
    </div>

    <el-card class="bottom">
      <el-tabs v-model="activeName" @tab-click="handleTabClick" class="jr-tabs">
        <el-tab-pane label="用户管理" name="first"> </el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
      </el-tabs>

      <jr-form
        :formData="passportData"
        :formConfig="passportFromConfig"
        :rules="passportRules"
        @addCertificateCountry="addCertificateCountry"
        @delCertificateCountry="delCertificateCountry"
      ></jr-form>
    </el-card>
  </div>
</template>

<script>
import JrForm from '@/components/jr_form/JrForm'
import { formConfig, rules, passportFromConfig, passportRules } from './index'
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
      rules,
      // tabs 表單
      activeName: 'first',
      passportFromConfig: psptFromConfig,
      passportRules,
      passportData: {}
    }
  },
  mounted() {
    console.log(this.ha, '能夠拿得到test嗎')
  },
  methods: {
    // 國籍
    addCountry(inputVal) {
      console.log('添加國籍', inputVal)
    },
    delCountry(selectVal) {
      console.log('刪除國際', selectVal)
    },
    // 語言
    addLanguage(inputVal) {
      console.log('添加語言', inputVal)
    },
    delLanguage(selectVal) {
      console.log('刪除語言', selectVal)
    },
    // 行業種類
    addIndustry(inputVal) {
      console.log('行業種類', inputVal)
    },
    delIndustry(selectVal) {
      console.log('行業種類', selectVal)
    },
    // 職位
    addJob(inputVal) {
      console.log('行業種類', inputVal)
    },
    delJob(selectVal) {
      console.log('行業種類', selectVal)
    },
    // tabs切換
    handleTabClick() {
      console.log('tab切換')
    },
    // 證件國際
    addCertificateCountry(inputVal) {
      console.log('證件國際', inputVal)
    },
    delCertificateCountry(selectVal) {
      console.log('證件國際', selectVal)
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
