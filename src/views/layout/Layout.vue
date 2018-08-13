<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="mask-bg" @click="clickOutside"></div>
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar />
      <Appmain />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Appmain from './components/Appmain';
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name:'layout',
  components:{ Sidebar, Navbar, Appmain },
  mixins:[ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar:!this.sidebar.opened,
        withoutAnimation:this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    clickOutside() {
      this.$store.dispatch('CloseSideBar', {withoutAnimation: false})
    }

  }



};
</script>

<style lang="scss" scoped>
// .app-wrapper {
//   height: 100%;
// }
//   .el-container {
//     height: 100%;
//   }

//   .el-header {
//     /* background-color: #B3C0D1; */
//     color: #333;
//     /* text-align: center; */
//     line-height: 60px;
//     /* border-bottom:1px solid #B3C0D1; */
//   }

//   .el-aside {
//     background-color: rgb(84, 92, 100);
//     color: #333;
//     text-align: center;
//     line-height: 200px;
//     /* height: 100%; */
//     padding-top: 20px;
//   }

//   .el-main {
//     /* background-color: #E9EEF3; */
//     color: #333;
//     text-align: center;
//     line-height: 160px;
//     height: 100%;
//   }

//   body > .el-container {
//     /* margin-bottom: 40px; */
//   }

//   .mask-bg{
//     background: #000;
//     opacity:0.3;
//     width:100%;
//     height:100%;
//     top:0;
//     position: absolute;
//     z-index:999;
//   }

  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .mask-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

</style>
