<template>
  <div class="home">
    <main>
      <h1>Piotr Szyma</h1>
      <h2>Computer Science enthusiast</h2>
      <menu-items class="menu" />
    </main>
    <background-video />
  </div>
</template>
<script>
import BackgroundVideo from "../components/BackgroundVideo.vue";
import MenuItems from "../components/MenuItems.vue";

export default {
  components: {
    MenuItems,
    BackgroundVideo,
  },
};
</script>
<style lang="scss" scoped>
h1 {
  width: auto;
}

h2 {
  font-size: 0.9rem;
}

main {
  padding: 10% 0 0 10%;
}

.menu {
  margin-top: 4rem;
}
</style>
