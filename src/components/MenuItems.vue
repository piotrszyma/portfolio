<template>
  <ul>
    <li>
      <nav-link :to="{ name: 'resume' }" internal>read my resume</nav-link>
    </li>
    <li>
      <nav-link to="http://github.com/piotrszyma">check my github</nav-link>
    </li>
    <li>
      <nav-link to="mailto:piotrszyma@outlook.com">contact me</nav-link>
    </li>
  </ul>
</template>
<script lang="js">
import NavLink from './NavLink.vue';

export default {
  components: {
    NavLink,
  }
}
</script>
