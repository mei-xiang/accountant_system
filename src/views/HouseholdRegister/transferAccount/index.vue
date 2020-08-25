<template>
  <div class="addHukou-wrap">
    <el-card class="header">
      <jr-form :formData="formData" :formConfig="formConfig"></jr-form>
      <div class="btn" style="text-align: center; padding: 10px 0;">
        <el-button type="primary">戶口轉換</el-button>
      </div>
    </el-card>

    <el-card class="bottom">
      <div class="b-header">
        待轉戶口
      </div>
      <ul>
        <li class="hukouItem" :class="{hightLight: index % 2 === 0 ? false : true}" v-for="(item, index) in hukouList" :key="item.id">
          {{ item.label }}
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
import JrForm from '@/components/jr_form/JrForm'
import { formConfig } from './index'
export default {
  name: 'transferHukou',
  components: { JrForm },
  data() {
    const addHukouInfo = formConfig(this)
    return {
      // 最上方表單數據
      formData: {
        checkboxVal: []
      },
      formConfig: addHukouInfo,
      hukouList: [
        {
          label: 'JT0000111',
          id: 1
        },
        {
          label: 'JT0000111',
          id: 2
        },
        {
          label: 'JT0000111',
          id: 3
        },
        {
          label: 'JT0000111',
          id: 4
        },
        {
          label: 'JT0000111',
          id: 5
        },
        {
          label: 'JT0000111',
          id: 6
        },
        {
          label: 'JT0000111',
          id: 7
        }
      ]
    }
  },
  mounted() {
    console.log(this.ha, '能夠拿得到test嗎')
  },
  methods: {
    // tabs切換
    handleTabClick() {
      console.log('tab切換')
    }
  }
}
</script>

<style lang="scss" scoped>
.addHukou-wrap {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  /deep/ .el-card__body {
    padding: 0;
  }

  .header {
    background-color: white;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .bottom {
    border-radius: 8px;

    .b-header {
      font-size: 20px;
      height: 58px;
      line-height: 58px;
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid #eeeeee;
    }

    ul {
      .hukouItem {
        height: 36px;
        line-height: 36px;
        font-size: 18px;
        text-align: right;
        border-bottom: 1px dashed #eeeeee;

        &.hightLight {
          background-color: #F5F7FA;
        }
      }
    }
  }
}
</style>
