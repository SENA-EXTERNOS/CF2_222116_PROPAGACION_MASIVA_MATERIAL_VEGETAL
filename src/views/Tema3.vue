<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Clasificación de material vegetal
    
    .row.justify-content-center.mb-4
      .col-lg-4.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-primario.p-3
          p.mb-0 Uno de los elementos centrales en el logro de rendimientos en la producción agrícola, es la utilización de semillas de calidad.  De esta manera, pueden establecerse estrategias de propagación <em>in vitro</em> del material vegetal, las cuales se asocian con la necesidad de contar con un reservorio genético apropiado para la multiplicación de ejemplares, cuyo uso o intencionalidad final, será la productividad que pueda generar implícitamente.

      .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img01.png')
    
    .row.mt-5
      h3 Clasificación del banco de plantas madre
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img02.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 La propagación promete ser una estrategia para reducir la aparición de enfermedades y para la reproducción de ejemplares altamente adaptados a las exigencias vigentes de producción. En este sentido, es importante establecer medios y condiciones apropiadas para el desarrollo biotecnológico de las plantas.

    .row.mt-5
      p La planta madre hace referencia a la planta donante, del material vegetal para la propagación o proceso de clonación; por lo tanto, su selección es un aspecto fundamental, pues sus características serán las mismas particularidades que presentarán los ejemplares obtenidos como resultado. A continuación, conoceremos sobre el banco de plantas madre.

    .row.justify-content-center.mb-4  
      .col-lg-4.col-md-6(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img04.png' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h4.text-center El banco de plantas madre
              p Es una sección aislada y específica en el sitio destinado para el proceso. Es un espacio tipo invernadero, el cual debe garantizar las condiciones de iluminación, circulación de aire, asepsia y seguridad, necesarios para el material vegetal.

      .col-lg-4.col-md-6.mb-md-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img05.png' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h4.text-center Características generales del banco de plantas madre
              p Se destacan: el tipo de cerramiento y techo que imposibiliten la filtración de agua y el ingreso de animales y agentes fitopatógenos; de la misma forma, evitar el contacto directo con el suelo para reducir la posibilidad de infección por microorganismos, mediante la utilización de recipientes acordes con dicha intencionalidad. 

      .col-lg-4.col-md-6(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img06.png' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h4.text-center Características específicas del banco de plantas madre
              p Estarán determinadas por las exigencias particulares de las especies con las que se trabajará y con la reglamentación colombiana vigente para su propagación.

    .row.mt-5
      h3 Seleccionar la especie madre y la importancia de la elección de la planta madre

    .BGM19.px-md-5.px-4.pt-3.pb-2.mb-4
      p El rol de las plantas madre en el desarrollo de la iniciativa reproductiva es determinante; tal como se ha mencionado anteriormente, las características de dichas plantas son las que se reproducirán; por lo tanto, su resistencia a plagas y enfermedades, así como también su capacidad productiva, realizan que, en esta situación, la determinación del material vegetal sea un punto crucial para el establecimiento del proceso de propagación.

      p Este proceso consta de los siguientes pasos:

      .BGIMG02.p-4.mb-4(data-aos="zoom-in")
        LineaTiempoC.color-acento-contenido(text-small)
          .row.justify-content-center(titulo="Paso 1")
            .col-lg-5.order-lg-1.order-2
              .h4 Selección del tipo de especie 
              p.mb-0 Inicialmente, debe determinarse el tipo de especie que se espera reproducir; la selección de la especie es crucial y debe responder a las condiciones que motivan el ejercicio de propagación que se empieza a emprender, sea con fines investigativos o comerciales; se recomienda establecer claridad en el panorama, no solo de las especies, sino también de las variedades vegetales a utilizar, a partir de la confrontación entre el objetivo de los ensayos de laboratorio y las características específicas de cada material vegetal con potencial de uso. 

            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img07.png")
          .row.justify-content-center(titulo="Paso 2")
            .col-lg-5.order-lg-1.order-2
              .h4 Selección de plantas donantes de material biológico 
              p.mb-0 La selección de las plantas donantes de material biológico, se enfoca, desde un inicio, en la necesidad de identificar ejemplares con un comportamiento demostrado de rendimiento, apropiado para las expectativas productivas; es decir, se procederá a identificar en un cultivo establecido, aquellos individuos que presentan comportamientos destacados en cuanto a sanidad, rendimientos productivos, variabilidad climática, entre otros.
              
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img08.png")
          .row.justify-content-center(titulo="Paso 3")
            .col-lg-5.order-lg-1.order-2
              .h4 Selección de estructuras vegetativas
              p.mb-0 Posterior a la determinación de los individuos donantes, se procederá a realizar la selección de las estructuras vegetativas para realizar la propagación de las plantas madre; en este punto, se ha de generar la respectiva toma del material vegetal necesario para el desarrollo del cultivo, guardando las debidas medidas de control fitosanitario; después de la propagación del material vegetal, se procede a cultivar las plantas obtenidas, seleccionando aquellas que presentan un perfil de desarrollo vigoroso y libre de enfermedades u otras anomalías, determinando, de esta manera, las plantas donantes de material vegetal objeto de micropropagación. (Suárez, 2020)

            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img09.png")
          .row.justify-content-center(titulo="Paso 4")
            .col-lg-5.order-lg-1.order-2
              .h4 Sostenimiento del banco de plantas madre

              p.mb-0 El sostenimiento del banco de plantas madre debe asegurarse durante periodos de tiempo prudenciales, que oscilen entre semanas y meses, bajo condiciones controladas de sanidad vegetal, nutrición e irrigación, garantizando una consolidación apropiada de los ejemplares donantes.

            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img10.png")

    .row.mt-5
      h3 Descripción del estado sanitario y nutricional de la especie o planta madre

      p La micropropagación permite perpetuar un tipo de genética específica, mediante la clonación de plantas madre, para obtener ejemplares con las mismas características, durante importantes periodos de tiempo que pueden llegar a ser años, dadas las condiciones diferenciales que muestran, así como también el mantenimiento del buen estado sanitario y nutricional de las mismas, como se presenta a continuación:
    

    .BGR17.p-4.mb-4(data-aos="zoom-in")
      SlyderA.slider02(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p Al seleccionar las plantas madre desde clones, se recomienda realizar la alimentación solamente con agua, hasta que se observen nuevos brotes, evitando posibles estados de estrés, mientras se implanta cada ejemplar. En la medida en que se logra el establecimiento, se inicia la adición de nutrientes requeridos, en un proceso de adaptación que empieza con proporciones parciales del total demandado (entre 1/4 y 1/2) durante las primeras semanas. (Sharry, et al., 2015)
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img11.png")
        
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Regularmente, los medios de cultivo utilizados, son suficientes para mantener saludables a las plantas madre; sin embargo, es posible adicionar coadyuvantes como micorrizas y estimuladores de enraizamiento al sustrato, para mejorar el perfil de complementariedad del sustrato, mediante la flora microbiana.

            img(src="@/assets/curso/tema3/img12.png")
        
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Es fundamental la realización de un seguimiento al proceso de consolidación de las plantas madre, debido a que los indicativos del crecimiento y desarrollo son reconocibles únicamente desde la observación sistemática del cultivo; es por esta razón que el levantamiento de un registro claro y permanente de las características de los ejemplares, es el mecanismo para la identificación de posibles anomalías y la preservación de las memorias de la metodología utilizada para futuras ocasiones.

          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img13.png")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
