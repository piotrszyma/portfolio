<template>
  <div class="container">
    <div class="wrapper">
      <bio-entry 
      v-for="entry in entries" 
      :entry="entry"
      :key="entry.title"/>
      <!-- <div class="entry" v-for="entry in entries" :key="entry" >
        <p>{{ entry.time }}</p>
        <p class="title">{{ entry.title }}</p>
        <p>{{ entry.place }}</p>
        <p>{{ entry.description }}</p>
      </div> -->
    </div>
  </div>
</template>
<script>
import BioEntry from './BioEntry.vue';

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
  color: black;
  -webkit-font-smoothing: antialiased;
  background-color: rgb(219, 219, 219);
}
.entry {
  padding: 2rem 0;
}
</style>
