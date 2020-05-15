<template>
  <div>
    <ul>
      <li>
        <url to="http://til.piotrszyma.pl">today i've learned</url>
      </li>
      <li>
        <url :to="{ name: 'bio' }" internal>read my bio</url>
      </li>
      <li>
        <url to="http://github.com/piotrszyma">check my github</url>
      </li>
      <li>
        <url to="mailto:piotrszyma@outlook.com">contact me</url>
      </li>
    </ul>
  </div>
</template>
<script>
import Url from '../Url.vue';

export default {
  components: {
    Url
  }
}
</script>
