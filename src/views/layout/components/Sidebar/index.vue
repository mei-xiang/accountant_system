<template>
  <div ref="sideBar">
    <template v-for="(item, index) in permission_routes">
      <div
        :class="{ sidebarItem: true, current: index === currentRouteFlag }"
        :key="item.path"
        @click="clickRoute($event, index)"
      >
        <i :class="['label', 'iconfont', item.meta.icon]"></i>
        <transition name="fade">
          <span class="routeName" v-if="openSideBar">
            {{
            item.meta.title
            }}
          </span>
        </transition>
      </div>
    </template>

    <!-- 菜单栏 -->
    <transition name="fade">
      <div class="menuList" v-if="isShowMunu">
        <div class="content" ref="menuContent" @click="closeMenuList">
          <!-- <div class="autoWidth">            
          </div>-->
          <template
            v-for="(item, index) in permission_routes[currentRouteFlag] &&
              permission_routes[currentRouteFlag].children"
          >
            <div class="menuItem" :key="index">
              <div class="secondMenu" @click="goPage(item, 2)">{{ item.meta.title }}</div>
              <div v-if="item.children">
                <template v-for="subItem in item.children">
                  <div
                    v-if="!subItem.hidden"
                    class="thirdMenu"
                    :key="subItem.path"
                    @click="goPage(subItem, 3, item)"
                  >{{ subItem.meta.title }}</div>
                </template>
              </div>
            </div>
          </template>
          <svg-icon iconClass="wheel" class="wheel"></svg-icon>
        </div>
        <!-- line样式  -->
      </div>
    </transition>
    <!-- switch 开关 -->
    <div class="switch" @click="handleSwitch" v-if="!isShowMunu">
      <i class="iconfont iconjiantou"></i>
    </div>
  </div>
</template>

<script>
// 需要取到动态添加的路由
import { mapGetters, mapMutations } from 'vuex'
// 先獲取大簿的模塊看下行不行
import Layout from "@/views/layout/index.vue";
import bigBook from '@/router/modules/bigBook'

export default {
  data() {
    return {
      openSideBar: true,
      currentRouteFlag: '',
      isShowMunu: false,
      lineList: '',
      // permission_routes: []
    }
  },
  computed: {
    ...mapGetters(['permission_routes'])
  },
  mounted() {
    // this.permission_routes
    console.log('permission_routes ->',this.permission_routes)
  },
  methods: {
    ...mapMutations('tabs', ['ADD_TAB_IN_TABLIST']),
    handleSwitch() {
      const sideBar = this.$refs['sideBar']
      const mainContent = document.getElementsByClassName('main-content')[0]
      if (this.openSideBar) {
        // 关闭
        sideBar.style.width = '76px'
        mainContent.style.width = mainContent.offsetWidth + 104 + 'px'
        this.openSideBar = false
      } else {
        sideBar.style.width = '180px'
        mainContent.style.width = mainContent.offsetWidth - 104 + 'px'
        this.openSideBar = true
      }
      // sideBar.width = '74px'
    },
    clickRoute(e, index) {
      this.isShowMunu = true
      this.currentRouteFlag = index
    },
    goPage(selfItem, routeLevel, subItem) {
      console.log('selfItem ->',selfItem)
      const randomNum = String(new Date().getTime()).slice(-9, -1);
      let path = this.permission_routes[this.currentRouteFlag].path;
      let name = this.permission_routes[this.currentRouteFlag].name;
      if (routeLevel === 2) {
        path += `/${selfItem.path}`
        // 将路由传入到数组中
      } else {
        path += `/${subItem.path}/${selfItem.path}`
      }
      // 为tabsList 添加当前路由的内容
      let selfItemObj = JSON.parse(JSON.stringify(selfItem))
      selfItemObj.path = path
      this.$router.push({ name: selfItem.name, params: {id: randomNum}});
    },
    closeMenuList() {
      this.isShowMunu = false
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarItem {
  height: 60px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: #e7e083;
  opacity: 0.8;
  cursor: pointer;

  .label {
    font-size: 36px;
  }

  .routeName {
    font-size: 18px;
    margin-left: 10px;
  }

  &.current {
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
}

.switch {
  width: 36px;
  height: 36px;
  background-image: linear-gradient(135deg, #e7e083 0%, #99893e 100%);
  text-align: center;
  line-height: 36px;
  border-radius: 50%;
  position: absolute;
  right: -18px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 111;
}

.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// 菜单列表
.menuList {
  position: absolute;
  width: 1740px;
  height: 100%;
  background: #2a4456;
  border-radius: 6px;
  top: 0;
  right: -1740px;
  z-index: 1011;
  .content {
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;

    // .autoWidth {
    //   // width: auto;
    //   width: fit-content;

    //   height: 100%;
    // }

    .menuItem {
      box-sizing: border-box;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.1);
      width: 200px;
      padding: 0 20px;
      font-size: 16px;
      margin-bottom: 20px;
      margin-right: 40px;

      .secondMenu {
        // height: 40px;
        // line-height: 40px;
        font-size: 16px;
        color: #e7e083;
        padding: 11px 0;
        cursor: pointer;
      }

      .thirdMenu {
        font-size: 16px;
        opacity: 0.6;
        color: #e7e083;
        padding: 11px 0;
        cursor: pointer;
      }
    }

    .wheel {
      position: absolute;
      width: 522px;
      height: 495px;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
