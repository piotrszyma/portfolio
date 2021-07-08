<template>
  <div class="resume">
    <main>
      <resume-entry
        v-for="entry in RESUME_ENTRIES"
        :entry="entry"
        :key="entry.title"
      />
      <nav-link :to="{ name: 'home' }" dark internal>Back</nav-link>
    </main>
  </div>
</template>
<script>
import RESUME_ENTRIES from "./../data/resume.js";
import ResumeEntry from "./../components/ResumeEntry.vue";
import NavLink from "./../components/NavLink.vue";

export default {
  components: {
    ResumeEntry,
    NavLink,
  },
  data() {
    return {
      RESUME_ENTRIES,
    };
  },
};
</script>
<style lang="scss" scoped>
.resume {
  background-color: #fffdf4;
  width: 100%;
  min-height: 100vh;
}

main {
  margin: 0 10%;
  padding-top: 5%;
  max-width: 600px;
}
</style>
