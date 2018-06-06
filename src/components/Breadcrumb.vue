<template>
<div id="breadcrumb_wrapper">

  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>

</div>

</template>

<script>

export default {



}
</script>

<style>
#breadcrumb_wrapper {
  margin-left: 35px;
}


</style>
