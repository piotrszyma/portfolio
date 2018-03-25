<template>
  <div>
    <ul>
      <router-link 
      :to="{ name: 'bio' }"
      tag="li"
      >
      read my bio
      </router-link>
      <li>
        <a 
        href="github.com/piotrszyma">
        check my github
        </a>
      </li>
      <li>
        <a 
        href="mailto:thompson2908@gmail.com">
        contact me
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">

</style>
