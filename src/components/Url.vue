<template>
  <router-link :class="style" :to="to" v-if="internal">
    <slot/>
  </router-link>
  <a :class="style" :href="to" v-else>
    <slot/>
  </a>
</template>
<script>
export default {
  props: {
    internal: {
      required: false,
      default: false,
      type: Boolean
    },
    dark: {
      required: false,
      default: false,
      type: Boolean
    },
    to: {
      required: true
    }
  },
  computed: {
    style() {
      return ['link', { 'dark': this.dark }];
    }
  }
}
</script>
<style lang="scss" scoped>
  a {
    margin-bottom: 1rem;
  }

  a {
    height: 1rem;
    display: inline-block;
    color: inherit;

    &:hover {
      cursor: pointer;
      &::after {
        width: calc(100% - 25px);
      }
    }

    &::after {
      content: '';
      background-color: white;
      display: block;
      transition: 0.5s;
      width: 0;
      height: 2px;
      margin: 3px 0 0 1px;
    }
  }

  a.dark {
    &::after {
      background-color: black;
    }
  }
</style>
