
<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"

      :router="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ff6600">

      <Sidebaritem :routes="routes" />

    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import  Sidebaritem  from '@/views/layout/components/Sidebaritem.vue'

export default {
  components: { Sidebaritem },
  data() {
    return {
      // activeIndex: '1',
      // isCollapse: true, //二级导航hover展开还是点击展开
    };
  },
  computed: {
    //使用对象展开将getter混入 computed对象中 若想给getter取另一个名字，使用对象形式
    ...mapGetters(['sidebar']),
    // isCollapse() {
    //   return !this.sidebar.opened
    // },
    routes() {
      // console.log(this.$router.options.routes)
      return this.$router.options.routes
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },

  }

</script>

<style>
.el-menu {
  width: 200px;
  text-align: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu--collapse>.el-submenu>.el-submenu__title span {
  width:auto;
  height: auto;
  visibility: visible;


}



</style>
