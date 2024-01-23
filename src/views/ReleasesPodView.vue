<template>
  <div class="uvod" v-if="blor">
    <article>
      <div class="content">
        <div class="image-container">
          <img :src="'/' + blor.image" :alt="blor.nazov" />
        </div>
        <div class="description">
          <h1 class="nadpis">{{ blor.nazov }}</h1>
          <p>Cena: {{ blor.price }} </p>
          <p>Drop date: {{ blor.datum }}</p>
          <p>Sex: {{ blor.sex }}</p>
          <p>Size: {{ blor.size }}</p>
        </div>
      </div>
    </article>
    <button @click="$router.back()"> Back to Releases 2024</button>
  </div>
  <div v-else>
    <p>Žiadne info o drope</p>
  </div>
</template>
  
  <script>
  import { pristupReleases } from '../stores/release';
  
  export default {
    data() {
      return {
        blor: null,
  
      };
    },
    mounted() {
      const store = pristupReleases();
      const id = parseInt(this.$route.params.id, 10);
      this.blor = store.data.find(p => p.id === id);
    }
  };
  </script>
  
  <style scoped>
.uvod {
  max-width: 800px; 
  height: 600px;
  margin: 0 auto; 
  padding: 50px;
  box-sizing: border-box; 
}

article {
  border: 2px solid #584B53;
  margin: 20px;
  padding: 30px; 
  border-radius: 8px;
}

button {
  margin-top: 20px; 
  padding: 10px;
  color: blue;
  width: 20%; 
  
}

button:hover {
  font-size: 15px;
}

.nadpis {
  font-weight: bolder;
  text-align: center;
  font-size: 28px; 
  padding-bottom: 45px;
}

.content {
  display: flex;
  align-items: center;
}

.image-container {
  padding-top: 60px;
  margin-right: 20px; 
}

img {
  border-radius: 12%;
  width: 300px; 
  height: 200px;
}

.description {
  flex-grow: 1;
}

p {
  margin: 0;
}


  </style>
  
  