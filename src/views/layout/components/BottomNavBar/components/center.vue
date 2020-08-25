<template>
  <div class="center">
    <div class="label">查数易</div>

    <!-- >查数易 -->
    <el-input
      v-model="numberEasy"
      placeholder="請輸入查數易"
      size="big"
      style="width: 182px;margin-right: 10px;"
    >
      <i
        class="iconfont iconsousuo"
        slot="suffix"
        @click="handleIconClick"
        style="font-size: 24px;position: relative; top: 5px;"
      >
      </i
    ></el-input>

    <!--  -->
    <el-select
      v-model="orderVal"
      placeholder="请选择"
      size="big"
      style="width: 91px;margin-right: 10px"
    >
      <el-option
        v-for="item in orderList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <!-- 用户类型 -->

    <el-select
      v-model="userType"
      placeholder="请选择"
      size="big"
      style="width: 111px;margin-right: 10px"
    >
      <el-option
        v-for="item in userTypeList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <!-- 简繁体转换 -->
    <div class="languageTransform">
      <div
        :class="{ left: true, current: isComplexWords === 1 ? true : false }"
        @click="toComplex"
      >
        繁
      </div>
      <div
        :class="{ right: true, current: isComplexWords === 2 ? true : false }"
        @click="toEasy"
      >
        簡
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberEasy: '',
      orderVal: 1,
      orderList: [
        {
          value: 1,
          label: 'H'
        }
      ],
      userType: 1,
      userTypeList: [
        {
          value: 1,
          label: '用户编号'
        }
      ],
      isComplexWords: 2
    }
  },
  computed: {},
  methods: {
    handleIconClick() {
      // s
    },
    toComplex() {
      this.isComplexWords = 1
    },
    toEasy() {
      this.isComplexWords = 2
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  display: flex;

  .label {
    opacity: 0.9;
    margin-right: 8px;
    color: #ebd38c;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }

  .languageTransform {
    display: flex;
    align-items: center;

    .left,
    .right {
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #e7e083;
      border-radius: 4px 0 0 4px;
      width: 46px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      color: #e7e083;
      cursor: pointer;
    }

    .right {
      border-radius: 0 4px 4px 0;
      border-left: none;
    }

    .left.current,
    .right.current {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
