<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El diagnóstico energético según la norma ISO 50001 implica comprender e integrar aspectos clave como los tipos y formas de energía, las unidades de medida, la eficiencia energética, las variables de consumo, los procesos consumidores y la caracterización del consumo. Conocer las distintas fuentes energéticas y sus aplicaciones permite identificar oportunidades de mejora, mientras que el dominio de unidades y equipos de medición posibilita un análisis técnico preciso. La eficiencia energética, guiada por estándares como la ISO 50001, fomenta el uso racional de los recursos, alineando desempeño y sostenibilidad. Identificar las variables que influyen en el consumo y analizar los procesos críticos permite enfocar acciones de mejora. Finalmente, caracterizar el uso energético mediante diagramas de flujo y comparaciones (benchmarking) proporciona una base sólida para la toma de decisiones estratégicas, impulsando una gestión energética eficiente y responsable.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama que resume los componentes del diagnóstico energético según la norma ISO 50001, incluyendo seis áreas clave: tipos de energía, unidades de medida, eficiencia energética, variables de consumo, procesos consumidores y caracterización del consumo, cada una con sus respectivos elementos asociados como herramientas, conceptos normativos y metodologías de análisis.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
