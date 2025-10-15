<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Unidades de medida de la energía

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-1.col-3.mb-3.col-md-2
        img(src='@/assets/curso/Tema2/img01.svg', alt='')
      .col-lg-11
        p Para abordar adecuadamente este tema, comenzaremos por familiarizarnos con las unidades fundamentales empleadas para cuantificar la energía y la potencia. Comprender estas unidades y sus relaciones es esencial para analizar datos de consumo energético, calcular indicadores y comunicar información técnica con precisión.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Unidades básicas del Sistema Internacional (SI) relacionadas con la energía (joule, watt)

    TabsC.color-acento-contenido
      .bg3.py-3.py-md-4(titulo="Joule (J)")
        .row.align-items-center.justify-content-center
          .col-md-5.mb-3.col-10
            figure
              img(src='@/assets/curso/Tema2/img02.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0.col-11
            p El joule es la unidad fundamental de energía en el Sistema Internacional de Unidades (SI). Representa la cantidad de trabajo realizado cuando una fuerza de un newton desplaza un objeto a una distancia de un metro en la dirección de la fuerza. También se utiliza para medir el calor. 
            h5 Ejemplo: 
            p La energía cinética de un objeto en movimiento, la energía potencial almacenada en un resorte comprimido, o la cantidad de calor liberada en una reacción química se miden en joules.
          
  
      
      .bg3.py-3.py-md-4(titulo="Watt (W)")(data-aos="zoom-in-left")
        .row.align-items-center.justify-content-center
          .col-md-5.mb-3.col-10
            figure
              img(src='@/assets/curso/Tema2/img03.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0.col-11
            p El watt es la unidad fundamental de potencia en el SI. La potencia es la tasa a la que se transfiere o se consume energía por unidad de tiempo. Un watt equivale a un joule por segundo (1 W = 1 J / s). 
            h5 Ejemplo: 
            p La potencia de una bombilla eléctrica (cuánta energía consume por segundo) se mide en watt. Un motor tiene una potencia nominal en watt, indicando la tasa a la que puede realizar trabajo.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
          h3.bg2.py-2.w-card-text Unidades de medida comunes en el sector energético (kWh, BTU, termias, etc.)

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10
        .row.bg4.p-4
          h4 Kilovatio - hora (kWh)
          p Esta es una unidad de energía muy común, especialmente para la facturación de electricidad. Un kWh es la cantidad de energía consumida o producida por un dispositivo de un kilovatio (1000 watts) funcionando durante una hora. 
          p #[b Ejemplo:] si una bombilla de 100 watts se mantiene encendida durante 10 horas, consume 100 W * 10 h = 1000 Wh = 1 kWh de energía.
        .row.bg5.p-4
          h4 British Thermal Unit (BTU) o Unidad Térmica Británica
          p Es una unidad de energía utilizada principalmente en los Estados Unidos y en algunos contextos de calefacción y refrigeración. Un BTU es aproximadamente la cantidad de energía necesaria para elevar la temperatura de una libra de agua en un grado Fahrenheit a presión atmosférica estándar. 
        .row.bg4.p-4
          h4 Termia (th)
          p Es una unidad de energía que varía ligeramente según la región. En algunos contextos, una termia equivale a 100000 BTU. Se utiliza a menudo para medir el consumo de gas natural. 
      .col-lg-2.col-6.col-md-4
        img(src='@/assets/curso/Tema2/img04.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/Tema2/img05.svg', alt='')
      .col-lg-10
        .row.bg4.p-4
          h4 Caloría (cal) y kilocaloría (kcal)
          p Aunque más comunes en el contexto de la alimentación, la caloría es una unidad de energía. Una kilocaloría (también conocida como “Caloría” con C mayúscula) equivale a 1000 calorías. En algunos procesos industriales que involucran calor, estas unidades pueden aparecer.     
        .row.bg5.p-4
          h4 Megajoule (MJ) y Gigajoule (GJ): 
          p Son múltiplos del joule y se utilizan para medir grandes cantidades de energía, como el consumo energético a nivel industrial o nacional. (1 MJ = 10⁶ J, 1 GJ = 10⁹ J).
        

    .tarjeta.bgvideo.p-3.mb-0(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-11
          .row.justify-content-around.align-items-center.mb-2.my-2
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/Tema2/play.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Unidades de medidas electicas  ¿Cuáles son las más utilizadas?
                  p.mb-0 Para fortalecer el tema anteriormente plasmado, se presenta el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=s9TLe_T9ICY&ab_channel=AcademiaKaussal" target="_blank")
                    span Ir al sitio
                    i.fas.fa-circle-play

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1. Conversión entre diferentes unidades de energía

    p.mb-4 Es importante poder convertir entre diferentes unidades de energía para comparar datos, realizar cálculos y entender informes técnicos. A continuación, se proporcionan algunos factores de conversión comunes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 1. 
            span Conversión entre diferentes unidades
          .tabla-a.color-acento-contenido 
            table(alt='La tabla muestra conversiones de energía entre kWh, joules, megajoules, BTU, termia, calorías y kilocalorías.')
              thead
                tr
                  th.texto-izquierda.bg6.w-25 Unidad original
                  th.texto-izquierda.bg6.w-25 Unidad destino
                  th.texto-izquierda.bg6 Factor de conversión (aproximado)
              tbody
                tr.gris
                  td #[b Kilovatio - hora (kWh)]
                  td Joule (J)
                  td 1 kWh = 3.6 × 10⁶ J
                tr
                  td #[b Kilovatio - hora (kWh)]
                  td Megajoule (MJ)
                  td 1 kWh = 3.6 MJ
                tr.gris
                  td #[b British Thermal Unit (BTU)]
                  td Joule (J)
                  td 1 BTU ≈ 1055 J
                tr
                  td #[b Joule (J)]
                  td Kilovatio - hora (kWh)
                  td 1 J ≈ 2.78 × 10⁻⁷ kWh
                tr.gris
                  td #[b Megajoule (MJ)]
                  td Kilovatio - hora (kWh)
                  td 1 MJ ≈ 0.278 kWh
                tr
                  td #[b Termia (th) (IT)]
                  td Joule (J)
                  td 1 th ≈ 4.187 × 10⁶ J
                tr.gris
                  td #[b Termia (th) (IT)]
                  td Kilovatio - hora (kWh)
                  td 1 th ≈ 1.163 kWh
                tr
                  td #[b Caloría (cal)]
                  td Joule (J)
                  td 1 cal ≈ 4.184 J
                tr.gris
                  td #[b Kilocaloría (kcal)]
                  td Joule (J)
                  td 1 cal ≈ 4.184 J
                tr
                  td #[b Kilocaloría (kcal)]
                  td Kilovatio - hora (kWh)
                  td 1 kcal ≈ 1.162 × 10⁻³ kWh

          figcaption #[b Nota:] IT hace referencia a la sigla en inglés #[em #[b International Table]] (tabla internacional), que se utiliza como estándar para definir valores de conversión precisos.

    p.mb-4 A continuación, algunos elementos clave para el estudio de las unidades de energía:

     .row.justify-content-center(data-aos="flip-up")  
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema2/1.png', alt='tema1')
          .p-2.mb-4
            .row.justify-content-center
              h4.text-center.bg7.p-1.col-lg-8 #[em International Table (IT)]
              p.text-center.izqtext  Esta sigla hace referencia a una tabla internacional comúnmente utilizada en ingeniería para definir unidades como la caloría y la termia. Pueden existir pequeñas variaciones según otras definiciones, por lo que es importante revisar la fuente según el contexto.
      
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema2/2.png', alt='tema1')
          .p-2.mb-4
            .row.justify-content-center
              h4.text-center.bg7.p-1.col-lg-11 Factores de conversión aproximados
              p.text-center.izqtext Los valores presentados permiten hacer conversiones rápidas entre unidades energéticas. No obstante, en cálculos de alta precisión, se recomienda consultar fuentes técnicas especializadas.
   
      
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema2/3.png', alt='tema1')
          .p-2.mb-4
            .row.justify-content-center
              h4.text-center.bg7.p-1.col-lg-12 Potencia y energía (conceptos distintos)
              p.text-center.izqtext  El watt (W) representa potencia (cantidad de energía por unidad de tiempo). Para obtener energía, es necesario multiplicar la potencia por el tiempo (por ejemplo: W × h = Wh). Comprender esta diferencia es fundamental para el análisis del consumo energético.



    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2. Medición y equipos de medición de la energía (introducción)

    p.mb-4 Para poder gestionar y analizar el consumo energético, es fundamental medirlo de manera precisa. En esta introducción, conocerá algunos de los equipos básicos utilizados para la medición: 


    .row.justify-content-center.align-items-center.mb-5.fondoslyder.py-5(data-aos="zoom-in-left")
      .col-lg-11
        .tarjeta.bgslyder.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Medidores de electricidad
                p Dispositivos que miden la cantidad de energía eléctrica consumida en kWh. Pueden ser electromecánicos o electrónicos (inteligentes).
              .col-md-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 21.
                  span  Medidor de energía eléctrica
                figure
                  img(src='@/assets/curso/Tema2/fig21.png', alt='Medidor de energía trifásico digital con pantalla electrónica, diseñado para registrar con precisión el consumo eléctrico en instalaciones industriales o comerciales.')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Contadores de gas
                p Miden el volumen de gas natural consumido, generalmente en metros cúbicos o pies cúbicos. Este volumen luego se convierte a unidades de energía (como termias o BTU) utilizando el poder calorífico del gas.
              .col-md-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 22.
                  span  Contador de gas
                figure
                  img(src='@/assets/curso/Tema2/fig22.png', alt='Medidor de gas natural con su respectivo regulador de presión. El conjunto incluye un contador de volumen con display numérico y conexiones metálicas, diseñado para registrar el consumo de gas en instalaciones residenciales o comerciales.')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Medidores de flujo de líquidos
                p Utilizados para medir el consumo de combustibles líquidos (como fueloil) en litros o galones. Para obtener la energía consumida, se debe conocer el poder calorífico del combustible.
              .col-md-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 23.
                  span  Medidores de flujo de líquidos
                figure
                  img(src='@/assets/curso/Tema2/fig23.png', alt='Medidor de agua industrial. El dispositivo cuenta con bridas de conexión a ambos lados, una carátula frontal con visor de lectura analógica. Está diseñado para medir grandes volúmenes de agua en redes hidráulicas.')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Sensores de temperatura y presión
                p Importantes para monitorear sistemas térmicos y calcular la energía transferida en forma de calor.
              .col-md-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 24.
                  span  Sensores de presión y temperatura
                figure
                  img(src='@/assets/curso/Tema2/fig24.png', alt='Conjunto de sensores y transmisores de presión industriales, incluyendo dispositivos digitales con pantalla, manómetros analógicos y transductores compactos. Estos equipos permiten medir la presión de gases o líquidos en procesos automatizados, facilitando el control y la supervisión eficiente en entornos industriales.')
            
            .row.justify-content-center.py-2
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Analizadores de calidad de la energía
                p Equipos más avanzados que miden diversos parámetros eléctricos (voltaje, corriente, factor de potencia, armónicos) y pueden ayudar a identificar problemas de eficiencia.
              .col-md-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 25.
                  span  Instrumentos de medición convencionales
                figure
                  img(src='@/assets/curso/Tema2/fig25.png', alt='Conjunto de instrumentos empleados en mediciones eléctricas, entre los que se encuentran multímetros digitales y analógicos, medidores de resistencia, amperímetros, pinzas amperimétricas, un osciloscopio, un medidor de aislamiento y un contador de energía. Estos equipos permiten diagnosticar, verificar y analizar parámetros eléctricos como voltaje, corriente, resistencia y formas de onda en sistemas eléctricos.')
                  figcaption Fuente: https://electronicaonline.net/electronica/instrumentos-de-medicion-electronica/

   























</template>

<script>
export default {
  name: 'Tema2',
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
