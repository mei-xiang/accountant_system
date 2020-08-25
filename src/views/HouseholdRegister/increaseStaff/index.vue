<template>
  <el-card class="increaseStaff-wrap">
    <div class="formInfo">
      <jr-form
        :formData="formData"
        :formConfig="formConfig"
        :rules="rules"
        @middlePeopleClick="middlePeopleClick"
        @addCertificate="addCertificate"
        @delCertificate="delCertificate"
        @addJobTitle="addJobTitle"
        @delJobTitle="delJobTitle"
        @addEducation="addEducation"
        @addCountry="addCountry"
        @delCountry="delCountry"
      ></jr-form>
    </div>

    <div class="uploadImg">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </div>
  </el-card>
</template>

<script>
import JrForm from '@/components/jr_form/JrForm'
import { formConfig, rules } from './index'
export default {
  name: 'increaseStaff',
  components: { JrForm },
  data() {
    const increaseStaffInfo = formConfig(this)
    return {
      // 最上方表單數據
      formData: {
        checkboxVal: []
      },
      formConfig: increaseStaffInfo,
      rules
    }
  },
  mounted() {
    console.log(this.ha, '能夠拿得到test嗎')
  },
  methods: {
    // 中介人選擇事件
    middlePeopleClick(val) {
      console.log('選中的值', val)
    },
    // 證件類別
    addCertificate(inpuVal) {
      console.log('證件類別', inpuVal)
    },
    delCertificate(selectVal) {
      console.log('證件類別', selectVal)
    },
    // 職位
    addJobTitle(inpuVal) {
      console.log('證件類別', inpuVal)
    },
    delJobTitle(selectVal) {
      console.log('證件類別', selectVal)
    },
    // 學歷
    addEducation(inputVal) {
      console.log('學歷', inputVal)
    },
    delEducation(selectval) {
      console.log('selectval', selectval)
    },
    // 國籍
    addCountry(inputVal) {
      console.log(inputVal, 'inputVal')
    },
    delCountry(selectVal) {
      console.log(selectVal, 'delCountry')
    }
  }
}
</script>

<style lang="scss" scoped>
.increaseStaff-wrap {
  width: 1200px;
  margin: 0 auto;
  // height: 2000px;
  border-radius: 8px;

  // background: pink;
  /deep/ .el-card__body {
    padding: 0;
    display: flex;
    justify-content: flex-start;
    height: auto;
  }

  .formInfo {
    width: 1040px;
    box-sizing: border-box;
  }

  .uploadImg {
    width: 160px;
    padding: 0 5px;
    // height: 200px;
    box-sizing: border-box;
    overflow: hidden;

    .upload-demo {
      /deep/ .el-upload-dragger {
        width: 150px;
        height: 220px;
        border-radius: 0;
        background-color: #f9f9f9;
        border: 1px dashed #e7e083;
      }
    }
  }
}
</style>
