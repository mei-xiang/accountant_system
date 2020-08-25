<template>
  <div class="container">
    <!-- 两个输入框
      加号功能 : 1） 第一步点击添加 变成 input， 获取焦点. 2） 输入完之后在点击添加 发请求 添加变成select 之后是选中的状态。 
      减号功能： 选中select  之后 弹框提醒是否要确认删除
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
      exaple: ''
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


</style>
