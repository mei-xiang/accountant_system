<template>
  <div class="queryHukouWrap">
    <div class="formWrap">
      <jr-form :formConfig="formConfig" :formData="formData"> </jr-form>
      <el-row class="updateWrap">
        <el-col :span="12">
          <div class="wrap">
            <div class="left">
              <el-select v-model="addressSelectVal" style="width: 100px;">
                <el-option
                  v-for="item in addressList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="right">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
              <el-button type="primary" style="margin-left: 10px;"
                >確認</el-button
              >
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="wrap">
            <div class="left">
              <el-select v-model="sexSelectVal" style="width: 100px;">
                <el-option
                  v-for="item in sexList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="right">
              <el-select v-model="getterVal" style="width: 200px;">
                <el-option label="男" value="1"> </el-option>
                <el-option label="女" value="2"> </el-option>
              </el-select>

              <el-button type="primary" style="margin-left: 10px;"
                >確認</el-button
              >
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="btnList">
      <svg-icon iconClass="excel" className="excel"></svg-icon>
      <el-button type="primary">授權查詢</el-button>
      <el-button type="primary">戶口查詢</el-button>
      <el-button type="primary">幕後查詢</el-button>
      <el-button type="primary">相關姓名</el-button>
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
import jrForm from '@/components/jr_form/JrForm.vue'
import { tableColumns, formConfig } from './index'
export default {
  name: 'Ds',
  components: {
    jrTable,
    jrForm
  },
  data() {
    const columns = tableColumns(this)
    const formConfigs = formConfig(this)
    return {
      tableData: [],
      columns,
      defaultColumnConfig: {
        align: 'center'
      },
      formConfig: formConfigs,
      formData: {},
      addressList: [
        {
          value: 1,
          label: '更改地址'
        }
      ],
      addressSelectVal: '',
      sexList: [
        {
          value: 1,
          label: '更改性別'
        }
      ],
      sexSelectVal: '',
      getterVal: ''
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
  methods: {}
}
</script>

<style lang="scss" scoped>
.queryHukouWrap {
  width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: white;

  .formWrap {
    border-radius: 8px;
    background-color: white;

    margin: 0 auto;
    margin-bottom: 20px;

    .total {
      font-size: 24px;
      font-weight: bold;
      color: black;
      display: flex;
      align-items: center;
    }

    .updateWrap {
      .wrap {
        padding: 10px 0;
        display: flex;
        align-items: center;
        border-right: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
        .left {
          margin-right: 10px;
          padding: 0 3px;
        }

        .right {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .btnList {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 20px;

    .excel {
      font-size: 34px;
      margin: 0 20px;
    }
  }

  .tableWrap {
    border-radius: 8px;
    margin-bottom: 30px;
  }
}
</style>
