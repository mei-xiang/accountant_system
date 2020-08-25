<template>
  <div class="topNavBar">
    <div class="logo">
      <svg-icon iconClass="logo" className="kw-logo"></svg-icon>
    </div>
    <search />
    <settings/>
  </div>
</template>

<script>
import Search from './components/search.vue'
import Settings from './components/settings.vue'
export default {
  components: {
    Search,
    Settings
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.topNavBar {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding-left: 12px;

    .kw-logo {
      width: 140px;
    }
  }
}
</style>
