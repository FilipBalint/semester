<template>
    <main>
       
          <h1> Hot News </h1>
      <div v-for="item in blog.data" :key="item.id">
        <Blog :data="item" />
      </div>
        
    </main>
  </template>
  
  <script setup>
  import Blog from '@/components/Blog.vue'
  import { pristupBlogu } from "../stores/blog"
  const blog = pristupBlogu();
  </script>

<style scoped>

h1 {
  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}
</style>

  