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


    .row.justify-content-center.align-items-center.mb-5.bgtema3.p-4
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
      .col-lg-6
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
      .col-lg-1
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
