
/* eslint-disable */
<template>
  <div>

    <!--eleUI里 template是ul , el-submenu是li el-menu-item-group是li里面的ul el-menu-item是li-->

    <template v-for="item in routesArr" v-if="item.children && (item.children[0].name==='Dashboard'? false:true)">

      <router-link v-if="item.children.length===1" :key="item.children[0].name" :to="item.path+'/'+item.children[0].path">
        <el-menu-item index="item.path+'/'+item.children[0].path">
          <svg-icon :icon-class="item.meta.icon"/>
          <span class="options_title" >{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else  :index="item.path" :key="item.name">
        <template slot="title">
          <svg-icon :icon-class="item.meta.icon" />
          <span class="options_title">{{item.meta.title}}</span>
        </template>

        <template v-for="secItem in item.children">
          <router-link :to="item.path + '/' + secItem.path" :key="secItem.name">
            <el-menu-item index="item.path+'/'+secItem.path"  :key="secItem.name" v-if="item.children && item.children.length>1">
              <svg-icon :icon-class="secItem.meta.icon"/>
              <span class="options_title" >{{secItem.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>

      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "Sidebaritem",
  props:['routes'],
  data() {
    return {
      routesArr:[] //事先定义好空数组，用来接收父组件传递过来的数据
    }
  },

  created() {
    this.routesArr = this.routes // 用来接收父组件传过来的数据（props传过来的数据不能直接拿来用 不会同步到view层 why ??）
    console.log(this.routesArr)
  },



}
</script>

<style >
/* eleUI侧边栏erji导航菜单高亮失灵，so */
 .router-link-exact-active.router-link-active li span,
 .router-link-exact-active.router-link-active li .svg-icon
 {
   color:#ff6600
 }

</style>
