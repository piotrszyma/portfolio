<template>
  <div>
    <ul>
      <router-link 
      :to="{ name: 'bio' }"
      tag="li"
      >read my bio</router-link>
      <li>check my github</li>
      <li>contact me</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  ul, ul li {
    list-style: none;
    margin: 0;
    padding: 0;
    text-indent: 0;
  }

  li {
    border-bottom: 1rem;
    line-height: 2rem;
    cursor: pointer;
  }
</style>
