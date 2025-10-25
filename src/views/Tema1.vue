<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Tipos y formas de energía
        
      .row.justify-content-center.align-items-center.bgtema1(data-aos="zoom-in-left")
        .col-lg-5.mb-3
          img(src="@/assets/curso/Tema1/img01.png")
        .col-lg-6
          .row.justify-content-center
            .col-lg-2.col-3.mb-3
              img(src="@/assets/curso/Tema1/rayo.svg")
            .col-lg-10
              p Se analizan las distintas formas en que la energía se genera, transforma y aplica en los diversos procesos organizacionales. Comprender estas dinámicas es clave para identificar de manera precisa las fuentes de consumo energético y su impacto en el funcionamiento general de la entidad.
          p Este conocimiento permite no solo tener una visión integral de los procesos que demandan energía, sino también seleccionar los indicadores de gestión más adecuados para su monitoreo, control y mejora. Reconocer cómo fluye y se transforma la energía en cada área funcional es un paso clave para implementar estrategias eficientes que promuevan el ahorro, la sostenibilidad y el desempeño organizacional alineado con los objetivos energéticos.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
            h3.bg2.py-2.w-card-text Formas primarias y secundarias de energía 

      .row.align-items-center.p-4(data-aos="fade-down").mb-2
        .col-lg-12.col-12.px-lg-5.px-1
          .tarjeta--container.row(data-aos="zoom-in-left")
            .col-md-6.tarjeta.bg14.p-5.col-lg-6
              .row.align-items-end.mb-4
                .col-3
                  img(src='@/assets/curso/Tema1/1.svg', alt='')
                .col-5.col-9
                  .bg-color.w-fit.px-4
                    h2 Energía primaria
              p Se refiere a la energía que se encuentra en la naturaleza y no ha sido sometida a ningún proceso de conversión o transformación significativa. Ejemplos incluyen los combustibles fósiles (carbón, petróleo, gas natural), la energía solar, la energía eólica, la energía hidráulica (ríos, cascadas o presas), la energía geotérmica y la biomasa en su estado natural (leña). 


      
            .col-md-6.tarjeta.bg15.p-5.col-lg-6
              .row.align-items-end.mb-4
                .col-3
                  img(src='@/assets/curso/Tema1/2.svg', alt='')
                .col-9
                  .bg-color.w-fit.px-4
                    h2 Energía secundaria
              p Es la energía que se obtiene a partir de la transformación de la energía primaria. La forma más común de energía secundaria es la electricidad, que se genera a partir de la conversión de diversas fuentes primarias (quema de carbón, gas natural, fisión nuclear, energía hidráulica, solar, eólica, etc.). Otros ejemplos incluyen los combustibles refinados (gasolina, diésel) y el hidrógeno producido a partir de otras fuentes de energía. 
             

      p.mb-3 Comprender esta diferencia es crucial para analizar la cadena energética completa, desde la fuente original hasta el punto de consumo, y para evaluar las eficiencias de conversión y los impactos ambientales asociados a cada etapa.


      .tarjeta.bgvideo.p-3.mb-0(data-aos="zoom-in-left").mb-5
        .row.justify-content-center.align-items-center
          .col-lg-11
            .row.justify-content-around.align-items-center.mb-2.my-2
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/Tema2/play.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Tipos de Energía
                    p.mb-0 Para fortalecer el tema anteriormente plasmado, se presenta el siguiente video.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=boJpgNIY54Y" target="_blank")
                      span Ir al sitio
                      i.fas.fa-circle-play

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span  Energía primaria y secundaria
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig1.svg', alt='Diagrama que muestra la transformación de la energía primaria (como petróleo crudo, viento y biomasa) en energía secundaria (como electricidad, biocombustibles y productos del petróleo) hasta su consumo final.')
          figcaption Fuente: https://stem.guide/topic/fuentes-de-energia-primaria-y-secundaria/?lang=es

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
            h3.bg2.py-2.w-card-text Tipos de energía convencionales (combustibles fósiles, nuclear, hidroeléctrica)

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.mb-3
          img(src="@/assets/curso/Tema1/img02.png")
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.col-4.mb-3
              img(src="@/assets/curso/Tema1/rayo.svg")
            .col-lg-10
              p.mb-3 A lo largo de la historia, ciertas fuentes de energía han desempeñado un papel central en el abastecimiento energético global, dando origen a lo que hoy se conoce como energías convencionales. 
          p Estas fuentes, como los combustibles fósiles, la energía nuclear y la hidroeléctrica, han sido ampliamente utilizadas debido a su disponibilidad, confiabilidad y la infraestructura desarrollada a su alrededor. Aunque el panorama energético actual avanza hacia alternativas más sostenibles, comprender el funcionamiento y las implicaciones de estas formas tradicionales de energía sigue siendo fundamental para analizar el sistema energético global y planificar una transición responsable.

      h5.mb-4 Las energías convencionales reciben este nombre por varias razones interrelacionadas:

      TabsA.color-acento-botones.mb-4
        .tarjeta.color-acento-botones--borde.p-4(titulo="Uso histórico y generalizado")
          p.mb-0 Son las fuentes de energía que se han utilizado durante más tiempo y de forma más extendida a nivel mundial para satisfacer las necesidades energéticas de la sociedad, especialmente para la generación de electricidad y el transporte.
        .tarjeta.color-acento-botones--borde.p-4(titulo="Infraestructura establecida")
          p.mb-0 Existe una infraestructura bien desarrollada para la extracción, procesamiento, transporte y utilización de estas energías (por ejemplo, centrales termoeléctricas, refinerías, redes de distribución de gas y electricidad).
        .tarjeta.color-acento-botones--borde.p-4(titulo="Tecnología madura")
          p Las tecnologías para aprovechar estas fuentes de energía están relativamente maduras y bien establecidas, con procesos y equipos estandarizados.
        .tarjeta.color-acento-botones--borde.p-4(titulo="Dominio en el mercado energético")
          p Históricamente, y en muchos lugares aún hoy, estas fuentes han dominado la matriz energética global, representando la mayor parte de la producción y el consumo de energía.

      p.mb-4 Los principales ejemplos de energías convencionales son los combustibles fósiles (petróleo, gas natural y carbón), la energía nuclear y la energía hidroeléctrica (especialmente las grandes represas).


      .row.justify-content-center.align-items-center.mb-3.bgtema11
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span  Tipos de energía convencionales
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig2.svg', alt='Se presentan cuatro fuentes de energía no renovable: petróleo, carbón, gas natural y energía nuclear, todas dirigidas hacia un mismo objetivo: la producción de energía.')
          figcaption Fuente: https://geologiaweb.com/recursos-naturales/fuentes-energia-renovables-no-renovables/ 


      p.mb-1 A continuación, se describen las energías no renovables: 

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
            h3.bg2.py-2.w-card-text Combustibles fósiles

      .row.justify-content-center.align-items-center.mb-1(data-aos="zoom-in-left")
        .col-lg-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="Carbón")
              .col-md-11.mb-4.mb-md-0
                p Una roca sedimentaria rica en carbono, utilizada principalmente para la generación de electricidad en plantas termoeléctricas y en algunos procesos industriales. Su combustión genera importantes emisiones de gases de efecto invernadero.
                p Esta roca sedimentaria actualmente o combustible fósil es capaz de generar el 40 % de la electricidad en todo el mundo y alrededor del 25 % de toda la energía primaria, sin embargo, no todos los tipos de carbón son usados de la misma manera. 
                p Los carbones minerales se clasifican según su grado de carbonificación, que está determinado por la presión, la temperatura y el tiempo geológico al que ha sido sometida la materia vegetal original. De menor a mayor contenido de carbono y poder calorífico, los principales tipos son:
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Turba:] es el material orgánico inicial, parcialmente descompuesto, con un alto contenido de humedad y bajo poder calorífico. A menudo se considera un precursor del carbón más que un carbón en sí.
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Lignito:] también conocido como carbón pardo o café, tiene un mayor contenido de carbono y poder calorífico que la turba, pero aún con alta humedad y menor densidad energética que otros tipos de carbón.
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Hulla (carbón bituminoso):] es un carbón más denso, duro y con un mayor contenido de carbono y poder calorífico que el lignito. Es el tipo de carbón más abundante y utilizado para la generación de electricidad y la producción de coque (combustible sólido).
                  li.d-flex
                    i.fas.fa-angle-right2
                    p.mb-0 #[b Antracita:] es el carbón de mayor rango, con el contenido de carbono más alto (hasta el 95 %) y el mayor poder calorífico. Es duro, brillante y quema con poca llama y humo.
              .row.justify-content-center.align-items-center
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 3.
                    span  Formación y tipos de carbón
                  figure
                    img.mb-3(src='@/assets/curso/Tema1/fig3.svg', alt='Proceso de formación del carbón y sus tipos, desde un ambiente pantanoso inicial hasta etapas de enterramiento, compactación y metamorfismo. Se muestran cuatro tipos principales de carbón según su grado de carbonificación: turba, lignito, carbón bituminoso y antracita.')
                  figcaption Fuente: https://geologiaweb.com/rocas/tipos-carbon/

            .row.justify-content-center(titulo="Petróleo")
              .col-md-11.mb-4.mb-md-0
                p La palabra petróleo deriva del griego petra (piedra) y óleum (aceite), aceite de roca y se utilizó también en latín. El petróleo se formó a partir de los restos de organismos marinos antiguos, como plantas, algas y bacterias, sepultados por el movimiento de placas de la corteza terrestre y sometida durante millones de años a altas temperaturas y muy altas presiones, los compuestos que formaban a estos seres vivos se transformaron en fósiles orgánicos ricos en carbono e hidrógeno. Se definen como hidrocarburos a los compuestos que están constituidos principalmente por carbono (C) e hidrógeno (H). No debe confundirse con los carbohidratos, aunque las palabras se parecen, estos últimos contienen oxígeno en su fórmula.
                p En muchos lugares del mundo se encontró desde la antigüedad que, como resultado de fracturas en la corteza terrestre, aparecían derrames de un líquido viscoso negro que podía inflamarse y servir en algunas lámparas de aceite. 
                p.mb-4 Físicamente, el petróleo crudo es un líquido viscoso generalmente de color negro y en ocasiones amarillo. Coloquialmente se le conoce como “el oro negro”. El petróleo crudo es una mezcla heterogénea y compleja de compuestos orgánicos: hay gases, líquidos y sólidos, la mayoría insolubles en agua. Adicionalmente, el petróleo crudo contiene en menor cantidad algunos compuestos que contienen: oxígeno (O), nitrógeno (N), azufre (S) y metales como el sodio (Na), vanadio (V), níquel (Ni), hierro (Fe), cobre (Cu). En la industria, estas impurezas deben ser eliminadas durante el proceso de refinación para obtener productos derivados de mayor calidad.
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 4.
                    span  Composición promedio del crudo extraído del subsuelo
                  figure
                    img.mb-3(src='@/assets/curso/Tema1/fig4.svg', alt='Diagrama que muestra la composición química promedio del petróleo crudo. Incluye: carbono, hidrógeno, azufre, oxígeno, nitrógeno y trazas de metales como sodio, níquel, vanadio, hierro y cobre. NOTA: dados en porcentaje en peso (%)')
                    figcaption Fuente: https://acmor.org/publicaciones/del-petr-leo-crudo-a-los-combustibles-parte-i
              .col-md-11.mb-4.mb-md-0
                p.mb-4 Con frecuencia se escucha hablar de los crudos ligeros, los pesados e incluso, los extrapesados. Esta clasificación del petróleo se basa en su densidad, es decir, la masa que tiene un determinado volumen de petróleo, lo que está estrechamente ligado con su composición química. En el ámbito petrolero, se emplean los grados API (°API), de sus siglas en inglés American Petroleum Institute, para definirla, siendo los °API inversos a la densidad, mientras más altos los °API, más ligero es el crudo.  
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 5.
                    span  Clasificación del petróleo crudo según su densidad API
                  figure
                    img.mb-3(src='@/assets/curso/Tema1/fig5.svg', alt='TGráfico que muestra la clasificación del petróleo crudo según su densidad API. Se divide en cinco categorías: extrapesado, pesado, mediano, ligero  y súper ligero.')
                    figcaption Fuente: https://acmor.org/publicaciones/del-petr-leo-crudo-a-los-combustibles-parte-i
            .row.justify-content-center(titulo="Gas natural")
              .col-md-11.mb-4.mb-md-0
                p Una mezcla de hidrocarburos gaseosos, principalmente metano, utilizados para la generación de electricidad, calefacción doméstica e industrial, y como combustible vehicular. Su combustión produce menos emisiones que el carbón y el petróleo, pero sigue siendo una fuente no renovable. En su estado puro, se compone en su mayoría de metano (CH₄), pero también contiene pequeñas cantidades de etano (C₂H₆), propano (C₃H₈), butano (C₄H₁₀) o pentano (C₅H₁₂) y otros componentes.
                p.mb-4 Suele tener un 1 % de impurezas; el dióxido de carbono, oxígeno, helio, vapor de agua, etc., todos de combustión limpia.

              .row.justify-content-center.align-items-center.mb-4
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 6.
                    span  Composición del gas natural
                  figure
                    img.mb-3(src='@/assets/curso/Tema1/fig6.svg', alt='Gráfico que muestra los componentes del gas natural en su forma primaria, destacando el metano como principal, seguido de etano, propano, butano, pentanos y compuestos no hidrocarburos.')
                    figcaption Fuente: https://ovacen.com/gas-natural/
            .row.justify-content-center(titulo="Energía nuclear")
              .col-md-11.mb-4.mb-md-0
                p La energía nuclear aprovecha la energía contenida en el núcleo de los átomos. En las centrales nucleares actuales, esta energía se libera principalmente a través de la fisión nuclear, un proceso en el que núcleos de átomos pesados, como el uranio - 235, son bombardeados con neutrones, lo que provoca que se dividan en núcleos más pequeños, liberando una gran cantidad de energía en forma de calor y más neutrones, perpetuando una reacción en cadena controlada.
                p El calor generado por esta fisión se utiliza para calentar agua y producir vapor a alta presión. Este vapor acciona turbinas conectadas a generadores eléctricos, transformando la energía térmica en energía mecánica y finalmente en electricidad.
                p.mb-4 Aunque no emite gases de efecto invernadero durante su operación, la energía nuclear plantea desafíos en cuanto a la gestión de los residuos radiactivos y los riesgos de accidentes nucleares. Además, el uranio utilizado como combustible es un recurso no renovable. Se investiga activamente la fusión nuclear, un proceso que une núcleos atómicos ligeros para liberar energía (como ocurre en el sol), como una posible fuente de energía nuclear más limpia y abundante en el futuro, aunque aún se encuentra en fase experimental.
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-8
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 7.
                    span  Energía nuclear
                  figure
                    img.mb-3(src='@/assets/curso/Tema1/fig7.svg', alt='Diagrama ilustrativo del funcionamiento de una central nuclear. Se muestra el proceso desde la fisión del combustible en la vasija del reactor, la generación de vapor que impulsa una turbina conectada a un alternador, y la producción de electricidad. Incluye componentes como el edificio de contención, generadores de vapor, condensador, torre de refrigeración, transformador y sistema de recirculación de agua desde una fuente fría.')
                    figcaption Fuente: https://www.foronuclear.org/actualidad/a-fondo/cuales-son-los-distintos-componentes-de-una-central-nuclear/

            .row.justify-content-center(titulo="Energía hidroeléctrica")
              .col-md-11.mb-4.mb-md-0
                p Aprovecha la energía potencial del agua almacenada en embalses o el flujo de los ríos para generar electricidad mediante turbinas. Es una fuente renovable y de bajas emisiones durante su operación, pero la construcción de grandes represas puede tener impactos ambientales y sociales significativos.
                p Aunque la energía hidroeléctrica utiliza el flujo del agua, un recurso que se renueva naturalmente a través del ciclo hidrológico, no siempre se considera estrictamente renovable debido a los impactos ambientales y sociales significativos que pueden generar las grandes represas. 
                p.mb-4 Estos impactos incluyen la alteración de ecosistemas fluviales, la sedimentación, el desplazamiento de comunidades y la potencial liberación de gases de efecto invernadero (como el metano) proveniente de la descomposición de materia orgánica en los embalses. Por lo tanto, su sostenibilidad a largo plazo es un tema de debate y depende en gran medida del diseño, la escala y la gestión de los proyectos hidroeléctricos.
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 8.
                    span  Esquema básico de una central hidroeléctrica
                  figure
                    img.mb-3(src='@/assets/curso/Tema1/fig8.svg', alt='Ilustración esquemática del funcionamiento de una central hidroeléctrica. El agua almacenada en un embalse pasa por una compuerta y fluye a través de una tubería de paso, accionando una turbina conectada a un generador eléctrico. La electricidad generada es transportada por torres de tendido eléctrico. El agua utilizada es finalmente liberada por el desagüe de la presa.')
                    figcaption Fuente: https://www.ormazabal.com/energia-hidroelectrica-que-es-y-como-funciona/

      .row.justify-content-start.mb-5(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
            h3.bg2.py-2.w-card-text Tipos de energía renovables (solar, eólica, biomasa, geotérmica)

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-1.col-4.mb-3
          img(src="@/assets/curso/Tema1/rayo.svg")
        .col-lg-11
          p Las energías renovables son aquellas fuentes de energía que se obtienen de recursos naturales que se reponen a un ritmo igual o mayor al que se consumen, considerándose prácticamente inagotables a escala humana. Se caracterizan por tener un menor impacto ambiental en comparación con las energías convencionales o no renovables, ya que en su proceso de obtención y utilización no se generan o se minimizan las emisiones de gases de efecto invernadero y otros contaminantes.

      .row.justify-content-center.align-items-center.mb-5.bgtema11(data-aos="zoom-in-left")
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 9.
            span  Tipos de energía convencionales
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig9.svg', alt='Ilustración representativa de diferentes fuentes de energías renovables, incluyendo energía solar, biomasa, energía geotérmica, energía eólica y energía de hidrógeno. Todas estas fuentes convergen en la generación de energía limpia.')
          figcaption Fuente: https://geologiaweb.com/recursos-naturales/fuentes-energia-renovables-no-renovables/ 


      .subt2.mb-5(data-aos="fade")
        h3.mb-0 a. Energía solar

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.bg10.p-4.mb-3
          p La energía solar representa una de las fuentes más prometedoras dentro del conjunto de energías renovables, debido a su disponibilidad, bajo impacto ambiental y versatilidad de aplicaciones. Este tipo de energía aprovecha la radiación del sol para generar electricidad o calor, contribuyendo significativamente a la reducción de emisiones contaminantes y a la diversificación de la matriz energética. 
        .col-lg-3.d-none.d-lg-block
          img(src="@/assets/curso/Tema1/img03.svg")
        .col-lg-4
          .row
            .col-lg-3.mb-3.col-4
              img(src="@/assets/curso/Tema1/img04.svg")
            .col-lg-12
              p A continuación, se detalla la energía solar fotovoltaica, una tecnología ampliamente utilizada para la conversión directa de la luz solar en electricidad.

      .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
        .col-lg-12
          TabsC.color-acento-contenido
            .py-3.py-md-4(titulo="Fotovoltaica")
              .row.justify-content-center.align-items-center.p-4
                .col-md-5.mb-4.mb-md-0
                  p La energía solar fotovoltaica convierte directamente la luz solar en electricidad a través de dispositivos semiconductores llamados células fotovoltaicas, típicamente fabricadas con silicio. Cuando los fotones de la luz solar inciden sobre estas células, liberan electrones, generando una corriente eléctrica continua. Esta corriente luego se puede convertir en corriente alterna mediante un inversor para ser utilizada en hogares, industrias o inyectada a la red eléctrica. Los sistemas fotovoltaicos varían desde pequeños paneles en tejados hasta grandes parques solares, ofreciendo una fuente de energía limpia y renovable con un impacto ambiental relativamente bajo durante su operación.
                .col-md-5.mb-4.mb-md-0
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 10.
                    span  Diferentes aplicaciones de la energía solar fotovoltaica
                  figure
                    img.mb-3(src='@/assets/curso/Tema1/fig10.svg', alt='Ilustración que muestra cuatro aplicaciones comunes de la energía solar fotovoltaica: 1) instalación conectada a la red eléctrica en una vivienda urbana; 2) instalación aislada en una casa rural con paneles solares en el techo; 3) sistema de bombeo solar en una zona agrícola con paneles y bomba de agua; y 4) alumbrado solar con una lámpara pública equipada con panel solar.')
                  figcaption Fuente: https://aprende.com/blog/oficios/energia-solar/conocimientos-basicos-que-necesitas-para-realizar-tu-primera-instalacion-solar/
                        
            .py-3.py-md-4(titulo="Térmica")
              .row.justify-content-center.align-items-center.p-4
                .col-md-5.mb-4.mb-md-0
                  p La energía solar térmica aprovecha la radiación solar para producir calor. Se utilizan colectores solares térmicos (paneles solares térmicos) para absorber la energía del sol y transferir este calor a un fluido, que puede ser agua, aire u otro fluido caloportador. Este fluido caliente se utiliza directamente para diversas aplicaciones como el calentamiento de agua sanitaria, la calefacción de espacios, el calentamiento de piscinas o incluso para procesos industriales que requieren calor. En sistemas de mayor escala, la energía solar térmica también se puede utilizar para generar electricidad en plantas termosolares, donde el calor solar se concentra para producir vapor que acciona turbinas.
                .col-md-5.mb-4.mb-md-0
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 11.
                    span  Funcionamiento de un colector solar térmico
                  figure
                    img.mb-3(src='@/assets/curso/Tema1/fig11.svg', alt='Diagrama de un sistema de energía solar térmica que muestra el funcionamiento de un colector solar. El panel solar calienta un fluido (glicol) en un circuito cerrado, que transfiere el calor a un acumulador. El sistema permite calentar agua fría que entra por una tubería y sale como agua caliente para su uso doméstico.')
                  figcaption Fuente: https://www.solarlinkers.com/tipos-de-energia-solar-termica/
                
      p.mb-4 La energía solar puede ser aprovechada de dos formas principales: la fotovoltaica y la térmica. La energía solar fotovoltaica convierte la luz del sol en electricidad mediante paneles solares, siendo ideal para alimentar dispositivos eléctricos y sistemas conectados a la red o aislados. En cambio, la energía solar térmica utiliza el calor del sol para calentar agua, comúnmente empleada en usos domésticos e industriales. Mientras que la primera se enfoca en la generación de electricidad, la segunda se orienta al aprovechamiento térmico, lo que permite cubrir distintas necesidades energéticas con fuentes limpias y renovables.

      .row.justify-content-center.align-items-center.mb-5.bgtema12(data-aos="zoom-in-left")
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 12.
            span  Diferencia entre energía solar fotovoltaica y térmica
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig12.svg', alt='Comparación entre energía solar fotovoltaica (genera electricidad) y térmica (calienta agua), usando la luz y el calor del sol.')
          figcaption Fuente: https://becquel.com/blog/es/diferencias-entre-la-energia-solar-termica-y-la-fotovoltaica/

      .subt2.mb-5(data-aos="fade")
        h3.mb-0 b. Energía eólica 

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.mb-3
          img(src="@/assets/curso/Tema1/img04.png")
        .col-lg-7
          h5 Aprovecha la energía cinética del viento mediante turbinas eólicas (aerogeneradores) para generar electricidad. Es una fuente limpia y abundante en muchas regiones. 
          .row.justify-content-center
            .col-lg-2.col-4.mb-3
              img(src="@/assets/curso/Tema1/rayo.svg")
            .col-lg-10
              p La energía eólica también tiene una influencia indirecta pero fundamental del sol. El viento, que es la fuente de energía para los aerogeneradores, se genera principalmente por el calentamiento desigual de la superficie terrestre y la atmósfera por el sol. 
          p Este calentamiento desigual crea diferencias de temperatura y, por lo tanto, de presión en el aire. El aire caliente tiende a elevarse, mientras que el aire frío, más denso, se desplaza para ocupar su lugar, generando así el movimiento de masas de aire que conocemos como viento. Por lo tanto, sin la energía solar como motor de las dinámicas atmosféricas, la energía eólica como la conocemos no existiría.

      p.mb-4 Los aerogeneradores se clasifican principalmente según la orientación de su eje de rotación:

      .row.align-items-center.p-4(data-aos="fade-down").mb-2
        .col-lg-12.col-12.px-lg-5.px-1
          .tarjeta--container.row(data-aos="zoom-in-left")
            .col-md-6.tarjeta.bg14.p-5.col-lg-6
              .row.align-items-end.mb-4
                .col-3
                  img(src='@/assets/curso/Tema1/3.svg', alt='')
                .col-5.col-9
                  .bg-color.w-fit.px-4
                    h2 Aerogeneradores de eje horizontal
              p Son el tipo más común. Su eje de rotación es paralelo al suelo y las palas giran en un plano vertical perpendicular a la dirección del viento. Generalmente son más eficientes, especialmente en áreas con vientos fuertes y constantes, y suelen estar montados en torres altas para aprovechar mejor la velocidad del viento. Necesitan un sistema de orientación (veleta y motor) para alinearse continuamente con la dirección del viento.
            .col-md-6.tarjeta.bg15.p-5.col-lg-6
              .row.align-items-end.mb-4
                .col-3
                  img(src='@/assets/curso/Tema1/4.svg', alt='')
                .col-9
                  .bg-color.w-fit.px-4
                    h2 Aerogeneradores de eje vertical
              p Su eje de rotación es perpendicular al suelo. Tienen la ventaja de poder capturar el viento desde cualquier dirección sin necesidad de un sistema de orientación. Suelen ser más compactos y pueden instalarse en lugares con limitaciones de espacio o vientos turbulentos. Sin embargo, generalmente son menos eficientes que los HAWT (Horizontal Axis Wind Turbine), turbina eólica de eje horizontal. en la generación de energía, aunque presentan ventajas en términos de menor ruido y menor impacto visual en algunos entornos. Existen varios diseños dentro de los VAWT (Vertical Axis Wind Turbine), turbina eólica de eje vertical, como los tipos Darrieus y Savonius.


      .row.justify-content-center.align-items-center.mb-5.bgtema13.p-2
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 13.
            span  Tipos de aerogeneradores según su eje
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig13.svg', alt='Comparación entre turbinas eólicas de eje horizontal (como tripala y tipo americano) y turbinas de eje vertical (como tipo Darrieus y torre vorticosa).')
          figcaption Fuente: https://regioncentralrape.gov.co/wp-content/uploads/2020/04/Potencial-eo%CC%81lico-Regio%CC%81n-Central.pdf
      
      .subt2.mb-5(data-aos="fade")
        h3.mb-0 c. Biomasa

      .row.justify-content-center.align-items-center.mb-5.bgtema14.p-2
        .col-lg-6
          p Se refiere a la materia orgánica de origen vegetal o animal que puede utilizarse como fuente de energía. Esto incluye la quema de madera, residuos agrícolas, biocombustibles líquidos (etanol, biodiésel) y la digestión anaeróbica de residuos orgánicos para producir biogás. 
          p El sol es el motor fundamental detrás de la generación de biomasa. A través del proceso de fotosíntesis, las plantas utilizan la energía solar, el dióxido de carbono del aire y el agua para producir materia orgánica (biomasa) en forma de hojas, tallos, raíces y frutos. Esta biomasa almacena la energía solar en sus enlaces químicos y se convierte en una fuente potencial de energía renovable que puede utilizarse directamente como combustible (leña), transformarse en biocombustibles (etanol, biodiésel) o convertirse en biogás mediante procesos de digestión anaeróbica. En esencia, el sol provee la energía primaria que impulsa el crecimiento de toda la biomasa terrestre y acuática.
        .col-lg-5
          img(src='@/assets/curso/Tema1/img05.png', alt='')
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 14.
            span  Tipos de biomasa
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig14.svg', alt='Diagrama que muestra cómo la energía solar permite generar biomasa a partir de residuos agrícolas, forestales, ganaderos, urbanos e industriales agroalimentarios.')
          figcaption Fuente: https://www.topcable.com/blog-electric-cable/la-biomasa-fuente-de-energia-renovable-de-gran-potencial/


      .subt2.mb-5(data-aos="fade")
        h3.mb-0 d. Energía geotérmica

      .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
        .col-lg-1.col-4.mb-3
          img(src="@/assets/curso/Tema1/rayo.svg")
        .col-lg-11
          p Una central geotérmica aprovecha el calor natural del interior de la Tierra para generar electricidad. Su funcionamiento básico implica la perforación de pozos profundos para acceder a reservorios geotérmicos que contienen agua caliente y vapor a alta presión. Este fluido geotérmico se extrae a la superficie y se utiliza para accionar turbinas conectadas a generadores eléctricos, convirtiendo la energía térmica en energía mecánica y luego en electricidad. Después de pasar por la turbina, el vapor se condensa y el agua (a veces después de pasar por una torre de enfriamiento) se reinyecta de nuevo al subsuelo para ser recalentada, creando un ciclo continuo.

      p.mb-4 Existen principalmente tres tipos de centrales geotérmicas, adaptadas a las características del recurso geotérmico disponible:

      .row.justify-content-center.cursor-pointer.mb-3(data-aos="fade-down")
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/1.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.text-center Centrales de vapor seco
              p Utilizan directamente el vapor geotérmico a alta temperatura (más de 150 °C) para hacer girar las turbinas. Son las más sencillas y eficientes, pero requieren yacimientos que produzcan principalmente vapor seco.
        
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/2.png", alt="")
            .crd_hover_txt--body.text-center 
              h4.mb-3 Centrales de vapor de destello (#[em flash])
              p.mb-0 Son las más comunes. Utilizan agua geotérmica a alta temperatura (más de 200 °C) y presión. Al ascender por el pozo y llegar a la superficie con menor presión, parte del agua se evapora rápidamente (“destella”) convirtiéndose en vapor que acciona la turbina. Pueden tener uno o varios “destellos” para maximizar la producción de vapor.
        
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/3.png", alt="")
            .crd_hover_txt--body.text-center 
              h4.mb-3 Centrales de ciclo binario
              p.mb-0 Se utilizan para yacimientos con temperaturas más bajas (por debajo de 150 °C). El agua geotérmica caliente se utiliza para calentar un segundo fluido con un punto de ebullición más bajo (como isobutano o pentano) en un intercambiador de calor. Este segundo fluido se vaporiza y acciona la turbina. El fluido secundario se condensa y se reutiliza en un ciclo cerrado, sin emitir vapor de agua a la atmósfera.



      .row.justify-content-center.align-items-center.mb-2.bgtema15.p-2
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 15.
            span  Esquema básico de una central geotérmica
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig15.svg', alt='Esquema de una planta geotérmica que transforma el calor de la tierra en electricidad. El vapor generado mueve una turbina conectada a un alternador, produciendo energía que pasa por un transformador y se distribuye en la red eléctrica. El sistema incluye condensador, bomba y torre de refrigeración.')
          figcaption Fuente: https://amif.mx/como-funciona-una-central-geotermica-y-cuales-son-sus-beneficios/


      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1. Aplicaciones de los diferentes tipos de energía en la industria y el comercio

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade").mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img06.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p.mb-0 Toda acción humana, desde la más simple hasta la más compleja, requiere energía. Esta necesidad incluye tanto la energía interna que obtenemos de los alimentos para nuestras funciones vitales, como la energía externa que usamos con máquinas y sistemas para realizar tareas. 
          br
          br
          p Mientras que la demanda biológica de energía ha sido relativamente constante, el consumo de energía externa ha crecido exponencialmente con el avance de la tecnología y la civilización. Este aumento, impulsado por la industrialización y la urbanización, resalta la importancia de una gestión eficiente de la energía en el mundo actual.
          br
          br

      p.mb-4 El contenido se centra en cómo las organizaciones emplean la energía más allá de las necesidades humanas básicas, destacando la importancia de comprender sus fuentes y aplicaciones. Esta comprensión es fundamental para optimizar recursos, reducir costos operativos, mitigar el impacto ambiental y garantizar el cumplimiento de las normativas vigentes.

      .row.justify-content-center.align-items-center.mb-4.bgtema16.p-4
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 16.
            span  Evolución del consumo energético en la historia de la humanidad
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig16.svg', alt='Gráfico que muestra cómo las necesidades energéticas del ser humano han aumentado a lo largo del tiempo. Desde el Homo sapiens hasta el hombre actual, se observa un incremento en el uso de energía para alimentación, uso doméstico, industria/agricultura y transporte. La energía no alimenticia crece notablemente en la era industrial y contemporánea.')
          figcaption Fuente: https://portillobiogeo4.blogspot.com/2013/06/la-energia-en-nuestras-vidas.html

      p.mb-4 Ahora bien, la industria y el comercio dependen de una combinación de diferentes tipos de energía para sus diversas operaciones, con una tendencia creciente hacia la incorporación de fuentes renovables para mejorar la eficiencia, reducir costos y disminuir el impacto ambiental.

      .row.justify-content-center.mb-5.fondoslyder.py-5(data-aos="zoom-in-left")
        .col-lg-11
          .tarjeta.bgslyder.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.py-2
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Electricidad
                  p Es la forma de energía más versátil y se utiliza en prácticamente todos los sectores para iluminación, funcionamiento de equipos, procesos industriales, climatización, etc. Puede generarse a partir de diversas fuentes primarias. 
                  p En la industria, impulsa maquinaria, procesos de producción automatizados, sistemas de iluminación, climatización de plantas, soldadura, robótica y equipos de oficina. En el comercio, alimenta la iluminación de locales, sistemas de refrigeración y conservación de alimentos, equipos de punto de venta, sistemas de climatización para confort de clientes y empleados, y la infraestructura tecnológica (ordenadores, servidores, etc.).
                .col-md-5
                  img(src='@/assets/curso/Tema1/im1.png', alt='')
              
              .row.justify-content-center.py-2
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Calor
                  p Es esencial para muchos procesos industriales (calderas, hornos), sistemas de calefacción en edificios y para la producción de agua caliente sanitaria. Puede obtenerse de la quema de combustibles, la electricidad, la energía solar térmica o la geotermia. 
                  p El calor, obtenido principalmente de la quema de combustibles (gas natural, #[em fueloil], biomasa) o mediante electricidad (resistencias, bombas de calor), es crucial en la industria para procesos como la fundición de metales, la cocción de materiales, el secado, la generación de vapor para procesos y la calefacción industrial. En el comercio, se utiliza principalmente para la calefacción de espacios y la producción de agua caliente sanitaria en hoteles, restaurantes y otros establecimientos.
                .col-md-5
                  img(src='@/assets/curso/Tema1/im2.png', alt='')

              .row.justify-content-center.py-2
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Movimiento (energía mecánica)
                  p Impulsa maquinaria industrial, sistemas de transporte (vehículos eléctricos, montacargas), bombas y compresores. Se obtiene principalmente de la electricidad o de la combustión de combustibles. 
                  p Derivada de motores eléctricos o de combustión interna, se aplica en la industria para el funcionamiento de maquinaria pesada, sistemas de transporte interno (cintas transportadoras, grúas), ventiladores y compresores. En el comercio, se utiliza en menor medida, principalmente en sistemas de elevación (ascensores, montacargas) y en algunos equipos específicos.
                .col-md-5
                  img(src='@/assets/curso/Tema1/im3.png', alt='')
              
              .row.justify-content-center.py-2
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Combustibles
                  p Gasolina, diésel, gas natural, gas licuado de petróleo (GLP), son esenciales para el transporte de mercancías y personal tanto en la industria como en el comercio. Además, en algunas industrias, se utilizan directamente en procesos productivos (hornos, calderas) o para la generación de energía #[em in situ] (grupos electrógenos).
                .col-md-5
                  img(src='@/assets/curso/Tema1/im4.png', alt='')
              
              .row.justify-content-center.py-2
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Refrigeración
                  p Es crucial en la industria alimentaria, el almacenamiento y la climatización. Se basa en la transferencia de calor, generalmente utilizando electricidad para operar los sistemas de refrigeración.
                .col-md-5
                  img(src='@/assets/curso/Tema1/im5.png', alt='')

      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2. La  sostenibilidad

      p.mb-4 La sostenibilidad se refiere a la capacidad de satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades. Implica un equilibrio dinámico entre tres pilares fundamentales:


      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-4.col-7.mb-3
          img(src="@/assets/curso/Tema1/img07.png")
        .col-lg-7.col-md-8
          SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-6")
            .tarjeta.bg5.p-4
              .row.justify-content-center.mb-3
                .col-6.col-md-4
                  img(src='@/assets/curso/Tema1/sly1.svg' alt='')
              h5.text-center.bg2.p-1.text-white Sostenibilidad económica
              p.text-center Fomentar un crecimiento económico que sea inclusivo, eficiente en el uso de los recursos y que no genere daños ambientales a largo plazo.
          
            .tarjeta.bg5.p-4
              .row.justify-content-center.mb-3
                .col-6.col-md-4
                  img(src='@/assets/curso/Tema1/sly2.svg' alt='')
              h5.text-center.bg2.p-1.text-white Sostenibilidad social
              p.text-center Promover la equidad, la justicia social, la salud, la educación y el bienestar de todas las personas, garantizando la cohesión social y el respeto por la diversidad cultural.

            .tarjeta.bg5.p-4
              .row.justify-content-center.mb-3
                .col-6.col-md-4
                  img(src='@/assets/curso/Tema1/sly3.svg' alt='')
              h5.text-center.bg2.p-1.text-white Sostenibilidad ambiental
              p.text-center Proteger los recursos naturales, los ecosistemas y la biodiversidad, minimizando la contaminación, el agotamiento de recursos y los impactos negativos en el planeta.

      p.mb-4 En esencia, la sostenibilidad busca un desarrollo que sea viable a largo plazo, considerando las interconexiones entre estos tres pilares para asegurar un futuro próspero y equitativo para todos.

      .row.justify-content-center.align-items-center.mb-2.bgtema16.p-4
        .col-lg-4
          .titulo-sexto.color-acento-contenido
            h5 Figura 17.
            span  ESostenibilidad
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig17.svg', alt='Diagrama de Venn que representa el desarrollo sostenible como la intersección de tres dimensiones: social, económica y medioambiental. La unión entre lo social y lo económico es “equitativo”, entre lo económico y lo ambiental es “viable”, y entre lo social y lo ambiental es “vivible”.')
          figcaption Fuente: https://responsabilidadsocial.net/sostenibilidad-que-es-definicion-concepto-tipos-y-ejemplos/

      .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
            h3.bg2.py-2.w-card-text Objetivos de Desarrollo Sostenible (ODS) para el 2030

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-9 
          p Son un conjunto de 17 objetivos globales interconectados, adoptados por las Naciones Unidas en 2015 como parte de la Agenda 2030 para el desarrollo sostenible. Su propósito principal es abordar los desafíos más apremiantes que enfrenta el mundo y asegurar un futuro sostenible para todos.
          .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-left")
            .col-lg-6.p-0.d-none.d-lg-block.h-100
              img.h-100.w-100(src='@/assets/curso/Tema1/img09.png', alt='', style="object-fit: cover")
            .col-lg-6.col-sm-12.align-content-center.bg8.pc-3.p-4
              p Estos objetivos abarcan una amplia gama de temas cruciales, incluyendo la erradicación de la pobreza y el hambre, la promoción de la salud y el bienestar, la garantía de una educación de calidad, la igualdad de género, el acceso a agua limpia y saneamiento, la energía asequible y no contaminante, el crecimiento económico sostenible y el trabajo decente, la construcción de infraestructuras resilientes, la reducción de las desigualdades, la creación de ciudades y comunidades sostenibles, la promoción de la producción y el consumo responsables, la adopción de medidas urgentes contra el cambio climático, la conservación de los océanos y los ecosistemas terrestres, el fomento de la paz, la justicia y las instituciones sólidas, y el fortalecimiento de las alianzas globales para lograr estos objetivos.
        .col-lg-3.d-none.d-lg-block
          img(src="@/assets/curso/Tema1/img08.png")


      .row.justify-content-center.align-items-center.mb-2.bgtema17.p-4(data-aos="zoom-in-left")
        .col-lg-10.mb-4
          .titulo-sexto.color-acento-contenido
            h5 Figura 18.
            span  Objetivos de desarrollo sostenible por la ONU
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig18.png', alt='Iconos de los 17 Objetivos de Desarrollo Sostenible de la ONU, que abordan desafíos sociales, económicos y ambientales para lograr un futuro sostenible.')
          figcaption Fuente: https://www.un.org/sustainabledevelopment/es/2015/09/la-asamblea-general-adopta-la-agenda-2030-para-el-desarrollo-sostenible/
        p La Agenda 2030 busca un enfoque integrado, reconociendo que el progreso en un área afecta los resultados en otras, y que el desarrollo debe equilibrar la sostenibilidad económica, social y ambiental. Los ODS son un llamado a la acción para todos los países (desarrollados y en desarrollo) y para todos los actores (gobiernos, sector privado, sociedad civil y ciudadanos) para trabajar de manera colaborativa en la consecución de un mundo más justo, próspero y sostenible para el año 2030.






























</template>

<script>
export default {
  name: 'Tema1',
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
