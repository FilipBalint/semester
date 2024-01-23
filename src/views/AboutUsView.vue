<template>
  <div>
    <h1 class="nadpis">FB-Streets</h1>

    <div class="uvod">
      <h2 class="nadpis2">Kto sme?</h2>
      <article class="art">
        <img :src="n" alt="uvod" class="obr">
        <p>Sme váš spoľahlivý sprievodca svetom street fashion, so zameraním na topánky a oblečenie.
          Naša vášeň a oddanosť tejto kultúre sa odráža v každom kroku, a sme hrdí na to, že Vám prinášame to najnovšie a najširšie portfólio štýlov a trendov.</p>

        <p>Náš tím je zložený zo skúsených nadšencov, ktorí prechádzajú všetkými aspektmi street fashion a s radosťou zdieľajú svoje znalosti s Vami. 
          Neustále sledujeme najnovšie trendy, vývojové novinky a najlepšie releasy topánok od popredných značiek. 
          Naším cieľom je byť Vaším prvým zdrojom informácií o tom, čo je IN a čo prichádza do sveta street fashion.</p>

        <p>Sme tu, aby sme Vás inšpirovali, poskytli Vám nápady na vytváranie originálnych outfitov a pomohli Vám nájsť tie správne kúsky pre Váš osobný štýl. 
          Bez ohľadu na to, či ste nadšený sneakerhead, streetwear guru alebo jednoducho milovník výrazného štýlu, 
          naša stránka je miestom, kde sa stretávajú vášeň, štýl a najnovšie trendy.
          Pripojte sa k nám na ceste objavovania sveta street fashion, kde sa štýl stretáva s inováciou a kde každý krok je príležitosťou vyjadriť svoju jedinečnosť. 
          Vpred do sveta topánok a oblečenia, vpred s nami!</p>
      </article>

      <h2 class="nadpis2">Ako sme vznikli?</h2>

      <article class="art">
        <img :src="m" alt="uvod" class="obr">
        <p>Naša cesta začala z vášne pre street fashion a neustále hľadanie nových spôsobov, ako zdieľať túto vášeň s ľuďmi po celom svete. Začínali sme malou skupinou nadšencov, 
          ktorí zdieľali lásku k jedinečným topánkam a oblečeniu, a postupne sme sa rozrástli do komunity, ktorá sleduje každý krok v street fashion svete.
          Naša túžba neustále objavovať nové trendy a zdieľať ich s ostatnými nás viedla k vytvoreniu tejto platformy. Chceli sme vytvoriť miesto,
           kde sa ľudia môžu inšpirovať, získavať informácie o najnovších releasoch topánok a oblečenia a pripájať sa k diskusiám o street fashion.
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 'back.jpg',
      m: 'back1.jpg',
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
  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}

.nadpis2 {
  text-align: center;
  font-size: 25px;
}

.art {
  padding: 20px;
  margin: 10px;
  font-size: large;
}

.art p {
  padding: 10px;
}

.obr {
  width: 100%;
  max-height: 400px; 
  object-fit: cover; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}
</style>
