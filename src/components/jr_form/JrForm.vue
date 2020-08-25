<!--
 * @Description: 主表组件
  //
 -->
<template>
  <el-form
    :ref="refName"
    :model="formData"
    :rules="rules"
    :label-width="labelWidth"
    v-bind="$attrs"
  >
    <!-- 主体部分 -->
    <el-row>
      <template v-for="(colItem, colIndex) in formConfig">
        <el-col v-if="!colItem.hidden" :key="colIndex" :span="colItem.span" class="el-colItem">
          <template v-for="(item, index) in colItem.list">
            <!-- 1.文本类型 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'text'"
              :prop="item.prop"
              :label="item.label"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
              class="standard"
            >
              <el-input
                v-if="!item.readOnly"
                v-model="formData[item.prop]"
                :placeholder="item.placeholder"
                :disabled="item.disabled"
                :clearable="item.clearable"
                :style="{ width: item.width || '200px' }"
              >
                <template v-if="item.beforeTxt" slot="prepend">
                  {{
                  item.beforeTxt
                  }}
                </template>
                <template v-if="item.afterTxt" slot="append">
                  {{
                  item.afterTxt
                  }}
                </template>
                <i
                  v-if="item.searchBtn"
                  slot="suffix"
                  style="color:#999999;font-size: 24px; cursor: pointer;"
                  :class="['el-input__icon', item.searchBtn.icon]"
                  @click="
                    item.searchBtn.changeFn &&
                      item.searchBtn.changeFn(formData[item.prop])
                  "
                ></i>
              </el-input>
              <!-- 只读  此处只读的情况是便于提交之后用于更改表单为只读状态 -->
              <div v-if="item.readOnly" :style="item.style || {}" :class="item.class">
                <span v-if="item.beforeTxt">{{ item.beforeTxt }}</span>
                {{ formData[item.prop] }}
                <span
                  v-if="item.afterTxt"
                >{{ item.afterTxt }}</span>
              </div>
            </el-form-item>

            <!-- 2.只读模式 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'readOnly'"
              :prop="item.prop"
              :label="item.label"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <!-- 如果需要对数据进行处理后续可以添加 filter -->
              <div :style="item.style" :class="item.class">
                <span v-if="item.beforeTxt">{{ item.beforeTxt }}</span>
                {{ formData[item.prop] }}
                <span
                  v-if="item.afterTxt"
                >{{ item.afterTxt }}</span>
              </div>
            </el-form-item>

            <!-- 13.語言轉換 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'langTransformation'"
              :prop="item.prop"
              :label="item.label"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
              class="standard"
            >
              <div class="langTransformation">
                <el-input
                  v-if="!item.readOnly"
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  :disabled="item.disabled"
                  :clearable="item.clearable"
                  :style="{ width: item.width || '200px' }"
                ></el-input>
                <!-- 簡繁體功能轉換 -->
                <div
                  :class="[
                    'langItem',
                    'langItem1',
                    initLang && fuLang ? 'current' : ''
                  ]"
                  @click="toTraditional(formData[item.prop], item.prop)"
                >繁</div>
                <div
                  :class="['langItem', initLang && jianLang ? 'current' : '']"
                  @click="toSimplified(formData[item.prop], item.prop)"
                >簡</div>
              </div>
            </el-form-item>

            <!-- 3.密码类型 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'password'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-input
                :placeholder="item.placeholder"
                maxlength="20"
                v-model.trim="formData[item.prop]"
                show-password
                :disabled="item.disabled"
              ></el-input>
            </el-form-item>

            <!-- 4.文本域 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'textarea'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-input
                v-if="!item.readOnly"
                type="textarea"
                :autosize="{
                  minRows: item.minRows || 1,
                  maxRows: item.maxRows || 4
                }"
                :placeholder="item.placeholder"
                v-model="formData[item.prop]"
                :disabled="item.disabled"
              ></el-input>
              <div
                v-if="item.readOnly"
                :style="item.style"
                :class="item.class"
              >{{ formData[item.prop] }}</div>
            </el-form-item>

            <!-- 5.单选框组 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'radioGroup'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-radio-group
                v-if="!item.readOnly"
                v-model="formData[item.prop]"
                @change="
                  item.changeFn ? radioGroupChange($event, item.changeFn) : null
                "
                :disabled="item.disabled"
                :text-color="item.textColor || '#ffffff'"
                :fill="item.fill || '#409EFF'"
              >
                <template v-for="curItem in item.optionList">
                  <el-radio
                    class="jr-normal-radio"
                    :label="curItem.value"
                    :key="curItem.value"
                    :border="item.border"
                  >{{ curItem.label }}</el-radio>
                </template>
              </el-radio-group>
              <!-- 只读 -->
              <div
                v-if="item.readOnly"
                :style="item.style"
                :class="item.class"
              >{{ formData[item.prop] }}</div>
            </el-form-item>

            <!-- 6.单选（checkbox-item） -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'radioItem'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-checkbox
                v-if="!item.readOnly"
                v-model="formData[item.prop]"
                :disabled="item.disabled"
                :border="item.border"
              ></el-checkbox>
              <div
                v-if="item.readOnly"
                :style="item.style"
                :class="item.class"
              >{{ formData[item.prop] ? '是' : '否' }}</div>
            </el-form-item>

            <!-- 7.复选 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'checkbox'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px',
                position: item.fixed ? 'fixed' : ''
              }"
            >
              <el-checkbox-group
                v-model="formData[item.prop]"
                v-if="!item.readOnly"
                :disabled="item.disabled"
                @change="
                  item.changeFn ? checkboxChange($event, item.changeFn) : null
                "
              >
                <template v-for="curItem in item.optionList">
                  <el-checkbox
                    :border="item.border"
                    :label="curItem.value"
                    :key="curItem.value"
                    class="jr-normal-checkbox"
                  >{{ curItem.label }}</el-checkbox>
                </template>
              </el-checkbox-group>
              <div v-if="item.readOnly" :style="item.style" :class="item.class">
                {{
                formData[item.prop] &&
                formData[item.prop]
                | checkboxFilter(item.optionList, formData[item.prop])
                }}
              </div>
            </el-form-item>

            <!-- 8.日期选择器 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'date'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-date-picker
                v-if="!item.readOnly"
                v-model="formData[item.prop]"
                :format="item.formatShow || 'yyyy-MM-dd'"
                :value-format="item.valueFormat || 'yyyy-MM-dd'"
                :type="item.datePickerType"
                :placeholder="item.placeholder"
                :disabled="item.disabled"
                :picker-options="item.dateConfig"
                @change="
                  item.changeFn ? dateChange($event, item.changeFn) : null
                "
                :style="{ width: item.width || '200px' }"
              ></el-date-picker>
              <span v-if="item.readOnly">{{ formData[item.prop] | dateFilter(item.datePickerType) }}</span>
            </el-form-item>

            <!-- 9.日期时间选择器 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'dateTime'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-date-picker
                v-if="!item.readOnly"
                range-separator="至"
                v-model="formData[item.prop]"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd hh:mm:ss"
                :type="item.dateType || 'datetimerange'"
                :disabled="item.disabled"
                :picker-options="item.dateConfig"
                @change="
                  item.changeFn ? dateChange($event, item.changeFn) : null
                "
                :style="{ width: item.width || '300px' }"
              ></el-date-picker>
              <span v-if="item.readOnly">
                {{
                formData[item.prop] &&
                formData[item.prop][0] + ' —— ' + formData[item.prop][1]
                }}
              </span>
            </el-form-item>

            <!-- 10.select 选择-->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'select'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-select
                v-if="!item.readOnly"
                v-model="formData[item.prop]"
                :placeholder="item.placeholder"
                clearable
                :filterable="item.filterable"
                :multiple="item.multiple"
                @change="
                  item.changeFn ? selectChange($event, item.changeFn) : null
                "
                :style="{ width: item.width || '200px' }"
              >
                <template v-for="curItem in item.optionList">
                  <el-option
                    :key="curItem.value"
                    :disabled="curItem.disabled"
                    :label="curItem.label"
                    :value="curItem.value"
                  ></el-option>
                </template>
              </el-select>
              <span v-if="item.readOnly">
                {{
                formData[item.prop] &&
                formData[item.prop] | selectFilter(item.optionList)
                }}
              </span>
            </el-form-item>

            <!-- 11.remoteSelect 模糊搜索 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'remoteSelect'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-select
                v-model="formData[item.prop]"
                :multiple="item.multiple"
                filterable
                remote
                reserve-keyword
                :placeholder="item.placeholder || '请输入关键词'"
                :remote-method="remoteMethod"
                :loading="selectLoading"
              >
                <template>
                  <el-option
                    v-for="curItem in selectOptionList"
                    :key="curItem.value"
                    :label="curItem.label"
                    :value="curItem.value"
                  ></el-option>
                </template>
              </el-select>
            </el-form-item>

            <!-- 12.Cascader 级联选择器 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'cascader'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-cascader
                v-model="formData[item.prop]"
                :options="item.optionList"
                clearable
                @change="
                  item.changeFn ? cascaderChange($event, item.changeFn) : null
                "
              ></el-cascader>
            </el-form-item>

            <!-- 14. textGroup 文本群 -->

            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'textGroup'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <text-group :optionType="item.optionType" :optionList="item.optionList"></text-group>
            </el-form-item>

            <!-- 15. addSelect  可创建条目的selecct -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'addSelect'"
              :label="item.label"
              :prop="item.prop"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <div class="addSelectContainer">
                <div class="left">
                  <el-select
                    v-if="!showAddSelectFlag"
                    v-model="formData[item.prop]"
                    filterable
                    placeholder="--請選擇--"
                    :style="{ width: item.width || '200px' }"
                  >
                    <el-option
                      v-for="curItem in item.optionList"
                      :key="curItem.value"
                      :label="curItem.label"
                      :value="curItem.value"
                    ></el-option>
                  </el-select>
                  <el-input
                    v-model="addSelectInputVal"
                    v-if="showAddSelectFlag"
                    :placeholder="item.placeholder || '請輸入新增條目'"
                    :clearable="item.clearable"
                    autofocus
                    :style="{ width: item.width || '200px' }"
                  ></el-input>
                </div>
                <div class="right">
                  <div class="add" @click="createAddSelect(addSelectInputVal, item.addFn)">
                    <i class="iconfont iconxinzeng"></i>
                  </div>
                  <div class="del" @click="delAddSelect(formData[item.prop], item.delFn)">
                    <i class="iconfont iconjian"></i>
                  </div>
                </div>
              </div>
            </el-form-item>

            <!-- 16 disabledInput 有禁用選項的input -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'disabledInput'"
              :prop="item.prop"
              :label="item.label"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-input
                v-if="!item.readOnly"
                v-model="formData[item.prop]"
                :placeholder="item.placeholder"
                :disabled="item.disabled || isDisabledInput"
                :clearable="item.clearable"
                :style="{ width: item.width || '200px' }"
              >
                <template v-if="item.beforeTxt" slot="prepend">
                  {{
                  item.beforeTxt
                  }}
                </template>
                <template v-if="item.afterTxt" slot="append">
                  {{
                  item.afterTxt
                  }}
                </template>
                <i
                  v-if="item.searchBtn"
                  slot="suffix"
                  style="color:#999999;font-size: 24px; cursor: pointer;"
                  :class="['el-input__icon', item.searchBtn.icon]"
                  @click="item.searchBtn.changeFn && item.searchBtn.changeFn()"
                ></i>
              </el-input>

              <el-checkbox
                v-model="isDisabledInput"
                class="jr-normal-checkbox"
                style="margin-left: 8px; font-size: 16px;"
              >{{ item.disabledExplain }}</el-checkbox>
            </el-form-item>

            <!-- 17. uploadImg 圖片上傳功能 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'uploadImg'"
              :prop="item.prop"
              :label="item.label"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <el-upload
                class="upload-img"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或
                  <em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip">格式jpg、png、jpeg</div>
              </el-upload>
            </el-form-item>

            <!-- 18. simpleTextGroup 簡單文本群 -->
            <el-form-item
              :key="index"
              v-if="!item.hidden && item.type === 'simpleTextGroup'"
              :prop="item.prop"
              :label="item.label"
              :style="{
                borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'
              }"
            >
              <simple-text-group
                :optionList="item.optionList || []"
                :optionType="item.optionType || []"
                @addSimpleText="
                  addSimpleText($event, item.prop, item.optionList)
                "
              ></simple-text-group>
            </el-form-item>

            <!-- 純文本 -->
            <el-form-item
              :key="index"
              :label="item.label"
              :style="{borderRight: item.borderRight ? '1px solid #eeeeee' : '0px'}"
              class="redColor"
              v-if="!item.hidden && item.type === 'plainText'"
            >
              <div
                :style="{
              fontSize: item.fontSize,
              color: item.color}"
              >{{item.content}}</div>
            </el-form-item>
          </template>
        </el-col>
      </template>
    </el-row>

    <!-- button 部分 -->
    <div v-if="btnConfig.isShowBtn" :style="btnConfig.style || 'text-align: center;'">
      <template v-for="item in btnConfig.list">
        <el-button
          :key="item.fnType || 'firstType'"
          v-if="item.isShow && item.fnType === 'firstFn'"
          :type="item.type || 'primary'"
          @click="firstBtnFn(item)"
          :style="item.style || 'margin-right: 20px;'"
        >{{ item.text || '保存' }}</el-button>
        <el-button
          :key="item.fnType || 'lastType'"
          v-if="item.isShow && item.fnType === 'lastFn'"
          :type="item.type || ''"
          @click="lastBtnFn(item)"
          :style="item.style || ''"
        >{{ item.text || '取消' }}</el-button>
      </template>
    </div>
    <!--
      && item.fnType === 'firstFn'
      表单类型： 1.readOnly  只读模式 
                2.text      文本输入  有個搜索btn功能 ， searchBtn 傳入對象 入參有: 
                3.password  密码类型
                4.textarea  文本域
                5.radioGroup 单选框组
                6.radioItem 单选
                7.checkbox 复选框 (请务必初始化数组，否则会报错)
                8.date 日期选择 (值有为 date 或是 array)
                9.dateTime 日期时间
                10.select 选择器（单项多选一起）
                11.remoteSelect 模糊查询 // 需要从父组件传入一个remoteSelectAxiosFn，便于子组件发送请求
                12.Cascader 级联选择器
                13. langTransformation 語言轉換input
                14. textGroup  文本群
                15. addSelect  可创建条目的selecct
                16. disabledInput 有禁用選項的input
                17. uploadImg  圖片上傳
                18. simpleTextGroup 簡單文本群 （沒有 新增刪除的功能 ）

      数据结构
      formConfig = [
        {
          hidden: false
          span
          list
        }, // 每一个对象控制一列数据
        {
        }
      ]

    -->
  </el-form>
