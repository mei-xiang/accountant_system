<template>
  <div class="membership-wrap">
    <div class="header">
      <div class="left">
        <i class="iconfont iconkapianliu"></i>
      </div>
      <div class="right">
        <div class="number">
          <el-select v-model="numberType" style="width: 110px;">
            <el-option
              v-for="item in numberTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-input v-model="hukouName" style="width:200px;"></el-input>

          <el-select v-model="tableType" style="width: 110px;">
            <el-option
              v-for="item in tableTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="name">
          <el-select
            v-model="nameType"
            style="width: 110px;margin-right: 10px;"
          >
            <el-option
              v-for="item in nameTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-input v-model="nameVal" :style="{ width: '200px' }"> </el-input>
          <!-- 簡繁體功能轉換 -->
          <div
            :class="[
              'langItem',
              'langItem1',
              initLang && fuLang ? 'current' : ''
            ]"
            @click="toTraditional(nameVal)"
          >
            繁
          </div>
          <div
            :class="['langItem', initLang && jianLang ? 'current' : '']"
            @click="toSimplified(nameVal)"
          >
            簡
          </div>

          <el-button type="primary" style="margin-left: 20px">查詢</el-button>
        </div>
      </div>
    </div>

    <div class="content">
      <ul v-if="showTableOrImg">
        <li class="memberItem" v-for="item in picList" :key="item.id">
          <el-image
            :src="item.src"
            style="border-radius: 8px; cursor: pointer"
            @click="handleImgClick"
          ></el-image>
          <div class="infoWrap">
            <div class="info">
              <div class="label">廳名</div>
              <div class="value">{{ item.room }}</div>
            </div>
            <div class="info">
              <div class="label">戶口編號</div>
              <div class="value">{{ item.hukouNum }}</div>
            </div>
            <div class="info">
              <div class="label">會員編號</div>
              <div class="value">{{ item.membership }}</div>
            </div>
            <div class="info">
              <div class="label">中文姓名</div>
              <div class="value">{{ item.cnName }}</div>
            </div>
            <div class="info">
              <div class="label">英文姓名</div>
              <div class="value">{{ item.enName }}</div>
            </div>
          </div>
        </li>
      </ul>

      <jr-table
        :tableData="tableData"
        :columns="columns"
        :defaultColumnConfig="defaultColumnConfig"
        class="tableWrap"
        :isShowPagenation="false"
      ></jr-table>
    </div>

    <div class="pagenation" style="text-align: center">
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

    <jr-modal width="60%" title="圖片信息" :openModal.sync="isOpenModal">
      <div class="modalHeader">
        <el-button type="primary">另存爲</el-button>
        <el-button type="primary">打印</el-button>
        <el-button type="primary">更改</el-button>
      </div>

      <div class="modalContent">
        <el-upload
          class="upload-img"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            格式jpg、png、jpeg
          </div>
        </el-upload>
      </div>
    </jr-modal>
  </div>
</template>

