<template>
  <el-menu class="navbar" mode="horizontal">
    <Hamburger class="hamburger-container" :toggleClick="toggleSidebar" :isActive="sidebar.opened"></Hamburger>
    <Breadcrumb />
    <el-button type="text" @click="logout">Log out</el-button>
    <!-- <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" src="avatar+'?imageView2/1/w/80/h/80'">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import Hamburger from '@/components/Hamburger';
import Breadcrumb from '@/components/Breadcrumb';

export default {
  components:{ Hamburger, Breadcrumb },
  computed: {
    ...mapGetters([
      'sidebar',
    ])

  },

  methods: {
    toggleSidebar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('Logout').then(()=>{
        this.$router.push({path: '/login'})
        location.reload() //重新实例化vue-router对象
      })
    }
  }


}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  padding-right:10px;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  // .screenfull {
  //   position: absolute;
  //   right: 90px;
  //   top: 16px;
  //   color: red;
  // }
  // .avatar-container {
  //   height: 50px;
  //   display: inline-block;
  //   position: absolute;
  //   right: 35px;
  //   .avatar-wrapper {
  //     cursor: pointer;
  //     margin-top: 5px;
  //     position: relative;
  //     .user-avatar {
  //       width: 40px;
  //       height: 40px;
  //       border-radius: 10px;
  //     }
  //     .el-icon-caret-bottom {
  //       position: absolute;
  //       right: -20px;
  //       top: 25px;
  //       font-size: 12px;
  //     }
  //   }
  // }
}
.el-button--text {
  float: right;
  margin-top:5px;
  color: #f60;
}





</style>
