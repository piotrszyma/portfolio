<template>
  <div>
    <ul>
      <li>
        <router-link 
          :to="{ name: 'bio' }"
          tag="a"
          class="link"      
        >
          read my bio
        </router-link>
      </li>
      <li>
        <router-link 
          :to="{ name: 'github' }"
          tag="a"
          class="link"      
        >
          check my github
        </router-link>
      </li>
      <li>
        <a 
        class="link"        
        href="mailto:thompson2908@gmail.com">
        contact me
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">

</style>
