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
        <el-form-item label="搜尋日期">
          <el-date-picker
            v-model="formInline.date"
            type="date"
            placeholder="選擇日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <div class="el-icon-search icon-search"></div>
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
      showSummary: true,
      defaultColumnConfig: {
        align: 'center'
      },
      formInline: {
        date: ''
      },
      options: [{
        key: '1',
        value: '1',
        label: 'A'
      }, {
        key: '2',
        value: '2',
        label: 'AA'
      }, {
        key: '3',
        value: '3',
        label: 'AG'
      }, {
        key: '4',
        value: '4',
        label: 'B'
      }],
      tableData: [
        {
          num: 'Z90646',
          name: '測試',
          cardMoney: '(-20)',
          remark: '0'
        },
        {
          num: 'CO6100',
          name: '測試',
          cardMoney: '(-10)',
          remark: '0'
        }
      ]
    }
  },
  computed: {},
  mounted() {
    for (let i = 0; i < 100; i++) {
      this.tableData.push({
        num: 'Z90646',
        name: '測試',
        cardMoney: '(-20)',
        remark: '0'
      })
    }
  },
  methods: {
    searchData(searData) {
      console.log(searData, 'searchData')
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
  .icon-search:hover {
      background: rgba(0, 17, 104, 0.8);
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
