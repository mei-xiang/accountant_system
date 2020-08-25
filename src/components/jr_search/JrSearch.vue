<!--
 * @Description: searchList
 * // 用处： 点击搜索，获取所有已经搜索的值
 * searchList 组件
 * cascader-input   级联选择框
 * drop-tree-input  树形下拉选择框
 * text-input       文本输入框
 * select-input       下拉选择框
 * remote-input     远程搜索输入框
 * date-input       起止日期选择框
 * time-input       时间选择框(年月日时分秒)
 * radio-input       checkbox单选
 * radioGroup-input       radio多选
 * number-input    数字范围输入框
 * @数据结构
 * inputList: [
 *   {
 *     type: 'text-input',
 *     bind_key: 'userAccount',
 *     placeholder: '请输入联系电话',
 *     label: '联系电话',
 *     labelWidth: 65,  default-> 60
 *     inputWidth: 200, default-> 200
 *     hidden: false,
 *     span: // 栅格  default-> 6
 *   }
 * ]
 * @数组内对象共同属性 {Object}
    type  对象展示的输入框类型，共有上列几种类型
    bind_key{String,Array}  搜索返回的key
    placeholder             占位文本
    label                   标签文本
    labelWidth              标签文本宽度 default-> 60
    inputWidth              输入框的宽度
    hidden{boolean}         是否显示
    span:                   栅格  default-> 6
 -->
