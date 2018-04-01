<template>
  <transition name="switch">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "assets/scss/index.scss";
</style>
