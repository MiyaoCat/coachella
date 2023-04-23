<script setup>
   defineProps({
      msg: {
         type: String,
         required: true,
      },
      msg2: {
         type: String,
         required: true,
      },
   });
</script>

<template>
   <h1>{{ msg }}</h1>
   <h2>{{ msg2 }}</h2>
</template>
