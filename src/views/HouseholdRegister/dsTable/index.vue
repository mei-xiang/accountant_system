<template>
  <div class="ds-ssWrap">
    <div class="formWrap">
      <div class="total">
        <div class="label">DS/SS合共：</div>
        <div class="money">{{ ds_ss_total }}</div>
        萬
      </div>

      <svg-icon iconClass="excel" className="excel1"></svg-icon>

      <el-button type="primary"
        ><svg-icon iconClass="excel" className="excel"></svg-icon> 導出明細
      </el-button>
    </div>

    <div class="tableWrap">
      <jr-table
        :tableData="tableData"
        :columns="columns"
        show-summary
        height="700px"
        border
        :summary-method="getSummaries"
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
  name: 'Ds',
  components: {
    jrTable
  },
  data() {
    const columns = tableColumns(this)
    return {
      tableData: [],
      columns,
      defaultColumnConfig: {
        align: 'center',
        sortable: true
      },
      ds_ss_total: 8749327489123
    }
  },
  mounted() {
    for (let i = 0; i < 300; i++) {
      let obj = {
        huhao: `C${i * 4}`,
        huming: '江銅',
        ds: `${i * 10}`
      }
      this.tableData.push(obj)
    }
  },
  methods: {
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
.ds-ssWrap {
  width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 20px 0;
  background-color: white;

  .formWrap {
    border-radius: 8px;
    background-color: white;
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    .total {
      font-size: 24px;
      font-weight: bold;
      color: black;
      display: flex;
      align-items: center;
    }

    .excel1 {
      font-size: 34px;
      margin: 0 20px;
    }
  }

  .tableWrap {
    border-radius: 8px;
  }
}
</style>
