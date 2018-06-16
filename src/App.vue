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
    beforeEnter(el) {
      this.body.style.overflow = 'hidden'
      console.log('beforeEnter');
    },
    afterLeave(el) {
      this.body.style = '';
      console.log('afterLeave');
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
  height: 100%;
  box-sizing: border-box;
  color: black;
  -webkit-font-smoothing: antialiased;
}

</style>