<template>
  <el-row
    class="search-list"
    :gutter="gutter"
    :style="{ textAlign: labelPosition, width: '100%', margin: 0 }"
  >
    <template v-for="(item, index) in inputList">
      <!-- 1.text-input -->
      <el-col
        v-if="!item.hidden && item.type === 'text-input'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <el-input
          v-model="searchData[item.bind_key]"
          :placeholder="item.placeholder"
          :disabled="item.disabled"
          :maxlength="item.maxlength"
          :minlength="item.minlength"
          :style="{ width: (item.inputWidth || 200) + 'px' }"
        >
          <template v-if="item.beforeTxt" slot="prepend"></template>
          <template v-if="item.afterTxt" slot="append"></template>
          <i
            v-if="item.searchBtn"
            slot="suffix"
            style="color:#999999;font-size: 24px; cursor: pointer;"
            :class="['el-input__icon', item.searchBtn.icon]"
            @click="
              item.searchBtn.changeFn &&
                item.searchBtn.changeFn(searchData[item.bind_key])
            "
          ></i>
        </el-input>
      </el-col>

      <!--2.cascader-input -->
      <el-col
        v-if="!item.hidden && item.type === 'cascader-input'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <el-cascader
          v-model="searchData[item.bind_key]"
          :options="item.optionList"
          :placeholder="item.placeholder"
          :props="{ expandTrigger: 'hover', multiple: item.multiple }"
          :style="{ width: item.inputWidth + 'px' }"
          clearable
          @change="item.changeFn ? item.changeFn($event) : null"
        >
        </el-cascader>
      </el-col>

      <!-- 3.select-input -->
      <el-col
        v-if="!item.hidden && item.type === 'select-input'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <el-select
          v-model="searchData[item.bind_key]"
          :multiple="item.multiple"
          :disabled="item.disabled"
          clearable
          :placeholder="item.placeholder"
          @change="item.changeFn ? item.changeFn($event) : null"
          :style="{ width: item.inputWidth + 'px' }"
        >
          <el-option
            v-for="curItem in item.optionList"
            :key="curItem.value"
            :label="curItem.label"
            :value="curItem.value"
          >
          </el-option>
        </el-select>
      </el-col>

      <!-- 4.remote-input -->
      <el-col
        v-if="!item.hidden && item.type === 'remote-input'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <el-select
          v-model="searchData[item.bind_key]"
          filterable
          remote
          :multiple="item.multiple"
          :disabled="item.disabled"
          clearable
          :placeholder="item.placeholder"
          :remote-method="item.remoteMethod || null"
          @change="item.changeFn ? item.changeFn($event) : null"
          :style="{ width: item.inputWidth + 'px' }"
        >
          <el-option
            v-for="curItem in item.optionList"
            :key="curItem.value"
            :label="curItem.label"
            :value="curItem.value"
          >
          </el-option>
        </el-select>
      </el-col>

      <!-- 5.date-input -->
      <el-col
        v-if="!item.hidden && item.type === 'date-input'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <el-date-picker
          v-model="searchData[item.bind_key]"
          :format="item.formatShow || 'yyyy-MM-dd'"
          :value-format="item.valueFormat || 'yyyy-MM-dd'"
          :type="item.datePickerType"
          :placeholder="item.placeholder"
          :disabled="item.disabled"
          :picker-options="item.dateConfig"
          @change="item.changeFn ? item.changeFn($event) : null"
        ></el-date-picker>
      </el-col>

      <!-- 6.time-input -->
      <el-col
        v-if="!item.hidden && item.type === 'time-input'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <el-date-picker
          range-separator="至"
          v-model="searchData[item.bind_key]"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd hh:mm:ss"
          type="datetimerange"
          :disabled="item.disabled"
          :picker-options="item.dateConfig"
          @change="item.changeFn ? item.changeFn($event) : null"
        ></el-date-picker>
      </el-col>

      <!-- 7.number-input -->
      <el-col
        v-if="!item.hidden && item.type === 'number-input'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <el-input-number
          v-model="searchData[item.bind_key]"
          @change="item.changeFn ? item.changeFn($event) : null"
          :min="item.min"
          :max="item.max"
          label="描述文字"
          :disabled="item.disabled"
          :controls-position="item.controlsPosition"
          :step="item.step || 1"
          :precision="item.precision || 2"
        ></el-input-number>
      </el-col>

      <!-- 8.radio-input -->
      <el-col
        v-if="!item.hidden && item.type === 'radio-input'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <el-checkbox
          v-model="searchData[item.bind_key]"
          :disabled="item.disabled"
        ></el-checkbox>
      </el-col>

      <!-- 9.radioGroup-input -->
      <el-col
        v-if="!item.hidden && item.type === 'radioGroup-input'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <el-radio-group
          v-model="searchData[item.bind_key]"
          @change="item.changeFn ? item.changeFn($event) : null"
          :disabled="item.disabled"
          :text-color="item.textColor || '#ffffff'"
          :fill="item.fill || '#409EFF'"
        >
          <template v-for="curItem in item.optionList">
            <el-radio :label="curItem.value" :key="curItem.value">{{
              curItem.label
            }}</el-radio>
          </template>
        </el-radio-group>
      </el-col>

      <!-- rangeInput -->
      <el-col
        v-if="!item.hidden && item.type === 'rangeInput'"
        :span="item.span"
        :key="index"
        class="search-item"
      >
        <div class="label" :style="{ width: item.labelWidth || 60 + 'px' }">
          {{ item.label }}
        </div>
        <div class="inputList">
          <el-input-number
            v-model="searchData[item.bind_key]"
            :controls="false"
            :style="{ width: item.width || '108px' }"
            @change="randerInputChange"
          ></el-input-number>
          <span> - </span>
          <el-input-number
            disabled
            v-model="randerInputMax"
            :controls="false"
            :style="{ width: item.width || '108px' }"
          ></el-input-number>
        </div>
      </el-col>
    </template>

    <el-col
      class="btn-wrap"
      :span="btnConfig.span || 6"
      style="text-align: left; padding-left: 8px;"
    >
      <el-button
        v-if="!btnConfig.leftBtnHidden"
        type="primary"
        @click="search"
        style="hieght: 36px"
      >
        <i v-if="btnConfig.leftIcon" :class="[btnConfig.leftIcon]"></i>
        {{ btnConfig.leftLabel || '查询' }}</el-button
      >
      <el-button
        v-if="!btnConfig.rightBtnHidden"
        style="margin-left: 15px;"
        @click="reset"
        >重置</el-button
      >
      <!-- 自定義按鈕 -->
      <el-button
        v-if="btnConfig.customBtn"
        style="margin-left: 15px;"
        @click="customClick"
        >重置</el-button
      >
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'searchList',
  props: {
    inputList: {
      type: Array,
      default: () => {
        return []
      }
    },
    btnConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    gutter: {
      type: Number,
      default: 0
    },
    labelPosition: {
      type: String,
      default: 'right'
    }
  },
  data() {
    return {
      searchData: {},
      randerInputMax: ''
    }
  },
  mounted() {},
  methods: {
    reset() {
      this.$emit('reset')
      const arr = this.inputList.filter(item => item.type === 'radio-input')
      this.searchData = {}
      if (arr.length > 0) {
        arr.forEach(item => {
          this.searchData[item.bind_key] = false
        })
      }
    },
    search() {
      const newObj = JSON.parse(JSON.stringify(this.searchData))
      this.$emit('search', newObj)
    },
    randerInputChange(val) {
      this.randerInputMax = val + 299
    },
    customClick() {
      this.$emit('customClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-item {
  display: flex;
  align-items: center;
}

.label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #606067;
  font-size: 16px;
  margin-right: 8px;

  &last-child {
    margin-bottom: 0px;
  }
}
</style>
