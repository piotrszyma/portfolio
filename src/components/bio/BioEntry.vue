<template>
  <div class="entry" :key="entry.title">
    <p class="time">{{ entry.time }}</p>
    <p class="title">{{ entry.title }}</p>
    <p class="place">{{ entry.place }}</p>
    <p>{{ entry.description }}</p>
  </div>
</template>
<script>
export default {
  props: ['entry']
}
</script>
<style lang="scss" scoped>
  .time {
    margin: 0;
  }

  .title {
    font-size: 1.4rem;
  }

  .place {
    font-size: 1.1rem;
  }
</style>

