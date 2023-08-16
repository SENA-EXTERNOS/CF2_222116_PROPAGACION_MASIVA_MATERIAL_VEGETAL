<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Morfología Vegetal
    
    .row.justify-content-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-primario.p-4
          p.mb-0 La morfología vegetal es el campo básico desde donde se pueden comprender múltiples aspectos asociados a la funcionalidad de los organismos vegetales, así como los elementos biológicos que los posibilitan; por tal motivo, se genera una ruta que inicia por la identificación de las estructuras radiculares y aéreas de las plantas, la fotosíntesis y los órganos que la desarrollan, así como sus diferentes fases, concluyendo en un recorrido por el sistema vascular, que proporciona a las plantas la posibilidad de circulación del agua y los nutrientes que requiere para vivir. Para iniciar, se van a reconocer las estructuras radiculares y aéreas de las plantas.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img1.svg")
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Estructuras radiculares y aéreas de las plantas

    .row
      p Las plantas están conformadas por dos sistemas: el sistema caulinar y el sistema radicular; su diferencia radica en que el caulinar crece por encima de la superficie del suelo compuesto por rizomas y tallos, o sea que es aéreo, y el radicular crece en dirección inversa a la del tallo, introducido en el suelo, es subterráneo, compuesto por el conjunto de raíces de la planta.
    
    .BGR01.p-4.mb-4(data-aos="zoom-in")
      LineaTiempoC.color-primario.color-purple(text-small)
        .row.justify-content-center(titulo="Introducción")
          .col-lg-5.order-lg-1.order-2
            .h4 Introducción
            p.mb-0 Las plantas están conformadas por dos sistemas: el sistema caulinar y el sistema radicular, estos pueden diferenciarse como aquello que se encuentra encima de la superficie de suelo y aquello que se encuentra en el suelo u orientado hacia su búsqueda.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img02.svg")
        .row.justify-content-center(titulo="Sistema radicular")
          .col-lg-5.order-lg-1.order-2
            .h4 Sistema radicular
            p Se encuentra integrado por la raíz y sus respectivas ramificaciones.
            p Es el órgano vegetativo, generalmente subterráneo de las plantas terrestres, que además de servir para el anclaje de las mismas, también posibilita la absorción de aquellos nutrientes requeridos por la planta, sea del suelo o de otro sustrato.

          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img03.svg")
        .row.justify-content-center(titulo="Sistema Caulinar")
          .col-lg-5.order-lg-1.order-2
            .h4 Sistema Caulinar
            p.mb-0 Este sistema se encuentra integrado por tallo, ramas y hojas de la planta. Este sistema se origina en la plúmula del embrión, donde se desarrolla una yema apical conformada por el meristema apical, que permite un proceso de diferenciación celular, dando origen a los tres tejidos primarios conocidos como protodermis, meristema fundamental y procambium que, seguidamente, forman los tejidos secundarios definitivos del tallo en el cuerpo primario.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img04.svg")
    
    .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-right")    
        p Una vez reconocidos los sistemas de las plantas, exploremos el sistema radicular. La raíz cuenta con una estructura interna y una estructura externa, diferenciadas en sus características, de acuerdo con el tipo de planta a la que corresponda (monocotiledónea o dicotiledónea).

        p La estructura externa cuenta con una distribución zonal que presenta las secciones de cuello, ramificación, diferenciación, pelos absorbentes, alargamiento, meristema apical y cofia.

    .row.justify-content-center.mb-5
      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-primario.p-3
          p.mb-0 A continuación, se describen las zonas radiculares de las plantas anteriormente mencionadas.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4(data-aos="fade-left")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/tema1/img05.png")
          .tarjeta.color-acento-contenido.p-3(x="5%" y="43.5%" numero="+")
            .h5.mb-2.text-center <span style="background-color:#FDB32B; padding: 5px">Pelos absorbentes</span>
            p.text-white Los pelos absorbentes son células epidérmicas alargadas, están encargados de la absorción de agua y nutrientes necesarios para el crecimiento y desarrollo de la planta.
          .tarjeta.color-acento-contenido.p-3(x="50.5%" y="3%" numero="+")
            .h5.mb-2.text-center <span style="background-color:#FDB32B; padding: 5px">Cuello</span>
            p.text-white El cuello es la parte donde se unen la raíz y el tallo de la planta.
          .tarjeta.color-acento-contenido.p-3(x="54%" y="83%" numero="+")
            .h5.mb-2.text-center <span style="background-color:#FDB32B; padding: 5px">Zona pilífera</span>
            p.text-white La zona de diferenciación o pilífera es la región donde los tejidos meristemáticos se diferencian como tejidos radiculares definitivos.
          .tarjeta.color-acento-contenido.p-3(x="47.5%" y="90%" numero="+")
            .h5.mb-2.text-center <span style="background-color:#FDB32B; padding: 5px">Zona de crecimiento</span>
            p.text-white Las zonas de alargamiento y meristemo apical se encuentran en el espacio que antecede la terminación de la raíz y se encuentra conformado por tejido meristemático y posibilitan el crecimiento longitudinal de la raíz.
          .tarjeta.color-acento-contenido.p-3(x="53%" y="98%" numero="+")
            .h5.mb-2.text-center <span style="background-color:#FDB32B; padding: 5px">Cofia o piloriza</span>
            p.text-white La parte terminal de la raíz es la cofia o piloriza, que protege el meristemo apical en el proceso de penetración de la raíz al suelo.

    .BGIMG01.p-md-5.p-4.mb-4
      .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
        p.text-white.mb-0 Dentro de las partes mencionadas de las plantas, se explicarán a continuación los elementos constitutivos de la raíz, en la cual se puede identificar que la estructura interna cuenta con particularidades específicas, en concordancia con el estado de desarrollo y clase de planta.
    
      .BGIMG02.p-4(data-aos="zoom-in")
        SlyderA.slider01(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-5.order-lg-1.order-2
              .h4 Estado de desarrollo de la planta
              p.mb-0 En la germinación de la planta se forma un cuerpo primario de la raíz desde el meristemo apical que se ubica en el extremo inferior del embrión; sucede un proceso de división celular de dicho meristemo, dando origen a tres tipos de tejidos primarios, que se reconocen como protodermis, meristemo fundamental y procambium; estos tejidos, dan origen a los tejidos definitivos de la raíz.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img06.png")
          .row.justify-content-center.align-items-center
            .col-lg-5.order-lg-1.order-2
              .h4 Clase de planta
              p.mb-0 En dicotiledóneas, especialmente las leñosas, en ciertas etapas, surgen tejidos radiculares secundarios. Presenta como tejidos primarios la epidermis (capa externa de la raíz), córtex (conformado por tejidos de protección, crecimiento e ingreso de agua y nutrientes), estela (tejidos para formación de raíces laterales, vasculares primarios y cambium vascular que origina el tejido vascular secundario). En monocotiledóneas, son los mismos tejidos que presentan las dicotiledóneas, exceptuando el cambium vascular.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img07.png")

    p Siguiendo con el conocimiento de la planta, se puede decir que el tallo es el órgano vegetativo con geotropismo negativo y fototropismo positivo, los cuales, sirven para sostener las ramas, hojas, flores y frutos, con tamaños, formas y consistencias relativas al tipo de planta, a la cual pertenece. El tallo cuenta con una estructura interna y una externa.

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img08.svg")
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR02")
          .row.justify-content-center(titulo="Estructura interna del tallo del cuerpo primario")
            .col-lg-10
              p.mb-0 Conformada por nudos (puntos de desarrollo de hojas), entrenudos (espacio entre dos nudos consecutivos), yemas (tejido meristemático ubicado principalmente en axilas y partes terminales del tallo) y lenticelas (presentes en algunos tallos, en ciertos tipos de estados de desarrollo, y corresponden a poros de intercambio de gases con el medio).
          .row.justify-content-center(titulo="Estructura externa del tallo en el cuerpo primario")
            .col-lg-10
              p.mb-0 Conformado por epidermis (capa externa del tallo), córtex (tejido ubicado bajo epidermis, constituido por tejidos especializados como colénquima, parénquima cortical, esclerénquima y células secretoras), estela (parte central del tallo, conformada por sistema vascular primario y la médula constituida por tejido parenquimático de almacenamiento), parénquima interfascicular (tejido que comunica al córtex con la médula). En monocotiledóneas, no se presenta el cambium vascular.
          .row.justify-content-center(titulo="Estructura interna del tallo del cuerpo secundario")
            .col-lg-10
              p.mb-0 Estructura posible en plantas dicotiledóneas leñosas; en estas plantas, en ciertas etapas de desarrollo, aumentan en grosor, a causa del papel ejercido por dos tipos de tejido: el cambium vascular y el cambium del corcho, los cuales son conocidos como tejidos meristemáticos secundarios.

    .row.mt-5
      p En este recorrido por la planta, se puede decir que la hoja es un órgano que presenta estructura interna y externa; lo invitamos a conocer su estructura:

    .BGIMG03.p-4.mb-4(data-aos="zoom-in")
      LineaTiempoC.color-primario.color-purple(text-small)
        .row.justify-content-center.align-items-center(titulo="Estructura externa de la hoja")
          .col-lg-6.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img10.svg")
          .col-lg-5
            .h4 Estructura externa de la hoja
            p Constituida por peciolo (estructura que une la hoja con el tallo) y lámina foliar (cara superior conocida como el haz y la inferior como el envés); a través de esta lámina, se distribuyen las nervaduras ramificadas, para el caso de las plantas dicotiledóneas o, paralelas, en el caso de las monocotiledóneas, entre otros elementos.

        .row.justify-content-center(titulo="Estructura interna de la hoja")
          .col-lg-6.mb-lg-0.mb-4
            img.w-75(src="@/assets/curso/tema1/img11.png")
          .col-lg-5
            .h4 Estructura interna de la hoja
            p Constituida por cutícula, epidermis superior, mesófilo (tejido más abundante de la hoja formado por parénquima en empalizada y parénquima esponjoso, y el elemento más importante en la fotosíntesis), epidermis inferior, estomas y nervaduras (extensión del sistema vascular del tallo).

    p.mb-3 Otro elemento que forma parte de la planta, es la flor. A continuación, conoceremos cada una de sus partes y algunos datos importantes sobre ella.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        img(src="@/assets/curso/tema1/img12.svg")
    
    .BGM03.p-md-5.p-4.mb-4
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img13.png')})`}")
              .tarjeta-flip__contenido.p-5
                p.text-white.my-5 La flor se considera como un eje del sistema caulinar que se desarrolla de una yema axilar floral; se encuentra compuesta por: pedúnculo, cáliz, corola, androceo (estambres) y pistilo. 

        .col-lg-4.col-md-8.col-10.mb-lg-0.mb-5(data-aos="zoom-in")
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img14.png')})`}")
              .tarjeta-flip__contenido.p-5
                p.text-white.my-5 Las flores tienen simetría variada.
        .col-lg-4.col-md-8.col-10.mt-lg-0.mt-5(data-aos="fade-left")
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img15.png')})`}")
              .tarjeta-flip__contenido.p-5
                p.text-white.my-5 Las flores se agrupan en estructuras denominadas inflorescencias de tipo simple (una flor), o compuestas (dos o más flores).

    .row.mt-5
      p Otra parte fundamental de la planta es el fruto, conozcamos cuáles son sus partes, definición y clasificación.

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-8
        img(src="@/assets/curso/tema1/img16.svg")
    
    AcordionA(tipo="b" clase-tarjeta="BGR03")
      .row.justify-content-center(titulo="Definición")
        .col
          p.mb-0 El fruto es el ovario desarrollado y en estado de maduración de la planta, que también se conoce con el nombre de pericarpio, que funciona como contenedor de las semillas.
      .row.justify-content-center(titulo="Clasificación de los frutos")
        .col
          p.mb-0 Los frutos se clasifican en simples (un solo ovario) y compuestos (varios ovarios).
    
    p Para terminar el reconocimiento de las partes de las plantas, se presenta a continuación la semilla.

    .BGIMG04.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 La semilla es el óvulo fecundado y en estado de maduración de la planta que reproduce sexualmente a la misma, que cuenta con la posibilidad de almacenar sustancias de reserva y un embrión para la generación de una nueva planta.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img17.svg")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Los factores externos para la germinación de la semilla son: el agua, el oxígeno y la temperatura, en rangos acordes con las necesidades de la planta.

          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img18.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Los factores internos para la germinación de la semilla, consisten en el estado de madurez de la semilla y la salud del embrión.

          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img19.png")
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Órganos fotosintéticos

    p Habiendo aprendido sobre las partes de las plantas, vamos a conocer ahora un proceso clave en su crecimiento, la fotosíntesis, la cual estudiaremos a continuación.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.cajon.color-primario.p-4
        p.mb-0 La fotosíntesis es un proceso fisicoquímico, a través del cual las plantas, algas y algunas bacterias, utilizan energía solar para sintetizar los compuestos orgánicos necesarios para su supervivencia. 

    .BGIMG02.p-4.mb-4(data-aos="zoom-in")
      SlyderA.slider01(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 En este proceso, se utiliza el dióxido de carbono atmosférico, liberando oxígeno molecular, dando lugar a la fotosíntesis oxigénica. En términos evolutivos, el desarrollo biológico que significó la fotosíntesis oxigénica, transformó radicalmente las posibilidades biológicas en el planeta, estableciendo un conjunto de condiciones sin precedentes para la vida.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img20.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 La fotosíntesis oxigénica en las plantas, ocurre en los cloroplastos, ubicados en las células del parénquima clorofiniano de las hojas y tallos verdes; esto sucede en el microambiente de esas estructuras celulares, a partir del dióxido de carbono y la energía de los electrones de agua, excitados por los fotones de luz.

          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img21_a.svg")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Para que se dé la fotosíntesis, es importante reconocer los cloroplastos. Estos cloroplastos hacen parte de un grupo de organelos celulares denominados plastidios. Este tipo de plastidio es variable en forma, tamaño y cantidad, y depende del tipo de estructura celular o especie. Se encuentran constituidos por tres membranas, una externa y dos internas, que definen igual cantidad de compartimentos, los cuales son el espacio intermembrana, estroma y espacio tilacoidal.

          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img22.svg")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Uno de los espacios clave para el proceso de síntesis, es la membrana tilacoidal; esta membrana presenta algunos componentes esenciales y específicos, como son los fosfolípidos y proteínas estructurales, complejos proteicos (transporte de electrones), fotosistemas y ATP sintasa.
          
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img23.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Las plantas presentan pigmentos fotosintéticos, organizados en estructuras denominadas fotosistemas; el complejo molecular de pigmentos fotosintéticos y proteínas se une a la membrana tilacoidal; en este sitio, también se encuentra un centro de reacción fotoquímica constituido por un complejo molecular de clorofila y proteínas.

          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img24.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Las membranas tilacoidales presentan dos tipos de fotosistemas; estos complejos fotoquímicos son conocidos como fotosistema I (PSI) y fotosistema II (PSII); cada uno de ellos está compuesto por un centro de reacción fotoquímico, identificados como P700 y P680, respectivamente.
            
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img25.png")

    .row.mt-5
      h3 Fase luminosa y fase oscura de la fotosíntesis.

      p Ya aprendimos en qué consiste la fotosíntesis, ahora vamos a conocer sobre las fases luminosas y oscuras de ella.
    .BGIMG01.p-md-5.p-4.mb-4
      .cajon.color-secundario.p-4(data-aos="flip-up")
        p.mb-0 La fotosíntesis implica la transformación de energía lumínica en energía química
      TabsC.color-secundario
        .BG06.py-3.py-md-4(titulo="Transformación de energía lumínica en energía química")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img26_a.svg")
            .col-lg-5
              .h4 Transformación de energía lumínica en energía química
              p.mb-0 Para que este proceso se lleve a cabo, los organismos deben captar la luz y luego los pigmentos fotosintéticos, deben disponerse en la membrana tilacoidal para desarrollar el proceso de síntesis. Este proceso contempla dos fases: la fase fotoquímica (fase luminosa) y la fase de fijación de carbono (fase oscura). 

        .BG06.py-3.py-md-4(titulo="Fase fotoquímica")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img27_a.svg")
            .col-lg-7
              p.mb-2 La energía lumínica activa electrones de la clorofila, generando un desplazamiento por una cadena en la membrana tilacoidal, mientras la clorofila recupera, en el agua, los electrones cedidos, liberando oxígeno. La cesión de los electrones sucede en la oxidación de la coenzima NADP+ que, al integrarse con el H+, se transforma en NADPH; durante este transporte de electrones, se inyectan protones mediante la membrana tilacoidal, haciendo que, mediante este gradiente energético, se impulse la síntesis de ATP en el estroma.

              .bloque-texto-b.p-4.mb-4
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-2 La corriente de electrones comienza en el fotosistema II, contenedor del centro de reacción fotoquímico P680, donde el agua es hidrolizada y es allí donde quedan disponibles electrones, protones y oxígeno molecular, posteriormente liberado a la atmósfera como producto residual de la reacción.  
                  .h5.text-end (Pérez- Urria, 2009).
                  i.fas.fa-quote-right
              .BG05.p-4
                p.mb-0 #[b Nota]: tanto la transducción energética, como la hidrólisis del agua, son fenómenos fundamentales para el sostenimiento de la vida en el planeta.
                
        .BG06.py-3.py-md-4(titulo="Fase de fijación de carbono")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img28_a.svg")
            .col-lg-5
              p Tanto ATP como NADPH son fuentes de energía y poder reductor, respectivamente, para promover la síntesis de carbohidratos de carbono del dióxido de carbono, en azúcar simple; en este sentido, las reacciones iniciadas en el cloroplasto, encuentran continuidad en el citosol celular, generando en el mesófilo de las hojas, sacarosa y otras moléculas orgánicas; la sacarosa es exportada hacia otros tejidos como fuente de moléculas orgánicas. 

              p Lo anterior, sucede gracias a que la energía química almacenada, temporalmente, en las moléculas de ATP y NADPH, es transferida a las moléculas transportadoras y almacenadoras de energía, en las células de los organismos fotoautótrofos, formando un esqueleto hidrocarbonado desde donde se empiezan a construir diversas variedades de moléculas orgánicas.
              .BG05.p-4
                p.mb-0 #[b Nota]: la incorporación del CO2 en compuestos orgánicos, es conocida, comúnmente, como fijación de carbono, sucediendo en el estroma de los cloroplastos.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Sistemas de tejidos vasculares

    p El tejido vascular de las plantas, es característico de plantas superiores y atraviesan la totalidad del organismo, desde el extremo radicular, hasta el extremo de las hojas. Está conformado por el xilema y el floema y, con respecto a ellos, es necesario realizar un conjunto de precisiones para comprender su funcionamiento y relevancia en el desarrollo y sostenimiento de la planta.

    p En la siguiente imagen se puede observar con más detalle el tejido vascular:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        img(src="@/assets/curso/tema1/img29_a.svg")

    .BGIMG05.p-md-5.p-4.mb-4(data-aos="zoom-in")
      AcordionA(tipo="b" clase-tarjeta="BGR03")
        .row.justify-content-center(titulo="Xilema")
          .col
            p.mb-0 Tejido complejo, debido a la presencia de células dentro del mismo, algunas incluso con protoplasma vivo; este órgano se encuentra constituido por traqueidas, elementos del vaso, fibras y parénquima. Según el estado de desarrollo de la planta, el xilema puede ser primario o secundario.
        .row.justify-content-center(titulo="Traqueidas")
          .col
            p.mb-0 Células muertas alargadas, con terminación en punta roma y presencia de poros laterales; sus funciones básicas son el transporte de savia bruta y sostenimiento de la planta.
        .row.justify-content-center(titulo="Elementos del vaso")
          .col
            p.mb-0 Células alargadas con paredes gruesas que regularmente no contienen protoplasma vivo en su estado de madurez; estos órganos forman filas, unidas longitudinalmente, conectadas entre sí mediante perforaciones; las funciones de estos son el transporte de agua y minerales, así como también, el sostenimiento de la planta.

        .row.justify-content-center(titulo="Fibras")
          .col
            p.mb-0 Son paredes fuertemente lignificadas, conformando estructuras más largas que las traqueidas, que terminan en puntas agudas; su función es de tipo mecánico en la planta. Estas fibras forman paredes secundarias después de completar su alargamiento.
        .row.justify-content-center(titulo="Parénquima")
          .col
            p.mb-0 Su función es el almacenamiento de sustancias requeridas por la planta.

        .row.justify-content-center(titulo="Floema")
          .col
            p.mb-0 Es el tejido de mayor relevancia para la conducción de nutrientes a lo largo de la planta, es de naturaleza compleja, conformado por células especializadas en funciones concretas; estas células son: elementos cribosos, células acompañantes, parénquima y fibras.
        .row.justify-content-center(titulo="Elementos cribosos")
          .col
            p.mb-0 Existen dos tipos: las células cribosas (menos especializadas) y los tubos cribosos (mayormente especializados); son células vivas, los tubos se encuentran dispuestos longitudinalmente y, en sus paredes, se forman las llamadas áreas cribosas; la función de estas estructuras es el transporte de savia elaborada, hasta los sitios de almacenamiento y consumo.
            
        .row.justify-content-center(titulo="Células acompañantes")
          .col
            p.mb-0 Células parenquimáticas altamente especializadas que suelen asociarse a los tubos cribosos; guardan una función complementaria con los elementos cribosos.
        .row.justify-content-center(titulo="Células parenquimáticas")
          .col
            p.mb-0 Células similares a las del xilema; su función es el almacenamiento de sustancias de reserva, como almidón, grasa, taninos, resinas.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