<script>
import jrModal from '@/components/jr_modal/modal.vue'
import langTransfer from '@/utils/langtransfer/lang-transfer.js'
import JrPagination from '@/components/jr_table/pagination.vue'
import jrTable from '@/components/jr_table/index.vue'
import { tableColumns } from './index'
export default {
  name: 'kesheyuyinmima',
  components: {
    jrModal,
    JrPagination,
    jrTable
  },
  data() {
    const columns = tableColumns(this)
    return {
      isOpenModal: false,
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
      defaultColumnConfig: {
        align: 'center'
      },
      columns,
      fuLang: false,
      initLang: false,
      numberType: 1,
      numberTypeList: [
        {
          label: '戶口編號',
          value: 1
        },
        {
          label: '會員編號',
          value: 2
        }
      ],
      tableType: 1,
      tableTypeList: [
        {
          label: '表格',
          value: 2
        },
        {
          label: '圖片',
          value: 1
        }
      ],
      hukouName: '',
      nameType: 1,
      nameTypeList: [
        {
          label: '中文姓名',
          value: 1
        },
        {
          label: '英文姓名',
          value: 2
        }
      ],
      nameVal: '',
      picList: [
        {
          id: 1,
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          room: '關東集團',
          hukouNum: 'Z798',
          membership: '434371',
          cnName: '江銅',
          enName: 'RebornJiang'
        },
        {
          id: 2,
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          room: '關東集團',
          hukouNum: 'Z798',
          membership: '434371',
          cnName: '江銅',
          enName: 'RebornJiang'
        },
        {
          id: 3,
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          room: '關東集團',
          hukouNum: 'Z798',
          membership: '434371',
          cnName: '江銅',
          enName: 'RebornJiang'
        },
        {
          id: 4,
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          room: '關東集團',
          hukouNum: 'Z798',
          membership: '434371',
          cnName: '江銅',
          enName: 'RebornJiang'
        },
        {
          id: 5,
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          room: '關東集團',
          hukouNum: 'Z798',
          membership: '434371',
          cnName: '江銅',
          enName: 'RebornJiang'
        },
        {
          id: 6,
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          room: '關東集團',
          hukouNum: 'Z798',
          membership: '434371',
          cnName: '江銅',
          enName: 'RebornJiang'
        },
        {
          id: 7,
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          room: '關東集團',
          hukouNum: 'Z798',
          membership: '434371',
          cnName: '江銅',
          enName: 'RebornJiang'
        },
        {
          id: 8,
          src:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          room: '關東集團',
          hukouNum: 'Z798',
          membership: '434371',
          cnName: '江銅',
          enName: 'RebornJiang'
        }
      ],
      pageData: {
        pageNum: 1,
        sizeList: [300],
        pageSize: 300,
        total: 1000
      }
    }
  },
  computed: {
    showTableOrImg() {
      if (this.tableType === 1) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    toTraditional(val, prop) {
      this.initLang = true
      this.fuLang = true
      this.jianLang = false
      if (val === '') return
      this.nameVal = langTransfer && langTransfer.traditionalized(val)
    },
    toSimplified(val, prop) {
      this.initLang = true
      this.jianLang = true
      this.fuLang = false
      if (val === '') return
      this.nameVal = langTransfer && langTransfer.simplized(val)
    },
    handleImgClick() {
      this.isOpenModal = true
    },
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
.membership-wrap {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;
  .header {
    border-radius: 0px 0px 8px 8px;
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
    .left {
      i {
        font-size: 24px;
        color: #001168;
        cursor: pointer;
      }
    }
    .right {
      margin-left: auto;

      display: flex;
      align-items: center;

      .number {
        margin-right: 20px;
      }

      .name {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .langItem {
          width: 46px;
          height: 36px;
          font-size: 16px;
          box-sizing: border-box;
          border: 1px solid rgba(0, 17, 104, 0.1);
          text-align: center;
          line-height: 36px;
          color: #606067;
          cursor: pointer;

          // 失效 ， 因爲不是當前父元素裏面的第一個，失效
          &:first-child {
            border-radius: 4px 0 0 4px;
          }

          &:last-child {
            border-radius: 0px 4px 4px 0px;
            border-left: 0px;
          }
        }

        .langItem1 {
          border-radius: 4px 0 0 4px;
          margin-left: 4px;
        }

        .langItem.current {
          background: rgba(0, 17, 104, 0.1);
          color: #001168;
        }
      }
    }
  }

  .content {
    ul {
      display: flex;
      flex-wrap: wrap;
    }
    .memberItem {
      width: 410px;
      height: 491px;
      background: #ffffff;
      border-radius: 8px;
      margin-right: 20px;
      margin-bottom: 20px;

      .infoWrap {
        box-sizing: border-box;

        .info {
          height: 40px;
          display: flex;
          align-items: center;

          .label {
            width: 80px;
            text-align: right;
            font-size: 16px;
            color: #666666;
            margin-right: 20px;
          }

          .value {
            color: #333333;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }

  .modalHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }

  .modalContent {
    display: flex;
    justify-content: center;
    // 图片上传表单样式
    .upload-img {
      /deep/ .el-upload-dragger {
        border: 2px dashed #e7e083;
        background-color: #f9f9f9;
        border-radius: 8px;
        width: 380px;
        height: 238px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      /deep/ .el-upload__tip {
        font-size: 16px;
        color: #909098;
      }

      /deep/ .el-upload-dragger .el-upload__text {
        font-size: 16px;

        em {
          color: #001168;
          font-size: 16px;
          font-weight: bold;
        }
      }

      /deep/ .el-upload-dragger .el-icon-upload {
        color: #e7e083;
      }

      /deep/ .el-upload-dragger .el-icon-upload {
        margin: 0;
        // line-height: 0;
      }
    }
  }
}
</style>
