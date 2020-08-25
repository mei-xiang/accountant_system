<template>
  <div class="openAccountContainer">
    <div class="queryOption">
      <jr-search
        :inputList="serachList"
        :btnConfig="btnConfig"
        @search="searchData"
      >
      </jr-search>
    </div>

    <div class="content">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="date" label="戶號"> </el-table-column>
        <el-table-column prop="name" label="戶名"> </el-table-column>
        <el-table-column prop="name" label="特別提示"> </el-table-column>
        <el-table-column prop="name" label="編輯">
          <template slot-scope="scope">
            <span
              @click="handleEditClick(scope)"
              style="color:rgb(0, 17, 104); cursor: pionter"
              >編輯</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="address" label="圖片">
          <template slot-scope="scope">
            <el-image :src="scope.row.src"></el-image>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagenation" style="">
        <jr-pagination
          :pageSize="pageData.pageSize"
          :currentPage="pageData.pagenum"
          :total="pageData.total"
          :sizeList="pageData.sizeList"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
        </jr-pagination>
      </div>
    </div>

    <jr-modal title="編輯" width="40%" :openModal.sync="showEditModal">
      <jr-form :formConfig="formConfig" :formData="formData"></jr-form>
    </jr-modal>
  </div>
</template>

<script>
import JrSearch from '@/components/jr_search/JrSearch.vue'
import JrPagination from '@/components/jr_table/pagination.vue'
import JrForm from '@/components/jr_form/JrForm.vue'
import jrModal from '@/components/jr_modal/modal.vue'
import { searchList, btnConfig, formConfig } from './index'
export default {
  name: 'OpenAccount',
  components: {
    JrSearch,
    JrPagination,
    jrModal,
    JrForm
  },
  data() {
    const querySearch = searchList(this)
    const formConfigs = formConfig(this)
    return {
      serachList: querySearch,
      btnConfig,
      activeName: 'first',
      userList: [],
      pageData: {
        pageNum: 1,
        sizeList: [300],
        pageSize: 300,
        total: 1000
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
      ],
      showEditModal: false,
      formConfig: formConfigs,
      formData: {}
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
    },
    handleEditClick() {
      this.showEditModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.openAccountContainer {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;

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
