<template>
  <svg :class="svgClass">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
export default {
  props:['iconClass', 'className'],
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    // svgClass() {
    //   if()
    // }


  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>
