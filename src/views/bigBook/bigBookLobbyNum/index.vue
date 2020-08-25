<template>
  <div class="openAccountContainer">
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleTabClick" class="jr-tabs">
        <el-tab-pane label="各廳大簿總數" name="first"> </el-tab-pane>
      </el-tabs>

      <div class="userList">
        <jr-table
          :tableData="tableData"
          :columns="columns"
          border
          :defaultColumnConfig="defaultColumnConfig"
          height="calc(100vh - 350px)"
          show-summary
        >
        </jr-table>
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
  created() {
    for (let i = 0; i < 30; i++) {
      this.tableData.push({
        hukouNum: '新葡京廣東貴賓會' + i,
        name: i,
        type: '測試',
        status: '已鎖定'
      })
    }
  },
  data() {
    const columns = tableColumns(this)
    return {
      columns,
      activeName: 'first',
      userList: [],
      defaultColumnConfig: {
        align: 'center'
      },
      tableData: []
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
