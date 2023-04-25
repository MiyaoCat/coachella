<script setup>
   import { RouterLink, RouterView } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
   <header>
      <div class="wrapper">
         <HelloWorld msg="Hi John!" />

         <nav>
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
</style>
