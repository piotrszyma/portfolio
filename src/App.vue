<template>
  <div>
    <AppLoader/>
    <transition 
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"

        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppLoader from './AppLoader.vue';

export default {
  name: "app",
  components: {
    AppLoader
  },
  methods: {
    // --------
    // ENTERING
    // --------

    beforeEnter: function(el) {
      debugger;
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    enter: function(el, done) {
      // ...
      done();
    },
    afterEnter: function(el) {
      // ...
    },
    enterCancelled: function(el) {
      // ...
    },

    // --------
    // LEAVING
    // --------

    beforeLeave: function(el) {
      debugger;
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    leave: function(el, done) {
      // ...
      done();
    },
    afterLeave: function(el) {
      // ...
    },
    // leaveCancelled only available with v-show
    leaveCancelled: function(el) {
      // ...
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/index.scss";
</style>
