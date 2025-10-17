<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conceptos fundamentales de eficiencia energética

    p.mb-4 La eficiencia energética se refiere a la capacidad de lograr un mismo resultado (por ejemplo, producir un bien, prestar un servicio, mantener un nivel de confort) utilizando menos energía. No se trata de consumir menos, sino de consumir de manera más inteligente. 
    h5 Importancia: 

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-up")
      .col-lg-3.col-7.mb-3.col-md-6
        img(src='@/assets/curso/Tema3/img01.png', alt='')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Reducción de costos")
            .col-md-12.mb-4.mb-md-0
              p Utilizar la energía de forma más eficiente disminuye los gastos operativos asociados al consumo energético.
          .row(titulo="Beneficios ambientales")
            .col-md-12.mb-4.mb-md-0
              p Menor consumo energético implica una menor demanda de fuentes de energía, lo que a su vez reduce las emisiones de gases contaminantes y la explotación de recursos naturales.
          .row(titulo="Seguridad energética")
            .col-md-12.mb-4.mb-md-0
              p Al optimizar el uso de la energía, las organizaciones y los países pueden reducir su dependencia de fuentes externas y volverse más resilientes a las fluctuaciones del mercado energético.
          .row(titulo="Competitividad")
            .col-md-12.mb-4.mb-md-0
              p Las empresas con operaciones energéticamente eficientes suelen tener una ventaja competitiva al reducir sus costos de producción.
          .row(titulo="Sostenibilidad")
            .col-md-12.mb-4.mb-md-0
              p La eficiencia energética es un pilar fundamental para lograr un desarrollo sostenible, al equilibrar el crecimiento económico con la protección del medio ambiente.


    .row.justify-content-center.align-items-center.mb-2.bgtema3.p-4
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 26.
          span  Beneficios de la eficiencia energética
        figure
          img.mb-3(src='@/assets/curso/Tema3/fig26.svg', alt='Diagrama circular que destaca los beneficios de la eficiencia energética. En el centro se encuentra el término “Eficiencia Energética” rodeado por ocho beneficios: ahorro energético, cuidado del medio ambiente, disminución en el recibo de luz, ahorro económico, responsabilidad social corporativa, disminución de emisiones de CO₂, cálculo del ahorro energético y desarrollo sostenible. Cada beneficio está representado con un ícono alusivo.')
          figcaption Fuente: https://solger.com.co/eficiencia-energetica-2/

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Gestión energética

    p.mb-5 La gestión energética es un proceso sistemático y continuo que una organización implementa para optimizar el uso y el consumo de energía, buscando la eficiencia energética, la reducción de costos, la minimización del impacto ambiental y el cumplimiento de las regulaciones pertinentes. No se trata simplemente de reducir el consumo, sino de gestionar la energía de manera inteligente y estratégica en todas las actividades y procesos de la organización. Está estructurada en torno a los siguientes procesos: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Planificación")
            .col-md-12.mb-4.mb-md-0
              p Establecer una política energética, identificar los aspectos energéticos significativos, determinar los objetivos y metas energéticas, y planificar las acciones para alcanzarlos. Esto incluye la definición de Indicadores de Desempeño Energético (IDEs) y la creación de una línea de base energética.
          .row(numero="2" titulo="Implementación y operación")
            .col-md-12.mb-4.mb-md-0
              p Poner en práctica los planes y procesos definidos, asegurando la competencia del personal, la comunicación efectiva y la operación y el mantenimiento eficientes de los equipos e instalaciones.
          .row(numero="3" titulo="Verificación")
            .col-md-12.mb-4.mb-md-0
              p Realizar el seguimiento y la medición del consumo y el desempeño energético, llevar a cabo auditorías internas para evaluar la conformidad del sistema y el progreso hacia los objetivos.
          .row(numero="4" titulo="Actuación")
            .col-md-12.mb-4.mb-md-0
              p Analizar los resultados de la verificación, identificar no conformidades y oportunidades de mejora, y tomar acciones correctivas y preventivas para mejorar continuamente el desempeño energético y el sistema de gestión de la energía.

      .col-lg-6
        img(src='@/assets/curso/Tema3/img02.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-4.mb-3
        img(src='@/assets/curso/Tema3/img03.svg', alt='')
      .col-lg-11
        p En esencia, la gestión energética busca integrar la consideración de la energía en la toma de decisiones de la organización, promoviendo una cultura de eficiencia y sostenibilidad en todos los niveles. Se basa en la recopilación y el análisis de datos, el establecimiento de objetivos realistas, la implementación de medidas de mejora y el seguimiento continuo del progreso para lograr un uso más eficiente y responsable de la energía. La norma ISO 50001 proporciona un marco reconocido internacionalmente para implementar un sistema de gestión de la energía eficaz.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 27.
          span  Ventajas de la gestión energética
        figure
          img.mb-3(src='@/assets/curso/Tema3/fig27.svg', alt='Gráfico circular que muestra las ventajas de la gestión energética. En el centro aparece “Eficiencia energética” y alrededor se destacan cuatro beneficios: ahorro económico (ícono de moneda), reducción de emisiones de CO₂ (ícono de nube), mejora en la competitividad (ícono de insignia) y mayor conocimiento del uso energético (ícono de cabeza con engranajes).')
          figcaption Fuente: https://www.creara.es/gestion-energetica/ 


    .tarjeta.bgvideo.p-3.mb-0(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-11
          .row.justify-content-around.align-items-center.mb-2.my-2
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/Tema2/play.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Eficiencia energética y ahorro de energía en las viviendas: conceptos básicos.
                  p.mb-0 Para fortalecer el tema anteriormente plasmado, se presenta el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=S5EQ8axnSmM&ab_channel=BUSLeagueH2020" target="_blank")
                    span Ir al sitio
                    i.fas.fa-circle-play

    separador
    #t_3_1.titulo-segundo.mb-5(data-aos="fade-up")
      h2 3.1. Organización Internacional de Normalización (ISO)


    p.mb-4 ISO es una organización internacional no gubernamental e independiente que desarrolla y publica una amplia gama de normas internacionales para asegurar la calidad, seguridad y eficiencia de productos, servicios y sistemas. Su nombre proviene del griego “isos”, que significa “igual”, reflejando su objetivo de estandarización a nivel global. 

    .row.justify-content-center.mb-3
      .col-lg-5.bg10.p-4.align-content-center.mb-4
        p Fundada en 1947, ISO cuenta con representaciones de organismos de normalización de numerosos países y ha publicado miles de normas que abarcan prácticamente todos los sectores, desde la tecnología hasta la gestión de la calidad y la protección ambiental. Estas normas son voluntarias, pero su adopción facilita el comercio internacional, mejora la confianza del consumidor y promueve las mejores prácticas en diversas industrias.
      .col-lg-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 28.
          span  Logotipo de ISO 
        figure
          img.mb-3(src='@/assets/curso/Tema3/fig28.svg', alt='Logotipo de la ISO (International Organization for Standardization). A la izquierda, aparece un globo con las letras “ISO” en grande dentro de un recuadro azul. A la derecha, el nombre completo de la organización escrito en inglés: International Organization for Standardization.')
      .col-lg-4
        .row.align-items-center
          .col-lg-3.mb-3.col-3
            img(src='@/assets/curso/Tema3/img04.svg', alt='')
          .col-lg-12
            p La ISO 50001 es una norma internacional desarrollada por la Organización Internacional de Normalización (ISO) que especifica los requisitos para establecer, implementar, mantener y mejorar un Sistema de Gestión de la Energía (SGEn). Su objetivo principal es permitir a las organizaciones seguir un enfoque sistemático para lograr la mejora continua de su desempeño energético, incluyendo la eficiencia energética, el uso y el consumo de energía.   


    h5 En esencia, la ISO 50001 proporciona un marco para que las organizaciones:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-left")
          .col-lg-6.p-0.d-none.d-lg-block.h-100
            img.h-100.w-100(src='@/assets/curso/Tema3/img05.svg', alt='', style="object-fit: cover")
          .col-lg-6.col-sm-12.align-content-center.bg8.pc-3.p-4
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Desarrollen una política energética.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Establezcan objetivos, metas y planes de acción relacionados con su uso de la energía.   
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Implementen y mantengan procesos para lograr estos objetivos.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Realicen el seguimiento y la medición de su desempeño energético.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Se comprometan a la mejora continua de su gestión de la energía.
        p.mb-3 La implementación de un Sistema de Gestión de la Energía bajo la norma ISO 50001 puede ayudar a las organizaciones a reducir sus costos energéticos, disminuir su impacto ambiental, cumplir con la legislación energética y mejorar su competitividad. Es aplicable a cualquier organización, independientemente de su tamaño, sector o ubicación geográfica.
      .col-lg-3.col-6.col-md-4
        img(src='@/assets/curso/Tema3/img06.png', alt='')

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-1.col-3.mb-3.col-md-2
        img(src='@/assets/curso/Tema2/img01.svg', alt='')
      .col-lg-11
        p Los criterios de la norma ISO 50001 se centran en establecer, implementar, mantener y mejorar un Sistema de Gestión de la Energía (SGEn) en las organizaciones. Estos criterios se basan en el ciclo de mejora continua Planificar - Hacer – Verificar - Actuar (PDCA, por sus siglas en inglés) y se pueden resumir en los siguientes puntos clave:


    .row.justify-content-center.mb-5.fondoslyder.py-5(data-aos="zoom-in-left")
      .col-lg-11
        .tarjeta.bgslyder.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Contexto de la organización
                p La organización debe comprender su contexto interno y externo que puedan afectar su capacidad para lograr los resultados previstos de su SGEn. Esto incluye identificar las partes interesadas y sus requisitos.
              .col-md-5
                img(src='@/assets/curso/Tema3/1.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Liderazgo
                p La alta dirección debe demostrar su compromiso con el SGEn, estableciendo una política energética, asignando roles y responsabilidades, y asegurando la integración del SGEn en los procesos de negocio.
              .col-md-5
                img(src='@/assets/curso/Tema3/2.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-12.mb-4.mb-md-0
                h4.mb-4 Planificación
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Identificación de aspectos energéticos y Usos Significativos de la Energía (USE):] comprender cómo y dónde se consume la energía, identificando las áreas de mayor consumo o potencial de mejora. 
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Determinación de requisitos legales y otros requisitos:]  identificar y cumplir con las leyes y regulaciones aplicables, así como otros compromisos relacionados con la energía. 

                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Establecimiento de objetivos, metas energéticas e Indicadores de Desempeño Energético (IDEs):]  definir resultados específicos y medibles para mejorar el desempeño energético, y establecer indicadores para realizar el seguimiento del progreso. 

                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Planificación de acciones para alcanzar los objetivos energéticos:]  desarrollar planes para lograr los objetivos y metas, incluyendo la identificación de recursos, responsabilidades y plazos. 

                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Establecimiento de la Línea de Base Energética (LBE):]  definir un periodo de referencia para comparar el desempeño energético a lo largo del tiempo.

           
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Soporte
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Recursos:]  proporcionar los recursos necesarios para el establecimiento, implementación, mantenimiento y mejora del SGEn. 
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Competencia:]  asegurar que el personal relevante sea competente en base a su educación, formación o experiencia. 
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Conciencia:]  asegurar que el personal sea consciente de la política energética, los aspectos energéticos significativos y su contribución a la eficacia del SGEn. 
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Comunicación:]  establecer procesos para la comunicación interna y externa relevante para el SGEn. 
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Información documentada:]  mantener la información documentada requerida por la norma.
              .col-md-5
                img(src='@/assets/curso/Tema3/3.png', alt='')

            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Operación
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Planificación y control operacional:]  implementar y controlar los procesos necesarios para cumplir con los objetivos energéticos. Esto incluye establecer criterios de operación y mantenimiento para los USE. 
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Diseño:]   considerar las oportunidades de mejora del desempeño energético en el diseño de nuevas instalaciones, equipos, sistemas y procesos. 
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Adquisición:]   establecer criterios para la adquisición de productos, equipos y servicios que tengan impacto en el desempeño energético.
              .col-md-5
                img(src='@/assets/curso/Tema3/4.png', alt='')

            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Evaluación del desempeño
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Seguimiento, medición, análisis y evaluación:]   realizar el seguimiento y la medición de los IDEs, analizar los datos y evaluar el desempeño energético en comparación con los objetivos y la LBE. 
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b  Auditoría interna:]  realizar auditorías internas a intervalos planificados para verificar que el SGEn es conforme con los requisitos de la norma y se implementa y mantiene de manera eficaz. 
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b  Revisión por la dirección:]  la alta dirección debe revisar el SGEn a intervalos planificados para asegurar su conveniencia, adecuación, eficacia y alineación continúa con la dirección estratégica de la organización.
              .col-md-5
                img(src='@/assets/curso/Tema3/5.png', alt='')

            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Mejora
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b No conformidad y acción correctiva:]  abordar las no conformidades, tomar acciones para controlarlas y corregirlas, y analizar las causas raíz para prevenir su recurrencia. Mejora continua: mejorar continuamente la conveniencia, adecuación y eficacia del SGEn para mejorar el desempeño energético.
              .col-md-5
                img(src='@/assets/curso/Tema3/6.png', alt='')

    p.mb-4 Estos criterios proporcionan un marco estructurado para que las organizaciones gestionen su energía de manera sistemática, logrando mejoras en la eficiencia, reducción de costos y disminución del impacto ambiental.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 29.
          span  Esquema de aplicación de ISO 50001
        figure
          img.mb-3(src='@/assets/curso/Tema3/fig29.svg', alt='Diagrama del ciclo de gestión energética basado en mejora continua. Incluye política, planificación, implementación, verificación, auditoría, acciones correctivas y revisión por la gerencia.')
        figcaption Fuente: https://geoinnova.org/blog-territorio/iso-50001-sistema-de-gestion-energetica/

    p.mb-4 La norma ISO 50001 es de tipo voluntaria, y al igual que otras normas ISO es genérica, por lo que puede ser aplicada a todas las organizaciones sin importar su tipo, tamaño o actividad. Sin embargo, como en todo proceso de implementación de un sistema de gestión, el apoyo y compromiso de la alta dirección es fundamental para asegurar la disponibilidad de recursos necesarios para el logro de los objetivos planteados.











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
