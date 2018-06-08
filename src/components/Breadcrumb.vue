<template>
<div id="breadcrumb_wrapper">

  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>

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
