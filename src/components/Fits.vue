<template>
    <div class="uvod">
      <div class="image-container">
      </div>
      <div class="content">
        <img :src="data.image" :alt="data.id" />
        <table class="rounded-table">
          <tbody>
            <tr>
              <td>
                <article>
                <h3>Outfit č. {{ data.id }}</h3>
                <p> Vrch: <a :href="data.bunda">{{ data.bunda }}</a></p>
                <p> Nohavice: <a :href="data.nohavice">{{ data.nohavice }}</a></p>
                <p> Topanky: <a :href="data.topanky">{{ data.topanky }}</a></p>
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
  }
  
img {
    border-radius: 22%;
    width: 38%; 
    height: auto; 
    padding-bottom: 25px;

  }
  
  .uvod .content {
    display: flex;
    flex-direction: row;
  }
  
  .uvod h3 {
    padding: 10px;
    font-size: 30px; 
    text-align: center; 
  }
  
  .rounded-table {
    border-radius: 15px;
    overflow: hidden;
    width: auto;
    margin-top: 20px; 
    padding-left: 50px;

  }
  
  .rounded-table td {
    border: 2px solid #000000;
    padding-bottom: 100px;
  }
  
  .uvod article {
    margin-bottom: 20px;
    max-width: 500px;
  }
  
p {
    text-align: center;
    margin-bottom: 10px;
    font-size: 25px;
    
  }
  </style>

    
   
    