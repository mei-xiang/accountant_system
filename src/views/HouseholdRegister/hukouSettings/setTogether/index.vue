<template>
  <div class="commissionTable">
    <div class="formWrap">
      <jr-form
        :formData="formData"
        :formConfig="formConfig"
        labelWidth="110px"
      ></jr-form>
      <el-row>
        <el-col :span="24" class="relateRoom">
          <div class="label">相關廰名</div>
          <div class="content">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
              class="allSelect"
              >全选</el-checkbox
            >

            <el-checkbox-group
              text-color="#001168"
              fill="#001168"
              v-model="checkedRoomes"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox
                v-for="item in roomList"
                :label="item.value"
                :key="item.value"
                >{{ item.label }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </el-col>
      </el-row>
      <div style="text-align: center; padding: 10px 0;">
        <el-button type="primary">
          設定共用額
        </el-button>
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
import JrForm from '@/components/jr_form/JrForm'
import { tableColumns, formConfig } from './index'
export default {
  name: 'Layout',
  components: {
    jrTable,

    JrForm
  },
  data() {
    const columns = tableColumns(this)
    const newDsconfig = formConfig(this)
    return {
      columns,
      formData: {},
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
      checkAll: false,
      checkedRoomes: [],
      roomList: [],
      isIndeterminate: false,
      formConfig: newDsconfig,
      defaultColumnConfig: {
        align: 'center'
      },
      isOpenModal: false
    }
  },
  computed: {},
  mounted() {
    for (let i = 0; i < 40; i++) {
      let obj = {
        label: '新葡京廣東貴賓室',
        value: i
      }
      this.roomList.push(obj)
    }
  },
  methods: {
    handleEdit() {
      this.isOpenModal = true
    },
    handleDel() {},
    handleCheckAllChange(val) {
      console.log(val, '出來JFK魯大師')
      this.checkedRoomes = val ? this.roomList : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.roomList.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.roomList.length
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
