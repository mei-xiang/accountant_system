<template>
  <div class="openAccountContainer">
    <div class="queryOption">
      <jr-search
        :inputList="serachList"
        :btnConfig="btnConfig"
        @search="searchData"
      >
      </jr-search>
      <div class="tip">
        <span
          >請注意：每次最多只顯示300個戶號，請選擇好戶號範圍(沒有輸入戶號範圍默認顯示1-300)！</span
        >
      </div>
    </div>

    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleTabClick" class="jr-tabs">
        <el-tab-pane label="全部" name="first"> </el-tab-pane>
        <el-tab-pane label="未開戶口" name="second"></el-tab-pane>
        <el-tab-pane label="已開戶口" name="third"></el-tab-pane>
      </el-tabs>

      <div class="userList">
        <div
          :class="{ useritem: true, hightLight: item.hightLight }"
          v-for="item in userList"
          :key="item.value"
        >
          {{ item.label }}
        </div>
      </div>
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
  </div>
</template>

<script>
import JrSearch from '@/components/jr_search/JrSearch.vue'
import JrPagination from '@/components/jr_table/pagination.vue'
import { searchList, btnConfig } from './index'
export default {
  name: 'OpenAccount',
  components: {
    JrSearch,
    JrPagination
  },
  data() {
    const querySearch = searchList(this)
    console.log(querySearch, 'querys')
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
      }
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
