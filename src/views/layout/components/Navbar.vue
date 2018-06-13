<template>
  <div id="navbar_wrapper">
    <Hamburger :toggleClick="toggleSidebar" />
    <Breadcrumb />
    <el-row class="avatar-box">
        <el-dropdown trigger="click">
          <div class="avatar-wrapper">
            <img class="user-avatar" src="../../../assets/avatar.jpg" alt="">
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/dashboard">
               <el-dropdown-item>Home</el-dropdown-item>
            </router-link>
            <router-link to="/login">
               <el-dropdown-item>Logout</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
    </el-row>


  </div>

</template>

<script>

import Hamburger from '@/components/Hamburger';
import Breadcrumb from '@/components/Breadcrumb';

export default {
  components:{ Hamburger, Breadcrumb },

  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    }
  }


}
</script>

<style>
#navbar_wrapper {
  position: relative;
}
.avatar-wrapper{
  height: 40px;
}
.avatar-box{
  position: absolute;
  right: 0;
  top: 50%;
  transform:translateY(-30%);
}
img{
  width: 40px;
  height: 40px;
}



</style>
