<script setup>
   import { RouterLink, RouterView, useRoute } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';

   const route = useRoute();

   console.log(route);
</script>

<template>
   <header :class="route.name">
      <div class="wrapper">
         <HelloWorld msg="Hi John!" />
         <nav class="site-menu">
            <RouterLink class="page" to="/">Home</RouterLink>
            <RouterLink class="page" to="/about">About</RouterLink>
            <RouterLink class="page" to="/contact">Contact</RouterLink>
            <RouterLink class="page" to="/artists">Artists</RouterLink>
         </nav>

         <HelloWorld msg2="Second message!" />
      </div>
   </header>

   <main class="outlet">
      <RouterView />
   </main>

   <footer>
      <h1>Footer</h1>
   </footer>
</template>

<style>
   .page {
      margin: 5px;
   }

   .site-menu {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
   }

   .site-menu a {
   }
   .router-link-active {
      border-bottom: 3px solid var(--highlight);
   }
</style>
