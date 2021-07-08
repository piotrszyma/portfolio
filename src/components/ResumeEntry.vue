<template>
  <div class="entry" :key="entry.title">
    <p class="time">{{ entry.time }}</p>
    <p class="title">{{ entry.title }}</p>
    <p class="place">{{ entry.place }}</p>
    <ul class="description" v-for="desc in entry.description" :key="desc">
      <li>{{ desc }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["entry"],
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/_mixins.scss";
div.entry {
  color: black;
  margin: 0;
}

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
  margin: 0.3rem 0;
  font-size: 0.9rem;

  @include for-size(medium) {
    font-size: 1.4rem;
    letter-spacing: 80%;
  }
}

.place {
  font-size: 0.7rem;
  margin-top: 0;

  @include for-size(medium) {
    font-size: 1.1rem;
  }
}

.description {
  font-size: 0.8rem;
  margin: 0.4rem 0 0.4rem 0;

  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    background: red;
  }

  @include for-size(medium) {
    font-size: 0.8rem;
  }
}
</style>
