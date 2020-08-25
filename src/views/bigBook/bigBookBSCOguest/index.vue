<template>
  <div class="openAccountContainer">
    <el-card class="increaseMember-wrap">
      <div class="content">
        <jr-form
          class="jr-form-temp"
          :formData='formData'
          :formConfig="formConfig"
          @changeFn='changeFn'
        ></jr-form>
        <div class="bottom">
          <el-button type="primary">導出Excel</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import JrForm from '@/components/jr_form/JrForm'
import { formConfig } from './index'

export default {
  name: 'OpenAccount',
  components: {
    JrForm
  },
  created() {},
  data() {
    const increaseStaffInfo = formConfig(this)
    return {
      activeName: 'first',
      userList: [],
      showSummary: true,
      formConfig: increaseStaffInfo,
      formData: {
        gengshu: ''
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    searchData(searData) {
      console.log(searData, 'searchData')
    },
    changeFn(val) {
      console.log(val)
    },
    handleTabClick() {},
    handleSizeChange(sizeVal) {
      console.log(sizeVal, 'size改變了')
    },
    handleCurrentChange(val) {
      console.log(val, 'pagenum 該百年了')
    }
  }
}
</script>

<style lang="scss" scoped>
.openAccountContainer {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;

  .increaseMember-wrap {
    width: 80%;
    margin: 0 auto;
    
    /deep/ .el-card__body {
      padding: 0;
    }
  }

  .queryOption {
    background-color: white;
    border-radius: 8px;
    // height: 60px;
    padding: 10px;

    .tip {
      margin-top: 10px;
      text-indent: 70px;
      font-size: 14px;
      color: #8f9297;
    }
  }

  .jr-form-temp {
    padding: 0 0 10px;
  }

  .content {
    // margin-top: 20px;
    background: #ffffff;
    border-radius: 8px;

    /deep/ .el-tabs__nav-wrap::after {
      height: 1px;
    }
    /deep/ .jr-tabs .el-tabs__active-bar {
      height: 2px;
    }
    /deep/ .el-tabs__nav-wrap {
      padding-left: 20px;
    }
  }

  .pagenation {
    margin-top: 20px;
    height: 60px;
    text-align: center;
    background: #ffffff;
    border-radius: 8px 8px 0 0;
  }
  .bottom {
    padding: 0 0 10px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>