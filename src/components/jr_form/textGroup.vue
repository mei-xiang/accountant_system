<template>
  <div class="container">
    <div class="textGroup-wrap">
      <div class="left">
        <el-select
          v-model="typeValue"
          style="width: 104px; margin-bottom: 8px;"
        >
          <el-option
            v-for="item in optionType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <el-button type="primary">顯示號碼</el-button>
      </div>
      <div class="right">
        <el-input
          v-model="phoneNum"
          placeholder="請輸入手機號碼"
          style="width: 200px; margin-bottom: 8px;"
        ></el-input>

        <ul class="phoneList">
          <template v-for="item in optionList">
            <li
              :key="item.phoneMobile"
              class="optionItem"
              @click="handleOptionClick(item)"
            >
              {{ item.phoneType + ' ' + item.phoneMobile }}
            </li>
          </template>
        </ul>
      </div>
      <div class="btn">
        <div class="firstRow">
          <div class="add">
            <i class="iconfont iconxinzeng"></i>
          </div>
          <div class="edit">
            <i class="iconfont iconbianji"></i>
          </div>
        </div>
        <div class="del">
          <i class="iconfont iconjian"></i>
        </div>
      </div>
    </div>

    <div class="remark">
      <div class="label">備注</div>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="請輸入内容"
        v-model="remarkValue"
      >
      </el-input>
    </div>

    <!-- 
      香港的手机号码是8位数
      澳門手機號8位
     -->
  </div>
</template>

<script>
export default {
  name: 'textGroup',
  props: {
    optionType: {
      type: Array,
      default: () => {
        return []
      }
    },
    optionList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      exaple: '',
      typeValue: 1,
      phoneNum: '',
      remarkValue: '',
      isShowPhoneNum: false
    }
  },
  methods: {
    handleOptionClick(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.textGroup-wrap {
  display: flex;

  .left {
    display: flex;
    flex-direction: column;
    margin-right: 8px;
  }

  .right {
    display: flex;
    flex-direction: column;
    margin-right: 8px;

    .phoneList {
      height: 180px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin: 0;
      list-style: none;
      color: #606067;
      overflow: auto;
      box-sizing: border-box;
      padding: 0;

      // 儅禁用時的樣式
      &.noShowOptionList {
        background: #eeeeee;
        cursor: not-allowed;

        .optionItem {
          display: none;
        }
      }

      .optionItem {
        height: 36px;
        line-height: 36px;
        text-indent: 12px;

        &.current {
          background: rgba(0, 17, 104, 0.1);
          border-radius: 4px;
        }
      }
    }

    .phoneList::-webkit-scrollbar {
      display: none;
    }
  }

  .btn {
    display: flex;
    flex-direction: column;

    .firstRow {
      display: flex;
      flex-direction: row;

      .add {
        margin-right: 8px;
        width: 36px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        border-radius: 50%;
        background-color: #001168;
        color: #fdfdfd;
        cursor: pointer;
        i {
          font-size: 24px;
        }
      }

      .edit {
        width: 36px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        border-radius: 50%;
        background-color: #eb9f2e;
        color: #fdfdfd;
        cursor: pointer;
        i {
          font-size: 24px;
        }
      }
    }

    .del {
      margin-top: 80px;
      width: 36px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      border-radius: 50%;
      background-color: #f54645;
      color: #fdfdfd;
      cursor: pointer;
      i {
        font-size: 24px;
      }
    }
  }
}

.remark {
  margin-top: 8px;
  display: flex;

  .label {
    width: 134px;
    text-align: right;
    color: #909098;
    font-size: 16px;
    margin-right: 8px;
  }
}
</style>
