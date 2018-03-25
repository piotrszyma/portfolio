<template>
  <div class="container">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
  @import 'assets/scss/index.scss';
  
  @import 'assets/scss/_mixins.scss';

  .container {
    height: 100%;
    width: 80%;
    display: flex;
    margin: 2.5% auto;

    @include for-size(desktop-up) {
      margin-top: 12.5%;
      align-items: left;
    }
  }
</style>
