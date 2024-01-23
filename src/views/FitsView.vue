<template>
    <main>
       
          <h1> Build your fit </h1>
      <div v-for="item in fit.data" :key="item.id">
        <Fits :data="item" />
      </div>
        
    </main>
  </template>
  
  <script setup>
  import Fits from '@/components/Fits.vue'
  import { pristupFits } from "../stores/fits"
  const fit = pristupFits();
  </script>

<style scoped>

h1 {
  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}
</style>

  