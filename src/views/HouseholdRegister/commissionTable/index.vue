<template>
  <div class="commissionTable">
    <div class="formWrap">
      <el-form ref="form" :model="form" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="戶口前綴">
              <el-select v-model="formData.prefix" style="width: 200px;">
                <el-option
                  v-for="item in optionList"
                  :label="item.label"
                  :value="item.value"
                  :key="item.value"
                ></el-option>
              </el-select>

              <el-input
                v-if="isShowPrefixInput"
                v-model="formData.prefixVal"
                style="width: 200px;"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="戶口后綴">
              <el-input
                v-model="formData.suffixVal"
                style="width: 200px;"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="佣金">
              <el-input
                v-model="formData.commission"
                style="width: 200px;"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="津貼">
              <el-input
                v-model="formData.allowance"
                style="width: 200px;"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div style="text-align: center; padding: 10px 0;">
        <el-button type="primary">
          新增
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

    <jr-modal width="60%" title="修改佣金對照表" :openModal.sync="isOpenModal">
      <div class="modalContent">
        <el-form ref="form" :model="form" label-width="100px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="戶口前綴">
                <el-select v-model="formData.prefix" style="width: 200px;">
                  <el-option
                    v-for="item in optionList"
                    :label="item.label"
                    :value="item.value"
                    :key="item.value"
                  ></el-option>
                </el-select>

                <el-input
                  v-if="isShowPrefixInput"
                  v-model="formData.prefixVal"
                  style="width: 200px;"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="戶口后綴">
                <el-input
                  v-model="formData.suffixVal"
                  style="width: 200px;"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="佣金">
                <el-input
                  v-model="formData.commission"
                  style="width: 200px;"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="津貼">
                <el-input
                  v-model="formData.allowance"
                  style="width: 200px;"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div style="margin-top: 10px;text-align:center;">
          <el-button type="primary">更新</el-button>
        </div>
      </div>
    </jr-modal>
  </div>
</template>

<script>
import jrTable from '@/components/jr_table/index.vue'
import jrModal from '@/components/jr_modal/modal.vue'
import { tableColumns } from './index'
export default {
  name: 'Layout',
  components: {
    jrTable,
    jrModal
  },
  data() {
    const columns = tableColumns(this)
    return {
      columns,
      formData: {
        prefix: 1,
        prefixVal: '',
        suffixVal: '',
        commission: '',
        allowance: ''
      },
      optionList: [
        {
          value: 1,
          label: '所有'
        },
        {
          value: 2,
          label: '指定前綴'
        }
      ],
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
      defaultColumnConfig: {
        align: 'center'
      },
      isOpenModal: false
    }
  },
  computed: {
    isShowPrefixInput() {
      if (this.formData.prefix === 2) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    handleEdit() {
      this.isOpenModal = true
    },
    handleDel() {}
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
