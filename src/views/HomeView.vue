<template>
  <div class="uvod">
    <h1 class="nadpis">Vitajte na stránke ktorá žije Streets News</h1>
 
      <article>
        <a href="https://www.youtube.com/channel/UCzYDG2iyAgs3m24o1vJYl0w">THE MAG - Odhlanie poroty súťaže WRapin Box</a>      
      </article>

      <img :src="uvod" alt="uvod" class="obr">
    </div>
</template>

<script>
export default {
  data() {
    return {
      uvod: 'm.jpg'
    }
  }
}
</script>
<style scoped>
.uvod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;

}

.nadpis {
  font-weight: bolder;

  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
  color: black;
  
}


article{
  padding: 20px;
  margin: 10px;
  font-size: large;
  
}

.obr {
  width: 60%;
  border-radius: 10%;
}
</style>
