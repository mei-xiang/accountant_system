<template>
  <div class="openAccountContainer">
    <el-card class="increaseMember-wrap">
      <div class="content" ref="content">
        <el-row>
          <el-col :span="16">
            <jr-form
              class="jr-form-temp"
              :label-width="labelWidth"
              :formData='formData'
              :formConfig="formConfig"
              @changeFn='changeFn'
              @accessTypeChange="accessTypeChange"
            ></jr-form>
          </el-col>
          <el-col :span="3" class="con-middle">
            <div class="household-img">戶主圖片</div>
            <ul>
              <li class="active">1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </el-col>
          <el-col :span="5" class="con-right">
            <div class="tabs">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="護照" name="first"></el-tab-pane>
                <el-tab-pane label="身份證" name="second"></el-tab-pane>
                <el-tab-pane label="通行證" name="third"></el-tab-pane>
                <el-tab-pane label="臨時" name="fourth"></el-tab-pane>
                <el-tab-pane label="簽名" name="fifth"></el-tab-pane>
              </el-tabs>
            </div>
            <div class="passport">
              <div class="img">圖片1</div>
              <div class="img2">圖片2</div>
            </div>
            <div class="passpost-info">
              <jr-form
                :label-width="labelWidthPass"
                :formData='formDataPass'
                :formConfig="passConfig"
              ></jr-form>
            </div>
          </el-col>
        </el-row>
        <div class="bottom">
          <el-button type="primary">新增大簿</el-button>
          <el-button type="primary">新增並列印</el-button>
          <el-button type="primary">返回</el-button>
        </div>
      </div>
    </el-card>
    <div class="userList">
       <el-tabs v-model="activeName" @tab-click="handleTabClick" class="jr-tabs">
        <el-tab-pane label="ORDER 列表" name="first"> </el-tab-pane>
      </el-tabs>
      <jr-table
        :tableData="orderData"
        :columns="orderColumns"
        border
        :defaultColumnConfig="defaultColumnConfig"
        :pagination="false"
      ></jr-table>
    </div>
    <div class="userList">
       <el-tabs v-model="activeName" @tab-click="handleTabClick" class="jr-tabs">
        <el-tab-pane label="大簿 列表" name="first"> </el-tab-pane>
      </el-tabs>
      <jr-table
        :tableData="bigBookData"
        :columns="bigBookList"
        border
        :defaultColumnConfig="defaultColumnConfig"
        :pagination="false"
      ></jr-table>
    </div>
  </div>
</template>

<script>
import jrTable from '@/components/jr_table/index.vue'
import JrPagination from '@/components/jr_table/pagination.vue'
import JrForm from '@/components/jr_form/JrForm'
import { tableColumns, formConfig, passConfig, trendsTableFalse, bigBookColumns } from './index'

