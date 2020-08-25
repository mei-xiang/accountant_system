<template>
  <div class="addHukou-wrap">
    <el-card class="header">
      <jr-form :formData="formData" :formConfig="formConfig"></jr-form>
      <el-row>
        <el-col :span="24" class="rowItem">
          <div class="label">備注</div>
          <div class="content">
            <el-button type="primary" @click="openRemarkModal(1)"
              >特別備注</el-button
            >
            <el-button type="primary" @click="openRemarkModal(2)"
              >批額備注</el-button
            >
            <el-button type="primary" @click="openRemarkModal(3)"
              >大簿備注</el-button
            >
            <el-button type="primary" @click="openRemarkModal(4)"
              >信息備注</el-button
            >
            <el-button type="primary" @click="openRemarkModal(5)"
              >備注</el-button
            >
            <el-button type="primary" @click="openRemarkModal(6)"
              >轉碼備注</el-button
            >
          </div>
        </el-col>
        <el-col :span="24" class="rowItem">
          <div class="label">備注</div>
          <div class="content">
            <el-button type="primary" @click="openRemarkModal(7)"
              >MGM 8號會Order</el-button
            >
          </div>
        </el-col>
        <el-col :span="24" class="rowItem">
          <div class="label">其他</div>
          <div class="content">
            <el-button type="primary" @click="handleOtherBtn(2, 8)"
              >新增DS/SS</el-button
            >
            <el-button type="primary" @click="handleOtherBtn(3, 9)"
              >新增批額</el-button
            >
            <el-button type="primary" @click="handleOtherBtn(4, 10)"
              >新增授權</el-button
            >
            <el-button type="primary" @click="handleOtherBtn(5, 11)"
              >設定單廰額</el-button
            >
            <el-button type="primary" @click="handleOtherBtn(6, 12)"
              >設定共用額</el-button
            >
            <el-button type="primary" @click="handleOtherBtn(7, 13)"
              >佣金設定</el-button
            >
            <el-button type="primary" @click="handleOtherBtn(8, 14)"
              >利率設定</el-button
            >
            <el-button type="primary" @click="handleOtherBtn(9, 15)"
              >戶口短訊</el-button
            >
            <el-button type="primary" @click="handleOtherBtn(10, 16)"
              >幕後戶主</el-button
            >
            <el-button
              type="primary"
              style="margin-left: 0;margin-bottom: 0;"
              @click="handleOtherBtn(11, 17)"
              >凍結/解凍</el-button
            >
            <el-button
              type="primary"
              style="margin-bottom: 0;"
              @click="handleOtherBtn(12, 18)"
              >負責廰會</el-button
            >
            <el-button
              type="primary"
              style="margin-bottom: 0;"
              @click="handleOtherBtn(13, 19)"
              >禮遇級別</el-button
            >
            <el-button
              type="primary"
              style="margin-bottom: 0;"
              @click="handleOtherBtn(14, 20)"
              >擔保戶口</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-card>

    <jr-modal width="85%" :title="showModalTitle" :openModal.sync="isOpenModal">
      <div class="remarkModal" v-if="otherFlag === 1">
        <jr-form
          :formData="formDataRemark"
          :formConfig="formConfigRemark"
        ></jr-form>
        <el-row>
          <el-col :span="24" style="text-align: center; padding-top: 20px;">
            <el-button type="primary">更新備注</el-button>
          </el-col>
        </el-row>
      </div>
      <new-ds-ss v-if="otherFlag === 2" />
      <new-pi v-if="otherFlag === 3" />
      <new-shouquan v-if="otherFlag === 4" />
      <one-room v-if="otherFlag === 5" />
      <set-together v-if="otherFlag === 6" />
      <set-commission v-if="otherFlag === 7" />
      <set-interest v-if="otherFlag === 8" />
      <hukou-msg v-if="otherFlag === 9" />
      <huzhu v-if="otherFlag === 10" />
      <thaw v-if="otherFlag === 11" />
      <lobby v-if="otherFlag === 12" />
      <courtesy v-if="otherFlag === 13" />
      <guarantee v-if="otherFlag === 14" />
    </jr-modal>
  </div>
