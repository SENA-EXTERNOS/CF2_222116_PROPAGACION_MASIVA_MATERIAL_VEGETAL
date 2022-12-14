<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Selección de explantes para utilización de técnica #[i In-Vitro]
    
    .row.justify-content-center.mb-4
      .col-lg-4.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-primario.p-3
          p La generación del Banco de Plantas Madre permite contar con una reserva de material vegetal que, desde sus características biológicas, responde apropiadamente a la intencionalidad productiva que motiva su propagación; a diferencia de las plantas cultivadas desde semillas, que presentan fenotipos diferenciados, incluso si presentan genotipos iguales, las plantas producto del proceso de clonación presentan un conjunto de condiciones uniformes. 
          p.mb-0 Este apartado abarca aspectos como la descripción del fenotipo y tejidos vegetales a utilizar, además de la obtención y desinfección apropiada de explantes. Siendo este el punto de origen o puesta en marcha de cada ensayo de propagación vegetativa.
      .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img01.png')
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Descripción de fenotipo
    
    p A partir de la consolidación del Banco de Material Vegetal, se debe proceder a generar una descripción específica de las condiciones fenotípicas del material parental disponible, estableciendo el conjunto de características básicas que se han de esperar como resultante del proceso de propagación, estableciendo algunos rasgos de control que permitan realizar un seguimiento apropiado a los explantes generados y al proceso en general.

    .BGR04.p-4.mb-4(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Descripción y determinación de tejidos vegetales a utilizar
    
    .row.justify-content-center.mb-4
      .col-lg-7.mb-lg-0.mb-4(data-aos="fade-right")
        p Dando continuidad a la selección de explantes para utilización de técnica #[i In-Vitro], se presenta la puesta en marcha del proceso de micropropagación masiva de material vegetal,
        figure
          img(src='@/assets/curso/tema4/img04.svg')
      .col-lg-5.col-10(data-aos="fade-left")
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Selección de órganos")
            .col
              .bloque-texto-d.color-secundario.p-4
                .bloque-texto-d__texto.mb-2
                  <i class="fas fa-quote-left" style="color:#169788"></i>
                  h3.text-regular La puesta en marcha del proceso de micropropagación masiva de material vegetal, específicamente inicia con la selección de órganos o pequeñas muestras de tejido (explantes). Los explantes, entendidos como secciones de las plantas madre, proporcionan la información genética que, bajo las condiciones de laboratorio apropiadas, permiten la generación de callos, órganos, embriones somáticos, entre los cuales puede originarse una planta completa.
                .bloque-texto-d__autor 
                  .h5.mb-0 <span style="color:#169788">(Perea. 2009).</span><i class="fas fa-quote-right" style="color:#169788"></i>
          .row(numero="2" titulo="Medio aséptico")
            .col
              p.mb-0 El cultivo de las Plantas Madre en un medio aséptico permite una reducción considerable de las posibilidades de agentes contaminantes, como es el caso de hongos que pueden llegar a encontrar un medio propicio para reproducirse en laboratorio aprovechando condiciones ofrecidas por el medio de cultivo y el microclima generado en el mismo.
          .row(numero="3" titulo="Diagnóstico y tratamiento")
            .col
              p.mb-0 Gran parte del riesgo de contaminación con potencial de afectación sanitaria al cultivo #[em in vitro] proviene de las Plantas Madre, por este motivo, es fundamental lograr un diagnóstico oportuno de la condición de salud de las plantas donantes y, en consecuencia, la realización de un tratamiento acorde con la situación.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Separación de explantes como yemas o meristemos axilares

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            <i class="fas fa-quote-left" style="color:#169788"></i>
            h3.text-regular El cultivo #[em in vitro], tal como se ha reseñado con anterioridad, puede emprenderse desde diferentes tejidos y órganos vegetales, resultado determinante aspectos como tamaño, tipo y época de recolección de la muestra, teniendo mayor capacidad de respuesta positiva en términos de desarrollo los explantes tomados de plantas jóvenes y zonas de crecimiento activas de las mismas, esto se debe al grado prematuro de diferenciación celular de sus tejidos; si bien también es posible generar el cultivo desde plantas adultas y yemas en reposo, el potencial de respuesta positiva es comparativamente menor que en las fuentes donantes referenciadas en primera instancia.
            <i class="fas fa-quote-right" style="color:#169788"></i>
          .bloque-texto-d__autor 
            .h5.mb-0 (Sharry. et al. 2015)
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img05.png')

    p El tamaño del explante, es una condición que también presenta relevancia dentro del proceso de establecimiento del cultivo #[em in vitro]

    .BGR18.p-4.mb-4(data-aos="zoom-in")
      SlyderA.slider02(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Por una parte, mientras es más pequeña la muestra de tejido obtenido, menor es su capacidad de supervivencia, esto debido a que es un menor número de células las que terminan soportando el proceso de crecimiento y correspondiente estrés asociado en la diferenciación; en cuanto al cultivo de meristemos, orientado hacia la propagación de material vegetal libre de virus, puede presentarse una condición contradictoria a este principio, puesto que la probabilidad de propagación de plantas sanas es inversamente proporcional al tamaño del explante; es decir, a menor tamaño de la muestra de tejido utilizado, disminuye el riesgo de obtener plantas con agentes patógenos (Suárez 2020). 
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img06.svg")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 En este escenario, los meristemos representan un papel importante dentro del proceso de reproducción #[em in vitro]; estos son grupos de células en estado juvenil que cuentan con una capacidad notable de división constante, siendo su principal funcionalidad, la reproducción de plantas libres de agentes patógenos; dicha funcionalidad sucede a causa de la ausencia de canales conductores de organismos como virus, por ejemplo, permitiendo una disminución del riesgo a contaminación del material vegetal resultante. 
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img07.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 El explante más utilizado, son las yemas apicales del vástago, estacas uninodales portadoras de yemas axilares, discos de hoja, secciones de raíz y meristemos (Sharry. et al. 2015). El proceso de remoción y manipulación de cada tejido debe conservar protocolos de asepsia específicos, así como establecer la metodología más apropiada en concordancia con la morfología vegetal y las características concretas de las respectivas especies vegetales a propagar. 
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img08.png")

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Limpieza de explantes

    p El desarrollo de un proceso exitoso de micropropagación vegetal, depende en una proporción dominante de la conservación de la asepsia del material vegetal; además de las precauciones a ser llevadas a cabo en la selección y recolección de la muestra biológica, se debe garantizar una desinfección apropiada de los explantes cultivados, de manera que se eliminen las posibilidades de contaminación microbiana y su correspondiente afectación al ensayo. 

    .BGM19.px-md-5.px-4.pt-3.pb-2.mb-4
      p El profundizar en este campo, expone aspectos que en apariencia no ejercerían incidencia sobre las condiciones de sanidad de las plantas; pero que, ciertamente, pueden llegar a afectar gravemente el recurso biológico manipulado; entre estos aspectos se reconoce la arquitectura de los espacios de trabajo, edad y procedencia del material vegetal, condiciones culturales de los operarios traducida en prácticas de higiene y hasta la habilidad o destreza en el ejercicio, pudiendo llegar a generar presuntas afectaciones #[b (Sharry. 2015)].
      
      .BGIMG02.p-4.mb-4(data-aos="zoom-in")
        LineaTiempoC.color-acento-contenido(text-small)
          .row.justify-content-center.align-items-center(titulo="Paso 1")
            .col-lg-6.order-lg-1.order-2
              .h4 Riesgo de contaminación al material vegetal
              p.mb-0 Entre los organismos que pueden representar riesgo de contaminación al material vegetal, se encuentran hongos, bacterias y levaduras, muchos de los cuales, en espacios de producción (cultivo en campo), no representan una amenaza manifiesta a las plantas consolidadas; sin embargo, en el cultivo #[em in vitro], si ocasionan afectaciones directas y/o indirectas sobre el desarrollo de los tejidos propagados, en la búsqueda de diferenciación celular y generación de órganos especializados.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img09.png")
          .row.justify-content-center.align-items-center(titulo="Paso 2")
            .col-lg-6.order-lg-1.order-2
              .h4 Desarrollo de actividades mecánicas superficiales
              p.mb-0 Bajo estas consideraciones, debe realizarse desinfección del explante, previa a su utilización, de manera que se eliminen organismos patógenos que pueda traer consigo; para el desarrollo de esto, se reseña lo postulado por Sharry. et al. (2015), cuando expresa que se deben utilizar sustancias químicas que proporcionen la posibilidad de eliminar los microorganismos indeseados, sin afectar el material vegetal para la propagación. Este procedimiento consiste en el desarrollo de actividades mecánicas superficiales tipo lavado llevado a cabo con agua y sustancias desinfectantes, dentro de las cuales, se destacan hipoclorito de sodio (NaCIO), hipoclorito de calcio (CaCIO), peróxido de hidrógeno (H2 O2), etanol y bicloruro de mercurio (HgCl2); los tres primeros en concentraciones de 1%-3% en tiempos de contacto de 10-20 minutos; para el caso del bicloruro de mercurio, como elemento de mayor toxicidad, se emplea en concentraciones de 0,1% en tiempos de contacto de 1-3 minutos.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img10.png")
          .row.justify-content-center.align-items-center(titulo="Paso 3")
            .col-lg-6.order-lg-1.order-2
              .h4 Triple enjuague
              p.mb-0 Se realiza triple enjuague con agua esterilizada en volúmenes de entre 10-20 veces superior al realizado inicialmente, siendo llevado a cabo en cámara de transferencia que permita la eliminación de posibles restos de agentes químicos.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img11.png")
    
    p Hemos llegado al final de este componente formativo.  Recuerde explorar los demás recursos que se encuentran disponibles, para ello diríjase al menú principal en donde encontrará la síntesis, la actividad didáctica, material complementario, entre otros.    

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'El seguimiento se realiza desde el levantamiento de registro de variables cualitativas y variables cuantitativas a partir de la identificación de condiciones observables de la planta; entre las primeras, destacan color, tipo de estructura (árbol, arbusto, etc.), forma de copa, entre otras, para el caso de las segunda, destacan la arquitectura del ejemplar (área foliar, ángulo foliar, ángulo de ramas, interceptación solar), crecimiento del ejemplar (número de cruces, altura, diámetro, número de nudos); para los estadios de madurez, una interpretación de este tipo de condiciones también incluye las características de los frutos (longitud, ancho, espesor y peso) y pedúnculos (longitud).',
        imagen: require('@/assets/curso/tema4/img02.png'),
      },
      {
        texto:
          'La determinación de las condiciones observables se establece como un punto de partida referente, tanto para la toma de decisiones de selección del material vegetal a utilizar en la micropropagación <em>in vitro</em>, como para establecer procesos comparativos de contrates de los nuevos ejemplares obtenidos, facilitando el control de crecimiento y desarrollo.',
        imagen: require('@/assets/curso/tema4/img03.png'),
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
