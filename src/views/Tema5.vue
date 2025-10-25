<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Procesos consumidores de energía
    
    .row.justify-content-center.mb-3.bg3.p-4(data-aos="zoom-in-left")
      .col-lg-1.col-4.col-md-2.mb-3
        img(src='@/assets/curso/Tema2/img01.svg', alt='')
      .col-lg-11
        p La identificación y el análisis de los procesos específicos responsables del consumo energético dentro de una organización son fundamentales para una gestión eficiente. Comprender en detalle cómo y dónde se utiliza la energía permite enfocar los esfuerzos de mejora en las áreas de mayor impacto, facilitando la toma de decisiones estratégicas orientadas a la optimización del rendimiento energético.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Identificación y mapeo de procesos con alto consumo energético

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-9.mb-3
        img(src="@/assets/curso/Tema5/img01.png")
      .col-lg-7
        p.bg11.p-4 El punto de partida para una gestión energética eficaz consiste en reconocer cuáles procesos dentro de la organización concentran el mayor consumo de energía, esta identificación permite priorizar esfuerzos y orientar las acciones de mejora hacia las áreas de mayor impacto. Los procesos de alto consumo pueden variar ampliamente según el sector y las actividades específicas de la empresa.
        .row.justify-content-center.align-items-center
          .col-lg-12
            p A continuación, se presentan algunos ejemplos comunes:


    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-up")
      .col-lg-4.col-7.mb-3
        img(src="@/assets/curso/Tema5/img02.png")
      .col-lg-7.col-md-8
        SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema5/1.svg' alt='')
            h5.text-center.bg2.p-1.text-white Procesos productivos
            p.text-center Incluyen la operación de maquinaria industrial (motores, bombas, compresores), sistemas de calefacción y enfriamiento, transformación de materiales (fundición, soldadura, extrusión) y transporte interno (bandas transportadoras, elevadores).
        
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema5/2.svg' alt='')
            h5.text-center.bg2.p-1.text-white Sistemas de climatización (HVAC)
            p.text-center Equipos de calefacción, ventilación y aire acondicionado presentes en oficinas, hospitales, centros comerciales, entre otros.

          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema5/3.svg' alt='')
            h5.text-center.bg2.p-1.text-white Iluminación
            p.text-center Consumo energético derivado de sistemas de iluminación interior y exterior en distintas áreas operativas y administrativas.
          
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema5/4.svg' alt='')
            h5.text-center.bg2.p-1.text-white Equipos de oficina
            p.text-center Computadores, servidores, impresoras, fotocopiadoras y otros dispositivos de uso administrativo.
          
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema5/5.svg' alt='')
            h5.text-center.bg2.p-1.text-white Transporte
            p.text-center Flotas de vehículos operativos como automóviles, camiones o montacargas.
          
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema5/6.svg' alt='')
            h5.text-center.bg2.p-1.text-white Servicios generales
            p.text-center Sistemas como bombeo de agua, tratamiento de aguas residuales, generación de vapor y aire comprimido.
          
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-4
                img(src='@/assets/curso/Tema5/7.svg' alt='')
            h5.text-center.bg2.p-1.text-white Procesos específicos del sector
            p.text-center Por ejemplo, en hoteles, el uso de cocinas industriales, lavanderías y piscinas climatizadas; o en el sector salud, el consumo de equipos médicos de alta tecnología.


    p.mb-2 La identificación de estos procesos se puede realizar utilizando herramientas como análisis de facturación energética, diagramas de flujo de procesos, inspecciones en campo y entrevistas al personal técnico y operativo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Diagnóstico de los procesos que consumen la mayor cantidad de energía


    p.mb-4 Los procesos que consumen una cantidad significativa de energía suelen compartir algunas características: 


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.mb-4
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Funcionamiento continuo o prolongado ")
            .col-md-12.mb-4.mb-md-0
              p Equipos que operan durante muchas horas al día o incluso las 24 horas (por ejemplo, sistemas de refrigeración industrial, algunos procesos productivos).
          .row(numero="2" titulo="Requerimientos de potencia elevados")
            .col-md-12.mb-4.mb-md-0
              p Equipos o sistemas que demandan una gran cantidad de energía en un momento dado (por ejemplo, hornos industriales, grandes motores).
          .row(numero="3" titulo="Ineficiencias inherentes")
            .col-md-12.mb-4.mb-md-0
              p Procesos o equipos tecnológicamente obsoletos o mal mantenidos que tienen un bajo rendimiento energético.
          .row(numero="4" titulo="Variabilidad en la demanda")
            .col-md-12.mb-4.mb-md-0
              p Analizar los resultados de la verificación,
          .row(numero="5" titulo="Pérdidas significativas")
            .col-md-12.mb-4.mb-md-0
              p Procesos cuya demanda de energía fluctúa significativamente según la producción, la ocupación o las condiciones ambientales, lo que puede llevar a un consumo ineficiente en momentos de baja demanda.
      .col-lg-6.col-10.col-md-8
        img(src="@/assets/curso/Tema5/img03.png")

    p.mb-2 Identificar estos procesos de alto consumo y comprender sus características es fundamental para priorizar las acciones de mejora de la eficiencia energética.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Metodología para el análisis del consumo energético por proceso

    p Una vez identificados los procesos clave, es necesario analizarlos en detalle para comprender su consumo energético y las oportunidades de mejora.
    p.mb-3 Algunas metodologías incluyen: 

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-3.col-7.mb-3.col-md-5
        img(src='@/assets/curso/Tema5/img04.png', alt='')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Medición y monitorización específica")
            .col-md-12.mb-4.mb-md-0
              p Instalar contadores o submedidores para medir el consumo de energía de procesos o equipos individuales a lo largo del tiempo. Esto permite obtener datos precisos sobre los patrones de consumo.
          .row(titulo="Análisis del ciclo de vida")
            .col-md-12.mb-4.mb-md-0
              p Evaluar el consumo energético en todas las etapas de un proceso, desde la entrada de materias primas hasta la salida del producto o servicio.
          .row(titulo="Diagramas de flujo de energía")
            .col-md-12.mb-4.mb-md-0
              p Representar gráficamente el flujo de energía dentro de un proceso, identificando los puntos de entrada, salida y las pérdidas.
          .row(titulo="Balance de energía")
            .col-md-12.mb-4.mb-md-0
              p Realizar un balance cuantitativo de la energía que entra y sale de un proceso o equipo para identificar las pérdidas y determinar su eficiencia.
          .row(titulo="Análisis de sensibilidad")
            .col-md-12.mb-4.mb-md-0
              p Evaluar cómo el consumo energético de un proceso se ve afectado por cambios en las variables operacionales (por ejemplo, la velocidad de una máquina, la temperatura de un horno, el caudal de una bomba).
          .row(titulo="<i>Benchmarking</i> interno y externo")
            .col-md-12.mb-4.mb-md-0
              p Comparar el consumo energético de un proceso con el de otros procesos similares dentro de la misma organización o con las mejores prácticas de la industria.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Factores que influyen en el consumo energético de los procesos

    p.mb-3 Los factores que influyen en el consumo energético de los procesos son diversos y dependen de la naturaleza específica del proceso. Sin embargo, podemos agruparlos en categorías principales:


    .row.justify-content-center.mb-5.fondoslyder.py-5(data-aos="zoom-in-left")
      .col-lg-11
        .tarjeta.bgslyder.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Variables operacionales
                p Son las condiciones bajo las cuales se lleva a cabo el proceso. Incluyen la velocidad de producción, la capacidad de utilización de los equipos, la duración del funcionamiento, la temperatura y presión de operación, el caudal de fluidos, y las tasas de alimentación de materiales. Cambios en estas variables impactan directamente la cantidad de energía requerida.
              .col-md-5
                img(src='@/assets/curso/Tema5/1.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Características del equipo
                p La eficiencia energética inherente al diseño y la tecnología del equipo utilizado es crucial. Equipos más antiguos o con tecnologías menos eficientes consumirán más energía para realizar la misma tarea. El tamaño y la capacidad del equipo también influyen, así como su estado de mantenimiento.
              .col-md-5
                img(src='@/assets/curso/Tema5/2.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Diseño del proceso
                p La secuencia de las etapas del proceso, la integración de diferentes operaciones, y la optimización de los flujos de materiales y energía pueden tener un impacto significativo en el consumo total. Un diseño ineficiente puede requerir más energía para lograr el mismo resultado.
              .col-md-5
                img(src='@/assets/curso/Tema5/3.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Condiciones ambientales
                p La temperatura ambiente, la humedad, y la iluminación natural disponible pueden afectar el consumo de energía asociado a la climatización, la ventilación y la iluminación de los espacios donde se desarrolla el proceso.
              .col-md-5
                img(src='@/assets/curso/Tema5/4.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Materias primas y materiales
                p Las propiedades físicas y químicas de los materiales que se procesan pueden influir en la energía necesaria para su transformación (por ejemplo, la temperatura de fusión de un metal). La cantidad y la calidad de estos materiales también son factores relevantes.
              .col-md-5
                img(src='@/assets/curso/Tema5/5.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Gestión y control
                p Las prácticas de gestión energética implementadas, los sistemas de control automatizados, la formación del personal, y los procedimientos operativos tienen un impacto directo en la eficiencia con la que se utiliza la energía en los procesos.
              .col-md-5
                img(src='@/assets/curso/Tema5/6.png', alt='')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Factores externos
                p En algunos casos, factores externos como las tarifas energéticas, las regulaciones gubernamentales, y los incentivos a la eficiencia energética pueden influir en las decisiones y las inversiones relacionadas con el consumo energético de los procesos.
              .col-md-5
                img(src='@/assets/curso/Tema5/7.png', alt='')


    p.mb-3 Comprender y analizar estos factores para cada proceso específico dentro de una organización es fundamental para identificar oportunidades de mejora de la eficiencia energética y para establecer indicadores de gestión energética relevantes.
    
    .tarjeta.bgvideo.p-3.mb-0(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-11
          .row.justify-content-around.align-items-center.mb-2.my-2
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/Tema2/play.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Procesos en gestión energética.
                  p.mb-0 Para fortalecer el tema anteriormente plasmado, se presenta el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=EJWx9Hndy5o&ab_channel=GeocienciasTincopa%28CienciasdelaTierra%29" target="_blank")
                    span Ir al sitio
                    i.fas.fa-circle-play
    separador
    #t_5_1.titulo-segundo.mb-5(data-aos="fade-up")
      h2 5.1. Importancia de la eficiencia energética en los procesos productivos y de servicios

    p.mb-3 La eficiencia energética en los procesos consumidores de energía tiene un impacto directo y significativo en la rentabilidad y la sostenibilidad de una organización: 

    .row.justify-content-center.align-items-center.bgtema5.p-4
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Reducción de costos operativos
              p Un menor consumo de energía se traduce en menores facturas de energía, lo que mejora la competitividad y la rentabilidad.
            .col-md-5
              figure
                img(src='@/assets/curso/Tema5/im1.png', alt='Texto que describa la imagen')
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/Tema5/im2.png', alt='Texto que describa la imagen')
         
            .col-md-7
              h4.text-izq Aumento de la productividad
              p.text-izq La optimización de los procesos puede llevar a una mayor producción con la misma o menor cantidad de energía.

          .row
            .col-md-7.mb-4.mb-md-0
              h4 Mejora de la calidad
              p Procesos más controlados y eficientes pueden resultar en una mayor calidad de los productos o servicios.
            .col-md-5
              figure
                img(src='@/assets/curso/Tema5/im3.png', alt='Texto que describa la imagen')
      
          .row
            .col-md-7.mb-4.mb-md-0
              h4.text-izq Reducción del impacto ambiental
              p.text-izq Un menor consumo de energía implica una menor demanda de recursos naturales y una disminución de las emisiones contaminantes.
            .col-md-5
              figure
                img(src='@/assets/curso/Tema5/im4.png', alt='Texto que describa la imagen')   
          .row
            .col-md-5
              figure
                img(src='@/assets/curso/Tema5/im5.png', alt='Texto que describa la imagen')
            .col-md-7.mb-4.mb-md-0
              h4 Cumplimiento normativo
              p La eficiencia energética puede ayudar a cumplir con las regulaciones y normativas ambientales y energéticas.
            
          .row
            .col-md-7
              h4.text-izq Mejora de la imagen corporativa
              p.text-izq Las empresas que demuestran un compromiso con la eficiencia energética y la sostenibilidad suelen tener una mejor reputación entre clientes, inversores y la sociedad en general.
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/Tema5/im6.png', alt='Texto que describa la imagen')


















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
</style>
