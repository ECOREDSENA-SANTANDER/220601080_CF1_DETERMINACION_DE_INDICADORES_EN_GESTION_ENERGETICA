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
        download: 'downloads/dist.pdf',
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
      referencia: 'Es Ciencia. (12 de septiembre 2021). Tipos de energía.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=boJpgNIY54Y&ab_channel=EsCiencia',
    },
    {
      tema: 'Unidades de medida de la energía',
      referencia:
        'Academia Kaussal. (2 de septiembre de 2022). Unidades de medidas eléctricas. ¿Cuáles son las más utilizadas?',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=s9TLe_T9ICY&ab_channel=AcademiaKaussa',
    },
    {
      tema: 'Conceptos fundamentales de eficiencia energética',
      referencia:
        'BUSLeague H2020. (11 de enero de 2022). Eficiencia energética y ahorro de energía en las edificaciones: Conceptos básicos.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=S5EQ8axnSmM&ab_channel=BUSLeagueH2020',
    },
    {
      tema: 'Identificación de variables de consumo energético',
      referencia:
        'Hsu, D. (2015). <i>Identifying key variables and interactions in statistical models of building energy consumption using regularization. Energy</i>, 83, 144–155.',
      tipo: 'Artículo',
      link:
        'https://www.sciencedirect.com/science/article/pii/S0360544215001590 ',
    },
    {
      tema: 'Procesos consumidores de energía',
      referencia:
        'Geociencias Tíncopa (Ciencia de la Tierra). (24 de junio de 2020).',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=EJWx9Hndy5o&ab_channel=GeocienciasTincopa%28CienciasdelaTierra%29  ',
    },
    {
      tema: 'Caracterización del consumo energético',
      referencia:
        'Sifuentes Godoy, D. A. (2022 de marzo de 2024). Caracterización del consumo energético. Análisis de datos.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=UT8yR_e-4wo&ab_channel=DavidAlejandroSifuentesGodoy ',
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
      termino: 'Joule (J)',
      significado: 'Unidad básica de energía en el Sistema Internacional (SI).',
    },
    {
      termino: 'Watt (W)',
      significado:
        'Unidad de potencia en el SI (energía por unidad de tiempo).',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco Mundial. (2021). The little green data book 2021. Washington, DC: World Bank.',
      link: '',
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
        'Cooremans, C. (2012). Energy efficiency benchmarking in companies: State of the art and further research directions. Applied Energy, 93, 372-381.',
      link: '',
    },
    {
      referencia:
        'Ferreira, V. S., Pinheiro, C., Brito, S., & Cardoso, J. L. (2012). Energy consumption characterization in industrial facilities: A review. Energies, 5(12), 5433-5455.',
      link: '',
    },
    {
      referencia:
        'Harris, F. W., & McCaffer, R. (2013). Modern construction management (7th ed.). John Wiley & Sons.',
      link: '',
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
        'Kolokotsa, D. (2011). Building energy consumption analysis. In Energy efficiency and renewable energy in buildings (pp. 1-28). Springer.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2015). Agenda 2030 para el Desarrollo Sostenible.',
      link: '',
    },
    {
      referencia:
        'Saidur, R., Rahim, N. A., & Hasanuzzaman, M. (2010). A review on energy efficiency and energy saving in industrial sector. Renewable and Sustainable Energy Reviews, 14(9), 2496-2509.',
      link: '',
    },
    {
      referencia:
        'Sovacool, B. K. (2021). Energy transitions: Global and national perspectives (2nd ed.). Routledge.',
      link: '',
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
