<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <top-nav-bar />
    </div>

    <div class="main-container">
      <sidebar class="sidebar-container" />
      <div class="main-content" ref="mainContent">
        <Tags />
        <app-main></app-main>
      </div>
    </div>

    <div class="fix-bottom">
      <bottom-nav-bar />
    </div>
  </div>
</template>

<script>
import { Sidebar, Tags, AppMain, BottomNavBar, TopNavBar } from './components'
import variables from '@/styles/variables.scss'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Tags,
    AppMain,
    BottomNavBar,
    TopNavBar
  },
  computed: {},
  methods: {
    changeBG() {
      // variables.themeBg = '#ffffff'
      console.log(variables.themeBg)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  // background-image: url('~@/assets/bgc/4.png');
  background-color: $themeBg;
}

.fixed-header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
}
.main-container {
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 0;
  right: 0;
  display: flex;

  .sidebar-container {
    padding-top: 12px;
    box-sizing: border-box;
    transition: width 0.28s;
    width: $sideBarWidth;
    position: relative;
  }

  .main-content {
    transition: width 0.28s;
    min-height: 100%;
    height: 100%;
    width: calc(100% - #{$sideBarWidth});
    background-color: white;
    border-radius: 8px;
  }
}
.fix-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
