<template>
  <div class="container home" ref="container">
    <home-header/>
    <home-menu/>
    <home-video/>
  </div>
</template>
<script>
import HomeHeader from "./HomeHeader.vue";
import HomeMenu from "./HomeMenu.vue";
import HomeVideo from "./HomeVideo.vue";

export default {
  components: {
    HomeHeader,
    HomeMenu,
    HomeVideo
  }
};
</script>
<style lang="scss" scoped>
.home {
  color: white;
}
</style>

