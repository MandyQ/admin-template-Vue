<template>
  <el-container>
    <!-- <el-aside width="200px">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <el-main>
        <Appmain />
      </el-main>
    </el-container> -->


    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <el-main>
         <Navbar />
        <Appmain />

      </el-main>
    </el-container>
  </el-container>


</template>

<script>
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Appmain from './components/Appmain';
export default {
  components:{ Sidebar, Navbar, Appmain }

};
</script>

<style>
  .el-container {
    height: 100%;
  }

  .el-header {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom:1px solid #B3C0D1;
  }

  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
    padding-top: 20px;
  }

  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100%;
  }

  body > .el-container {
    /* margin-bottom: 40px; */
  }

</style>
