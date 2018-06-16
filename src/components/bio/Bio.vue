<template>
  <div class="container bio">
    <bio-entry
    v-for="entry in entries"
    :entry="entry"
    :key="entry.title"/>
    <router-link
      :to="{ name: 'home' }"
      class="link"
      >
      Back
    </router-link>
  </div>
</template>
<script>
import BioEntry from "./BioEntry.vue";

export default {
  name: "Biography",
  components: {
    BioEntry
  },
  data: () => ({
    entries: [
      {
        time: "2017 - now",
        title: "Python Web Application Working Student",
        place: "Nokia",
        description: "Creating rich web application using VueJS & Django"
      },
      {
        time: "2015 - now",
        title: "Computer Science",
        place: "Wroclaw University of Technology",
        description: "Faculty of Fundamental Problems of Technology"
      }
    ]
  })
};
</script>
<style lang="scss" scoped>
 .container {
   background-color: #fffdf4;
 }
</style>
