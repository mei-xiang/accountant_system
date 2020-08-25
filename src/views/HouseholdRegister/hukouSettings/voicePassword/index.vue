<template>
  <div class="voicePassword-wrap">
    <jr-search :inputList="inputList" :btnConfig="btnConfig"></jr-search>
    <jr-table
      :tableData="tableData"
      :columns="columns"
      :defaultColumnConfig="defaultColumnConfig"
      class="tableWrap"
    ></jr-table>

    <jr-modal width="60%" title="設置IVR密碼" :openModal.sync="isOpenModal">
      <div class="modlaContent">
        <jr-form :formConfig="formConfig" :formData="formData"></jr-form>
        <div style="margin-top: 10px;text-align:center;">
          <el-button type="primary">設置IVR密碼</el-button>
        </div>
      </div>
    </jr-modal>
  </div>
</template>

<script>
import jrSearch from '@/components/jr_search/JrSearch.vue'
import jrTable from '@/components/jr_table/index.vue'
import jrModal from '@/components/jr_modal/modal.vue'
import jrForm from '@/components/jr_form/JrForm.vue'
import { searchList, tableColumns, formConfig } from './index'
export default {
  name: 'kesheyuyinmima',
  components: {
    jrSearch,
    jrTable,
    jrModal,
    jrForm
  },
  data() {
    const inputList = searchList(this)
    const columns = tableColumns(this)
    const formConfigs = formConfig(this)
    return {
      inputList,
      btnConfig: {
        leftBtnHidden: true,
        rightBtnHidden: true
      },
      tableData: [
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        },
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        },
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        },
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        },
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        },
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        },
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        },
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        },
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        },
        {
          hukouNum: 'jt001',
          name: '姜通',
          type: '戶主',
          shouquan: '--',
          shouquanDate: '--',
          shouquanguoqi: '--',
          password: '否',
          status: '正常'
        }
      ],
      columns,
      defaultColumnConfig: {
        align: 'center'
      },
      isOpenModal: false,
      formConfig: formConfigs,
      formData: {
        huhao: 'jt0001',
        name: '江銅',
        shouquan: '--',
        shouquanguoqi: '--',
        tel: '2347293749729849',
        yanzhengjieguo: '的距離發掘的克里夫'
      }
    }
  },
  computed: {},
  methods: {
    handleSetPsw(row) {
      console.log(row, 'row')
      this.isOpenModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.voicePassword-wrap {
  width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  padding: 20px 0;

  .tableWrap {
    margin-top: 30px;
  }

  .modlaContent {
    border: 1px solid #eeeeee;
    padding-bottom: 10px;
  }
}
</style>
