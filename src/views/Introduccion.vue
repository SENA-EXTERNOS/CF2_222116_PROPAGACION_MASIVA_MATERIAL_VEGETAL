<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-primario.p-3
          p.mb-0 Bienvenidos al componente formativo, denominado Propagación Vegetal #[i In-Vitro], donde se abordará el proceso biotecnológico de la reproducción vegetal. Inicialmente se desarrolla el tema de morfología vegetal, luego se presenta la reproducción vegetativa de las plantas. En un tercer momento se explica la clasificación de material vegetal y se finaliza con la selección de explantes para utilización de técnica #[i in-vitro]. Lo invitamos a iniciar este recorrido observando el video de introducción del componente formativo.
      .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/intro/img01.png")
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qsbf2jox1sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
