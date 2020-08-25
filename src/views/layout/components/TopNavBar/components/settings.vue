<template>
  <div class="settings">
    <div
      class="status"
      :style="{ backgroundColor: sysStatus ? '#67C23B' : '#F54645' }"
    >
      <span class="text">{{ sysStatus ? '正常' : '异常' }}</span>

      <span class="iconfont icongouxuan"></span>
    </div>
    <!-- 操作指南 -->
    <i class="iconfont iconcaozuozhinan iconItem"></i>

    <!-- 换肤 -->
    <i class="iconfont iconhuanfu iconItem" @click="changeBgc"></i>

    <!-- 语音 -->
    <i class="iconfont icondianhua iconItem"></i>

    <!-- 缩小 -->
    <i class="iconfont iconjian iconItem" @click="scaleWindow"></i>

    <!-- 关闭 -->
    <i class="iconfont iconguanbi iconItem" @click="closeWindow"></i>
  </div>
</template>

<script>

export default {
  data() {
    return {
      sysStatus: true
    }
  },
  computed: {},
  methods: {
    changeBgc() {
      //
    },
    scaleWindow() {
      if (window.require instanceof Object) {
        const { ipcRenderer } = window.require('electron');
        // ipcRenderer.on('data', (event, arg) => {
        //   console.log(arg);
        //   that.token = arg;
        // });
        ipcRenderer.send('loginWindowMin');
      }
    },
    closeWindow() {
      if (window.require instanceof Object) {
        const { ipcRenderer } = window.require('electron');
        // ipcRenderer.on('data', (event, arg) => {
        //   console.log(arg);
        //   that.token = arg;
        // });
        ipcRenderer.send('loginWindowClose');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  align-items: center;
  .status {
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 24px;
    border-radius: 4px;
    color: #001168;
    font-size: 12px;
  }

  .iconItem {
    opacity: 0.8;
    color: #ffffff;
    font-size: 36px;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
