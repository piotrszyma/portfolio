<template>
  <transition @before-enter="beforeEnter" @after-leave="afterLeave" name="fade">
    <router-view/>
  </transition>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    body: null
  }),
  methods: {
    beforeEnter() {
      this.body.style.overflow = 'hidden'
    },
    afterLeave() {
      this.body.style = '';
    }
  },
  mounted () {
    this.body = document.querySelector('body');
  }
};
</script>

<style lang="scss">
@import "assets/scss/index.scss";

.container {
  padding: 10%;
  box-sizing: border-box;
  color: black;
  -webkit-font-smoothing: antialiased;
}

</style>
