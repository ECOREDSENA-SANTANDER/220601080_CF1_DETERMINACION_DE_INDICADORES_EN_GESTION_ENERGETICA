<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Identificación de variables de consumo energético


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-up")
      .col-lg-9
        p La identificación de las variables que inciden en el consumo energético es esencial para comprender el comportamiento energético de una organización. Este proceso permite analizar los factores que afectan la demanda de energía, establecer relaciones entre las actividades operativas y el uso energético, y sentar las bases para un diagnóstico preciso. Reconocer estas variables es clave para definir indicadores de gestión energética que sean pertinentes, medibles y orientados a la mejora continua.
        .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-left")
          .col-lg-6.p-0.d-none.d-lg-block.h-100
            img.h-100.w-100(src='@/assets/curso/Tema4/img02.svg', alt='', style="object-fit: cover")
          .col-lg-6.col-sm-12.align-content-center.bg8.pc-3.p-4
            h4.bg9.p-1 ¿Qué son las variables de consumo energético?
            p Son aquellos factores o parámetros que tienen una influencia directa en la cantidad de energía que una organización utiliza. Identificar estas variables es crucial porque nos permite comprender por qué se consume energía y cuánto se consume en relación con diferentes actividades, procesos o condiciones operativas. 
            p Estas variables pueden ser de naturaleza muy diversa y dependen del tipo de organización, sus actividades principales y los procesos que lleva a cabo. Al comprender estas relaciones, podemos empezar a buscar formas de optimizar el consumo y mejorar la eficiencia.
      .col-lg-3.col-6.col-md-4
        img(src='@/assets/curso/Tema4/img01.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Clasificación de las variables (por fuente de energía, por área, por proceso, etc.)

    p.mb-5 Para facilitar su identificación y análisis, las variables de consumo energético se pueden clasificar según diferentes criterios: 
      
    TabsA.color-acento-botones(data-aos="fade-up")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Fuente de energía")
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Electricidad:] consumo en kWh para iluminación, climatización, maquinaria, equipos de oficina, etc.
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Combustibles fósiles:] consumo de gas natural (en m³ o BTU), #[em fueloil] (en litros o galones), carbón (en toneladas) para calefacción, procesos industriales, generación de vapor, etc.
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Biomasa:] consumo de leña, #[em pellets], residuos agrícolas (en kg o toneladas) para generación de calor o electricidad.
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Otras fuentes:] consumo de energía solar térmica (en GJ o kWh equivalentes), etc.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Área o departamento")
        p.mb-0 Consumo energético específico de diferentes áreas funcionales dentro de la organización (producción, oficinas administrativas, almacén, laboratorios, etc.). Esto ayuda a identificar dónde se concentra el mayor consumo.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Proceso o actividad")
        p Consumo energético asociado a procesos productivos específicos (soldadura, fundición, ensamblaje), servicios (iluminación, climatización, transporte), o actividades (operación de equipos, uso de herramientas).
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tipo de uso final")
        p Cómo se utiliza la energía dentro de la organización (calefacción, ventilación, aire acondicionado - HVAC, iluminación, fuerza motriz, calor de proceso, refrigeración, transporte).
      .tarjeta.color-acento-botones--borde.p-4(titulo="Factores de influencia")
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Variables operacionales:]  nivel de producción, número de unidades producidas, horas de funcionamiento de equipos, número de empleados, ocupación de edificios, etc.
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Variables ambientales:]   temperatura exterior, humedad, radiación solar (que afectan la climatización e iluminación).
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Variables de diseño: ] eficiencia de los equipos instalados, aislamiento de edificios, diseño de procesos.
          li.d-flex
            i.fas.fa-angle-right2
            p.mb-0 #[b Variables de comportamiento:]  hábitos de uso de la energía por parte del personal.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Metodologías para la identificación de variables relevantes

    p.mb-5 La identificación de las variables de consumo energético relevantes requiere un enfoque sistemático. Algunas metodologías útiles incluyen: 

    .row.justify-content-center.align-items-center.mb-3.bgtema4.p-4(data-aos="fade-up")
      .col-lg-4.col-7.mb-3
        img(src="@/assets/curso/Tema4/img03.svg")
      .col-lg-6.col-md-8
        SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema4/1.svg' alt='')
            h5.text-center.bg1.p-1.text-white #[em Brainstorming]
            p.text-center Reunir a un equipo multidisciplinario para generar una lista exhaustiva de posibles variables que puedan influir en el consumo energético de la organización.
        
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema4/2.svg' alt='')
            h5.text-center.bg1.p-1.text-white Análisis de documentos
            p.text-center Revisar facturas de energía, diagramas de flujo de procesos, especificaciones de equipos, planos de instalaciones, informes de producción, etc., para identificar dónde y cómo se utiliza la energía.
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema4/3.svg' alt='')
            h5.text-center.bg1.p-1.text-white Inspecciones y recorridos energéticos
            p.text-center Realizar visitas a las instalaciones para observar los procesos, los equipos en funcionamiento y las prácticas de uso de la energía, identificando posibles variables.
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema4/4.svg' alt='')
            h5.text-center.bg1.p-1.text-white Entrevistas con el personal
            p.text-center Hablar con los responsables de diferentes áreas y procesos para comprender cómo utilizan la energía y qué factores creen que influyen en su consumo.


          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema4/5.svg' alt='')
            h5.text-center.bg1.p-1.text-white Diagramas de causa - efecto 
            p.text-center #[b (Diagrama de Ishikawa o espina de pescado):] utilizar esta herramienta para identificar las posibles causas (variables) del consumo energético en diferentes categorías (mano de obra, maquinaria, materiales, métodos, medio ambiente, medición).
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema4/6.svg' alt='')
            h5.text-center.bg1.p-1.text-white Análisis de regresión (básico)
            p.text-center Si se dispone de datos históricos de consumo y posibles variables, se pueden realizar análisis estadísticos sencillos para identificar correlaciones.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Criterios para la selección de variables relevantes

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up")
      .col-lg-5.mb-3.col-10
        img(src="@/assets/curso/Tema4/img03.png")
      .col-lg-7
        p No todas las variables identificadas serán igualmente importantes. Es crucial enfocarse en aquellas que: 
        .row.justify-content-center.align-items-center.bg10.p-4
          .col-lg-12
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Tienen un impacto significativo en el consumo total de energía.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Son medibles y se pueden recopilar datos de manera confiable.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Son controlables o influenciables por la organización.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Están relacionadas con los objetivos de gestión energética.

    .tarjeta.bgvideo.p-3.mb-0(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-11
          .row.justify-content-around.align-items-center.mb-2.my-2
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/Tema4/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Identifying key variables and interactions in statistical models of building energy consumption using regularization
                  p.mb-0 Con el fin de ampliar y consolidar los conocimientos abordados, a continuación se presenta un documento complementario que profundiza en los aspectos clave del tema desarrollado.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.sciencedirect.com/science/article/pii/S0360544215001590" target="_blank")
                    span Descargar
                    i.fas.fa-download
    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1. Herramientas para el seguimiento y registro de datos de consumo

    p.mb-3 Una vez identificadas las variables relevantes, es necesario establecer mecanismos para recopilar y registrar los datos de consumo y de las variables influyentes. Algunas herramientas básicas incluyen: 

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-up")
      .col-lg-3.col-7.mb-3.col-md-6
        img(src='@/assets/curso/Tema4/img04.png', alt='')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Hojas de cálculo (Excel, Google Sheets)")
            .col-md-12.mb-4.mb-md-0
              p Son herramientas versátiles para registrar, organizar y analizar datos de consumo y variables relacionadas a lo largo del tiempo. Permiten crear gráficos y realizar cálculos básicos.
          .row(titulo="Formatos de registro manual")
            .col-md-12.mb-4.mb-md-0
              p Para variables que no se miden automáticamente, se pueden diseñar formatos sencillos para que el personal registre datos de forma regular (por ejemplo, horas de funcionamiento de equipos, lecturas de contadores).
          .row(titulo="Sistemas de gestión de edificios (<i>BMS - Building Management Systems)</i>")
            .col-md-12.mb-4.mb-md-0
              p En edificios grandes, estos sistemas pueden recopilar datos de consumo de electricidad, climatización, iluminación, etc., de forma automatizada.
          .row(titulo="Sistemas de control de procesos industriales (<i>SCADA - Supervisory Control and Data Acquisition)</i>")
            .col-md-12.mb-4.mb-md-0
              p En la industria, estos sistemas monitorizan y registran datos de consumo energético de maquinaria y procesos en tiempo real.
          .row(titulo="Contadores inteligentes")
            .col-md-12.mb-4.mb-md-0
              p Permiten la lectura remota y el registro detallado del consumo de electricidad, gas o agua.

    p.mb-2 Es importante definir claramente qué datos se van a recopilar, con qué frecuencia, quién será el responsable y dónde se almacenarán para asegurar la calidad y la disponibilidad de la información.

         




















</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass">
.circl-arrow .slyder-f__btn i
  font-size: 1.2rem
  background-color: #F8CD20
  //background-color: $color-acento-contenido
  //color: $white
  height: 46px
  width: 46px
  padding: 5px
  border-radius: 500px
  display: flex
  justify-content: center
  align-items: center
</style>
