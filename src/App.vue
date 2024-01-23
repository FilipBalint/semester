<script setup>
import { RouterView } from 'vue-router';
import Hlavicka from './components/Head.vue';
import Pata from './components/Pata.vue';
</script>

<template>
  <header>
    <Hlavicka />
  </header>
  <RouterView />
  <footer>
    <Pata />
  </footer>
</template>
<style scoped></style>