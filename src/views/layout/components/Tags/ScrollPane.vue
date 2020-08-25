<template>
  <el-scrollbar
    ref="scrollContainer"
    :vertical="false"
    @wheel.native.prevent="handleScroll"
    class="scroll-container"
  >
    <slot />
  </el-scrollbar>
</template>

<script>
// const tagAndTagSpacing = 4 // tagAndTagSpacing

export default {
  name: 'ScrollPane',
  data() {
    return {
      left: 0
    }
  },
  computed: {
    // 获取el-scroll-wrap的 dom元素
    // vue 组件的 $refs 是 dom元素
    scrollWrapper() {
      return this.$refs.scrollContainer.$refs.wrap
    }
  },
  mounted() {
    console.log(this.$refs.scrollContainer.$refs.wrap)
  },
  beforeDestroy() {},
  methods: {
    handleScroll(e) {
      console.log(e, '鼠标滚轮事件')
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-container {
  // white-space: nowrap;
  // position: relative;
  // overflow: hidden;
  width: 100%;
  ::v-deep {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 57px;
    }
  }
}
</style>
