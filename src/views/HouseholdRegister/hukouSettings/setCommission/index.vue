<template>
  <div class="commissionTable">
    <div class="formWrap">
      <el-table
        :data="commissionTableData"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="leftSideName" label="">
          <!-- <template slot-scope="scope">
            
          </template> -->
        </el-table-column>
        <el-table-column prop="hukouNum" label="戶口編號">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row[hukouNum]"
              :disabled="scope.row.isDisabled"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="commission" label="佣金">
          <template slot-scope="scope">
            <el-input v-model="scope.row[commission]"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="jintie" label="津貼">
          <template slot-scope="scope">
            <el-input v-model="scope.row[jintie]"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <div class="lastLine">
        <div class="item">預設</div>
        <div class="item"></div>
        <div class="item">
          <el-input v-model="preSetCommission" disabled></el-input>
        </div>
        <div class="item" disabled>
          <el-input v-model="preSetJintie" disabled></el-input>
        </div>
      </div>

      <div class="addBtn">
        <i class="iconfont iconjia"></i>
      </div>
    </div>

    <div class="tableWrap">
      <jr-table
        :tableData="tableData"
        :columns="columns"
        :defaultColumnConfig="defaultColumnConfig"
      >
      </jr-table>
    </div>
  </div>
</template>

<script>
import jrTable from '@/components/jr_table/index.vue'
import { tableColumns } from './index'
export default {
  name: 'commission',
  components: {
    jrTable
  },
  data() {
    const columns = tableColumns(this)
    return {
      columns,
      tableData: [
        {
          prefix: '所有',
          suffix: 'M',
          type: 0,
          shouquan: 134
        },
        {
          prefix: '所有',
          suffix: 'M',
          type: 0,
          shouquan: 134
        },
        {
          prefix: '所有',
          suffix: 'M',
          type: 0,
          shouquan: 134
        },
        {
          prefix: '所有',
          suffix: 'M',
          type: 0,
          shouquan: 134
        },
        {
          prefix: '所有',
          suffix: 'M',
          type: 0,
          shouquan: 134
        },
        {
          prefix: '所有',
          suffix: 'M',
          type: 0,
          shouquan: 134
        },
        {
          prefix: '所有',
          suffix: 'M',
          type: 0,
          shouquan: 134
        }
      ],
      preSetCommission: 120,
      preSetJintie: 0,
      commissionTableData: [
        {
          leftSideName: '戶口編號',
          hukouNum: '',
          commission: '',
          jintie: '',
          isDisabled: true
        },
        {
          leftSideName: 'LINE頭',
          hukouNum: '',
          commission: '',
          jintie: ''
        },
        {
          leftSideName: '上缐',
          hukouNum: '',
          commission: '',
          jintie: ''
        }
      ],
      defaultColumnConfig: {
        align: 'center'
      },
      isOpenModal: false
    }
  },
  computed: {},
  mounted() {},
  methods: {
    handleEdit() {
      this.isOpenModal = true
    },
    handleDel() {},
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '總價'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          // 都是數字
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += '萬'
        } else {
          sums[index] = ''
        }
      })
      return sums
    }
  }
}
</script>

<style lang="scss" scoped>
.commissionTable {
  width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 20px 0;

  .formWrap {
    border-radius: 8px;
    background-color: white;
    width: 85%;
    margin: 0 auto;
    margin-bottom: 30px;
    position: relative;

    .addBtn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      text-align: center;
      line-height: 36px;
      background-color: #001168 ;
      position: absolute;
      left: -36px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;

      i {
        font-size: 24px;
        color: #C5C9DC;
      }
    }

    .lastLine {
      display: flex;

      align-items: center;
      .item {
        height: 57px;
        flex: 1;
        box-sizing: border-box;
        padding:  10px;
        border-right: 1px solid #eeeeee;
        align-self: center;

        &:first-child {
          flex: none;
          width: 258px;
        }
      }
    }

    /deep/ .el-form-item__label {
      font-size: 16px;
    }

    .el-form-item {
      border-bottom: 1px solid #eeeeee;
      padding: 12px 0;
      border-right: 1px solid #eeeeee;
      margin: 0;
    }

    .relateRoom {
      padding: 10px 0;
      display: flex;
      border-bottom: 1px solid #eeeeee;

      .label {
        width: 110px;
        padding-right: 12px;
        box-sizing: border-box;
        font-size: 16px;
        text-align: right;
      }

      .content {
        padding-top: 20px;
        flex: 1;
        position: relative;

        /deep/ .el-checkbox {
          margin-top: 20px;
          width: 180px;
          color: #606067;
          font-size: 16px;
        }

        /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
          color: #001168;
          font-weight: 500;
        }

        /deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
        .el-checkbox__input.is-indeterminate .el-checkbox__inner {
          background-color: #001168;
          border-color: #001168;
        }

        /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner {
          background-color: #001168;
          border-color: #001168;
        }
        .allSelect {
          position: absolute;
          top: -10px;
          left: 0;
        }
      }
    }
  }

  .tableWrap {
    border-radius: 8px;
    background-color: white;
    padding: 20px 0;
  }

  .modalContent {
    /deep/ .el-form-item__label {
      font-size: 16px;
    }
  }
}
</style>
