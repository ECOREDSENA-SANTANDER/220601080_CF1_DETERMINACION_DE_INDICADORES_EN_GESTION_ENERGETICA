<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Tipos y formas de energía
        
      .row.justify-content-center.align-items-center.bgtema1
        .col-lg-5
          img(src="@/assets/curso/Tema1/img01.png")
        .col-lg-6
          .row.justify-content-center
            .col-lg-2
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

      .row.justify-content-center.align-items-center.mb-5
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
        .col-lg-5
          img(src="@/assets/curso/Tema1/img02.png")
        .col-lg-7
          .row.justify-content-center
            .col-lg-2
              img(src="@/assets/curso/Tema1/rayo.svg")
            .col-lg-10
              p.mb-3 A lo largo de la historia, ciertas fuentes de energía han desempeñado un papel central en el abastecimiento energético global, dando origen a lo que hoy se conoce como energías convencionales. 
          p Estas fuentes, como los combustibles fósiles, la energía nuclear y la hidroeléctrica, han sido ampliamente utilizadas debido a su disponibilidad, confiabilidad y la infraestructura desarrollada a su alrededor. Aunque el panorama energético actual avanza hacia alternativas más sostenibles, comprender el funcionamiento y las implicaciones de estas formas tradicionales de energía sigue siendo fundamental para analizar el sistema energético global y planificar una transición responsable.

      h5.mb-5 Las energías convencionales reciben este nombre por varias razones interrelacionadas:

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


      .row.justify-content-center.align-items-center.mb-5.bgtema11
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span  Tipos de energía convencionales
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig2.svg', alt='Se presentan cuatro fuentes de energía no renovable: petróleo, carbón, gas natural y energía nuclear, todas dirigidas hacia un mismo objetivo: la producción de energía.')
          figcaption Fuente: https://geologiaweb.com/recursos-naturales/fuentes-energia-renovables-no-renovables/ 


      p.mb-3 A continuación, se describen las energías no renovables: 

      .row.justify-content-start.mb-5(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/rayo.svg")
            h3.bg2.py-2.w-card-text Combustibles fósiles

      .row.justify-content-center.align-items-center.mb-3
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

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1
          img(src="@/assets/curso/Tema1/rayo.svg")
        .col-lg-11
          p Las energías renovables son aquellas fuentes de energía que se obtienen de recursos naturales que se reponen a un ritmo igual o mayor al que se consumen, considerándose prácticamente inagotables a escala humana. Se caracterizan por tener un menor impacto ambiental en comparación con las energías convencionales o no renovables, ya que en su proceso de obtención y utilización no se generan o se minimizan las emisiones de gases de efecto invernadero y otros contaminantes.

      .row.justify-content-center.align-items-center.mb-5.bgtema11
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 9.
            span  Tipos de energía convencionales
          figure
            img.mb-3(src='@/assets/curso/Tema1/fig9.svg', alt='Ilustración representativa de diferentes fuentes de energías renovables, incluyendo energía solar, biomasa, energía geotérmica, energía eólica y energía de hidrógeno. Todas estas fuentes convergen en la generación de energía limpia.')
          figcaption Fuente: https://geologiaweb.com/recursos-naturales/fuentes-energia-renovables-no-renovables/ 


      .subt2.mb-5(data-aos="fade")
        h3.mb-0 a. Energía solar

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.bg10.p-4
          p La energía solar representa una de las fuentes más prometedoras dentro del conjunto de energías renovables, debido a su disponibilidad, bajo impacto ambiental y versatilidad de aplicaciones. Este tipo de energía aprovecha la radiación del sol para generar electricidad o calor, contribuyendo significativamente a la reducción de emisiones contaminantes y a la diversificación de la matriz energética. 
        .col-lg-3
          img(src="@/assets/curso/Tema1/img03.svg")
        .col-lg-4
          .row
            .col-lg-3.mb-3
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

      .row.justify-content-center.align-items-center.mb-5.bgtema12
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
        .col-lg-5
          img(src="@/assets/curso/Tema1/img04.png")
        .col-lg-7
          h5 Aprovecha la energía cinética del viento mediante turbinas eólicas (aerogeneradores) para generar electricidad. Es una fuente limpia y abundante en muchas regiones. 
          .row.justify-content-center
            .col-lg-2
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

      .row.justify-content-center.align-items-center
        .col-lg-1
          img(src="@/assets/curso/Tema1/rayo.svg")
        .col-lg-11
          p Una central geotérmica aprovecha el calor natural del interior de la Tierra para generar electricidad. Su funcionamiento básico implica la perforación de pozos profundos para acceder a reservorios geotérmicos que contienen agua caliente y vapor a alta presión. Este fluido geotérmico se extrae a la superficie y se utiliza para accionar turbinas conectadas a generadores eléctricos, convirtiendo la energía térmica en energía mecánica y luego en electricidad. Después de pasar por la turbina, el vapor se condensa y el agua (a veces después de pasar por una torre de enfriamiento) se reinyecta de nuevo al subsuelo para ser recalentada, creando un ciclo continuo.

      p.mb-4 Existen principalmente tres tipos de centrales geotérmicas, adaptadas a las características del recurso geotérmico disponible:
































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

<style lang="sass"></style>
