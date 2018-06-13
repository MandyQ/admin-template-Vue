<template>
  <div id="breadcrumb_wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">

      <el-breadcrumb-item v-for="(item, index) in crumblist" :key="item.path" v-if="item.meta.title">
        <span v-if="item.redirect==='noredirect'|| index==crumblist.length-1" class="no-redirect">{{item.meta.title}}</span>
        <router-link v-else :to="item.redirect || item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>

    </el-breadcrumb>
  </div>

</template>

<script>

export default {
   created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      crumblist:[]
    }
  },
// 使用路由参数时 原来的组件会被复用，意味着组件生命周期钩子函数不会被调用
//复用组件时，想对路由参数变化做出响应的话，用watch（监测变化）$route对象 或者引入beforeRouteUpdate守卫
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter( item => item.name)
      const first = matched[0]
      if(first&&first.name !== 'Dashboard'){
        matched = [{path: '/dashboard', meta: {title: 'Dashboard'}}].concat(matched)
      }
      this.crumblist = matched
    }

  }




}
</script>

<style>
#breadcrumb_wrapper {
  margin-left: 35px;
}


</style>
