
<template>
   <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ff6600"
    >
      <SidebarItem :routes="routes" />
    </el-menu>
  </el-scrollbar>




</template>

<script>
import { mapGetters } from 'vuex'
import  SidebarItem  from '@/views/layout/components/SidebarItem.vue'

export default {
  components: { SidebarItem },
  data() {
    return {
      // activeIndex: '1',
      // isCollapse: true, //二级导航hover展开还是点击展开
    };
  },
  computed: {
    //使用对象展开将getter混入 computed对象中 若想给getter取另一个名字，使用对象形式
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened
    },
    routes() {
      // console.log(this.$router.options.routes)
      return this.$router.options.routes
    }
  },


  }

</script>

<style>

</style>
