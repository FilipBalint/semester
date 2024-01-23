<template>
    <div class="uvod">
      <div class="image-container">
        <img :src="data.image" :alt="data.nazov" />
      </div>
      <div class="content">
        <table class="rounded-table">
          <tbody>
            <tr>
              <td>
                <article>
                <h3>{{ data.nazov }}</h3>
                  <p>{{ data.popis }}</p>
                  <p> Viac TU: <a :href="data.odkaz">{{ data.odkaz }}</a></p>
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
  <style scoped>
  .uvod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.image-container {
  margin-right: 20px; 
}

.uvod img {
  border-radius: 15%;
  width: 100%; 
  height: auto; 
}

.uvod .content {
  display: flex;
  flex-direction: column;
}

.uvod h3 {
  padding: 10px;
  font-size: 30px; 
  text-align: center; 
}

.rounded-table {
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 20px; 
}

.rounded-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.uvod article {
  margin-bottom: 20px;
  max-width: 1000px;
}
  </style>
    
   
    