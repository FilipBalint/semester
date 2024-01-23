<template>
    <main>
      <h1 class="nadpis">Sneaker Releases 2024</h1>
      <div class="uvod">
        <div class="card" v-for="item in release.data" :key="item.id">
        <Releases :data="item" />
      </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import Releases from '@/components/Releases.vue'
  import { pristupReleases } from "../stores/release"
  const release = pristupReleases();
  </script>
  <style scoped>
  .uvod {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: row;
    flex-wrap: wrap;
  
  }
  
  .nadpis {
    font-weight: bolder;
    text-align: center;
    padding: 20px;
    margin: 10px;
    font-size: 35px;
  }
  .card{
    width: 300px;
    margin: 10px;
  }
  
  
  </style>