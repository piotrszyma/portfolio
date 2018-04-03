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
        <a 
        class="link"        
        href="http://github.com/piotrszyma"
        @click.prevent="handleLinkClick">check my github</a>
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
<script>
export default {
  methods: {
    handleLinkClick: event => {
      location.href = event.target.href;
    }
  }
};
</script>
