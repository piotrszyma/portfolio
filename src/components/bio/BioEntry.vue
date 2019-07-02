<template>
  <div class="entry" :key="entry.title">
    <p class="time">{{ entry.time }}</p>
    <p class="title">{{ entry.title }}</p>
    <p class="place">{{ entry.place }}</p>
    <p class="description">{{ entry.description }}</p>
  </div>
</template>
<script>
export default {
  props: ['entry']
}
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/_mixins.scss';

  .entry {
    padding: 2rem 0;
  }

  .entry:first-child {
    padding-top: 0;
  }
  .time {
    margin: 0;
    font-size: 0.8rem;
  }

  .title {
    font-size: 0.9rem;

    @include for-size(medium) {
      font-size: 1.4rem;
    }
  }

  .place {
    font-size: 0.7rem;

    @include for-size(medium) {
      font-size: 1.1rem;
    }
  }

  .description {
    font-size: 0.8rem;

    @include for-size(medium) {
      font-size: 1.1rem;
    }
  }
</style>

