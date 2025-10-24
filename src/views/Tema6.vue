<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Caracterización del consumo energético


    .row.justify-content-center.mb-2
      .col-lg-5.col-10.mb-3.col-md-8
        img(src="@/assets/curso/Tema6/img01.png")
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left").bg5
          .col-lg-2.col-4.mb-3.col-md-2
            img(src='@/assets/curso/Tema2/img01.svg', alt='')
          .col-lg-10.p-3
            p En este tema, aprenderá a analizar en detalle los datos de consumo energético recopilados, identificando patrones, tendencias y anomalías. Esta caracterización profunda es esencial para comprender cómo, cuándo y dónde se utiliza la energía en una organización, sentando las bases para la definición de indicadores de gestión energética significativos y la implementación de estrategias de mejora.
        p La caracterización del consumo energético va más allá de simplemente registrar cuánta energía se utiliza. Implica un análisis detallado de los datos recopilados para obtener información valiosa sobre los patrones de consumo, la influencia de diferentes variables, la eficiencia de los procesos y la presencia de posibles ineficiencias.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text ¿Por qué es importante caracterizar el consumo energético? 

    .row.justify-content-center.align-items-center.mb-1(data-aos="fade-up").bgtema6.p-4
      .col-lg-3.col-7.mb-3.col-md-5
        img(src="@/assets/curso/Tema6/img02.svg")
      .col-lg-7.col-md-8
        SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema6/1.svg' alt='')
            h5.text-center.bg1.p-1.text-white Comprensión profunda
            p.text-center Permite entender cómo y cuándo se utiliza la energía en diferentes áreas, procesos y equipos de la organización.
        
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema6/2.svg' alt='')
            h5.text-center.bg1.p-1.text-white Identificación de oportunidades
            p.text-center Facilita la detección de áreas donde el consumo es elevado o ineficiente, señalando posibles oportunidades de ahorro y mejora.
   
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema6/3.svg' alt='')
            h5.text-center.bg1.p-1.text-white Establecimiento de líneas base
            p.text-center Proporciona datos históricos detallados para establecer líneas base energéticas (LBE) confiables, que son cruciales para medir el progreso de las iniciativas de eficiencia energética.
          
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema6/4.svg' alt='')
            h5.text-center.bg1.p-1.text-white Desarrollo de indicadores
            p.text-center La comprensión de los patrones de consumo y la influencia de las variables permite la definición de Indicadores de Desempeño Energético (IDEs) relevantes y significativos.
          
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema6/5.svg' alt='')
            h5.text-center.bg1.p-1.text-white Validación de medidas
            p.text-center Ayuda a verificar el impacto de las medidas de eficiencia energética implementadas al comparar los patrones de consumo antes y después de la intervención.
          
          .tarjeta.bg9.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema6/6.svg' alt='')
            h5.text-center.bg1.p-1.text-white Detección de anomalías
            p.text-center Permite identificar consumos inusuales que podrían indicar problemas operativos, fallos de equipos o incluso pérdidas de energía inadvertidas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Recolección y organización de datos de consumo energético

    p.mb-3 La base para una caracterización efectiva del consumo energético reside en la recolección sistemática y la organización lógica de los datos. Sin datos precisos y bien estructurados, cualquier análisis posterior será limitado. 
    
    .row.justify-content-center.mb-4
      .col-lg-9
        .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-left")
          .col-lg-6.p-0.d-none.d-lg-block.h-100
            img.h-100.w-100(src='@/assets/curso/Tema6/img04.svg', alt='', style="object-fit: cover")
          .col-lg-6.col-sm-12.align-content-center.bg8.pc-3.p-4
            h4.bg9.p-1 Fuentes de datos
            p.mb-0 Es crucial identificar todas las fuentes de datos de consumo energético dentro de la organización. Estas pueden incluir: 
      .col-lg-3.col-10.col-md-7
        img(src="@/assets/curso/Tema6/img03.png")

    .row.justify-content-center.mb-2
      .col-lg-3.col-7.mb-3.col-md-5
        img(src='@/assets/curso/Tema6/img05.png', alt='')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Facturas de servicios públicos")
            .col-md-12.mb-4.mb-md-0
              p Electricidad, gas natural, agua (si se utiliza para calefacción o refrigeración), combustibles (diésel, fueloil).
          .row(titulo="Contadores internos o submedidores")
            .col-md-12.mb-4.mb-md-0
              p Instalados en áreas, procesos o equipos específicos para un seguimiento más detallado.
          .row(titulo="Sistemas de gestión de edificios (BMS)")
            .col-md-12.mb-4.mb-md-0
              p Proporcionan datos en tiempo real sobre el consumo de diferentes sistemas (HVAC, iluminación).
          .row(titulo="Sistemas de control de procesos industriales (SCADA)")
            .col-md-12.mb-4.mb-md-0
              p Ofrecen datos detallados del consumo energético de la maquinaria y los procesos productivos.
          .row(titulo="Registros manuales")
            .col-md-12.mb-4.mb-md-0
              p Llenados por el personal para equipos o procesos que no cuentan con medición automatizada.
          .row(titulo="Informes de producción")
            .col-md-12.mb-4.mb-md-0
              p Pueden contener información relevante sobre las horas de funcionamiento de los equipos y la cantidad de producto elaborado.
          .row(titulo="Métodos de recolección")
            .col-md-12.mb-4.mb-md-0
              p la forma en que se recopilan los datos debe ser consistente y confiable. Esto puede implicar: 
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span 1
                | #[b Lectura manual de contadores:] realizada a intervalos regulares (diario, semanal, mensual).
                li
                .lista-ol--cuadro__vineta
                  span 1
                | #[b Recolección automática de datos:] a través de sistemas BMS, SCADA o contadores inteligentes.

                li
                .lista-ol--cuadro__vineta
                  span 1
                | #[b Digitalización de facturas y registros:] para facilitar el análisis y el almacenamiento.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Organización de Datos

    p.mb-4 Una vez recolectados, los datos deben organizarse de manera lógica para su posterior análisis. Esto puede incluir: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10.mb-3
        .row.bg12.p-4
          h4 Creación de bases de datos u hojas de cálculo
          p Con campos claros para la fecha, hora, fuente de energía, área / proceso, cantidad consumida, unidades de medida y cualquier otra variable relevante (por ejemplo, temperatura exterior, nivel de producción).
        .row.bg13.p-4
          h4 Estandarización de unidades
          p Convertir todas las cantidades de energía a una unidad común (por ejemplo, kWh o MJ) para facilitar la comparación.
        .row.bg12.p-4
          h4 Validación de datos
          p Revisar los datos para identificar posibles errores o inconsistencias.
        .row.bg13.p-4
          h4 Almacenamiento seguro y accesible
          p Asegurar que los datos estén protegidos y puedan ser consultados fácilmente para el análisis.
      .col-lg-2.col-6.col-md-4
        img(src='@/assets/curso/Tema6/img06.svg', alt='')


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Análisis de patrones de consumo (horarios, días, temporadas)

    p.mb-4 El análisis de los patrones de consumo energético en diferentes escalas temporales revela información valiosa sobre cómo y cuándo se utiliza la energía.
    .row.justify-content-center.mb-5.fondoslyder.py-5(data-aos="zoom-in-left")
      .col-lg-11
        .tarjeta.bgslyder.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Análisis horario
                p Examinar el consumo de energía a lo largo del día puede identificar picos de demanda (que pueden generar costos más altos por tarifas horarias), carga base (el consumo mínimo constante), y oportunidades para desplazar cargas a horarios de menor demanda. Gráficos de carga diaria son herramientas útiles aquí.
              .col-md-5
                img(src='@/assets/curso/Tema6/im1.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Análisis diario
                p Analizar el consumo por día de la semana puede mostrar variaciones relacionadas con los niveles de actividad (por ejemplo, menor consumo los fines de semana). Esto ayuda a optimizar la operación de los equipos y sistemas según los horarios de funcionamiento reales.
              .col-md-5
                img(src='@/assets/curso/Tema6/im1.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Análisis por temporadas
                p Observar el consumo a lo largo del año puede revelar patrones estacionales influenciados por factores como la temperatura exterior (afectando la climatización), las horas de luz (afectando la iluminación) o los ciclos de producción. Comprender estas variaciones permite planificar el uso de la energía y anticipar las necesidades futuras.
              .col-md-5
                img(src='@/assets/curso/Tema6/im3.png', alt='')



    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Herramientas para el análisis de patrones


    .row.justify-content-center.mb-4
      .col-lg-12
        .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-left")
          .col-lg-5.p-0.d-none.d-lg-block.h-100
            img.h-100.w-100(src='@/assets/curso/Tema6/img06.png', alt='', style="object-fit: cover")
          .col-lg-7.col-sm-12.align-content-center.bg4.pc-3.p-4
            h4.bg1.p-1.col-lg-7.text-white Herramientas para el análisis de patrones
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-2 #[b Gráficos de líneas:] para visualizar tendencias a lo largo del tiempo.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-2 #[b Gráficos de barras:] para comparar el consumo entre diferentes períodos (horas, días, meses).
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-2 #[b Gráficos de caja y bigotes:] para mostrar la distribución del consumo y los valores atípicos.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Mapas de calor:] para visualizar patrones de consumo en matrices de tiempo (por ejemplo, horas del día vs. días de la semana).
   

    p El análisis de datos a lo largo del tiempo permite identificar tendencias (aumentos o disminuciones graduales del consumo) y variaciones (fluctuaciones cíclicas o estacionales). 

    .row.align-items-center.p-4(data-aos="fade-down").mb-2
        .col-lg-12.col-12.px-lg-5.px-1
          .tarjeta--container.row(data-aos="zoom-in-left")
            .col-md-6.tarjeta.bg14.p-5.col-lg-6
              .row.align-items-end.mb-4
                .col-3
                  img(src='@/assets/curso/Tema6/img07.svg', alt='')
                .col-5.col-9
                  .bg-color.w-fit.px-4
                    h2 Tendencias
              p Pueden indicar un aumento de la eficiencia debido a la implementación de medidas, un deterioro del rendimiento de los equipos con el tiempo, o un cambio en los niveles de actividad de la organización
      
            .col-md-6.tarjeta.bg15.p-5.col-lg-6
              .row.align-items-end.mb-4
                .col-3
                  img(src='@/assets/curso/Tema6/img08.svg', alt='')
                .col-9
                  .bg-color.w-fit.px-4
                    h2 Variaciones
              p Pueden estar relacionadas con
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Ciclos diarios:] mayor consumo durante las horas de operación y menor durante la noche.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Ciclos semanales:] menor consumo durante los fines de semana o días festivos.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Ciclos estacionales:] mayor consumo en verano (por aire acondicionado) o en invierno (por calefacción).
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Variaciones en la producción:] el consumo energético puede estar directamente ligado al nivel de actividad productiva

    p Comprender estas tendencias y variaciones es fundamental para establecer expectativas realistas de consumo y para identificar desviaciones significativas.
    
    .tarjeta.bgvideo.p-3.mb-0(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-11
          .row.justify-content-around.align-items-center.mb-2.my-2
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/Tema2/play.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Caracterización energética. Análisis de datos.
                  p.mb-0 Para fortalecer el tema anteriormente plasmado, se presenta el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=UT8yR_e-4wo&ab_channel=DavidAlejandroSifuentesGodoy" target="_blank")
                    span Ir al sitio
                    i.fas.fa-circle-play


    separador
    #t_6_1.titulo-segundo.mb-5(data-aos="fade-up")
      h2 6.1. Elaboración de diagramas de flujo de energía

    p.mb-4 Un diagrama de flujo de energía es una representación visual del camino que sigue la energía a través de un proceso o un sistema. Ayuda a identificar dónde entra la energía, cómo se transforma, dónde se utiliza y dónde se pierde. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Pasos para la elaboración


    .row.justify-content-center.align-items-center.bgtema5.p-4
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Definir el alcance
              p ¿Qué proceso o sistema se va a analizar?
            .col-md-5
              figure
                img(src='@/assets/curso/Tema6/1.png', alt='Texto que describa la imagen')
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/Tema6/2.png', alt='Texto que describa la imagen')
         
            .col-md-7
              h4.text-izq Identificar las fuentes de energía
              p.text-izq ¿Qué tipo de energía entra al sistema (electricidad, combustible, etc.) y en qué cantidad?

          .row
            .col-md-7.mb-4.mb-md-0
              h4 Mapear los equipos y las etapas del proceso
              p Identificar los principales componentes y las diferentes fases del proceso.
            .col-md-5
              figure
                img(src='@/assets/curso/Tema6/3.png', alt='Texto que describa la imagen')
      
          .row
            .col-md-7.mb-4.mb-md-0
              h4.text-izq Indicar los flujos de energía
              p.text-izq Dibujar flechas que muestren la dirección del flujo de energía entre los componentes.
            .col-md-5
              figure
                img(src='@/assets/curso/Tema6/4.png', alt='Texto que describa la imagen')   
          .row
            .col-md-5
              figure
                img(src='@/assets/curso/Tema6/5.png', alt='Texto que describa la imagen')
            .col-md-7.mb-4.mb-md-0
              h4 Cuantificar la energía en cada etapa
              p Si es posible, indicar la cantidad de energía que entra, se transforma y sale de cada componente.
            
          .row
            .col-md-7
              h4.text-izq Identificar las pérdidas de energía
              p.text-izq Señalar dónde se disipa la energía en forma de calor u otras pérdidas no deseadas.
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/Tema6/6.png', alt='Texto que describa la imagen')

          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/Tema6/7.png', alt='Texto que describa la imagen')
            .col-md-7
              h4.text-izq Visualizar la energía útil
              p.text-izq Destacar la energía que realmente realiza el trabajo deseado.
            
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Beneficios de los diagramas de flujo de energía 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.mb-4
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Claridad visual")
            .col-md-12.mb-4.mb-md-0
              p Facilitan la comprensión del uso de la energía en procesos complejos.
          .row(numero="2" titulo="Identificación de ineficiencias")
            .col-md-12.mb-4.mb-md-0
              p Ayudan a localizar puntos donde se producen pérdidas significativas.
          .row(numero="3" titulo="Comunicación")
            .col-md-12.mb-4.mb-md-0
              p Son una herramienta efectiva para comunicar los hallazgos del análisis energético a diferentes partes interesadas.
          .row(numero="4" titulo="Base para la mejora")
            .col-md-12.mb-4.mb-md-0
              p Proporcionan una base para identificar oportunidades de optimización y ahorro energético.
      .col-lg-6.col-10.col-md-8
        img(src="@/assets/curso/Tema6/img09.png")


    separador
    #t_6_2.titulo-segundo.mb-5
      h2 6.2. #[em Benchmarking] interno y externo (introducción)

    p.mb-3 El benchmarking es un proceso de comparación del desempeño energético de una organización o parte de ella con el de otras entidades (externo) o con períodos anteriores dentro de la misma organización (interno). Es una herramienta poderosa para identificar oportunidades de mejora y establecer objetivos realistas. 

    TabsB.color-acento-contenido.escala-grises
      .py-4.py-md-5(titulo="<i>Benchmarking</i> externo " :icono="require('@/assets/curso/Tema6/externo.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            h4 #[em Benchmarking] externo 
            ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Comparación con organizaciones similares:] analizar el consumo energético de otras empresas del mismo sector, tamaño y con procesos similares. Esto proporciona una perspectiva del desempeño relativo y ayuda a establecer objetivos ambiciosos pero alcanzables.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Comparación con estándares de la industria:] utilizar datos y métricas de referencia publicados por asociaciones industriales o agencias gubernamentales para evaluar el desempeño.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Identificación de mejores prácticas:] aprender de las estrategias y tecnologías implementadas por organizaciones líderes en eficiencia energética.
          .col-lg-3.col-md-6
            figure
              img(src='@/assets/curso/Tema6/img10.svg', alt='Texto que describa la imagen')

      
      .py-4.py-md-5(titulo="<i>Benchmarking</i> interno " :icono="require('@/assets/curso/Tema6/interno.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            h4 #[em Benchmarking] interno
            ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Comparación entre áreas o departamentos:] analizar el consumo energético de diferentes áreas funcionales dentro de la misma organización para identificar las más eficientes y las que tienen margen de mejora.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Comparación temporal:] evaluar el desempeño energético actual con el de períodos anteriores para identificar tendencias y medir el impacto de las acciones implementadas.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Comparación entre equipos o procesos similares:] analizar el consumo de energía de equipos o procesos idénticos para identificar las mejores prácticas operativas.
          .col-lg-3.col-md-6
            figure
              img(src='@/assets/curso/Tema6/img11.svg', alt='Texto que describa la imagen')


















</template>

<script>
export default {
  name: 'Tema5',
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
.escala-grises .tabs-b__tab
  &.tabs-b__tab--active .tabs-b__tab__icon
    filter: grayscale(0)
    transition: all 0.2s ease-out
  .tabs-b__tab__icon
    filter: grayscale(1)
    transition: all 0.2s ease-out
</style>
