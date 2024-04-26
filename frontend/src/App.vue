<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

</script>
<template>
  <div class="head">
    <div class="logo">    
      <h1>vc</h1>
    </div>
    <nav>
      <RouterLink to="/" class="link">home</RouterLink>
      <RouterLink to="/about" class="link">about</RouterLink>
      <RouterLink to="/projects" class="link">projects</RouterLink>
    </nav>
  </div>  


  <RouterView />
</template>

<style scoped>

.head{
  display: flex;
  flex-direction:row;

  min-width: 100%;
  min-height: 75px;
  align-items: center;
  font-size: 15px;

}
.logo{
  padding:1em;
  display:flex;
  justify-content: flex-start;
  width:100%;
}

nav{
  display:flex;
  justify-content:flex-end;
  width:100%;
}
.link:hover{
background-color: gray;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
