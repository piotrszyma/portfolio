<template>
  <router-link :to="to" v-if="internal">
    <slot/>
  </router-link>
  <a :href="to" target="_blank" v-else>
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
    to: {
      required: true,
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
  a {
    display: inline-block;
    &:hover {
      cursor: pointer;
      &::after {
        width: calc(100%);
      }
    }

    &::after {
      content: '';
      display: block;
      background-color: inherit;
      transition: 0.5s;
      width: 0;
      height: 2px;
      margin: -4px 0 0 1.5px;
    }
  }
</style>
