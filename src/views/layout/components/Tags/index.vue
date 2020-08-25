<template>
  <div class="tabsContainer">
    <scroll-pane>
      <router-link
        ref="tag"
        v-for="(tag, index) in tabsList"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="tag.path"
        tag="span"
        class="tags-view-item"
      >
        <!-- router-link  的 tag 属性 将router-link 指定渲染为span标签  -->
        {{ tag.meta.title }}

        <span
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag, index)"
        />

        <div class="line"></div>
      </router-link>
    </scroll-pane>
  </div>

  <!-- 
    tabs 切换功能
    1. tabs  要根据一个 存储再vuex 中的数据来渲染 ，这个数组中的每一项应该是一个路由对象，这样如果单个tab可以通过this.$router.push.

   59
   -->
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ScrollPane from './ScrollPane'
export default {
  components: {
    ScrollPane
  },
  data() {
    return {
      editableTabsValue: ''
    }
  },
  computed: {
    ...mapGetters(['tabsList'])
  },
  watch: {
    $route() {
      this.addTags()
      // this.moveToCurrentTag()
      console.log('zhixingle')
    }
  },

  mounted() {
    console.log(this.tabsList, '22')
    console.log(this.$route, '$route')
    this.addTags()
  },
  methods: {
    ...mapMutations('tabs', ['ADD_TAB_IN_TABLIST']),
    isActive(route) {
      // 判断是否是当前tabs， 如果是需要让其背景显示高亮
      return route.path === this.$route.fullPath
    },
    // 关闭tabs btn
    closeSelectedTag(tag) {
      this.$store.dispatch('tabs/delTab', tag).then(res => {
        if (this.isActive(tag)) {
          res = res.tagList
          this.toLastTag(res)
        }
      })
    },
    toLastTag(tagList) {
      const lastTag = tagList.slice(-1)[0]
      if (lastTag) {
        this.$router.push(lastTag.path)
      } else {
        // 不存在说明是第一个，跳转到
        this.$router.push('/')
      }
    },
    addTags() {
      const { path } = this.$route
      if (path !== '/') {
        this.ADD_TAB_IN_TABLIST(this.$route)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabsContainer {
  width: 100%;
  height: 40px;
  background-color: #d2d2d2;
  border-radius: 8px 8px 0 0;
  line-height: 40px;

  .tags-view-item {
    position: relative;
    font-size: 16px;
    display: inline-block;
    color: #666666;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 20px;
    border-radius: 8px 8px 0px 0px;
    font-weight: 700;

    &.active {
      background-color: #fff;

      .line {
        display: none;
      }
    }

    // 关闭按钮
    /deep/ .el-icon-close {
      width: 16px;
      height: 16px;
      padding: 3px;
      border-radius: 50%;
      margin-left: 8px;

      &:hover {
        background-color: #dddddd;
        color: #979797;
      }
    }

    // line
    .line {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 16px;
      background-color: #8f9297;
      opacity: 0.8;
    }
  }
}
</style>
