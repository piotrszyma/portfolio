<template>
  <transition name="fade">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
@import "assets/scss/index.scss";

.container {
  padding: 10%;
  height: 100%;
  box-sizing: border-box;
  color: black;
  -webkit-font-smoothing: antialiased;
}

.link {
  padding-bottom: 0.2rem;
  transition: 0.2s;
  border-bottom: 0.1rem solid transparent;

  &:hover {
    cursor: pointer;
    border-bottom: 0.1rem solid currentColor;
  }
}
</style>
