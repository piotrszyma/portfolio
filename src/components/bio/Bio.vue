<template>
  <div class="container bio">
    <bio-entry
    v-for="entry in entries"
    :entry="entry"
    :key="entry.title"/>
    <url :to="{ name: 'home' }" internal dark>Back</url>
  </div>
</template>
<script>
import BioEntry from './BioEntry.vue';
import Url from '../Url.vue';

export default {
  name: "Biography",
  components: {
    BioEntry,
    Url
  },
  data: () => ({
    entries: [
      {
        time: "08.2018 - now",
        title: "Backend Engineer",
        place: "Google (via Hays)",
        description: "Maintenance of Django based web application"
      },
      {
        time: "07.2017 - 07.2018",
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