</template>

<script>
import langTransfer from "@/utils/langtransfer/lang-transfer.js";
import simpleTextGroup from "./simpleTextGroup";
import textGroup from "./textGroup";
export default {
  name: "JrForm",
  components: {
    textGroup,
    simpleTextGroup,
  },
  props: {
    formData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    formConfig: {
      type: Array,
      default: () => {
        return [{}];
      },
    },
    labelWidth: {
      type: String,
      default: "100px",
    },
    refName: {
      type: String,
      default: "",
    },
    rules: {
      type: Object,
      default: () => {
        return {};
      },
    },
    btnConfig: {
      type: Object,
      default: () => {
        return {
          isShowBtn: false, // *
          list: [
            {
              isShow: true, // *
              fnType: "firstFn", // * 为什么要有这个属性，是因为函数名一开始必须存在，不能够动态的生成，所以一开始就需要定义两个btn。两个btn如果采取的是循环遍历的方法，就需要添加一个flag用于消除每次循环中其中的一个btn。
            },
            {
              isShow: true,
              fnType: "lastFn",
            },
          ],
        };
      },
    },
    remoteSelectAxiosFn: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectLoading: false,
      selectOptionList: [],
      jianLang: false,
      fuLang: false,
      initLang: false,
      // addSelect
      addSelectInputVal: "",
      showAddSelectFlag: false,
      addSelectStep: 1,
      isDisabledInput: false,
    };
  },
  computed: {
    langTransforer() {
      if (!this.initLang) {
        return "";
      }
      if (this.isCurLang) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    firstBtnFn(item) {
      this.$refs[this.refName].validate((valid) => {
        if (valid) {
          item.axiosFn &&
            this.$axios[item.axiosFn](this.formData).then((res) => {
              this.$message({ message: res.message, type: "success" });
              this.resetFields();
              if (item.callback) {
                this.$emit(item.callback, res);
              }
            });
        } else {
          this.$message({
            message: "表单信息有误，请检查确认",
            type: "warning",
          });
        }
      });
    },
    lastBtnFn(item) {
      // 第二个btn  通常是作为取消按钮来的,不传默认为清除按钮
      if (item.isCancelBtn) {
        this.$refs[this.refName].validate((valid) => {
          if (valid) {
            item.axiosFn &&
              this.$axios[item.axiosFn](this.formData).then((res) => {
                this.$message({ message: res.message, type: "success" });
                this.resetFields();
                if (item.callback) {
                  this.$emit(item.callback, res);
                }
              });
          } else {
            this.$message({
              message: "表单信息有误，请检查确认",
              type: "warning",
            });
          }
        });
      } else {
        // 作为取消按钮的话
        this.resetFields();
      }
    },
    // 用于外部表单提交
    validate(callback) {
      this.$refs[this.refName].validate((valid) => {
        if (valid) {
          callback && callback(this.formData);
        } else {
          callback && callback();
        }
      });
    },
    // promise版本
    validatePromise() {
      return new Promise((resolve, reject) => {
        this.$refs[this.refName].validate((valid) => {
          if (valid) {
            resolve(this.formData);
          } else {
            reject(valid);
          }
        });
      });
    },
    // 重置表单
    resetFields() {
      this.$refs[this.refName].resetFields();
    },
    // 清除校验结果
    clearValidate() {
      this.$refs[this.refName].clearValidate();
    },
    // 对部分表单进行校验
    validateField(val) {
      this.$refs[this.refName].validateField(val);
    },
    radioGroupChange(val, changeFn) {
      changeFn && this.$emit(changeFn, val);
    },
    checkboxChange(val, changeFn) {
      changeFn && this.$emit(changeFn, val);
    },
    dateChange(val, changeFn) {
      changeFn && this.$emit(changeFn, val);
    },
    selectChange(val, changeFn) {
      changeFn && this.$emit(changeFn, val);
    },
    remoteMethod(query) {
      console.log(query, "query");
      console.log(this.remoteSelectAxiosFn, "remoteSelectAxiosFn");
      if (query !== "") {
        this.selectLoading = true;
        // 此处不知道接口内容是啥，暂且不做
        this.$axios[this.remoteSelectAxiosFn](query).then((res) => {
          console.log(res);
          this.selectLoading = false;
          this.selectOptionList = res.data;
        });
      }
    },
    cascaderChange(val, changeFn) {
      changeFn && this.$emit(changeFn, val);
    },
    // 簡繁體想換轉換
    toTraditional(val, prop) {
      this.initLang = true;
      this.fuLang = true;
      this.jianLang = false;
      if (val === "") return;
      this.formData[prop] = langTransfer && langTransfer.traditionalized(val);
    },
    toSimplified(val, prop) {
      this.initLang = true;
      this.jianLang = true;
      this.fuLang = false;
      if (val === "") return;
      this.formData[prop] = langTransfer && langTransfer.simplized(val);
    },

    // addSelect 功能
    //  加号功能 : 1） 第一步点击添加 变成 input， 获取焦点. 2） 输入完之后在点击添加 发请求 添加变成select 之后是选中的状态。
    //  减号功能： 选中select  之后 弹框提醒是否要确认删除
    createAddSelect(inputVal, fnType) {
      if (this.addSelectStep === 1) {
        this.showAddSelectFlag = true;
        this.addSelectStep = 2;
      } else {
        this.$emit(fnType, inputVal);
        this.showAddSelectFlag = false;
        this.addSelectStep = 1;
        this.addSelectInputVal = "";
      }
    },
    delAddSelect(selectVal, fnType) {
      this.$emit(fnType, selectVal);
    },

    // simpleTextGroup
    // add
    addSimpleText(addItem, prop, optionList) {
      console.log(addItem, "子組件item");
      console.log(prop, "prop");
      const arr = optionList.filter((item) => item.value === addItem.value);
      console.log(arr.length, "arrlength");
      if (arr && arr.length === 1) return;
      this.formData[prop] = optionList.push(addItem);
    },
  },
  filters: {
    checkboxFilter(valList, optionList) {
      if (!optionList) return;
      const arr = [];
      valList.forEach((item) => {
        const res = optionList.filter((it) => item === it.value);
        arr.push(res[0].label);
      });
      return arr.join(" / ");
    },
    dateFilter(val, type) {
      if (type.includes("range")) {
        return val[0] + " —— " + val[1];
      } else {
        return val;
      }
    },
    selectFilter(val, optionList) {
      if (!optionList) return;
      const arr = [];
      if (Array.isArray(val)) {
        val.forEach((item) => {
          const res = optionList.filter((it) => item === it.value);
          arr.push(res[0].label);
        });
      } else {
        const res = optionList.filter((it) => val === it.value);
        arr.push(res[0].label);
      }
      return arr.join(" / ");
    },
  },
};
</script>

<style lang="scss" scoped>
/* 格式化label 樣式 */
/deep/ .el-form-item__label {
  color: #606067;
  font-size: 16px;
}

/* 格式化el-col的樣式 */
.el-colItem {
  box-sizing: border-box;

  // &:first-child {

  // }
}
.el-form-item {
  padding: 10px 0;
  border-bottom: 1px solid #eeeeee;
  padding-right: 10px;
  margin: 0;
}

/* 有需求的列表需要将高度调为36px */
.standard /deep/ .el-form-item__content {
  height: 36px;
}

/* langTransformation 樣式 */
.langTransformation {
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

// chebox 的樣式
.el-checkbox {
  margin-right: 0;
}
.el-checkbox.is-bordered + .el-checkbox.is-bordered {
  margin-left: 12px;
}

// 調整 單個表單會 多 1px 的問題
.el-radio-button__inner,
.el-radio-group {
  vertical-align: baseline;
}

// addSelect 組件樣式
.addSelectContainer {
  display: flex;
  align-items: center;

  .right {
    display: flex;
    align-items: center;
    margin-left: 8px;
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
</style>
