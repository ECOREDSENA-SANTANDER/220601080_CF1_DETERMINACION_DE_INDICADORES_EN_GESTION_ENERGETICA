export default {
  global: {
    Name:
      'Diagnosticar variables de consumo energético de acuerdo con criterios de la norma ISO 50001',
    Description:
      'El contenido aborda los fundamentos esenciales de la gestión energética y los lineamientos de la norma ISO 50001, brindando herramientas para diagnosticar las variables críticas de consumo dentro de una organización. A partir de este diagnóstico, se trabaja en la formulación de métricas clave que permitan monitorear, evaluar y mejorar el desempeño energético. Se estudian distintas metodologías de cálculo e implementación, destacando su utilidad en el seguimiento y la mejora continua, así como en la toma de decisiones estratégicas orientadas a la eficiencia y sostenibilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tipos y formas de energía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Aplicaciones de los diferentes tipos de energía en la industria y el comercio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'La  sostenibilidad',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Unidades de medida de la energía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conversión entre diferentes unidades de energía',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Medición y equipos de medición de la energía',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Conceptos fundamentales de eficiencia energética',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Organización Internacional de Normalización (ISO)',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Identificación de variables de consumo energético',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              ' Herramientas para el seguimiento y registro de datos de consumo',
            hash: 't_4_1',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Procesos consumidores de energía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Importancia de la eficiencia energética en los procesos productivos y de servicios',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Caracterización del consumo energético',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Elaboración de diagramas de flujo de energía',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: '<i>Benchmarking</i> interno y externo',
            hash: 't_6_2',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_83210166_DU.zip',
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
      tema: 'Tipos y formas de energía',
      referencia:
        'Astraway. (2022, marzo 18). Tipos y formas de energía. La energía explicada: fuentes, tipos, propiedades, aplicaciones.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iO7GUgcfJL8',
    },
    {
      tema: 'Unidades de medida de la energía',
      referencia:
        'Clases Particulares en Ávila. (2023, septiembre 28). Magnitudes y unidades de medida y sus tipos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=60pT4Wh30G8',
    },
    {
      tema: 'Conceptos fundamentales de eficiencia energética',
      referencia:
        'Agencia SE. (2013, marzo 11). ¿Qué es la eficiencia energética?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_12eVyvbFCI',
    },
    {
      tema: 'Identificación de variables de consumo energético',
      referencia:
        'Tecnológico de Monterrey – Innovación Educativa. (2019, noviembre 8). Demanda y consumo de energía.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_fCNN6pxH8c',
    },
    {
      tema: 'Procesos consumidores de energía',
      referencia:
        'COOPEGUANACASTE R.L. (2021, diciembre 2). ¿Cómo calcular el consumo de energía de mis artefactos eléctricos?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nca2Lt-BS3U',
    },
  ],
  glosario: [
    {
      termino: 'Energía primaria',
      significado:
        'Energía que se encuentra directamente en la naturaleza (combustibles fósiles, solar, eólica, etc.).',
    },
    {
      termino: 'Energía secundaria',
      significado:
        'Energía obtenida de la transformación de la energía primaria (electricidad, combustibles refinados).',
    },
    {
      termino: 'Energía convencional',
      significado:
        'Energía proveniente de fuentes limitadas (combustibles fósiles, nuclear).',
    },
    {
      termino: 'Energía no renovable',
      significado: 'Sinónimo de energía convencional.',
    },
    {
      termino: 'Energía renovable',
      significado:
        'Energía proveniente de fuentes que se reponen naturalmente (solar, eólica, biomasa, geotérmica).',
    },
    {
      termino: 'Combustibles fósiles',
      significado:
        'Recursos energéticos como el petróleo, el gas natural y el carbón, formados a partir de materia orgánica fósil.',
    },
    {
      termino: 'Energía nuclear',
      significado:
        'Energía liberada por reacciones nucleares, como la fisión o la fusión.',
    },
    {
      termino: 'Energía hidroeléctrica',
      significado: 'Energía obtenida del movimiento del agua.',
    },
    {
      termino: 'Energía solar',
      significado: 'Energía proveniente de la radiación del sol.',
    },
    {
      termino: 'Energía eólica',
      significado: 'Energía obtenida del viento.',
    },
    {
      termino: 'Biomasa',
      significado:
        'Materia orgánica de origen vegetal o animal utilizada como fuente de energía.',
    },
    {
      termino: 'Energía geotérmica',
      significado: 'Energía térmica proveniente del interior de la Tierra.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones.',
    },
    {
      termino: '<i>Joule</i> (J)',
      significado: 'Unidad básica de energía en el Sistema Internacional (SI).',
    },
    {
      termino: '<i>Watt</i> (W)',
      significado:
        'Unidad de potencia en el SI (energía por unidad de tiempo).',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco Mundial. (2021). The little green data book 2021. World Bank.',
      link: '',
    },
    {
      referencia:
        'Bismarks, J. L. (2024). Instrumentos de medición electrónica y eléctrica. Electrónica Online.',
      link:
        'https://electronicaonline.net/electronica/instrumentos-de-medicion-electronica/',
    },
    {
      referencia:
        'Boyle, G. (2012). Renewable energy: Power for a sustainable future (3rd ed.). Oxford University Press.',
      link: '',
    },
    {
      referencia:
        'Brundtland, G. H. (Ed.). (1987). Our common future: Report of the World Commission on Environment and Development. Oxford University Press.',
      link: '',
    },
    {
      referencia:
        'Capehart, B. L., & Turner, W. C. (2020). Energy management handbook (9th ed.). CRC Press.',
      link: '',
    },
    {
      referencia:
        'Cooremans, C. (2012). Energy efficiency benchmarking in companies: State of the art and further research directions. Applied Energy, 93, 372–381.',
      link: '',
    },
    {
      referencia:
        'Del Río Morales, Y. (2024). Cómo funciona una central geotérmica y cuáles son sus beneficios. AMIF.',
      link:
        'https://amif.mx/como-funciona-una-central-geotermica-y-cuales-son-sus-beneficios/',
    },
    {
      referencia:
        'Departamento de Consultoría. (2025). Qué son las normas ISO. GlobalSuite Solutions.',
      link: 'https://www.globalsuitesolutions.com/es/que-son-normas-iso/',
    },
    {
      referencia: 'EsCiencia. (2021). Tipos de energía. YouTube.',
      link: 'https://www.youtube.com/watch?v=boJpgNIY54Y&ab_channel=EsCiencia',
    },
    {
      referencia:
        'Ferreira, V. S., Pinheiro, C., Brito, S., & Cardoso, J. L. (2012). Energy consumption characterization in industrial facilities: A review. Energies, 5(12), 5433–5455.',
      link: '',
    },
    {
      referencia:
        'Geociencias Tincopa – Ciencias de la Tierra. (2020). Procesos en gestión energética. YouTube.',
      link:
        'https://www.youtube.com/watch?v=EJWx9Hndy5o&ab_channel=GeocienciasTincopa',
    },
    {
      referencia:
        'Grupo de Investigación Xué & Semillero de Investigación Barión. (2020). Potencial energético eólico para la Región Central. Universidad Distrital Francisco José de Caldas / RAPE.',
      link:
        'https://regioncentralrape.gov.co/wp-content/uploads/2020/04/Potencial-eólico-Región-Central.pdf',
    },
    {
      referencia:
        'Harris, F. W., & McCaffer, R. (2013). Modern construction management (7th ed.). John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Hsu, D. (2015). Identificación de variables clave e interacciones en modelos estadísticos de consumo energético de edificios mediante regularización. Energy, 83, 144–155.',
      link: 'https://doi.org/10.1016/j.energy.2015.02.017',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2021). ISO 50001: Energy management systems – Requirements with guidance for use.',
      link: '',
    },
    {
      referencia:
        'Jefferson, J. W. (2019). Fossil fuels. Britannica Educational Publishing.',
      link: '',
    },
    {
      referencia:
        'Kolokotsa, D. (2011). Building energy consumption analysis. En Energy efficiency and renewable energy in buildings (pp. 1–28). Springer.',
      link: '',
    },
    {
      referencia: 'Maldonado, Y. (2021). Tipos de carbón. GeologíaWeb.',
      link: 'https://geologiaweb.com/rocas/tipos-carbon/',
    },
    {
      referencia:
        'Naciones Unidas. (2015). Agenda 2030 para el Desarrollo Sostenible.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M. (2016). ISO 50001: Sistema de gestión energética. Geoinnova.',
      link:
        'https://geoinnova.org/blog-territorio/iso-50001-sistema-de-gestion-energetica/',
    },
    {
      referencia:
        'Rodríguez Martínez, N. (2021). Del petróleo crudo a los combustibles (Parte I). ACMOR.',
      link:
        'https://acmor.org/publicaciones/del-petr-leo-crudo-a-los-combustibles-parte-i',
    },
    {
      referencia:
        'Saidur, R., Rahim, N. A., & Hasanuzzaman, M. (2010). A review on energy efficiency and energy saving in industrial sector. Renewable and Sustainable Energy Reviews, 14(9), 2496–2509.',
      link: '',
    },
    {
      referencia:
        'Seguí, P. (2025). Gas natural: Qué es, tipos, características y más | Super Guía! OVACEN.',
      link: 'https://ovacen.com/gas-natural/',
    },
    {
      referencia:
        'Sovacool, B. K. (2021). Energy transitions: Global and national perspectives (2nd ed.). Routledge.',
      link: '',
    },
    {
      referencia:
        'United Nations General Assembly. (2015). La Asamblea General adopta la Agenda 2030 para el desarrollo sostenible.',
      link:
        'https://www.un.org/sustainabledevelopment/es/2015/09/la-asamblea-general-adopta-la-agenda-2030-para-el-desarrollo-sostenible/',
    },
    {
      referencia:
        'Watt Watchers of Texas. (2024). Recursos energéticos primarios vs. secundarios.',
      link:
        'https://www.watt-watchers.com/recursos-energeticos-primarios-vs-secundarios/?lang=es',
    },
    {
      referencia:
        'Young, H. D., & Freedman, R. A. (2018). University physics with modern physics (15th ed.). Pearson.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
