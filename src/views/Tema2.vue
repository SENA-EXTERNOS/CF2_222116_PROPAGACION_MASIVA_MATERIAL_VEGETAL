<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Reproducción vegetativa de las plantas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img01.png")
      .col-lg-6
        p Para la comprensión de la técnica de propagación #[em in vitro] de las plantas, además de reconocer la morfología vegetal se hace necesario identificar la reproducción vegetativa o asexual de las plantas; para esto, se recurre a la identificación de las estructuras reproductivas vegetativas, es decir, aquellas estructuras vegetales susceptibles de servir como material biológico para la propagación. Seguidamente, se realizará un breve recorrido por las ventajas en el uso de la técnica, así como algunos de los elementos a tener en consideración para evitar posibles riesgos o afectaciones a la biodiversidad.
        p.mb-0 Para iniciar se invita a ver un video síntesis de lo que encontrará en este apartado.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Estructuras reproductivas vegetativas

    p Una vez observado el video que introduce el apartado relacionado con la reproducción vegetativa de las plantas, lo invitamos a reconocer las estructuras reproductivas vegetativas. 

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-d.color-acento-botones.p-4
          .bloque-texto-d__texto.mb-2
            <i class="fas fa-quote-left" style="color:#169788"></i>
            h3.text-regular Algunas especies presentan mayor facilidad en términos de tiempo e inversión al ser reproducidas por medios vegetativos que por semilla; otro elemento a considerar es la necesidad de mantener "indefinidamente" un estado juvenil en los ejemplares vegetales como condición que facilita el enraizamiento de estacas por propagación, tal es el caso de los tubérculos que regularmente hacen parte de la dieta humana (Chuncho et al 2019).
          .bloque-texto-d__autor 
            .h5.mb-0 Chuncho et al 2019 <i class="fas fa-quote-right" style="color:#169788"></i>
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img02.svg')
          .BG07.p-3(x="24.5%" y="6%" numero="1")
            p.text-white.mb-0 #[b Estolón]: brote lateral disponible en algunas plantas herbáceas; el crecimiento de estos sucede de forma horizontal.
          .BG08.p-3(x="89%" y="16.5%" numero="2")
            p.text-white.mb-0 #[b Hijuelo]: formación de la base lateral de ciertas plantas.
          .BG09.p-3(x="24.5%" y="27.5%" numero="3")
            p.text-white.mb-0 #[b Rizoma]: tallo subterráneo con ubicación horizontal.
          .BG10.p-3(x="89%" y="38.7%" numero="4")
            p.text-white.mb-0 #[b Tubérculo]: tallo subterráneo que se presenta como mecanismo para el almacenamiento de nutrientes.
          .BG11.p-3(x="24.5%" y="50.2%" numero="5")
            p.text-white.mb-0 #[b Bulbo]: tallo subterráneo carnoso, cubierto de escamas (hojas engrosadas) que funcionan como órganos de reserva.
          .BG12.p-3(x="89%" y="61.8%" numero="6")
            p.text-white.mb-0 #[b Cormo]: base hinchada de vástago del tallo, cubierto por escamas (hojas secas).
          .BG13.p-3(x="24.5%" y="72.8%" numero="7")
            p.text-white.mb-0 #[b Raíces tuberosas]: órgano subterráneo que es una parte engrosada de la raíz adaptada para la acumulación de nutrientes.
          .BG14.p-3(x="89%" y="84%" numero="8")
            p.text-white.mb-0 #[b Yema]: órgano formado regularmente en las axilas de las hojas, conformado por meristemo apical que dará lugar a nuevas hojas y flores.
          .BG13.p-3(x="24.5%" y="95.5%" numero="9")
            p.text-white.mb-0 #[b Callo]: es la masa de células no diferenciadas obtenida del proceso de micropropagación y desde donde se inicia la formación de los nuevos ejemplares vegetales.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Uso y ventajas de la reproducción vegetativa de las plantas
    
    p Adicional al reconocimiento de las estructuras reproductivas vegetativas, lo invitamos a conocer los usos y ventajas de la reproducción vegetativa de las plantas.

    SlyderB.mb-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          '<i class="fas fa-quote-left" style="color:#169788; margin-right: 15px; font-size: 1.5em;"></i>Las ventajas biológicas radican en la rapidez de división y simplicidad, derivado de no tener que producir células sexuales o gastar energía en operaciones previas asociadas a la fecundación; en este sentido, desde un solo ejemplar, puede obtenerse un gran número de descendientes, a través de mecanismos como la formación de esporas, fisión transversal o germinación, incrementando la posibilidad de contar con material vegetal eficiente para aprovechar las ventajas comparativas de diferentes espacios territoriales compatibles con las condiciones agroecológicas de las especies abordadas.<i class="fas fa-quote-right" style="color:#169788; margin-left: 15px; font-size: 1.5em;"></i><br><br><b>(Ramos. et al. 2021).</b>',
        imagen: require('@/assets/curso/tema2/img03.jpg'),
      },
      {
        titulo: '',
        texto:
          'Es importante reseñar que, siendo el resultado del proceso de clonación un individuo que no presenta variabilidad genética y al compartir todos los ejemplares resultantes esta misma condición, <b>un riesgo en términos de biodiversidad que puede presentarse en la dependencia exclusiva del proceso de propagación vegetativa, radica en la incapacidad de adaptación a condiciones cambiantes, por parte de los nuevos ejemplares</b>; por tal razón, es necesario conservar bancos de plantas madre robustos que garanticen la diversidad genética como estrategia de respaldo.',
        imagen: require('@/assets/curso/tema2/img04.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
