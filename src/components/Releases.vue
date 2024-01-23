<template> 
    <div class="card">
      <img :src="data.image" :alt="data.nazov" />
      <h2>{{ data.nazov }}</h2>
  
      <div>
        <div>{{ data.price }}</div>
        <div>{{ data.datum }}</div>
      </div>
      <RouterLink :to="{ name: 'releases-pod', params: { id: data.id } }"> Viac info</RouterLink>
      
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      RouterLink,
    },
  
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
<style  scoped>
img {
  border-radius: 15%;
  width: 100%; 
  height: auto; 
}

.card {
  margin: 20px;
  width: calc(25% - 40px); 
  box-sizing: border-box; 
  display: inline-block; 
}
</style>
  