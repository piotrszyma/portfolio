<template>
  <div class="container">
    <div class="wrapper">
      <bio-entry 
      v-for="entry in entries" 
      :entry="entry"
      :key="entry.title"/>
    </div>
    <router-link 
      :to="{ name: 'home' }"
      class="link"      
      >
      Back
    </router-link>
    <bio-background/>
  </div>
</template>
<script>
import BioEntry from "./BioEntry.vue";
import BioBackground from "./BioBackground.vue";

export default {
  name: "Biography",
  components: {
    BioEntry,
    BioBackground
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
  color: black;
  -webkit-font-smoothing: antialiased;
}
.entry:first-child {
  padding-top: 0;
}

.entry {
  padding: 2rem 0;
}
</style>