export default {
  name: 'OpenAccount',
  components: {
    jrTable,
    JrForm,
    JrPagination
  },
  created() {},
  data() {
    const orderColumns = tableColumns(this)
    const bigBookList = bigBookColumns(this)
    const increaseStaffInfo = formConfig(this)
    const passInfo = passConfig(this)
    return {
      orderColumns,
      bigBookList,
      activeName: 'first',
      userList: [],
      showSummary: true,
      labelWidth: '150px',
      labelWidthPass: '90px',
      defaultColumnConfig: {
        align: 'center'
      },
      orderData: [
        {
          companyName: '永利廣東貴賓會',
          num: 'Z90646',
          name: '測試',
          relationName: '0',
          cardMoney: '(-20)',
          curTotal1: '(-1,373.5498)',
          curTotal: '150',
          geng: '夜',
          remark: '0'
        },
        {
          companyName: '新濠廣東貴賓會',
          num: 'CO6100',
          name: '測試',
          relationName: '0',
          cardMoney: '(-10)',
          curTotal1: '(-1,353.5498)',
          curTotal: '0',
          geng: '夜',
          remark: '0'
        }
      ],
      formConfig: increaseStaffInfo,
      passConfig: passInfo,
      formData: {
        HouseholdNum: '',
        gengshu: '',
        accessType: '',
        transferAccounts: '',
        convert: '',
        infoRemarks: '',
        infoRemarksV: '',
        flashRemarks: '',
        insideRemarks: '',
        accountName: ''
      },
      formDataPass: {

      },
      bigBookData: []
    }
  },
  computed: {},
  mounted() {
    for (let i = 0; i < 300; i++) {
      this.userList.push({
        value: i + 1,
        label: 'ZABC4',
        hightLight: false
      })

      if (i % 4 === 0) {
        this.userList[i].hightLight = true
      }
    }
  },
  methods: {
    searchData(searData) {
      console.log(searData, 'searchData')
    },
    changeFn(val) {
      console.log(val)
    },
    handelCheckHousehold(prop) {
      console.log(prop)
    },
    handelCheckAccounts(val) {
      console.log(val)
    },
    accessTypeChange(val) {
      let formConfig = this.formConfig
      if (val === '3') {
        trendsTableFalse.forEach((evt, index) => {
          if (evt === 8 || evt === 12) {
            this.$set(formConfig[evt].list[0], 'hidden', true)
          } else {
            this.$set(formConfig[evt].list[0], 'hidden', false)
          }
        })
        // 轉賬戶名 顯示
        this.$set(formConfig[3], 'span', 12)
      } else {
        trendsTableFalse.forEach((evt, index) => {
          if (evt === 8 || evt === 12) {
            this.$set(formConfig[evt].list[0], 'hidden', false)
          } else {
            this.$set(formConfig[evt].list[0], 'hidden', true)
          }
        })
        // 轉賬戶名 隱藏
        this.$set(formConfig[3], 'span', 24)
      }
    },
    handleTabClick() {},
    handleSizeChange(sizeVal) {
      console.log(sizeVal, 'size改變了')
    },
    handleCurrentChange(val) {
      console.log(val, 'pagenum 該百年了')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    getSummaries(params) {
      const { columns, data } = params
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        const values = data.map((item) => Number(item[column.property]))
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })
      console.log('111')
      return sums
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
    margin: 0 20px;
    
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
    .con-middle {
      height: 36px;
      line-height: 36px;
      text-align: center;
      border-bottom: 1px solid #eeeeee;

      ul {
        list-style-type: none;
        padding: 0 10px;
      }
      li {
        height: 22px;
        line-height: 22px;
        padding: 7px 12px;
      }
      li.active {
        border-radius: 4px;
        background: #E7E083;
      }
    }

    .con-right {
      position: absolute;
      right: 0;
      bottom: 0;
      top: 0;
      border-left: 1px solid #eeeeee;

      .tabs {
        padding-top: 20px;
      }

      .passport {
        padding: 10px 10px 0;

        .img {
          height: 210px;
          margin-bottom: 10px;
          border-radius: 8px;
          background: #eeeeee;
        }
        .img2 {
          height: 210px;
          margin-bottom: 20px;
          border-radius: 8px;
          background: #eeeeee;
        }
      }
    }
  }

  .userList {
    box-sizing: border-box;
    padding: 0 20px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    .jr-tabs {
      width: 100%;
      background: #fff;
      border-radius: 7px;
    }

    /deep/ .el-tabs__nav-wrap::after {
      height: 1px;
    }
    /deep/ .jr-tabs .el-tabs__active-bar {
      height: 2px;
    }
    /deep/ .el-tabs__nav-wrap {
      padding-left: 20px;
    }

    .table-wrap {
      width: 100%;
      padding-bottom: 10px;
    }

    .useritem {
      width: 110px;
      height: 48px;
      border-radius: 4px;
      line-height: 48px;
      text-align: center;
      font-size: 16px;
      color: #606067;
      margin-right: 6px;
      background: #eeeeee;
      margin-bottom: 6px;

      &.hightLight {
        background-color: #001168;
        color: #e7e083;
      }

      &:nth-child(10n) {
        margin-right: 0;
      }

      &:nth-last-child(-1 - 10) {
        margin-bottom: 0;
      }
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
    padding: 10px 0 10px;
    margin: 0 auto;
    text-align: center;
    margin-top: 3px;
    border-top: 1px solid #eeeeee;
  }
}
</style>
