export default {
  global: {
    componenteFormativo: 'Propagación vegetal <em>in vitro</em>',
    descripcionCurso:
      'El desarrollo de este componente le permitirá acceder a conocimientos importantes en el campo de la biotecnología vegetal y la propagación <em>in vitro</em>. Entre los temas más destacados por abordar se encuentran la instalación de bancos de plantas madre, selección de medios de laboratorio, preparación de soluciones madre y adopción de protocolos de manejo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Morfología vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructuras radiculares y aéreas de las plantas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Órganos fotosintéticos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sistemas de tejidos vasculares',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Reproducción vegetativa de las plantas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Clasificación de material vegetal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Selección de explantes para utilización de técnica <em>in vitro</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Órganos fotosintéticos',
      referencia:
        'Monza, J. & Signorelli, S. (2017). <em>Manual de nivelación de bioquímica.</em>',
      tipo: 'Capítulo de libro',
      link:
        'https://docplayer.es/9280819-Fotosintesis-material-elaborado-por-j-monza-s-signorelli-o-borsani-y-m-sainz.html',
    },
    {
      tema: 'Reproducción vegetativa de las plantas',
      referencia:
        'Reyes, J. (2015). <em>Guía técnica, métodos y procedimientos de reproducción asexual o vegetativa de las plantas.</em>',
      tipo: 'Libro',
      link:
        'https://www.competitividad.org.do/wp-content/uploads/2016/05/Gu%C3%ADa-de-t%C3%A9cnicas-m%C3%A9todos-y-procedimientos-de-reproducci%C3%B3n-asexual-o-vegetativa-de-las-plantas.pdf',
    },
    {
      tema: 'Reproducción vegetativa de las plantas',
      referencia:
        'Universidad Politécnica de Valencia. (2012). <em>Preparación de medios de cultivo para el cultivo in vitro de plantas o de material vegetal</em>. (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pdSrwfWfPCw',
    },
    {
      tema: 'Reproducción vegetativa de las plantas',
      referencia: 'Ruiz, J. (2017). <em>Medios de cultivo</em>.',
      tipo: 'Manual',
      link:
        'https://issuu.com/jazinaruizhernandez/docs/unidad2.mediosdecultivo',
    },
    {
      tema: 'Reproducción vegetativa de las plantas',
      referencia:
        'Roca, W. & Mroginski, L. (1993). <em>Cultivo de tejidos en la agricultura.</em>',
      tipo: 'Libro',
      link:
        'http://ciat-library.ciat.cgiar.org/Articulos_Ciat/biblioteca/Cultivo_de_tejidos_en_la_agricultura.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adventicio',
      significado:
        'Dicho de un órgano, especialmente de la raíz, que se desarrolla a partir de un tejido adulto.',
    },
    {
      termino: 'Angiospermas',
      significado: 'Plantas provistas de flores.',
    },
    {
      termino: 'Axénica',
      significado:
        'Dicho de un cultivo u organismo que se desarrolla en un ambiente donde no hay otro organismo vivo.',
    },
    {
      termino: 'Caulinar',
      significado: 'Relativo al tallo de las plantas.',
    },
    {
      termino: 'Ciclo de Krebs',
      significado: 'Ruta metabólica celular.',
    },
    {
      termino: 'Colénquima',
      significado: 'Tejido de sostén presente en plantas jóvenes y herbáceas.',
    },
    {
      termino: 'Destilación',
      significado:
        'Proceso en el que una sustancia volátil presente en una mezcla, es separada de otra que no lo es, mediante evaporación y posterior condensación de la misma.',
    },
    {
      termino: 'Desionización',
      significado:
        'Eliminación total de los sólidos disueltos en el agua mediante el intercambio iónico.',
    },
    {
      termino: 'Embriogénesis somática',
      significado:
        'Desarrollo de embriones a partir de células que no son producto de una fusión de gametos durante la fecundación.',
    },
    {
      termino: 'Escapo',
      significado: 'Tallo herbáceo, florífero, sin hojas.',
    },
    {
      termino: 'Esclerénquima',
      significado:
        'Tejido vegetal formado por células muertas con las paredes engrosadas y lignificadas.',
    },
    {
      termino: 'Estípite',
      significado:
        'Estructura de soporte que puede comportarse como un tallo en diferentes partes de la planta.',
    },
    {
      termino: 'Estroma',
      significado:
        'Células y tejidos que sostienen y dan estructura a los órganos, glándulas y otros tejidos.',
    },
    {
      termino: 'Explante',
      significado:
        'Conjunto de células somáticas que integran un tejido, para cultivo en medios artificiales.',
    },
    {
      termino: 'Fenotipo',
      significado:
        'Es la expresión de los genes en los seres vivos, a través de características físicas observables.',
    },
    {
      termino: 'Fúlcreas',
      significado: 'Tipo de raíces adventicias.',
    },
    {
      termino: 'Genotipo',
      significado: 'Constitución genética completa de un individuo.',
    },
    {
      termino: 'Gimnospermas',
      significado: 'Plantas que no poseen flores.',
    },
    {
      termino: 'Haustorios',
      significado:
        'Extremo de hifas de un hongo parásito, simbionte o de la raíz modificada de una planta parásita.',
    },
    {
      termino: '<em>In-vitro</em>',
      significado:
        'Hace referencia a ¨en vidrio¨ utilizados en técnicas de propagación.',
    },
    {
      termino: 'Meristemo',
      significado: 'Tejidos responsables del crecimiento vegetal.',
    },
    {
      termino: 'Mesófilo',
      significado:
        'Estructura en la que el clorénquima en empalizada está hacia el haz de la hoja y el clorénquima esponjoso hacia el envés.',
    },
    {
      termino: 'Morfogénesis',
      significado: 'Proceso de desarrollo de la forma de un organismo.',
    },
    {
      termino: 'NADP+',
      significado: 'Coenzima esencial que reduce el NADPH.',
    },
    {
      termino: 'NADPH',
      significado:
        'Complejo multiproteico encargado de producir especies reactivas de oxígeno en diferentes células y tejidos.',
    },
    {
      termino: 'Organogénesis',
      significado:
        'Conjunto de cambios que permiten que las capas embrionarias se transformen en los diferentes órganos que conforman un organismo.',
    },
    {
      termino: 'Ósmosis inversa',
      significado:
        'Aplicación de una presión externa superior a la presión osmótica para impedir e invertir el proceso natural de la ósmosis.',
    },
    {
      termino: 'Parénquima cortical',
      significado:
        'Masas continúas de células en la corteza y en la médula de los tallos y raíces, en el mesófilo de la hoja, en la pulpa de los frutos y en el endospermo de las semillas.',
    },
    {
      termino: 'Plúmula',
      significado: 'Yema ubicada en el lado opuesto de la radícula.',
    },
    {
      termino: 'Totipotencia',
      significado:
        'Potencia celular máxima, que le confiere a la célula la capacidad de dirigir el desarrollo total del organismo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chuncho, G. Chuncho, C. & Aguirre, Z. (2019). <em>Anatomía y morfología vegetal</em>.',
      link:
        'https://unl.edu.ec/sites/default/files/archivo/2019-12/ANATOMI%CC%81A%20Y%20MORFOLOGI%CC%81A%20VEGETAL.pdf',
    },
    {
      referencia:
        'Osuna-Fernández, H. R. Osuna-Fernández, A. M. & Fierro-Álvarez, A. (2017). <em>Manual de propagación de plantas superiores</em>.',
      link:
        'https://www.casadelibrosabiertos.uam.mx/contenido/contenido/Libroelectronico/manual_plantas.pdf',
    },
    {
      referencia:
        'Perea, M. (2009). <em>Cultivo de tejidos vegetales in vitro</em>.',
      link: 'https://repositorio.unal.edu.co/handle/unal/79882',
    },
    {
      referencia:
        'Pérez-Urria, E. (2009). Fotosíntesis: aspectos básicos. Reduca (Biología). <em>Serie Fisiología Vegetal, 2</em>(3), p. 1-47.',
      link:
        'http://revistareduca.es/index.php/biologia/article/view/793#:~:text=P%C3%A9rez%2DUrria%20Carril-,Resumen,solar%20para%20sintetizar%20compuestos%20org%C3%A1nicos.',
    },
    {
      referencia:
        'Ramos, A., Cano, J., López, G. & Varguéz, A. (2021). <em>Alcances y perspectivas del área de biotecnología vegetal del CIATEJ en el Sureste de México</em>.',
      link:
        'https://www.researchgate.net/publication/354659004_Alcances_y_perspectivas_del_area_de_Biotecnologia_Vegetal_del_CIATEJ_en_el_Sureste_de_Mexico',
    },
    {
      referencia:
        'Sharry, S., Adema, M. & Abedini, W. (2015). <em>Manual para la propagación de plantas por cultivo de tejidos in vitro.</em>',
      link: 'https://libros.unlp.edu.ar/index.php/unlp/catalog/book/407',
    },
    {
      referencia: 'Suárez, I. (2020). <em>Cultivo de tejidos vegetales.</em>',
      link:
        'https://repositorio.unicordoba.edu.co/handle/ucordoba/2553#:~:text=El%20cultivo%20de%20tejidos%20vegetales,agr%C3%ADcola%20y%20la%20investigaci%C3%B3n%20vegetal.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
