<template>
  <div class="delHukou-wrap">
    <div class="querySearch">
      <search-list
        :inputList="searchListConfig"
        :btnConfig="btnConfig"
        @search="searchData"
      ></search-list>
    </div>

    <jr-table
      :columns="columns"
      :tableData="tableData"
      border
      :currentPage="pageData.currentPage"
      :pageSize="pageData.pageSize"
      :total="pageData.total"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
    </jr-table>

    <!-- jrmodal -->
    <jr-modal ref="detailModal" :openModal.sync="openModal">
      <div class="detailHeader">
        <jr-form
          :formConfig="formConfig"
          :formData="formData"
          labelWidth="130px"
        >
        </jr-form>
      </div>
      <div class="detailTable">
        <jr-table
          :columns="columns"
          :tableData="tableData"
          border
          :currentPage="pageData.currentPage"
          :pageSize="pageData.pageSize"
          :total="pageData.total"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
        </jr-table>
      </div>
    </jr-modal>
  </div>
</template>

<script>
import searchList from '@/components/jr_search/JrSearch.vue'
import JrTable from '@/components/jr_table/index.vue'
import jrModal from '@/components/jr_modal/modal.vue'
import JrForm from '@/components/jr_form/JrForm.vue'
import {
  inputList,
  btnConfig,
  tableColumns,
  pageData,
  formConfig,
  detailTable
} from './index'
export default {
  name: 'delHukou',
  components: {
    searchList,
    JrTable,
    jrModal,
    JrForm
  },
  data() {
    const searchListConfig = inputList(this)
    const columns = tableColumns(this)
    const formConfigs = formConfig(this)
    const detailTables = detailTable(this)
    return {
      searchListConfig,
      btnConfig,
      columns,
      tableData: [
        {
          hukouNameNum: '2016-05-02',
          hukouName: '王小虎',
          status: '金沙江路 1518 弄'
        },
        {
          hukouNameNum: '2016-05-04',
          hukouName: '王小虎',
          status: '金沙江路 1517 弄'
        },
        {
          hukouNameNum: '2016-05-01',
          hukouName: '王小虎',
          status: '金沙江路 1519 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        },
        {
          hukouNameNum: '2016-05-03',
          hukouName: '王小虎',
          status: '金沙江路 1516 弄'
        }
      ],
      pageData,
      openModal: false,
      formConfig: formConfigs,
      formData: {},
      detailTable: detailTables
    }
  },
  computed: {},
  methods: {
    searchData(val) {
      console.log(val, 'searchData')
    },
    handleDetail() {
      this.openModal = true
      console.log(this.$refs.detailModal, 'modal')
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
}
</script>

<style lang="scss" scoped>
.delHukou-wrap {
  width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  padding: 20px;

  .querySearch {
    height: 60px;
    padding: 12px 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  .detailHeader {
    width: 80%;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .detailTable {
    overflow-y: auto;
    background-color: white;
  }
}
</style>
