
<template>

<div>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="vertical"
    @select="handleSelect"
    :collapse="isCollapse"
    :router="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ff6600">

    <el-submenu index="1">
      <template slot="title">Example</template>
      <!-- <router-link to="/example/table"> -->
        <el-menu-item index="/example/table">Table</el-menu-item>
      <!-- </router-link> -->

      <!-- <router-link to="/example/tree"> -->
        <el-menu-item index="/example/tree">Tree</el-menu-item>
      <!-- </router-link> -->
    </el-submenu>

    <!-- <router-link to="/form/index"> -->
      <el-menu-item index="/form/index" >Form</el-menu-item>
    <!-- </router-link> -->





  </el-menu>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

    data() {
      return {
        activeIndex: '1',
        // isCollapse: true,

      };
    },
    computed: {
      //使用对象展开将getter混入 computed对象中 若想给getter取另一个名字，使用对象形式
      ...mapGetters(['sidebar']),
      isCollapse() {
        return !this.sidebar.opened
      }

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // onMenuChange(page, fromHook)
    },
    // beforeUpdate: function() {
    //   return this.activeIndex = this.$route.matched[1].path

    // }
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


</style>
