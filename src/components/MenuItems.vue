<template>
  <ul>
    <li>
      <nav-link to="https://www.linkedin.com/in/piotr-szyma-80b794a2/">linkedin</nav-link>
    </li>
    <li>
      <nav-link to="https://github.com/piotrszyma">github</nav-link>
    </li>
    <li>
      <nav-link to="mailto:contact@piotrszyma">email</nav-link>
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
