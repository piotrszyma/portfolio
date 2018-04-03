<template>
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    transitionName: 'switch'
  }),
  watch: {
    $route(to) {
      this.transitionName = to.path === '/' ? "inverted-switch" : "switch";
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/index.scss";
</style>
