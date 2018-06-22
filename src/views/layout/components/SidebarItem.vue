<template>
  <div>
    <!-- <ul>
      <li v-for="item in routes">
        11
        {{item.meta}}
      </li>
    </ul> -->
    <el-submenu index="1" v-for="item in routes" :key="item.name" v-if="item.children">
      <template slot="title">
        <!-- <svg-icon :icon-class="item.meta.icon" /> -->
        <span class="options_title">{{item.meta.title}}</span>
      </template>

      <!-- <el-menu-item :index=`/${item.meta.title}/${item.children.name}` v-for= "item in children" :key="item.children.name">
        <svg-icon :icon-class=item.meta.title />
        <span class="options_title" index="`/${item.meta.title}/${item.children.name}`">{{item.children.name}}</span>
      </el-menu-item> -->

      <!-- <el-menu-item index="/example/tree">
        <svg-icon icon-class="example" />
        <span class="options_title">Example</span>
      </el-menu-item> -->

    </el-submenu>

    <!-- <router-link to="/form/index"> -->
    <!-- <el-menu-item index="/form/index" >Form</el-menu-item> -->
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {

  mounted() {
    // console.log(this.routes)
    // console.log(item.name)
    console.log(this.routes[1])
    // console.log(this.item.meta)

  },
  data() {
    return {
      routes = this.routes
    }
  },
  name: "Sidebaritem",
  props:['routes']


}
</script>

<style>

</style>
