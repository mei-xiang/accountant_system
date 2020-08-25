<template>
  <div class="container">
    <div class="textGroup-wrap">
      <div class="right">
        <el-select
          v-model="typeValue"
          style="width: 230px; margin-bottom: 8px;"
        >
          <el-option
            v-for="item in optionType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <ul class="phoneList">
          <template v-for="item in optionList">
            <li
              :key="item.value"
              class="optionItem"
              @click="handleOptionClick(item)"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </div>
      <div class="btn">
        <div class="firstRow">
          <div class="add" @click="addItem">
            <i class="iconfont iconxinzeng"></i>
          </div>
          <div class="del">
            <i class="iconfont iconjian"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simpleTextGroup',
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
      typeValue: '',
      phoneNum: '',
      remarkValue: '',
      isShowPhoneNum: false
    }
  },
  methods: {
    handleOptionClick(item) {
      console.log(item)
    },
    // 添加值
    addItem() {
      const totalItem = this.optionType.filter(
        item => item.value === this.typeValue
      )
      this.$emit('addSimpleText', totalItem[0])
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
      height: 223px;
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

      .del {
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
