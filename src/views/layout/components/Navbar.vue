<template>
<div id="navbar_wrapper">
  <Hamburger />
  <Breadcrumb />


</div>

</template>

<script>
import Hamburger from '@/components/Hamburger';
import Breadcrumb from '@/components/Breadcrumb';

export default {
  components:{ Hamburger, Breadcrumb }

}
</script>

<style>
#navbar_wrapper {
  position: relative;
}


</style>
