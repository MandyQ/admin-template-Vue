<template>
  <div id="navbar_wrapper">
    <Hamburger :toggleClick="toggleSidebar" :isActive="sidebar.opened"/>
    <Breadcrumb />


  </div>

</template>

<script>

import Hamburger from '@/components/Hamburger';
import Breadcrumb from '@/components/Breadcrumb';

export default {
  components:{ Hamburger, Breadcrumb },

  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    }
  }


}
</script>

<style>
#navbar_wrapper {
  position: relative;
}


</style>
