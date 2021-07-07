<template>
  <div class="container bio">
    <bio-entry v-for="entry in entries" :entry="entry" :key="entry.title" />
    <url :to="{ name: 'home' }" internal dark>Back</url>
  </div>
</template>
<script>
import BioEntry from "./BioEntry.vue";
import Url from "../Url.vue";

export default {
  name: "Biography",
  components: {
    BioEntry,
    Url
  },
  data: () => ({
    entries: [
      {
        time: "07.2021 - now",
        title: "Software Developer",
        place: "Opera",
        description: ["Leading rewrite of existing Django templates based web app into a frontend service using VueJS & backend service with Django REST Framework"]
      },
      {
        time: "08.2018 - 07.2021",
        title: "Software Engineer",
        place: "Google (via Hays)",
        description: ["Web application using the Closure Library & Django", "Chrome Extension", "UI components library using Angular, RxJS & NgRx", "TypeScript readability"]
      },
      {
        time: "07.2017 - 07.2018",
        title: "Python Web Application Working Student",
        place: "Nokia",
        description: ["Web application using VueJS & Django"]
      },
      {
        time: "2019 - 2020",
        title: "Master's Degree, Computer Science",
        place: "Wroclaw University of Technology",
        description: ["Faculty of Fundamental Problems of Technology"]
      },
      {
        time: "2015 - 2019",
        title: "Bachelor's Degree, Computer Science",
        place: "Wroclaw University of Technology",
        description: ["Faculty of Fundamental Problems of Technology"]
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
