<template>
  <div class="search">
    <el-select
      v-model="vipRoomVal"
      placeholder="请选择贵宾厅"
      size="big"
      style="width: 203px;margin-right: 10px"
    >
      <el-option
        v-for="item in vipRoomList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select
      v-model="orderVal"
      placeholder="请选择"
      size="big"
      style="width: 107px;margin-right: 10px"
    >
      <el-option
        v-for="item in orderList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select
      v-model="yearVal"
      size="big"
      style="width: 98px;margin-right: 10px"
    >
      <el-option
        v-for="item in yearList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select
      v-model="monthVal"
      size="big"
      style="width: 79px;margin-right: 10px"
    >
      <el-option
        v-for="item in monthList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-date-picker
      v-model="dateTime"
      type="date"
      size="big"
      style="width:154px;margin-right: 10px;"
    >
    </el-date-picker>

    <el-select
      v-model="timeRangeVal"
      placeholder="timeRange"
      size="big"
      style="width: 107px;margin-right: 10px"
    >
      <el-option
        v-for="item in timeRangeList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-button @click="handleSetVipRoom" size="big" style="width: 78px;">預設廳</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vipRoomList: [
        {
          value: '1',
          label: '永利皇宮廣東貴賓會'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      vipRoomVal: '1',
      orderList: [
        {
          value: '1',
          label: 'A'
        },
        {
          value: '选项2',
          label: 'B'
        }
      ],
      orderVal: '1',
      dateTime: '',
      yearVal: '1',
      yearList: [
        {
          value: '1',
          label: '2020年'
        },
        {
          value: '2',
          label: '2019年'
        }
      ],
      monthVal: '1',
      monthList: [
        {
          value: '1',
          label: '08月'
        }
      ],
      timeRangeVal: '1',
      timeRangeList: [
        {
          value: '1',
          label: '夜'
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleSetVipRoom() {
      // 此处需要一个值
      this.$message.warning('请输入操作密码')
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  /deep/ .el-input__inner {
    background-color: rgba($color: #000000, $alpha: 0);
    border: 1px solid #e7e083;
    color: #e7e083;
  }

  /deep/ .el-input__inner::placeholder {
    color: #e7e083;
  }

  /deep/ .el-select .el-input .el-select__caret {
    color: #e7e083;
  }

  /deep/ .el-select .el-input.is-focus .el-input__inner {
    border-color: #e7e083;
  }

  /deep/ .el-select .el-input__inner:focus {
    border-color: #e7e083;
  }
  /deep/ .el-input__prefix,
  /deep/ .el-input__suffix {
    color: #e7e083;
  }

  /deep/ .el-button {
    border: 1px solid #e7e083;
    border-radius: 4px;
    color: 14px;
    color: #e7e083;
    background-color: rgba($color: #000000, $alpha: 0);
    padding: 12px 15px;
  }
}
</style>
