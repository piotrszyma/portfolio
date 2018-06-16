<template>
  <div>
    <ul>
      <li><router-link :to="{ name: 'bio' }" tag="a" class="link">read my bio</router-link></li>
      <li><a class="link" href="http://github.com/piotrszyma" target="_blank">check my github</a></li>
      <li><a class="link" href="mailto:piotrszyma@outlook.com">contact me</a></li>
    </ul>
  </div>
</template>