</template>

<script>
import newDsSs from './newAddDs/index.vue'
import setCommission from './setCommission/index.vue'
import lobby from './lobby/index.vue'
import newPi from './newPiE/index.vue'
import courtesy from './courtesy/index.vue'
import guarantee from './guarantee/index.vue'
import thaw from './thaw/index.vue'
import setInterest from './setInterest/index.vue'
import oneRoom from './oneRoom/index.vue'
import JrForm from '@/components/jr_form/JrForm'
import setTogether from './setTogether/index.vue'
import hukouMsg from './hukouMsg/index.vue'
import jrModal from '@/components/jr_modal/modal.vue'
import huzhu from './huzhu/index.vue'
// import
import newShouquan from './newShouquan/index.vue'
import { formConfig, formConfigRemark } from './index'
export default {
  name: 'transferHukou',
  components: {
    JrForm,
    jrModal,
    newDsSs,
    newPi,
    newShouquan,
    oneRoom,
    setTogether,
    setInterest,
    hukouMsg,
    huzhu,
    setCommission,
    thaw,
    lobby,
    courtesy,
    guarantee
  },
  data() {
    const addHukouInfo = formConfig(this)
    const modalForm = formConfigRemark(this)
    return {
      // 最上方表單數據
      formData: {
        checkboxVal: []
      },
      formConfig: addHukouInfo,
      formDataRemark: {},
      formConfigRemark: modalForm,
      isOpenModal: false,
      whichRemarkModal: '',
      otherFlag: 1
    }
  },
  mounted() {},
  methods: {
    // tabs切換
    openRemarkModal(val) {
      this.otherFlag = 1
      this.isOpenModal = true
      this.whichRemarkModal = val
      this.formConfigRemark[0].list[0].label = this.showModalTitle
    },
    handleOtherBtn(val, whichRemarkVal) {
      this.isOpenModal = true
      this.otherFlag = val
      this.whichRemarkModal = whichRemarkVal
      this.formConfigRemark[0].list[0].label = this.showModalTitle
    }
  },
  computed: {
    showModalTitle() {
      // titleFn()
      if (this.whichRemarkModal === 1) {
        return '特別備注'
      } else if (this.whichRemarkModal === 2) {
        return '批額備注'
      } else if (this.whichRemarkModal === 3) {
        return '大簿備注'
      } else if (this.whichRemarkModal === 4) {
        return '信息備注'
      } else if (this.whichRemarkModal === 5) {
        return '備注'
      } else if (this.whichRemarkModal === 6) {
        return '轉碼備注'
      } else if (this.whichRemarkModal === 7) {
        return 'MGM 8號會Order'
      } else if (this.whichRemarkModal === 8) {
        return '新增DS/SS'
      } else if (this.whichRemarkModal === 9) {
        return '新增批額'
      } else if (this.whichRemarkModal === 10) {
        return '新增授權'
      } else if (this.whichRemarkModal === 11) {
        return '設定單廰額'
      } else if (this.whichRemarkModal === 12) {
        return '設定共用額'
      } else if (this.whichRemarkModal === 13) {
        return '佣金設定'
      } else if (this.whichRemarkModal === 14) {
        return '利率設定'
      } else if (this.whichRemarkModal === 15) {
        return '戶口短訊'
      } else if (this.whichRemarkModal === 16) {
        return '幕後戶主'
      } else if (this.whichRemarkModal === 17) {
        return '凍結/解凍'
      } else if (this.whichRemarkModal === 18) {
        return '負責聽會'
      } else if (this.whichRemarkModal === 19) {
        return '禮遇級別'
      } else if (this.whichRemarkModal === 20) {
        return '擔保戶口'
      }
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
    margin-bottom: 20px;

    .rowItem {
      display: flex;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #eeeeee;
      .label {
        width: 100px;
        text-align: right;
        padding-right: 12px;
        box-sizing: border-box;
      }

      .content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex: 1;
      }

      .el-button--primary {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
