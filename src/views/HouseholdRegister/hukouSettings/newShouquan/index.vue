<template>
  <div class="addHukou-wrap">
    <el-card class="header">
      <div class="formInfo">
        <jr-form
          :formData="formData"
          :formConfig="formConfig"
          :rules="rules"
        ></jr-form>
        <el-row>
          <el-col :span="24" class="colItem">
            <div class="label">到期日</div>
            <div class="conten"></div>
          </el-col>
        </el-row>
      </div>

      <div class="uploadImg">
        <h3 class="title">授權人姓名</h3>
        <div
          class="relateItem"
          v-for="item in relateNameList"
          :key="item.value"
        >{{item.label}}</div>
      </div>
    </el-card>

    <div class="middle">
      <el-button type="primary">
        <i class="iconfont icondayin-xian"></i>
        <span>新增授權</span>
      </el-button>
      <el-button type="primary">
        <i class="iconfont iconshuaxin"></i>
        <span>更新授權</span>
      </el-button>
      <el-button type="primary">
        <i class="iconfont iconjian"></i>
        <span>刪除授權</span>
      </el-button>
      <el-button type="primary">
        <i class="iconfont iconfanhui"></i>
        <span>返回</span>
      </el-button>
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
      passportData: {},
      relateNameList: [
        {
          value: 1,
          label: '王一博'
        },
        {
          value: 2,
          label: '吳亦凡'
        },
        {
          value: 3,
          label: '易烊千璽'
        }
      ]
    }
  },
  mounted() {
    console.log(this.ha, '能夠拿得到test嗎')
  },
  methods: {
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

    /deep/ .el-card__body {
      padding: 0;
      display: flex;
      justify-content: flex-start;
      height: auto;
    }

    .formInfo {
      width: 1040px;
      box-sizing: border-box;
    }

    .uploadImg {
      width: 160px;
      // height: 200px;
      box-sizing: border-box;
      overflow: hidden;

      .title {
        font-size: 16px;
        text-align: center;
        color: #606067;
        height: 58px;
        margin: 0;
        line-height: 58px;
        border-bottom: 1px solid #eeeeee;
      }

      .relateItem {
        line-height: 40px;
      }
    }
  }

  .middle {
    margin-top: 20px;
    margin-bottom: 36px;
    justify-content: center;
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
