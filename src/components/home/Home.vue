<template>
  <div class="container home">
    <home-header/>
    <home-links/>
    <home-background/>
  </div>
</template>
<script>
import HomeBackground from "./HomeBackground.vue";
import HomeLinks from "./HomeLinks.vue";
import HomeHeader from "./HomeHeader.vue";

export default {
  components: {
    HomeHeader,
    HomeLinks,
    HomeBackground
  }
};
</script>

