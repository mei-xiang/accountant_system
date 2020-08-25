<template>
  <div class="openAccountContainer">
    <div class="tabs">
      <el-form 
        :inline="true" 
        :model="formInline"
        label-width="100px" 
        class="demo-form-inline">
        <el-form-item>
          <svg-icon iconClass="excel" className="excel" />
        </el-form-item>
        <el-form-item label="Line">
          <el-select v-model="formInline.line" filterable placeholder="請選擇">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <div class="userList">
        <jr-table
          :tableData="tableData"
          :columns="columns"
          border
          :defaultColumnConfig="defaultColumnConfig"
          show-summary
          :summary-method="getSummaries"
          height="calc(100vh - 350px)"
        ></jr-table>
      </div>
    </div>
  </div>
</template>

<script>
import jrTable from '@/components/jr_table/index.vue'
import JrPagination from '@/components/jr_table/pagination.vue'
import { tableColumns } from './index'

export default {
  name: 'OpenAccount',
  components: {
    jrTable,
    JrPagination
  },
  created() {},
  data() {
    const columns = tableColumns(this)
    return {
      columns,
      activeName: 'first',
      userList: [],
      showSummary: true,
      formInline: {
        line: ''
      },
      defaultColumnConfig: {
        align: 'center'
      },
      tableData: [
        {
          companyName: 'A7',
          num: 'Z90646',
          name: '測試',
          relationName: '0',
          cardMoney: '(-20)',
          curTotal1: '(-1,373.5498)',
          curTotal: '150',
          geng: '夜',
          remark: '0',
          interRemark: '0',
          employName: '何廷泰',
          insertTime: '2020-08-09 04:13',
          tickPrint: '-'
        },
        {
          companyName: 'A1336',
          num: 'CO6100',
          name: '測試',
          relationName: '0',
          cardMoney: '(-10)',
          curTotal1: '(-1,353.5498)',
          curTotal: '0',
          geng: '夜',
          remark: '0',
          interRemark: '0',
          employName: '黃東東',
          insertTime: '2020-08-09 04:10',
          tickPrint: '-'
        }
      ],
      options: [{
        value: '1',
        key: '1',
        label: 'A'
      }, {
        value: '2',
        key: '2',
        label: 'AA'
      }]
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

    for (let i = 0; i < 30; i++) {
      this.tableData.push({
        companyName: 'A7',
        num: 'Z90646',
        name: '測試',
        relationName: '0',
        cardMoney: '(-20)',
        curTotal1: '(-1,373.5498)',
        curTotal: '150',
        geng: '夜',
        remark: '0',
        interRemark: '0',
        employName: '何廷泰',
        insertTime: '2020-08-09 04:13',
        tickPrint: '-'
      })
    }
  },
  methods: {
    searchData(searData) {
      console.log(searData, 'searchData')
    },
    handleSetPsw(scope) {
      console.log('111 ->', scope)
    },
    handleTabClick() {},
    handleSizeChange(sizeVal) {
      console.log(sizeVal, 'size改變了')
    },
    handleCurrentChange(val) {
      console.log(val, 'pagenum 該百年了')
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

  .tabs {
    height: 40px;
    padding: 10px 20px 5px;
    background: #ffffff;
  }

  .icon-search {
    font-size: 21px;
    padding: 6px;
    background: #001168;
    color: #fff;
    border-radius: 4px;
    margin-top: 1px;
    margin-left: 20px;
  }

  .excel {
    font-size: 32px;
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

  .content {
    margin-top: 20px;
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
    .userList {
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;

      .table-wrap {
        width: 100%;
        padding-bottom: 10px;
      }

    //   /deep/ .el-table {
    //     height: calc(100vh - 350px);
    //     overflow-y: scroll;
    //   }

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
  }

  .pagenation {
    margin-top: 20px;
    height: 60px;
    text-align: center;
    background: #ffffff;
    border-radius: 8px 8px 0 0;
  }
}
</style>
