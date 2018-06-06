<template>
   <div id="app">
     <router-view></router-view>
   </div>
</template>

<script>
// import Layout from './views/layout/Layout';
import Login from '@/views/login/Login';

export default {
  // name: 'App',
  // components: {
  //   Layout,
  // },
  name: 'App',
  components: {
    Login,
  },

};
</script>

<style>
 #app{
   height: 100%

 }

</style>
