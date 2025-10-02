<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 El fortalecimiento de competencias en gestión energética constituye el eje central de este recurso. Su propósito es proporcionar herramientas que permitan comprender, diagnosticar y formular indicadores orientados a mejorar el desempeño energético en las organizaciones, conforme a los lineamientos establecidos por la norma ISO 50001.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 También, se promueve una visión crítica y proactiva frente a los desafíos energéticos actuales, incentivando la toma de decisiones informadas y el análisis estratégico del entorno organizacional. A través de los contenidos y actividades propuestas, se busca potenciar la capacidad para implementar una gestión energética eficiente, sostenible y alineada con los objetivos institucionales. Se invita a explorar cada sección con atención y compromiso, como base para avanzar con seguridad en este proceso de aprendizaje. ¡Muchos éxitos!
        br
        br
          
         

</template>

<script>
export default {
  name: 'Introduccion',
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
