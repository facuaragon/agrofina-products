export const products = [
  {
    link: "24",
    nombre: "2.4 D Agrofina LV®",
    thumbnail: "24/24.png",
    imagen: "24/2-4-D-LV-1-798x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "2,4D Ester etilhexilico 89%",
    formulacion: "Concentrado Emulsionable (EC)",
    descripcion:
      "2,4D LV es un herbicida selectivo de baja volatilidad, sistémico y de acción hormonal, destinado a combatir malezas de hoja ancha en determinados cultivos. Se deben tomar las precauciones necesarias para evitar la deriva del producto. 2,4D LV puede ser empleado sin riesgos en la proximidad de los cultivos susceptibles, tomando las precauciones necesarias para evitar la deriva del producto.",
    accion: "Sistémica.",
    mecanismoDeAccion:
      "Acción similar al acido indolacetico (Auxinas sinteticas). GRUPO O.",
    malezas: [
      {
        nombre: "MALEZAS MUY SUSCEPTIBLES",
        datos:
          "Abrepuños, Abrepuño amarillo, Abrepuño colorado, Abrojo grande, Alfilerillo, Cardo crespo, Cardo chileno, Cardo negro, Cardo pendiente, Cardo ruso, Cepa caballo, Cerraja, Chamico, Diente de león, Girasolillo o Santa María, Lengua de vaca, Morenita, Mostacilla, Mostaza, Nabo, Nabón, Paragüita, Quinoa blanca, Quinoa criolla, Quinoa negra, Saetilla, Yuyo colorado.",
      },
      {
        nombre: "MALEZAS PARCIALMENTE SUSCEPTIBLES",
        datos:
          "Achicoria, Altamisa, Biznaga, Cardo pampa, Cardo de castilla, Capiquí, Cicuta, Chinchilla, Correhuela o Campanilla, Enredadera anual, Huevo de gallo, Lagunilla, Manzanilla cimarrona, Ortiga, Romerillo o Mio Mio, Rama negra, Sanguinaria, Trébol de olor, Verdolaga, Yuyo sapo o Sunchillo.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Alpiste",
      "Arroz",
      "Avena",
      "Cebada",
      "Centeno",
      "Maíz",
      "Maní",
      "Mijo",
      "Sorgo y Trigo",
      "Cañada de azúcar",
      "Campos naturales de Gramíneas",
      "Pasturas cultivadas de gramíneas (Verdeos)",
    ],
    dosis: [
      {
        nombre: "Trigo, Cebada y Centeno",
        datos: "0.55-0.8 L/ha. Avena y Alpiste: 0.45-0.55 L/ha",
      },
      {
        nombre: "Maiz y sorgo",
        datos: "0,55-0,65 L/ha",
      },
      {
        nombre: "Arroz",
        datos: "0,8-1,3 lt/ha",
      },
      {
        nombre: "Tratamiento de Pre-cosecha",
        datos: "1.1-1.6 L/ha",
      },
    ],
    recomendacionesDeUso:
      "Utilizar dosis inferiores contra malezas susceptibles, cuando sean pequeñas y en condiciones climáticas y suelo óptimas. Utilizar las dosis mayores cuando la maleza esté más desarrollada, o se trate de malezas mediana susceptibilidad.",
    descargas: {
      marbete: "24/2.4DLVAgrofinax20L_2023.pdf",
      hojaDeDatosDeSeguridad: "24/Agrofina-2-4DLV-MSDS.pdf",
      flyerComercial: "",
    },
  },
  {
    link: "abridor-plus",
    nombre: "ABRIDOR® PLUS",
    thumbnail: "abridor-plus/abridor-plus.png",
    imagen: "abridor-plus/Abridorplus5L-1.jpg",
    categoria: "fitoreguladores",
    principioActivo: "Thidiazuron 12% + Diuron 6%",
    formulacion: "Dispersión oleosa (OD)",
    descripcion:
      "Defoliante para el cultivo de algodón. Produce la caída de las hojas, aún cuando están verdes, quedando las plantas sin residuos foliares que puedan ensuciar o dañar la fibra de algodón en su cosecha.\n\nEl uso de ABRIDOR PLUS permite la cosecha mecánica y manual, facilitando la recolección de capullos, y reduciendo el número de pasadas y el tiempo total de cosecha. El metabolismo natural de la planta continúa, aún después de su aplicación, permitiendo que las cápsulas y las hojas sigan con su proceso de maduración normal.",
    accion: "Sistémico",
    mecanismoDeAccion:
      "Inhibidor del transporte de electrones en el fotosistema II.",
    malezas: [],
    enfermedades: "",
    plagas: "",
    cultivos: ["Algodón"],
    dosis: [
      {
        nombre: "",
        datos: "0,500 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Con temperaturas promedio del día superiores a los 22°C, alta luminosidad, buena humedad del suelo, cultivos parejos, se favorece la acción del producto.\n\nLas temperaturas medias inferiores a los 22°C, cultivos densos e irregulares, lluvias inmediatas después de la aplicación y fuerte enmalezamiento, son factores que retrasan o limitan la acción del producto. No debiendo llover dentro de las 24 hs. posteriores a la aplicación. No aplicar en condiciones de sequía, ni en horas de fuerte insolación.",
    descargas: {
      marbete: "abridor-plus/ABRIDOR PLUSx5l_2023.pdf",
      hojaDeDatosDeSeguridad: "abridor-plus/MSDS_AbridorPlus.pdf",
      flyerComercial: "",
    },
  },
  {
    link: "azoxypro",
    nombre: "AZOXY PRO®",
    thumbnail: "azoxypro/azoxypro.png",
    imagen: "azoxypro/azoxypro.jpg",
    categoria: "fungicidas",
    principioActivo: "Azosxystrobina 20 + Ciproconazole 8",
    formulacion: "Suspensión Concentrada (SC)",
    descripcion:
      "Es un fungicida de acción sistémica y de contacto. Presenta una alta persistencia y rápida acción, gracias a la acción combinada de la azoxistrobina (acción preventiva y antiesporulante) y el ciproconazole (efecto CURATIVO y erradicante).",
    accion: "Preventivo, curativo, antiesporulante, contacto, sistémico.",
    mecanismoDeAccion:
      "Azoxytrobina: Inhibe la respiración mitocondrial de los hongos a través del bloqueo de la transferencia de electrones entre el mitocondrio b y el citrocomo c. (Grupo 11).\n\nCiproconazole: Inhibe la síntesis de Ergosterol (Grupo 3)",
    malezas: [],
    enfermedades:
      "Alternaria, Antracnosis, Escaldadura, Fusarium del maíz, Mancha amarilla del trigo, Mancha de la hoja del trigo, Mancha en red en cebada, Mancha gris de la hoja del sorgo, Mancha marrón de la soja, Mancha ojo de rana en soja, Mancha púrpura de la semilla, Podredumbre de la espiga del maíz, Podredumbre del tallo y raíz del maíz, Roya amarilla del trigo, Roya anaranjada del trigo, Roya asiática de Soja, Roya común del maíz, Roya del sorgo, Septoriosis, Tizón del Norte, Tizón del tallo y de la vaina en soja, Viruela tardía del maní, Viruela temprana del maní.",
    plagas: "",
    cultivos: [
      "Soja",
      "Maíz",
      "Trigo",
      "Cebada",
      "Maní",
      "Poroto",
      "Ajo",
      "Avena",
      "Cebada cervecera",
      "Maíz pisingallo",
      "Sorgo",
    ],
    dosis: [
      {
        nombre: "Ajo",
        datos: "0,450 L/ha.",
      },
      {
        nombre: "Avena",
        datos: "0,300- 400 L/ha.",
      },
      {
        nombre: "Cebada Cervecera",
        datos: "0,4 L/ha.",
      },
      {
        nombre: "Maíz y Sorgo",
        datos: "0,500 L/ha.",
      },
      {
        nombre: "Maní",
        datos: "0,440 L/ha.",
      },
      {
        nombre: "Poroto",
        datos: "0,300- 0,400 L/ha.",
      },
      {
        nombre: "Soja",
        datos: "0,250- 300 L/ha.",
      },
      {
        nombre: "Trigo",
        datos: "0,400 L/ha.",
      },
    ],
    recomendacionesDeUso: "",
    descargas: {
      marbete: "azoxypro/AZOXYPRO18.5x5.65hojas.pdf",
      hojaDeDatosDeSeguridad: "azoxypro/Azoxy_Pro_MSDS.pdf",
      flyerComercial: "azoxypro/FlyerAzoxyProTrigo2022.pdf",
    },
  },
  {
    link: "claron",
    nombre: "CLARON®",
    thumbnail: "claron/claron.png",
    imagen: "claron/Claron_1-798x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Cyhalofop-butil 18%",
    formulacion: "",
    descripcion:
      "Es un herbicida post-emergente, para el control de gramíneas, con acción sistémica y selectiva para cultivos de arroz de inundación y secano. Se absorbe rápidamente a través del follaje y se transloca a los tejidos meristemáticos de la planta donde ejerce su acción herbicida. La detención del crecimiento de las malezas comienza a las pocas horas de la aplicación. A los pocos días se observan: clorosis en las hojas y tallos, coloración que va del rojo al morado y necrosis en los puntos de crecimiento.",
    accion: "Sistémico.",
    mecanismoDeAccion: "Inhibidor de la enzaima ACCasa. Grupo A.",
    malezas: [
      {
        nombre: "",
        datos: "Capín",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Arroz"],
    dosis: [
      {
        nombre: "",
        datos: "1,5 a 2 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Aplicar cuando las gramíneas están en activo crecimiento, las mismas deben tener entre 3 hojas verdaderas y 1 a 2 macollos. Para un control más efectivo, se debe proceder a inundar definitivamente el cultivo a las 24 horas posteriores a la aplicación del producto.",
    descargas: {
      marbete: "claron/CLARONBidon_20L-2023.pdf",
      hojaDeDatosDeSeguridad: "claron/Claron_MSDS.pdf",
      flyerComercial: "claron/FlyerClaron2022.pdf",
    },
  },
  {
    link: "dasen",
    nombre: "DASEN®",
    thumbnail: "dasen/dasen.png",
    imagen: "dasen/Dasen-798x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Benazolin-etil 50%",
    formulacion: "Suspensión Concentrada",
    descripcion:
      "Dasen® es un herbicida post emergente sistémico para el cultivo de soja y maní, que controla malezas de hoja ancha en post emergencia de las mismas, especialmente posicionado para el control de Yuyo colorado.\nEs absorbido principalmente por hojas y traslocado rápidamente por floema. Las malezas presentan síntomas de detención de crecimiento, deformación de tallo y hoja, produciéndose su muerte a los 10 a 20 días.",
    accion: "Sistémico.",
    mecanismoDeAccion:
      "Acción similar al ácido indolacetico. (Auxinas sintéticas). Grupo O.",
    malezas: [
      {
        nombre: "",
        datos: "Chamico, Malva, Quinoa, Yuyo Colorado.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Soja", "Maní"],
    dosis: [
      {
        nombre: "Soja",
        datos: "0,6 – 0,8 L/ha.",
      },
      {
        nombre: "Maní",
        datos: "0,5 – 0,6 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Debe aplicarse en el momento en que las malezas se encuentren en activo crecimiento y tengan entre 5 – 10 cm de altura.\nEn caso de síntomas de sequía o bajas temperaturas, debe evitase los tratamientos con Dasen.",
    descargas: {
      marbete: "dasen/DASEN-marbete-2023.pdf",
      hojaDeDatosDeSeguridad: "dasen/Dasen_MSDS.pdf",
      flyerComercial: "dasen/FlyerDasen_2022.pdf",
    },
  },
  {
    link: "dasen-plus",
    nombre: "DASEN® PLUS",
    thumbnail: "dasen-plus/dasen-plus.png",
    imagen: "dasen-plus/Dasen20L-798x1024.jpg",
    categoria: "Herbicidas",
    principioActivo: "Benazolin-etil 20% + Fomesafen 13,3%",
    formulacion: "Suspensión Concentrada (SC)",
    descripcion:
      "Dasen Plus es un herbicida especialmente diseñado para el control de Yuyo colorado, en post emergencia del cultivo de soja.\n\nDasen Plus es el único producto del mercado que combina el efecto de contacto del Fomesafen y la sistemia de Benazolin-etil, garantizando mayores controles y disminuyendo la posibilidad de rebrotes.\n\nFormulación exclusiva con excelente compatibilidad con el glifosato.",
    accion: "Contacto y sistémico.",
    mecanismoDeAccion:
      "Benazolín-etil: Acción similar al ácido indolacetico (Auxina sintetica). Grupo O\nFomesafen: Inhibidor de la enzima Protoporfirinógeno oxidasa (PPO). Grupo E",
    malezas: [
      {
        nombre: "",
        datos: "Yuyo Colorado",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Soja"],
    dosis: [
      {
        nombre: "Soja",
        datos: "1,5 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Aplicar una vez que todas las malezas hayan emergido y se encuentren en activo crecimiento. No aplicar con malezas de tamaño superiores a 12 cm. No aplicar con aceite.",
    descargas: {
      marbete: "dasen-plus/DASENPLUSx20L_2023.pdf",
      hojaDeDatosDeSeguridad: "dasen-plus/DasenPlus_MSDS.pdf",
      flyerComercial: "dasen-plus/FlyerDasenPlus_2022.pdf",
    },
  },
  {
    link: "darren",
    nombre: "DARREN®",
    thumbnail: "darren/darren.png",
    imagen: "darren/CajaDarren-1024x768.jpg",
    categoria: "herbicidas",
    principioActivo: "Flumioxazin 48%",
    formulacion: "Suspensión Concentrada (SC)",
    descripcion:
      "Es un herbicida selectivo pre-siembra, para combatir malezas latifoliadas y suprimir gramíneas en los cultivos de soja, sorgo granífero, trigo, girasol y maíz. Actúa por contacto con un excelente poder residual.\nEs un herbicida que se activa con la luz, cuando es absorbido por las partes verdes de las malezas, destruyendo las membrana celular, lo que produce una necrosis de los tejidos. Cuando es aplicado a la superficie del suelo, es absorbido por las plántulas en germinación causando necrosis de los brotes e inhibición del crecimiento de las raíces.",
    accion: "Contacto, sistémico y residual.",
    mecanismoDeAccion:
      "Inhibidor de la enzima protoporfirinógeno oxidasa (PPO). Grupo E",
    malezas: [
      {
        nombre: "",
        datos:
          "Afata hembra , Albahaca silvestre, Ataco, Bejuco, Camambú, Campanilla, Capín arroz, Cardo asnal, Cardo negro, Cardo pendiente, Cardo ruso, Cebadilla , Cerraja, Chamico, Chinchilla, Cien nudos, Cola de zorro, Corregüela, Enredadera anual, Farolito, Flor de Santa Lucía, Gramillón, Gramón, Lagunilla, Lengua de vaca, Malva, Malva cimarrona, Morenita, Mostacilla, Nabo, Nabón, No me olvides, Ortiga, Ortiga mansa, Pasto braquiaria, Pasto colorado, Pasto de cuaresma, Quinoa blanca, Rabaniza, Rama negra, Ryegrass, Senecio, Sunchillo, Trébol de color blanco, Tutia, Verdolaga, Verónica, Violeta silvestre, Yuyo colorado.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Cerezas",
      "Ciruelas",
      "Cítricos",
      "Damasco",
      "Durazno",
      "Girasol",
      "Maíz",
      "Pelón",
      "Soja",
      "Sorgo granífero",
      "Trigo",
      "Vid",
    ],
    dosis: [
      {
        nombre: "Girasol, Maíz, Sorgo granífero",
        datos: "0.05-0.1 L/ha.",
      },
      {
        nombre: "Soja",
        datos: "0,104-0,156 L/ha.",
      },
      {
        nombre: "Trigo",
        datos: "0.1-0.12 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "En aplicaciones de pre-siembra del cultivo, entre la aplicación de DARREN y la siembra debe transcurrir para el cultivo de soja 7 días, maíz y sorgo granífero 20-30 días, girasol 20-30 días para las dosis de 0,050 L/ha y 45-60 días para las dosis superiores,y trigo 15 días.",
    descargas: {
      marbete: "darren/Darren5LITA2023.pdf",
      hojaDeDatosDeSeguridad: "darren/DARREN_MSDS.pdf",
      flyerComercial: "darren/FlyerDarren_2023.pdf",
    },
  },
  {
    link: "ectran",
    nombre: "ECTRAN®",
    thumbnail: "ectran/ectran.png",
    imagen: "ectran/ectran.png",
    categoria: "herbicidas",
    principioActivo: "Bispyribac-sodio 40%",
    formulacion: "Suspensión Concentrada (SC)",
    descripcion:
      "Es un herbicida post-emergente selectivo para el cultivo de arroz de inundación y secano. Permite controlar gramíneas, ciperáceas y latifoliadas.",
    accion: "Sistémico.",
    mecanismoDeAccion:
      "Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.",
    malezas: [
      {
        nombre: "Gramineas",
        datos:
          "Capín de arroz, Chacrilla, Colas de Zorro, Pasto colorado, Pasto de cuaresma, Pasto braquiaria, Canutillo.",
      },
      {
        nombre: "Latifoliadas",
        datos:
          "Eclipsa, Barba de indio, Yuyo colorado, Saetilla, Verdolaga, Flor de Santa Lucia, Camambú, Lagunilla, Ludwigia, Capelonia, Cala de agua, Pontederia, Poligonum, Espina colorada.",
      },
      {
        nombre: "Ciperaceas",
        datos:
          "Cipero entrerriano, Chufa salvaje, Totorilla, Junquillo, Eleocharis, Cipero común.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Arroz"],
    dosis: [
      {
        nombre: "",
        datos: "0.1 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "El producto debe ser aplicado 14 a 21 días luego de emergidas las plántulas de arroz y con malezas en estado de 2da a 5ta hoja verdadera (gramíneas y ciperáceas) ó en estado de roseta (latifoliadas) de hasta 10 cm de diámetro de las mismas.\n\nEl tratamiento en el estado de activo crecimiento de las malezas es indispensable para que se produzca una buena absorción y traslocación del producto previo a la entrada del agua de inundación.\n\nPara lograr un control más efectivo debe inundarse definitivamente el cultivo 4 días después de la aplicación del producto.",
    descargas: {
      marbete: "ectran/ECTRANX1L2023.pdf",
      hojaDeDatosDeSeguridad: "ectran/Ectran_MSDS.pdf",
      flyerComercial: "",
    },
  },
  {
    link: "ectran-plus",
    nombre: "ECTRAN® PLUS",
    thumbnail: "ectrtan-plus/thumb-ectranplus.jpg",
    imagen: "ectrtan-plus/EctranPlus2021.jpg",
    categoria: "Herbicidas",
    principioActivo: "Bispyribac-sodio + quinclorac",
    formulacion: "Polvo mojable (WP)",
    descripcion:
      "Ectran plus es un herbicida selectivo y post-emergente para el cultivo de arroz. Controla gramíneas, latifoliadas y ciperáceas, actuando sobre malezas nacidas y sobre los futuros nacimientos debido al poder residual.\n\nECTRAN PLUS combina Bispiribac sodio y Quinclorac.\n\nBispiribac sodio es un herbicida post-emergente para cultivos de arroz de inundación y secano. Es de acción sistémica y selectiva, con la característica de ser absorbido tanto por el follaje como por las raíces de gramíneas, ciperáceas y latifoliadas.\n\nQuinclorac es un herbicida sistémico, con efecto residual en el cultivo de arroz indicado especialmente para el control de Echinochloa (Capín) como así también de otras malezas de hoja ancha y gramíneas. Es absorbido por semillas en germinación, por las raíces y también por vía foliar. Debido a su efecto residual controla capín que germina luego de su aplicación.",
    accion: "Sistémico.",
    mecanismoDeAccion:
      "Bispiribac sodio: Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.\nQuinclorac: Inhibidor de la sintesis de celulosa. Grupo A.",
    malezas: [
      {
        nombre: "",
        datos:
          "Chacrilla (Echinocloa cruspavonis). Pasto bandera (Urochloa platyphyla). Arroz-maleza (Oryza sativa L. f. spontanea). Pasto colonial o colorado (Echinochloa colonum). Pata de gallo (Echinochloa crus-galli). Duraznillo de agua (Ludwigia bonariensis) Papiro bravo (Cyperus virens). Chufa (Ciperus esculentus). Chufa salvaje (Cyperus esculentus var. legotoschyus).",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Arroz"],
    dosis: [
      {
        nombre: "",
        datos: "1 Kg/ha de ECTRAN PLUS + 0,5 L/ha de Zinax.",
      },
    ],
    recomendacionesDeUso:
      "Para lograr un control más efectivo debe procederse a inundar definitivamente el cultivo 4 días después de la aplicación del producto. El caldo deberá usarse dentro de las 24 horas de preparado, caso contrario puede haber degradación del principio activo. De usarse una mezcla con otro plaguicida, cargar éste después de haberse homogeneizado la carga del herbicida. No aplicar con vientos superiores a 10 km/h, ni en condiciones de estrés hídrico y/o inversión térmica.",
    descargas: {
      marbete: "ectrtan-plus/ECTRANPLUS-marbete-2023.pdf",
      hojaDeDatosDeSeguridad: "ectrtan-plus/EctranPlus_MSDS_Senasa.pdf",
      flyerComercial: "ectrtan-plus/Agrofina-EctranPlus-Flyer.pdf",
    },
  },
  {
    link: "essus",
    nombre: "ESUS®",
    thumbnail: "essus/essus.png",
    imagen: "essus/essus.jpg",
    categoria: "insecticidas",
    principioActivo: "Tiametoxam 14,1% – Lambdacialotrina 10,6%",
    formulacion: "Mezcla de suspensión concentrada y Suspensión en cápsula",
    descripcion:
      "Es un insecticida foliar de amplio espectro, integrado por dos principios activos que poseen características complementarias.\n\nEl tiametoxam, es un neonicotinoide sistémico de alta residualidad, que controla insectos succionadores, mientras la lambdacialotrina es un piretroide que actúa sobre insectos succionadores y masticadores, otorgando poder de volteo. De esta manera, se caracteriza por su buen poder de volteo y persistencia de control.",
    accion: "Contacto e Ingestión.",
    mecanismoDeAccion:
      "Tiametoxam: Modulador competitivo del receptor nicotínico de la acetilcolina. Lambdacialotrina: Modulador de los canales de sodio.",
    malezas: [],
    enfermedades: "",
    plagas:
      "Chinche verde (Nezara viridula), Alquiche chico (Edessa meditabunda), Oruga de las leguminosas (Anticarsia gemmatalis), Oruga medidora (Rachiplusia nu), Tucuras (Dichroplus spp.), Chinche de la alfalfa (Piezodorus guildinii), Picudo Negro de la Vaina (Rhysomatus subtilis), Picudo Grande de la Soja (Sternechus subsignatus), Trips (Caliothrips phaseoli), Arañuela roja común (Tetranychus urticae), Pulgón verde de los cereales (Schizaphis graminum) Pulgón de la espiga, (Sitobium avenae) Pulgón del algodonero (Aphis gossypii).",
    cultivos: [
      "Algodón",
      "Cebolla",
      "Durazno",
      "Pasturas a base de Alfalfa",
      "Soja",
      "Tomate",
      "Trigo",
    ],
    dosis: [
      {
        nombre: "",
        datos: "0,075 a 0.2 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Debe ser aplicado al cultivo en el volumen necesario para cubrir uniforme y satisfactoriamente el área a tratar.\n\nPuede aplicarse con equipos pulverizadores manuales y equipos terrestres con barras provistas de picos cónicos, utilizando un volumen mínimo de agua de 80-100 litros/ha y presión de 2 bar (30 lb/pulg2). Para el cultivo de durazno se recomienda utilizar equipos a mangueras o a turbina y un volumen de 1500-2000 litros/ha, de acuerdo al tamaño y a la densidad de los árboles",
    descargas: {
      marbete: "essus/Esus.pdf",
      hojaDeDatosDeSeguridad: "",
      flyerComercial: "essus/FlyerEsus2022.pdf",
    },
  },
  {
    link: "formaxiii",
    nombre: "FORMAX III®",
    thumbnail: "formaxiii/formaxiii.png",
    imagen: "formaxiii/Formax5L-773x1024.jpg",
    categoria: "fungicidas",
    principioActivo: "Azoxistrobin 5,62% + Cyproconazole 3% + Boscalid 6%",
    formulacion: "Suspensión Concentrada (SC)",
    descripcion:
      "Es un fungicida sistémico para el control de enfermedades foliares en cultivo de soja y maní, compuesto por 3 principios activos de diferentes modos de acción. Por un lado, se combina la destacada acción preventiva y antiesporulante de azoxistrobina, perteneciente al grupo de las estrobilurinas, con el efecto curativo y erradicante de cyproconazole, perteneciente al grupo de los triazoles. El tercer componente, Boscalid, es una carboxamida, de acción sistémica local y que se transloca translaminarmente. De esta manera, se logra tener una herramienta para el manejo de resistencias, con una mayor residualidad en el control de enfermedades por el agregado de la carboxamida.",
    accion: "Preventivo, antiesporulante, curativo, erradicante, sistémico.",
    mecanismoDeAccion:
      "Azoxytrobina: Inhibe la respiración mitocondrial de los hongos a través del bloqueo de la transferencia de electrones entre el mitocondrio b y el citrocomo c. (Grupo 11).\n\nCiproconazole: Inhibe la síntesis de Ergosterol (Grupo 3)\nBoscalid: Inhibe el complejo II en la mitocondria. (Grupo 7).",
    malezas: [],
    enfermedades:
      "Mancha marrón (Septoria glycines), Mancha púrpura de la semilla o Tizón de la hoja (Cercospora kickuchii); Viruela tardía (Cercosporidium personatum), Viruela temprana (Cercospora arachidicola).",
    plagas: "",
    cultivos: ["Maní", "Soja"],
    dosis: [
      {
        nombre: "Maní",
        datos: "1,1 L/ha + 0,5 L/ha de ZINAX (EMAG).",
      },
      {
        nombre: "Soja",
        datos: "0,75 L/ha + 0,5 L/ha de ZINAX (EMAG).",
      },
    ],
    recomendacionesDeUso:
      "Maní: Realizar la primera aplicación con la aparición de los primeros síntomas y repetir en caso de ser necesario a los 21 días.\n\nSoja: A partir de R3 hasta R6, cuando se observen los primeros síntomas en la planta. En caso de persistir condiciones favorables para la enfermedad y ante la aparición de nuevas pústulas, realizar una segunda aplicación.",
    descargas: {
      marbete: "formaxiii/Agrofina-FormaxIII-sojamani-Flyer.pdf",
      hojaDeDatosDeSeguridad: "formaxiii/Agrofina-FormaxIII-MSDS.pdf",
      flyerComercial: "formaxiii/Agrofina-FormaxIII-Flyer.pdf",
    },
  },
  {
    link: "flosil50",
    nombre: "FLOSIL® 50",
    thumbnail: "flosil50/flosil50.png",
    imagen: "flosil50/flosil50.jpg",
    categoria: "herbicidas",
    principioActivo: "Fomesafen 50%",
    formulacion: "Concentrado Soluble (SL)",
    descripcion:
      "FLOSIL 50 es un herbicida post-emergente selectivo para los cultivos de soja, maní y poroto, que controla malezas de hoja ancha. Actúa por contacto, por lo que requiere de una aplicación cuidadosa para lograr una buena cobertura de las malezas y asegurar los mejores resultados.\n\nFLOSIL 50 es un producto concentrado, lo que permite reducir el uso de bidones, mejorando así la logística, el almacenamiento y la disminución en el uso de plástico siendo más amigables con el medio ambiente.",
    accion: "Contacto.",
    mecanismoDeAccion:
      "Inhibidor de la enzima protoporfirinogeno oxidasa (PPO). Grupo E.",
    malezas: [
      {
        nombre: "",
        datos:
          "Bejuco (Ipomoea spp), Chamico (Datura ferox), Malva (Anoda cristata), Quinoa (Chenopodium álbum), Yuyo Colorado (Amaranthus sp), Verdolaga (Portulaca oleracea), Farolito (Nicandra physaloides), Chinchilla (Tagetes minuta), Lecherón (Euphorbia heterophylla), Nabo (Brassica campestris).",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Maní", "Poroto", "Soja"],
    dosis: [
      {
        nombre: "Soja y Poroto",
        datos: "0,35- 0,7 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Aplicar después de que todas las malezas hayan emergido, cuando las mismas sean jóvenes (preferentemente no mayor a 5 cm) y en activo crecimiento.\nPara aplicaciones con Glifosato, se recomienda usar altos volumenes de agua.\n\n Aplicar con humectante no ionico",
    descargas: {
      marbete: "flosil50/FLOSIL50_X_20_L_2023.pdf",
      hojaDeDatosDeSeguridad: "flosil50/Flosil_MSDS.pdf",
      flyerComercial: "flosil50/FlyerFlosil50_2022.pdf",
    },
  },
  {
    link: "floux",
    nombre: "FLOUX®",
    thumbnail: "floux/floux.png",
    imagen: "floux/floux20L-798x1024.jpg",
    categoria: "insecticidas",
    principioActivo: "Acetamiprid 2% + Lambdacialotrina 2%",
    formulacion: "Dispersión oleosa (OD)",
    descripcion:
      "Es un insecticida que combina 2 ingredientes activos que aseguran una acción de contacto y una prolongada actividad residual para un amplio espectro de plagas en el cultivo de soja. El Acetamiprid, es un neonicotinoide sistémico de alta residualidad que controla insectos succionadores, mientras la Lambdacialotrina es un piretroide que actúa sobre insectos succionadores y masticadores, otorgando poder de volteo. Debido a su exclusiva formulación OD (Dispersión Oleosa), no requiere del agregado de aceite. El coadyuvante elegido es específico para insecticidas y está basado en aceite vegetal. Su incorporación incrementa la actividad biológica, facilita su distribución en el caldo y permite una aplicación efectiva del producto en el cultivo.",
    accion: "Contacto e Ingestión.",
    mecanismoDeAccion:
      "Acetamiprid: Antagonista de los receptores nicotínicos de la acetilcolina (Grupo 4).\nLambdacialotrina: Actúa a nivel de los canales de sodio (Grupo 3).",
    malezas: [
      {
        nombre: "",
        datos:
          "Chinche verde, Chinche de la alfalfa, Chinche marrón, Alquiche chico, Arañuela roja común, Oruga de las leguminosas, Oruga medidora, Trips, Tucuras y Picudos.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Soja"],
    dosis: [
      {
        nombre: "",
        datos: "1 L/ha. No requiere agregado de aceite.",
      },
    ],
    recomendacionesDeUso: "",
    descargas: {
      marbete: "floux/Floux10L_2023ok.pdf",
      hojaDeDatosDeSeguridad: "floux/Floux_MSDS.pdf",
      flyerComercial: "floux/FlyerFloux2022.pdf",
    },
  },
  {
    link: "flusan",
    nombre: "FLUSAN ®",
    thumbnail: "flusan/flusan.png",
    imagen: "flusan/flusan2021-807x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Diflufenican 50%",
    formulacion: "Suspensión concentrada (SC)",
    descripcion:
      "FLUSAN es un herbicida pre-emergente, que controla malezas de hoja ancha que afectan a pasturas y el cultivo de girasol. También se aplica en barbecho químico de soja y maíz respetando un periodo de pre-siembra de 60 a 15 dias antes de la siembra de los cultivos.\n\nLa absorción es por vía del hipocótile, durante la germinación de las malezas. Al aplicarlo, forma una barrera en la superficie del suelo, siendo absorbido por las plántulas de las malezas.\n\nEl síntoma es una rápida decoloración, produciéndose la muerte de las mismas en un plazo de 5 días.",
    accion: "Inhibidor de la síntesis de carotenoides. (Grupo F1).",
    presentacion: "Bidón de 10 Litros.",
    mecanismoDeAccion: "",
    malezas: [
      {
        nombre: "",
        datos:
          "Abrepuño amarillo (Centaura solstisialis), Afata hembra (Sida spinosa), Albahaca silvestre (Galinsoga parviflora), Algodonosa / pelludilla (Gamochaetta spp.), Bolsa del pastor (Capsella bursa pastoris), Calabacilla (Silene gallica), Canchalagua (Veronica arvensis), Capiquii (Stellaria media), Cardo ruso (Salsola kali), Chamico (Datura ferox), Chinchilla (Tagetes minuta), Enredadera anual (Polygonum convolvolus), Lengua de vaca (Rumex crispus), Malva cimarrona (Anoda cristata), Manzanilla cimarrona (Anthemis cotula), Mastuerzo (Coronopus dydimus), Morenita (Kochia escoparia), Mostacilla (Rapistrum rugosom), Nabo (Brassica campestris), Nabón (Raphanus sativus), Ortiga (Urtica urens), Ortiga mansa (Lamiun amplexicaule), Pensamiento silvestre (Viola arvensis), Perejillo (Bowlesia incana), Quinoa (Chenopodium album), Rama negra (Conyza bonarensis), Sanguinaria (Polygonum aviculare), Verdolaga (Portulaca oleracea), Yuyo colorado (Amaranthus sp.).",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Barbechos químicos", "Girasol", "Praderas puras y consociadas"],
    dosis: [
      {
        nombre: "Barbecho Químico",
        datos:
          "0,2-0,3 l/ha respetando un periodo pre-siembra de entre 60 y 15 antes de la fecha de siembra en cultivos de soja y maíz.",
      },
      {
        nombre: "Girasol",
        datos: "0,2-0,35 l/ha dependiendo del tipo de suelo.",
      },
      {
        nombre: "Pasturas",
        datos: "0,1 l/ha siempre en mezcla.",
      },
    ],
    bandaToxicologica: "Verde",
    recomendacionesDeUso: "",
    descargas: {
      marbete: "flusan/Flusan_X10K_2023.pdf",
      hojaDeDatosDeSeguridad: "flusan/Flusan_MSDS.pdf",
      flyerComercial: "flusan/FlyerFlusan2022.pdf",
    },
  },
  {
    link: "formax-neo",
    nombre: "FORMAX NEO®",
    thumbnail: "formax-neo/logo-formax-neo.jpg",
    imagen: "formax-neo/FormaxNeo_1-807x1024.jpg",
    categoria: "fungicidas",
    principioActivo: "Boscalid 10% + Difenoconazole 15% SC",
    formulacion: "Suspensión Concentrada (SC)",
    descripcion:
      "Difenoconazole es un funguicida sistémico perteneciente al grupo de los triazoles (Grupo 3), que actúa como inhibidor de la biosíntesis de esteroles de membrana. Provee acción preventiva duradera y acción curativa contra un amplio rango de enfermedades. Dentro de los triazoles es uno de los más efectivos para el control de las enfermedades de soja y maní, complementándose muy bien con el efecto residual de la carboxamida Boscalid, de acción sistémica local y que se transloca translaminarmente. De esta manera, se logra tener una herramienta para el manejo de resistencias, con una mayor residualidad en el control de enfermedades por el agregado de la carboxamida. Sustentabilidad: Formax neo es banda verde y la dosis promedio es un 40 % menos que su antecesor Formax III.",
    accion: "Preventivo, antiesporulante, curativo, erradicante, sistémico.",
    mecanismoDeAccion:
      "Difenoconazole: Inhibe la síntesis de Ergosterol (Grupo 3). Boscalid: Inhibe el complejo II en la mitocondria. (Grupo 7).",
    malezas: [],
    enfermedades:
      "Mancha marrón (Septoria glycines), Mancha púrpura de la semilla o Tizón de la hoja (Cercospora kickuchii); Viruela tardía (Cercosporidium personatum), Viruela temprana (Cercospora arachidicola).",
    plagas: "",
    cultivos: ["Maní", "Soja"],
    dosis: [
      {
        nombre: "Maní",
        datos: "0,65 L/ha.",
      },
      {
        nombre: "Soja",
        datos: "0,45 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Maní: Realizar la primera aplicación con la aparición de los primeros síntomas y repetir en caso de ser necesario a los 21 días.\n\nSoja: A partir de R3 hasta R6, cuando se observen los primeros síntomas en la planta. En caso de persistir condiciones favorables para la enfermedad y ante la aparición de nuevas pústulas, realizar una segunda aplicación.",
    descargas: {
      marbete: "formax-neo/formax_neo_etiqueta.pdf",
      hojaDeDatosDeSeguridad: "formax-neo/formax_neo_msds.pdf",
      flyerComercial: "formax-neo/formax_neo_flyer.pdf",
    },
  },
  {
    link: "glufan",
    nombre: "GLUFAN ®",
    thumbnail: "glufan/thumb-glufan.png",
    imagen: "glufan/Glufan-795x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Glufosinato de Amonio 20%",
    formulacion: "Concentrado Soluble (SL).",
    descripcion:
      "GLUFAN es un herbicida de contacto con cierta sistemia, para aplicaciones en barbecho químico y post-emergente selectivo en aplicaciones de cobertura total sobre maíces que indiquen la posibilidad de dicho uso en los rótulos y en bolsas de semillas híbridas de maíz resistente a Glufosinato de amonio.",
    accion: "Contacto, con cierta acción sistémica.",
    mecanismoDeAccion: "Inhibidor de la glutamino sintetasa. Grupo H.",
    malezas: [
      {
        nombre: "",
        datos: "Gramineas y Hoja anchas.",
      },
      {
        nombre: "",
        datos: "Ciperaceas.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Maiz LL: resistente a Glufosinato de amonio",
      "Barbecho químico",
      "Áreas sin cultivos",
      "Frutales",
    ],
    dosis: [
      {
        nombre: "Barbecho químico",
        datos: "1,5 a 3,5 l/ha.",
      },
      {
        nombre: "Áreas sin cultivo y frutales",
        datos: "2,5 a 8 l/ha.",
      },
    ],
    recomendacionesDeUso:
      "Aplicar cuando el cultivo de maíz resistente a Glufosinato tenga entre 3 a 4 hojas. Emplear las dosis más bajas en los primeros estadíos vegetativos de las malezas latifoliadas (2-4 hojas) y al comienzo del macollaje en gramíneas. Las dosis más altas son para malezas de mayor tamaño.\n\nFactores ambientales como temperaturas menores a 10°C o superiores a 25 °C, y/o estrés hídrico pueden disminuir la performance de Glufan.",
    descargas: {
      marbete: "glufan/GLUFANx20L_2023.pdf",
      hojaDeDatosDeSeguridad: "glufan/Agrofina-Glufan-MSDS.pdf",
      flyerComercial: "glufan/FlyerGlufan_2022.pdf",
    },
  },
  {
    link: "idris",
    nombre: "IDRIS®",
    thumbnail: "idris/logo-idris.jpg",
    imagen: "idris/Idris_1-574x1024.jpg",
    categoria: "insecticidas",
    principioActivo: "Flubendiamide 48%",
    formulacion: "SC (Suspensión Concentrada)",
    descripcion:
      "Insecticida de primera línea tecnologica perteneciente a la clase química diamidas, recomendado para el control de las orugas más difíciles en una amplia gama de cultivos, selectivo en fauna benéfica y perfil favorable para el comercio de alimentos. Única flubendiamide banda verde.",
    accion: "Contacto e Ingestión.",
    mecanismoDeAccion: "Moduladores de receptores de ryanodine.",
    malezas: [],
    enfermedades: "",
    plagas:
      "Oruga medidora (Rachiplusia), Oruga de las leguminosas (Anticarsia gemmatalis), Falsa medidora (Pseudoplusia includens), Oruga bolillera (Helicoverpa sp.), Oruga de la hoja (Alabama argillacea), Gusano cortador (Agrotis sp.), Isoca de la espiga (Heliothis zea), Polilla del Tomate (Tutta absoluta), Gusano de la pera y la manzana, Carpocapsa (Cydia pomonella), Bicho canasto (Oiketicus platensis), Oruguita enruladota (Argyrotaenia sphaleropa), Cogollero del maíz (Spodoptera frugiperda), Isoca de las coles (Plutella xylostella), Isoca medidora (Rachiplusia nu), Oruga Cortadora (Agrotis ipsylon), Oruga militar tardía (Spodoptera frugiperda), Palomita transparente del zapallo (Diaphanea hyalinata), Gusano del brote del duraznero (Grafolita Molesta).",
    cultivos: [
      "Soja",
      "poroto",
      "maíz",
      "maíz dulce",
      "algodón",
      "tabaco",
      "tomate",
      "pera",
      "manzano",
      "brócoli",
      "coliflor",
      "lechuga",
      "melón",
      "sandía",
      "zapallo",
      "duraznero",
      "ciruelo",
    ],
    dosis: [
      {
        nombre: "",
        datos: "0,02 a 0,1 L/ha dependiendo de cultivo y plaga (ver marbete).",
      },
    ],
    recomendacionesDeUso:
      "Tratar el cultivo con IDRIS según umbrales de daño económico (UDE) con el agregado de 0,5 L/ha de Zinax (EMAG). Se recomienda rotar el uso de IDRIS o cualquier otro producto perteneciente al Grupo 28 de insecticidas con productos de diferentes modos de acción. No realizar más de 2 aplicaciones a un mismo cultivo. Lea atentamente el marbete antes de uso.",
    descargas: {
      marbete: "idris/Idris_etiqueta.pdf",
      hojaDeDatosDeSeguridad: "idris/Idris_MSDS.pdf",
      flyerComercial: "idris/Idris_flyer.pdf",
    },
  },
  {
    link: "halox81",
    nombre: "HALOX® 81",
    thumbnail: "halox81/halox81.png",
    imagen: "halox81/halox81.jpg",
    categoria: "herbicidas",
    principioActivo: "Haloxifop-P-metil 81%",
    formulacion: "Concentrado Emulsionable (EC)",
    descripcion:
      "Halox 81 es un herbicida post-emergente sistémico para el control de gramíneas, selectivo para los cultivos de soja, girasol, maní, poroto y algodón.\n\nLas malezas tratadas con HALOX 81 detienen su crecimiento y las hojas muestran, a los pocos días de la aplicación, tonalidades violáceas, amarillas y finalmente marrones. En los rizomas, destruye inicialmente las yemas, y luego el tejido se necrosa.",
    accion: "Sistémico.",
    mecanismoDeAccion:
      "Inhibidores de la acetil coenzima -A carboxilasa (ACCasa). Grupo A.",
    malezas: [
      {
        nombre: "",
        datos:
          "Brachiaria plantaginea. Capín. Cola de zorro. Pasto de cuaresma. Pasto Morado. Pie de gallina. Gramón. Pasto bermuda. Sorgo de Alepo (Riz/Sem). Maíz guacho tolerante a glifosato.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Algodón", "Girasol", "Soja", "Maní", "Poroto"],
    dosis: [
      {
        nombre: "",
        datos: "0,055- 0,195 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "En lotes de siembra y laboreo tradicional se deberá trabajar el suelo antes de la siembra para asegurar homogeneidad en la emergencia de las malezas.\n\nNo escardillar antes de la aplicación del producto.\n\nEn lotes bajo siembra directa, aplicar cuando las malezas alcanzan la altura recomendada.\n\nAplicar HALOX 81 siempre con el agregado de Zinax (EMAG).",
    descargas: {
      marbete: "halox81/HALOX_81_5L_ITA_2023.pdf",
      hojaDeDatosDeSeguridad: "halox81/Halox81_MSDS.pdf",
      flyerComercial: "halox81/FlyerHalox812022.pdf",
    },
  },
  {
    link: "katrin80",
    nombre: "KATRIN® 80",
    thumbnail: "katrin80/katrin80.png",
    imagen: "katrin80/Katrin80BA-1024x741.jpg",
    categoria: "herbicidas",
    principioActivo: "Imazapir 80%",
    formulacion: "Polvo Soluble (SP)",
    descripcion:
      "KATRIN 80 es un herbicida sistémico para uso pre- y post-emergente de las malezas con acción residual y de control, utilizado en cultivos de caña de azúcar y girasol tolerantes a las imidazolinonas, así como en pre-plantación de pino taeda.\n\nUna vez aplicado, las malezas detienen su desarrollo, ocurriendo la muerte de aquellas luego de 3 a 4 semanas.",
    accion: "Sistémico, residual.",
    mecanismoDeAccion:
      "Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.",
    malezas: [
      {
        nombre: "",
        datos:
          "Abrojo chico, Abrojo grande, Albahaca silvestre, Ambay, Amor seco, Bananita, Cebadilla del campo, Chamico, Charrua, Chinchilla, Cola de zorro, Enredadera perenne, Flor de San Juan, Fumo bravo, Gramilla, Horquetera, Lecherón, Malva cimarrona, Maria mola, Matacampo, Mocopavo, Ortiga gigante, Paitén, Pasto bandera, Pasto de cuaresma, Pasto jesuita, Pasto yacaré, Pata de gallina, Peludilla, Quinoa, Roseta, Sanguinaria, Setaria, Tartago, Yuquery.\nControl Parcial de: Apio cimarrón, Cebollín, Chufa, Enredadera anual,",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Girasol tolerante a imidazolinonas",
      "Pino taeda",
      "Caña de azúcar",
    ],
    dosis: [
      {
        nombre: "Girasol",
        datos: "0,1 Kg/ha.",
      },
      {
        nombre: "Caña de azucar",
        datos: "0,6 kg/ha.",
      },
      {
        nombre: "Pino Taeda",
        datos: "0,5 kg/ha.",
      },
    ],
    recomendacionesDeUso:
      "Girasol: No aplicar en casos de falta de humedad prolongada y cuando las malezas presenten síntomas de marchitez. Usar solamente en girasol tolerante a las imidazolinonas. Aplicación en post-emergencia temprana del cultivo y de las malezas.\n\nPino Taeda: Se debe aplicar en pre-plantación. Preparar el terreno procurando una baja cantidad de rastrojo y restos leñosos que interfieran en la aplicación; en el caso de uso de rastra, dejarlo libre de terrones y grandes desniveles, aplicar el producto con maleza emergida y dejar transcurrir entre la aplicación del producto y la plantación del cultivo un período de 15 a 30 días.",
    descargas: {
      marbete: "katrin80/Katrin80_2023.pdf",
      hojaDeDatosDeSeguridad: "katrin80/Katrin80_MSDS.pdf",
      flyerComercial: "katrin80/Katrin80_2022.pdf",
    },
  },
  {
    link: "kieriii",
    nombre: "KIER III®",
    thumbnail: "kieriii/kieriii.png",
    imagen: "kieriii/Kier10l-798x1024.jpg",
    categoria: "insecticidas",
    principioActivo: "Abamectina 0,18% + Lufenuron 1,5% + Bifentrin 1,8%",
    formulacion: "Concentrado Emulsionable (EC)",
    descripcion:
      "Es una triple mezcla de insecticidas para el cultivo de soja, compuesta por abamectina, lufenuron y bifentrin, con gran poder de volteo y prolongado efecto residual.\nEstá recomendado para el control de orugas defoliadoras. La presencia de abamectina refuerza la acción contra plagas de difícil control como arañuelas y trips.",
    accion: "Contacto e ingestión.",
    mecanismoDeAccion:
      "Bifentrin: Actúa a a nivel de los canales de sodio (Grupo 15).\nLufenuron: Inhibidor de la síntesis de quitina (IGR) (Grupo 3A).\nAbamectina: Actúa modulando los canales de cloro (Grupo 6).",
    malezas: [],
    enfermedades: "",
    plagas:
      "Oruga de las leguminosas, Isoca medidora, Trips y Arañuela roja común.",
    cultivos: ["Soja"],
    dosis: [
      {
        nombre: "",
        datos: "1 L/ha. No requiere agregado de aceite.",
      },
    ],
    recomendacionesDeUso: "",
    descargas: {
      marbete: "kieriii/KIERIII_X10K_2023.pdf",
      hojaDeDatosDeSeguridad: "kieriii/KIERIII_MSDS.pdf",
      flyerComercial: "kieriii/FlyerKIERIII2022.pdf",
    },
  },
  {
    link: "kieriii-plus",
    nombre: "KIER III PLUS®",
    thumbnail: "kieriii-plus/logo-kier-iii-plus.jpg",
    imagen: "kieriii-plus/KierIIIPlus_1-807x1024.jpg",
    categoria: "insecticidas",
    principioActivo: "Abamectina 0,9% + Lufenuron 7,5% + Bifentrín 9 %",
    formulacion: "EC (Concentrado Emulsionable)",
    descripcion:
      "Es una triple mezcla de insecticidas para el cultivo de soja, compuesta por abamectina, lufenuron y bifentrin, con gran poder de volteo y prolongado efecto residual.\n\nRecomendado para el control de orugas defoliadoras. La presencia de abamectina y bifentrin refuerza la acción contra plagas de difícil control como arañuelas y trips.",
    accion: "Contacto e ingestión.",
    mecanismoDeAccion:
      "Bifentrin: Actúa a a nivel de los canales de sodio (Grupo 15). Lufenuron: Inhibidor de la síntesis de quitina (IGR) (Grupo 3A). Abamectina: Actúa modulando los canales de cloro (Grupo 6).",
    malezas: [],
    enfermedades: "",
    plagas:
      "Oruga de las leguminosas, Isoca medidora, Trips y Arañuela roja común.",
    cultivos: ["Soja"],
    dosis: [
      {
        nombre: "",
        datos: "0,2 L/ha + 0,5 L/ha Zinax (EMAG).",
      },
    ],
    recomendacionesDeUso:
      "Leer atentamente el marbete. Aplicar SIEMPRE con el agregado de 0,5 L/ha Zinax (EMAG).",
    descargas: {
      marbete: "kieriii-plus/kier-iii-plus_etiqueta.pdf",
      hojaDeDatosDeSeguridad: "kieriii-plus/kier-iii-plus_msds.pdf",
      flyerComercial: "kieriii-plus/kier-iii-plus_flyer.pdf",
    },
  },
  {
    link: "kylian48",
    nombre: "KYLIAN® 48",
    thumbnail: "kylian48/kylian48.png",
    imagen: "kylian48/kylian48.jpg",
    categoria: "herbicidas",
    principioActivo: "Cletodim 48%",
    formulacion: "",
    descripcion:
      "Cletodim 48% es un herbicida graminicida sistémico y selectivo de post emergencia desarrollado para los cultivos de SOJA, MAÍZ, GIRASOL, MANÍ, ALGODÓN Y POROTO.\n\nKylian 48, inhibe la enzima acetil coenzima A carboxilasa (ACCasa) responsable de la biosintisis de lípidos, Los síntomas se manifiestan entre una y tres semanas posteriores a la aplicación, dependiendo de la especie y las condiciones ambientales.",
    accion: "Sistémico.",
    mecanismoDeAccion: "",
    malezas: [
      {
        nombre: "",
        datos:
          "Capín arroz, Pasto de cuaresma, Pie de gallina, Sorgo de Alepo de semilla y de rizoma, Trigo guacho, Gramón, Pasto bermuda, Pasto puna, Maíz guacho tolerante a glifosato, Paja viscachera, Pasto salado, Pelo de chancho.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Alfalfa",
      "Algodón",
      "Cebolla",
      "Girasol",
      "Maní",
      "Papa",
      "Poroto",
      "Soja",
    ],
    dosis: [
      {
        nombre: "",
        datos:
          "En gramíneas anuales varia entre 200 y 300 CC/ha dependiendo del clima y del suelo. En gramíneas perennes requiere dosis mayores, hasta 500 CC/ha en sorgo y Alepo y hasta 1,2 L/ha en gramon. Aplicar siempre con 500 CC/ha de ZINAX.",
      },
    ],
    recomendacionesDeUso:
      "Realizar los tratamientos con buenas condiciones de humedad en el suelo y con las malezas en activo crecimiento. Evitar la superposición durante la aplicación y que la deriva afecte a cultivos adyacentes. No realizar aplica-ciones con altas temperaturas, baja humedad, vientos fuertes, presencia de rocío o ante probabilidad de lluvia. El viento no debe exceder los 10 km/h y tampoco aplicar en ausencia total de viento, ni durante las horas de máxima insolación.",
    descargas: {
      marbete: "kylian48/KYLIAN48_BIDONX10L_2023.pdf",
      hojaDeDatosDeSeguridad: "kylian48/Agrofina-Kylian48-MSDS.pdf",
      flyerComercial: "kylian48/FlyerKylian48.pdf",
    },
  },
  {
    link: "lisi",
    nombre: "LISI®",
    thumbnail: "lisi/logo-lisi2.jpg",
    imagen: "lisi/lisi5L.jpg",
    categoria: "herbicidas",
    principioActivo: "Quinclorac 25 %",
    formulacion: "Suspensión Concentrada (SC)",
    descripcion:
      "LISI® es un herbicida sistémico post-emergente selectivo, con efecto residual en el cultivo de arroz, indicado especialmente para el control de Echinochloa (Capín), como también para malezas de hoja ancha y otras gramíneas.",
    accion: "",
    presentacion: "Bidón de 5 Litros.",
    mecanismoDeAccion:
      "Acción similar al ácido indolacético (Auxinas sinteticas).",
    malezas: [
      {
        nombre: "",
        datos: "Capín resistente ALS, Pasto Colorado, Brachiaria, Bejuco.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Arroz"],
    dosis: [
      {
        nombre: "",
        datos: "1,3 L/ha. Capín 1,5 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "No aplicar en situaciones con humedad relativa menor al 60%, vientos mayores que 10 Km/h. No utilizar el agua procedente de arrozales tratados con LISI para regar otros cultivos. Luego de la aplicación, cerrar la salida de agua por el mayor tiempo posible (mínimo 7 días).",
    bandaToxicologica: "Azul",
    descargas: {
      marbete: "lisi/Lisi_etiqueta.pdf",
      hojaDeDatosDeSeguridad: "lisi/Lisi_msds.pdf",
      flyerComercial: "lisi/Lisi_flyer.pdf",
    },
  },
  {
    link: "mabyn",
    nombre: "MABYN®",
    thumbnail: "mabyn/logo-mabyn1.jpg",
    imagen: "mabyn/Mabyn_1-798x1024.jpg",
    categoria: "herbicidas",
    principioActivo:
      "2,4-D Mezcla de sales 78,1 %. Equivalente ácido 2,4-D 34 %",
    formulacion: "SL (Concentrado Soluble)",
    descripcion:
      "Exclusiva fomulación de 2,4-D con comprobada ultra baja volatilidad.\nPermite aplicar dosis con cantidades menores de ingrediente activo por hectárea comparadas con las demás sales y ésteres de 2,4-D, manteniendo la misma eficacia. Sin olor.\nHerbicida sistémico y de acción hormonal, para el control de malezas de hoja ancha en barbecho.\nMezcla de sales alquilamidopropildimetilamonio y dietanolamonio del ácido 2,4-D.",
    accion: "Sistémico.",
    mecanismoDeAccion:
      "Acción similar al acido indolacetico (Auxinas sinteticas). GRUPO O.",
    malezas: [
      {
        nombre: "",
        datos:
          "Cerraja (Sonchus oleraceus), Escoba amarilla (Flaveria bidentis), Yuyo Colorado (Amarantus quitensis), Mastuerzo (Coronopus didymus), Bolsa de pastor (Capsella bursa-pastoris), Arrancamoños (Xanthium spinosum), Chamico (Datura ferox), Quínoa (Chenopodium album), Rama negra (Conyza sumatrensis), Verdolaga (Portulacaoleracea)",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Barbecho"],
    dosis: [
      {
        nombre: "",
        datos: "0,9 a 1,5 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Utilizar dosis inferiores contra malezas susceptibles, cuando sean pequeñas y en condiciones climáticas y suelo óptimas. Utilizar las dosis mayores cuando la maleza esté más desarrollada, o se trate de malezas mediana susceptibilidad.",
    descargas: {
      marbete: "mabyn/Mabyn_etiqueta.pdf",
      hojaDeDatosDeSeguridad: "mabyn/Mabyn_msds.pdf",
      flyerComercial: "mabyn/Mabyn_flyer.pdf",
    },
  },
  {
    link: "maniac",
    nombre: "MANIAC®",
    thumbnail: "maniac/maniac.png",
    imagen: "maniac/maniac2021-1024x737.jpg",
    categoria: "herbicidas",
    principioActivo: "Imazapic 70%",
    formulacion: "Polvo Soluble (SP)",
    descripcion:
      "MANIAC es un herbicida sistémico selectivo pre- y post-emergente para los cultivos de maní y caña de azúcar tolerante a las imidazolinonas.\n\nUna vez aplicado, las malezas detienen su desarrollo, ocurriendo la muerte de aquellas luego de 3 a 4 semanas. MANIAC ejerce un control residual en las malezas susceptibles que germinan después de su aplicación. Se logra un excelente control de las malezas cuando las condiciones de humedad son óptimas en el cultivo.",
    accion: "Sistémico, residual.",
    mecanismoDeAccion:
      "Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.",
    malezas: [
      {
        nombre: "",
        datos:
          "Cebollín, Gramón, Sorgo de Alepo (Riz/Sem), Chufa, Pasto cuaresma, Verdolaga, Chamico, Malva, Quinoa.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Maní", "Caña de azúcar"],
    dosis: [
      {
        nombre: "Mani",
        datos: "0,07-0,08 kg/ha.",
      },
      {
        nombre: "Caña de azucar",
        datos: "0,05 kg/ha.",
      },
    ],
    recomendacionesDeUso:
      "Para el cultivo de caña de azúcar, se debe aplicar en pre-plantación, siendo el producto incorporado por el efecto de las lluvias posteriores, de no darse lluvias adecuadas, debe incorporarse mecánicamente.\nEn el caso del cultivo de maní, normalmente se aplica en pre-emergencia del cultivo y las malezas. Puede aplicarse en post-emergencia de las malezas, si estas son de escaso desarrollo.\nNo aplicar en condiciones de falta de humedad prolongada y cuando las malezas presentan síntomas de marchitez",
    descargas: {
      marbete: "maniac/MANIACSOBRE_2023.pdf",
      hojaDeDatosDeSeguridad: "maniac/Maniac_MSDS.pdf",
      flyerComercial: "maniac/FlyerManiac_2022.pdf",
    },
  },
  {
    link: "marchii",
    nombre: "MARCH II®",
    thumbnail: "marchii/marchii.png",
    imagen: "marchii/MarchII20L-798x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Glifosato 66,2%",
    formulacion: "Concentrado Soluble (SL)",
    descripcion:
      "Herbicida postemergente, controla gramíneas, ciperáceas y malezas de hoja ancha.\n\nDe acción sistémica, es absorbido por hojas y tallos verdes y traslocado hacia las raíces y órganos vegetativos subterráneos, ocasionando la muerte total de las malezas emergidas. Se inactiva rápidamente en contacto con el suelo, por lo tanto no deja residuos y se puede sembrar después de su aplicación.",
    accion: "Sistémica.",
    mecanismoDeAccion:
      "Inhibidor de enolpiruvil-shikimato-3-fosfato sintasa (EPSP). Grupo G.",
    malezas: [
      {
        nombre: "Anuales",
        datos:
          "Capín arroz (Echinochloa crus-galli), Pasto colorado (Echinochloa colonum) Pasto cuaresma o Pasto colchón (Digitaria sanguinalis), Pie de gallina (Eleusine indica), Abrojo grande (Xanthium cavanillesii), Chamico (Datura ferox), Chinchilla (Tagetes minuta), Malva cimarrona (Anoda cristata), Quinoa o Yuyo blanco (Chenopodium album) Verdolaga (Portulaca oleracea) Yuyo colorado o Ataco (Amaranthus quitensis)",
      },
      {
        nombre: "Perenne",
        datos: "Sorgo de Alepo (Sorghum halepense), Gramón (Cynodon dactylon)",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Alambrados",
      "áreas no cultivadas",
      "Barbecho químico",
      "Vías férreas",
      "Cítricos o Citrus",
      "Frutales de pepita",
      "Vid",
      "Girasol",
      "Maíz",
      "Soja",
      "Pasturas",
      "Pinos",
      "Trigo",
      "Yerba mate",
      "Té",
    ],
    dosis: [
      {
        nombre: "Malezas anuales",
        datos: "1,6 – 2,9 L/ha",
      },
      {
        nombre: "Malezas perennes",
        datos: "1,7 – 4,0 L/ha",
      },
    ],
    recomendacionesDeUso:
      "Aplicarse cuando las malezas se encuentran en activo crecimiento, con una altura menor a 15 cm, evitando aplicaciones sobre malezas cubiertas de tierra. No pulverizar si se preven lluvias durante las 6 horas posteriores a la aplicación o cuando el follaje de las malezas esté mojado.",
    descargas: {
      marbete: "marchii/MARCHHIIx20L_2023.pdf",
      hojaDeDatosDeSeguridad: "marchii/March_II_MSDS.pdf",
      flyerComercial: "",
    },
  },
  {
    link: "march-max",
    nombre: "MARCH MAX®",
    thumbnail: "march-max/thumb-march-max.jpg",
    imagen: "march-max/MARCHMAX.jpg",
    categoria: "herbicidas",
    principioActivo: "Glifosato 75,7%",
    formulacion: "Granuelos Solubles (SG)",
    descripcion:
      "March max es un herbicida no selectivo para el control postemergente de las malezas anuales y perennes en áreas agrícolas, industriales, caminos, vías férrea.\n\nDe acción sistemática, es absorbido por hojas y tallos verdes y traslocado hacia las raíces y órganos vegetativos subterráneos, ocasionando la muerte total de las malezas emergidas. Los efectos son lentos sobre todo en las especies perennes, donde después de transcurridos 4 a 5 días desde la aplicación comienza el amarillamiento y marchitamiento de las hojas y tallos que culminan con la muerte total de las malezas.",
    accion: "Sistémica.",
    mecanismoDeAccion:
      "Inhibidor de enolpiruvil-shikimato-3-fosfato sintasa (EPSP). Grupo G.",
    malezas: [
      {
        nombre: "Anuales",
        datos:
          "GRAMINEAS: Capín /Pasto cañada (Echinochloa colonum), Capín (Echinochloa crus-galli), Cebadilla criolla (Bromus unioloides) Cola de zorro (Setaria spp.). Pasto cuaresma (Digitaria spp).",
      },
      {
        nombre: "Latifoliadas",
        datos:
          "Yuyo Colorado / ataco (Amaranthus spp), Quinoa (Chenopodium album), Enredadera anual (Polygonum convolvulus), Ciennudos / sanguinaria (Polygonum aviculare), Chamico (Datura ferox), Amor seco / saetilla (Bidens pilosa).",
      },
      {
        nombre: "Perennes",
        datos:
          "Sorgo de alepo/Cañota (Sorgum halepense), Gramón/gramilla/chepica (Cynodon Dactylon) Cebollín/cípero/junquillo (Cyperus rotundus), Cípero/junquillo (Cyperus esculentus), Camalote / Pasto de guinea (Panichum), Yuyo sapo (Wedelia glauca)",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Alambrados",
      "áreas no cultivadas",
      "barbecho químico",
      "vías férreas",
      "cítricos o citrus",
      "yerba mate",
      "té",
      "frutales de pepita y vid",
      "Pre siembra de girasol",
      "soja",
      "pasturas",
      "pino",
      "trigo",
      "Cultivos resistentes a glifosato",
    ],
    dosis: [
      {
        nombre: "Malezas anuales",
        datos: "dosis de 1 kg/ha a 2,05 kg/ha.",
      },
      {
        nombre: "Malezas perennes",
        datos: "dosis de 1,25 kg/ha a 3 kg/ha.",
      },
    ],
    recomendacionesDeUso:
      "Aplicarse cuando las malezas se encuentran en activo crecimiento, con una altura menor a 15 cm, evitando aplicaciones sobre malezas cubiertas de tierra. No pulverizar si se preven lluvias durante las 6 horas posteriores a la aplicación o cuando el follaje de las malezas esté mojado.\n\nEl glifosato pierde efectividad en presencia de aguas duras (aquellas con alto contenido de Calcio y Magnesio), Por lo cual se recomienda corregir la dureza del agua antes del agregado de MARCH MAX AGROFINA utilizando productos especiales disponibles para tal fin. Con respecto al pH de la solución se recomienda que el mismo sea neutro levemente ácido.",
    descargas: {
      marbete: "march-max/MARCHMAX_GS_Bolsa_15k_2023.pdf",
      hojaDeDatosDeSeguridad: "",
      flyerComercial: "march-max/FlyerMARCHMAX.pdf",
    },
  },
  {
    link: "million",
    nombre: "MILLION®",
    thumbnail: "million/million.png",
    imagen: "million/Million5L-773x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Lactofen 24%",
    formulacion: "Concentrado Emulsionable (EC)",
    descripcion:
      "MILLION es un herbicida post emergente de contacto y selectivo para cultivos de SOJA y MANÍ, que controla malezas latifoliadas. Cuando es absorbido por las partes verdes de las malezas se activa por la luz, destruyendo la membrana celular, lo que produce una necrosis de los tejidos vegetales. Sus síntomas comienzan a los 30 minutos de aplicado",
    accion: "Contacto.",
    mecanismoDeAccion:
      "Inhibidor de la enzima protoporfirinogeno oxidasa (PPO). Grupo E",
    malezas: [
      {
        nombre: "",
        datos:
          "Chamico, Chinchilla, Flor de Santa Lucía, Malva Cimarrona, Nabo, Yuyo Colorado, Verdolaga, Albahaca silvestre, Alkekenje, Farolito, Yuyo colorado resistente a ALS.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Maní", "Soja"],
    dosis: [
      {
        nombre: "Maní",
        datos: "0,250- 0,350 L/ha.",
      },
      {
        nombre: "Soja",
        datos: "0,250 – 0,350 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Aplicar una vez que todas las malezas hayan emergido, cuando las mismas sean jóvenes y en activo crecimiento.\n\nPara control de Yuyo Colorado resistente a ALS en soja consultar por mezcla con DASEN.\n\nNo aplicar bajo condiciones de sequía o en casos de falta de humedad prolongada y/o baja humedad relativa ambiente, no aplicar en horas del día de máxima insolación y alta temperatura, no aplicar en presencia de rocío, ni ante la inminencia de lluvias.",
    descargas: {
      marbete: "million/Million5LITA2023.pdf",
      hojaDeDatosDeSeguridad: "million/Million_MSDS.pdf",
      flyerComercial: "million/FlyerMillion_2022.pdf",
    },
  },
  {
    link: "morrigan",
    nombre: "MORRIGAN®",
    thumbnail: "morrigan/morrigan.png",
    imagen: "morrigan/CajaMorrigan-1024x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Diclosulam 84%",
    formulacion: "Polvo Mojable (WP)",
    descripcion:
      "MORRIGAN es un herbicida selectivo para el control de malezas de hoja ancha y gramíneas, que compiten con los cultivos de soja y maní. Posee baja retención por rastrojos, permitiendo ser aplicado con coberturas verdes sin ser retenido por la intercepción de tejido vegetal verde.\nEs activo en tratamientos de suelo (pre-siembra, pre-emergencia), su efecto residual permite controlar los flujos de emergencia de las malezas durante las etapas iniciales del cultivo y también tiene efecto post-emergencia.",
    accion: "Sistémico y residual.",
    mecanismoDeAccion:
      "Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.",
    malezas: [
      {
        nombre: "Latifoliadas",
        datos:
          "Abrojos, Bejuco, Campanilla, Chamico, Chinchilla, Ipomea, Malva, Quinoa, Rama negra, Saetilla o Amor seco, Verdolaga, Yuyo colorado",
      },
      {
        nombre: "Gramíneas anuales",
        datos: "Capin, Cola de zorro, Eleusine, Pasto Cuaresma.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Maní", "Soja"],
    dosis: [
      {
        nombre: "Maní",
        datos: "0,030 kg/ha.",
      },
      {
        nombre: "Soja",
        datos: "0.024 kg/ha.",
      },
    ],
    recomendacionesDeUso:
      "MORRIGAN es un herbicida selectivo para el control de malezas de hoja ancha y gramíneas, que compiten con los cultivos de soja y maní. Posee baja retención por rastrojos, permitiendo ser aplicado con coberturas verdes sin ser retenido por la intercepción de tejido vegetal verde.\nEs activo en tratamientos de suelo (pre-siembra, pre-emergencia), su efecto residual permite controlar los flujos de emergencia de las malezas durante las etapas iniciales del cultivo y también tiene efecto post-emergencia.",
    descargas: {
      marbete: "morrigan/MORRIGAN_SOBRE_2023.pdf",
      hojaDeDatosDeSeguridad: "morrigan/CajaMorrigan-1024x1024.jpg",
      flyerComercial: "morrigan/FlyerMorrigan.pdf",
    },
  },
  {
    link: "mulan",
    nombre: "MULAN®",
    thumbnail: "mulan/mulan.png",
    imagen: "mulan/mulan.jpg",
    categoria: "herbicidas",
    principioActivo: "Flumetsulam 12%",
    formulacion: "SC (Suspensión Concentrada)",
    descripcion:
      "Herbicida residual y selectivo para el control de malezas de hoja ancha. Absorción foliar y radical, con rápida translocación vía xilema y floema, acumulándose en las regiones meristemáticas, por lo que las malezas detienen ráídamente su crecimiento.",
    accion: "Sistémico y residual.",
    mecanismoDeAccion: "Inhibidor de la enzima aceto lactato sintetasa (ALS).",
    malezas: [
      {
        nombre: "",
        datos:
          "Anagallis, Bolsa de pastor, Calabacilla, Capiquí, Cardo negro, Cardo pendiente, Cardo ruso, Chinchilla, Cicuta negra, Correhuela, Enredadera anual, Erisimo, Flor morada, Girasol guacho, Lengua de vaca, Manzanilla cimarrona, Margarita, Margarita de Piria, Mastuerzo, Mostacilla, Nabón, Ortiga mansa, Quinoa, Rábano, Rabizón, Roseta, Sanguinaria, Spergula, Verdolaga, Viznaga, Yuyo colorado.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Pasturas consociadas",
      "Soja",
      "Poroto",
      "Maíz de germoplasma templado",
      "Caña de azúcar",
    ],
    dosis: [
      {
        nombre: "Pasturas",
        datos:
          "Pre emergente: 0,4 – 0,6 L/ha. Post emergente: 0,2 – 0,24 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "El suelo debe presentar condiciones adecuadas de humedad. La maleza tiene que estar en activo crecimiento. Pre-emergencia: Aplicar después de la siembra y antes de la emergencia de la pastura. Post-emergencia: Aplicar con malezas pequeñas (de cotiledón hasta 6 hojas o rosetas de 10 cm de diámetro) y a partir de que las leguminosas tengan 2-3 trifolios.",
    descargas: {
      marbete: "mulan/Mulan_5L_ITA_2023.pdf",
      hojaDeDatosDeSeguridad: "",
      flyerComercial: "",
    },
  },
  {
    link: "mulan48",
    nombre: "MULAN® 48",
    thumbnail: "mulan48/mulan48.png",
    imagen: "mulan48/mulan482021-807x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Flumetsulam 48%",
    formulacion: "Suspensión Concentrada (SC)",
    descripcion:
      "Herbicida residual y selectivo para el control de malezas de hoja ancha. A base de Flumetsulam más concentrado del mercado.\n\nExclusiva formulación compatible con glifosato líquido y granulado.\n\nAbsorción foliar y radical, con rápida translocación vía xilema y floema, acumulándose en las regiones meristemáticas.\n\nLas malezas detienen rápidamente el crecimiento, dado que trabaja en las zonas meristemáticas.\n\nHerbicida banda verde. Más amigable con el medio ambiente.",
    accion: "Sistémico y Residual.",
    mecanismoDeAccion:
      "Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.",
    malezas: [
      {
        nombre: "",
        datos:
          "Albahaca silvestre, Anagallis, Bolsa de pastor, Capiquí, Cardo negro, Cardo pendiente, Cardo ruso, Chinchilla, Enredadera anual, Flor morada, Girasol guacho, Lengua de vaca, Manzanilla cimarrona, Mastuerzo, Mostacilla, Nabo, Nabón, Ortiga mansa, Quinoa, Roseta, Sanguinaria, Verdolaga, Tupulo, Viznaga, Yuyo colorado.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Pasturas consociadas",
      "Soja",
      "Poroto",
      "Maíz de germoplasma templado",
      "Caña de azúcar",
    ],
    dosis: [
      {
        nombre: "Pasturas",
        datos:
          "Pre emergente: 0.1 – 0.15 L/ha y en Post emergente: 0.05 – 0.060 L/ha.",
      },
      {
        nombre: "Maíz",
        datos:
          "Pre emergente: 0.25 L/ha y 0.2 L/ha + 1 L/ha acetoclor o metolacloro, en mezcla para control de latifoliadas y gramíneas.",
      },
      {
        nombre: "Soja",
        datos:
          "0.25 L/ha, se puede realizar la aplicación MULAN 48 hasta 30 días antes de la siembra. La incorporación la realizarán las primeras lluvias.",
      },
      {
        nombre: "Caña de azúcar",
        datos:
          "0.075 – 0.1 L/ha, Pre-emergencia. La dosis mínima se recomienda para suelos sueltos (franco arenosos) con menos de 2% de materia orgánica. Mezcla con 1 L/ha de metolacloro, aumenta el control de Amaranthus quitensis y gramíneas anuales.",
      },
    ],
    bandaToxicologica: "Verde",
    recomendacionesDeUso: "",
    descargas: {
      marbete: "mulan48/Mulan48.pdf",
      hojaDeDatosDeSeguridad: "mulan48/MULAN_48_MSDS.pdf",
      flyerComercial: "mulan48/FlyerMulan.pdf",
    },
  },
  {
    link: "nifran",
    nombre: "NIFRAN®",
    thumbnail: "nifran/nifran.png",
    imagen: "nifran/Nifran20L_1-798x1024.jpg",
    categoria: "fungicidas",
    principioActivo: "Fluazinam 50% – SC (Suspensión Concentrada)",
    formulacion: "Suspensión Concentrada (SC)",
    descripcion:
      "Es un fungicida preventivo, de contacto y con modo de acción multisitio. Cuando es aplicado sobre la planta queda en la superficie de la misma, brindando una muy buena protección basada en su efecto residual y su resistencia al lavado por lluvias. Esta combinación permite un control efectivo sobre el complejo de hongos resistentes a otros grupos de fungicidas. Ideal para prevenir la aparición de resistencias",
    accion: "Contacto, con efecto preventivo.",
    mecanismoDeAccion:
      "Inhibe el crecimiento del micelio del hongo y su desarrollo reproductivo. (acción multisitio).",
    malezas: [],
    enfermedades: "",
    plagas: "",
    cultivos: ["Maní", "Papa", "Poroto", "Vid"],
    dosis: [
      {
        nombre: "Maní",
        datos: "1 L/ha",
      },
      {
        nombre: "Papa",
        datos: "0,4 – 0,6 L/ha",
      },
      {
        nombre: "Poroto",
        datos: "0,75 – 1 L/ha",
      },
      {
        nombre: "Vid",
        datos: "0,8 L/ha",
      },
    ],
    recomendacionesDeUso:
      "Papa: Tizón tardío (Phytophthora infestans), 0,4 – 0,6 L/ha.\n\nAplicar 20 a 30 días después de la emergencia del cultivo. Repetir c/7 días.\n\nPoroto: Sclerotinia (Sclerotinia sclerotiorum), 0,75-1 l/ha, aplicar al inicio y al final de floración.\n\nManí: Sclerotinia sclerotiorum, 1 l/ha. Dos aplicaciones: la primera al inicio de clavado o floración y la segunda aplicación 21 días después en período de llenado de fruto.\n\nVid: Podredumbre gris (Botritis cinerea), 0,8 L/ha, Cuatro aplicaciones: en floración, en cierre de racimo, en envero, y en madurez.",
    descargas: {
      marbete: "nifran/Nifran_5LITA_2023.pdf",
      hojaDeDatosDeSeguridad: "nifran/Nifran_MSDS.pdf",
      flyerComercial: "nifran/Agrofina-Nifran-Flyer.pdf",
    },
  },
  {
    link: "paraquat",
    nombre: "PARAQUAT® 27,6",
    thumbnail: "paraquat/paraquat2021.png",
    imagen: "paraquat/paraquat.jpg",
    categoria: "herbicidas",
    principioActivo: "Paraquat dicloruro 27,6%",
    formulacion: "Concentrado Soluble (SL)",
    descripcion:
      "Paraquat actúa por contacto, su acción es rápida y enérgica sobre el follaje y partes verdes de la planta y no afecta los tallos de corteza marrón. Se inactiva en contacto con el suelo o agua con tierra en suspensión.\n\nNecesita de la fotosíntesis activa para manifestar su efecto herbicida, que se caracteriza por el colapso de la estructura celular y la desecación, en condiciones cálidas y soleadas, la actividad herbicida se desarrolla rápidamente en unas pocas horas. En condiciones nubladas o hacia el fin del día, la acción se hace más lenta pero más efectiva, ya que el producto se transloca mejor en la planta.",
    accion: "Actúa solamente por contacto.",
    mecanismoDeAccion: "Actúa inhibiendo el fotosistema I (Grupo D)",
    malezas: [],
    enfermedades: "",
    plagas: "",
    cultivos: [],
    dosis: [
      {
        nombre: "",
        datos: "1,5 – 4 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Utilizar las dosis mayores cuando las malezas o el cultivo a desecar tengan abundante follaje o como primer tratamiento. Usar la dosis baja como segundo tratamiento o para tratar rebrotes.\n\nEs conveniente aplicar cuando las malezas son pequeñas y tienen una altura menor a 10 cm. Para lograr la máxima eficacia del producto se recomienda aplicarlo acompañado con humectante no iónico a concentración 0,2 % (200cc/100 l de agua).\n\nHumectante: en situaciones donde sean necesarias diluciones en una concentración menor de 1 litro de PARAQUAT 27,6 AGROFINA en 100 litros de agua, agregar 100 cm3 de humectante no iónico por cada 100 l adicionales de agua.",
    descargas: {
      marbete: "paraquat/Paraquat27.6SLAgrofina2023.pdf",
      hojaDeDatosDeSeguridad: "paraquat/Agrofina-Paraquat-MSDS.pdf",
      flyerComercial: "",
    },
  },
  {
    link: "s-million",
    nombre: "S-MILLION®",
    thumbnail: "s-million/logo-s-million.jpg",
    imagen: "s-million/SMillion5L_1-807x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "S-Lactofen 36%",
    formulacion: "EC (Concentrado Emulsionable)",
    descripcion:
      "Herbicida post emergente de contacto y selectivo para SOJA y MANÍ, para el control de malezas difíciles  latifoliadas, como Yuyo colorado. Innovadora formulación con 100 % isómero S, otorgando mayor actividad biológica,  permitiendo reducir la dosis final al 50 % respecto a lactofen 24% y asegurando selectividad en el cultivo.\n\nLa excelente calidad de formulación mejora la compatibilidad de la mezcla de tanque. El producto cuando se incorpora en agua forma una microemulsión que aumenta la biodisponibilidad del ingrediente activo, asegura una buena distribución  en el caldo y garantiza una aplicación uniforme.\n\nFormulación sustentable, donde aplicamos principios de “Green Chemistry” (Química Verde).",
    accion: "Contacto.",
    mecanismoDeAccion:
      "Inhibidor de la enzima protoporfirinogeno oxidasa (PPO). Grupo E.",
    malezas: [
      {
        nombre: "",
        datos:
          "Chamico (Datura ferox). Malva cimarrona (Anoda cristata). Nabo (Brassica campestris). Yuyo colorado (Amaranthus quitensis). Albahaca silvestre (Galinsoga parviflora). Alkekenje (Physalis angulata). Farolito (Nicandra physaloides). Verdolaga (Portulaca oleracea). Chinchilla (Tagetes minuta).",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Maní", "Soja"],
    dosis: [
      {
        nombre: "Maní",
        datos: "0,175 L/ha.",
      },
      {
        nombre: "Soja",
        datos: "0,24 – 0,3 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Aplicar una vez que todas las malezas hayan emergido, cuando las mismas sean jóvenes y en activo crecimiento. Para control de Yuyo Colorado resistente a ALS en soja consultar por mezcla con DASEN. No aplicar bajo condiciones de sequía o en casos de falta de humedad prolongada y/o baja humedad relativa ambiente, no aplicar en horas del día de máxima insolación y alta temperatura, no aplicar en presencia de rocío, ni ante la inminencia de lluvias.",
    descargas: {
      marbete: "s-million/s-million_etiqueta.pdf",
      hojaDeDatosDeSeguridad: "s-million/s-million_MSDS.pdf",
      flyerComercial: "s-million/s-million_flyer.pdf",
    },
  },
  {
    link: "sulfenax50",
    nombre: "SULFENAX® 50",
    thumbnail: "sulfenax50/sulfenax50.png",
    imagen: "sulfenax50/CajaSulfenax50-1024x768.jpg",
    categoria: "herbicidas",
    principioActivo: "Sulfentrazone 50%",
    formulacion: "Suspension concentrada (SC)",
    descripcion:
      "Es un herbicida del grupo químico de las ariltriazolinonas, selectivo para los cultivos de soja, maní y girasol. Es un herbicida residual, que al ser aplicado e incorporado al suelo, ingresa a las plántulas de malezas por la raíz inhibiendo la síntesis de la clorofila. Las plantas que emergen del suelo se ponen necróticas y mueren al poco tiempo de estar en contacto con la luz.",
    accion: "Sistémica y residual.",
    mecanismoDeAccion:
      "Inhibidor de la enzima protoporfirinogeno oxidasa (PPO). Grupo E.",
    malezas: [
      {
        nombre: "",
        datos:
          "Bowlesia (Bowlesia incana), Cien nudos (Polygonum aviculare), Malva cimarrona (Anoda cristata), Peludilla (Gamochaeta subfalcata), Quinoa blanca (Chenopodium album), Senecio (Senecio spp.), Verdolaga (Portulaca oleracea) Yuyo colorado (Amaranthus quitensis), Cardo ruso (Salsola kali).",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Soja", "Girasol", "Maní"],
    dosis: [
      {
        nombre: "Soja y Girasol",
        datos: "0,250- 0,400 L/ha.",
      },
      {
        nombre: "Maní",
        datos: "0,250- 0,350 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Las dosis están directamente relacionadas con las características de los lotes en que se utilizará el producto. Por ello se debe tener especialmente en cuenta el tipo de suelo, textura, contenido de materia orgánica, pH, relieve, etc. Usar dosis mayores en suelos de pH menores a 7.",
    descargas: {
      marbete: "sulfenax50/Sulfenax-marbete-2023.pdf",
      hojaDeDatosDeSeguridad: "sulfenax50/Sulfenax_50_FDS.pdf",
      flyerComercial: "sulfenax50/FlyerSulfenax50.pdf",
    },
  },
  {
    link: "talis",
    nombre: "TALIS®",
    thumbnail: "talis/talis.png",
    imagen: "talis/Talis20L-798x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Flurocloridona 25%",
    formulacion: "Concentrado Emulsionable (EC)",
    descripcion:
      "Herbicida residual selectivo pre y post-emergente temprano que controla un amplio espectro de malezas, especialmente las de hoja ancha. Por su acción sistémica penetra por cotiledones, hojas jóvenes, y raíces y se trasloca acropetalmente hacia hojas y tallos provocando la muerte de las malezas. El periodo de control de maleza se extiende por más de 90 días en distintos tipos de suelo sin afectar a los cultivos que siguen en la rotación. Se activa con escasa humedad en suelo, no se lava por lluvias.\n\nLos efectos son visibles a los 4 a 6 días de su aplicación comenzando por el amarillamiento y marchitamiento de las hojas y tallos.",
    accion: "Sistémico y Residual.",
    mecanismoDeAccion:
      "Inhibidores de la enzima fitoeno desaturasa (Grupo F1).",
    malezas: [
      {
        nombre: "",
        datos:
          "Abrojo grande, Albahaca silvestre, Bejuco, Bolsa del pastor, Capín arroz, Capiquí, Cardo, Chamico, Chinchilla, Cola de zorro, Enredadera anual, Malva cimarrona, Manzanilla, Mastuerzo, Mostacilla, Nabo, Nabón, Ortiga, Ortiga mansa, Pasto blanco, Pasto de cuaresma, Quinoa blanca, Rábano, Sanguinaria, Sorgo de Alepo de semilla, Verdolaga, Verdolaga rastrera, Verónica, Viola silvestre, Yuyo colorado.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Girasol",
      "Avena",
      "Cebada",
      "Centeno",
      "Lenteja",
      "Perejil",
      "Zanahoria",
      "Caña de azúcar",
      "Papa",
      "Algodón",
      "Maíz",
      "Trigo",
      "Chia",
    ],
    dosis: [
      {
        nombre: "Trigo",
        datos:
          "en barbecho químico y preemergencia 1,5 – 2 L/ha. En postemergencia: 0,3 – 0,5 L/ha.",
      },
      {
        nombre: "Girasol, papa, algodón, maíz",
        datos: "2 – 4 L/ha.",
      },
      {
        nombre: "Avena, Cebada, Centeno, Lenteja, Perejil, Zanahoria",
        datos: "2 – 4 L/ha.",
      },
      {
        nombre: "Caña de azúcar",
        datos: "4 – 5,5 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Aplicar las dosis mayores recomendadas en el cuadro de usos cuando la infestación de malezas sea alta y/o en suelos con más de 3% de materia orgánica.",
    descargas: {
      marbete: "talis/TALISx20L_2023.pdf",
      hojaDeDatosDeSeguridad: "talis/Talis_MSDS.pdf",
      flyerComercial: "talis/FlyerTalis_2022.pdf",
    },
  },
  {
    link: "topground",
    nombre: "TOP GROUND®",
    thumbnail: "topground/topground.png",
    imagen: "topground/TopGround150.png",
    categoria: "herbicidas",
    principioActivo: "Imazapir 17,5% + Imazapic 52,5%",
    formulacion: "Polvo Soluble (SP)",
    descripcion:
      "TOP GROUND es un herbicida con una elevada acción residual, más de 90 días, para aplicaciones pre-emergentes y post-emergentes tempranas de MAÍZ y SORGO IMI (tolerantes a imidazolinonas), aplicaciones en BARBECHOS LARGOS EN SOJA y aplicaciones pre emergentes en CAÑA DE AZÚCAR. TOP GROUND es un herbicida con acción de contacto, sistémico y residual. Estas características le permiten controlar malezas en pre-emergencia como en post-emergencia garantizando un período de control prolongado y sin competencia.",
    accion: "Contacto, Sistémico y Residual.",
    mecanismoDeAccion:
      "Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B",
    malezas: [
      {
        nombre: "",
        datos:
          "Abrojo grande, Capín arroz, Cebollín, Chamico, Chinchilla, Chufa, Cola de zorro, Farolito, Girasolillo, Gramón, Malva cimarrona, Nabo, Pata de gallina, Pasto de cuaresma, Quinoa, Sorgo de Alepo (RIZ/SEM), Verdolaga, Yerba del pollo, Yuyo colorado, Rye grass.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: [
      "Maiz y sorgo IMI",
      "Barbecho químico",
      "Soja",
      "Caña de azúcar",
    ],
    dosis: [
      {
        nombre: "Maíz y sorgo IMI",
        datos: "114 g/ha (1 Pack cada 20 has).",
      },
      {
        nombre: "Soja",
        datos:
          "hasta 120 días antes de la siembra: 150 g/ha (1 pack cada 15 has). Hasta 90 días antes de la siembra: 114 g/ha (1 pack cada 20 has).",
      },
      {
        nombre: "Caña de azúcar",
        datos: "Suelos livianos: 200 g/ha. Suelos pesados: 250 g/ha.",
      },
    ],
    recomendacionesDeUso:
      "TOP GROUND debe ser activado por una pequeña cantidad de humedad del suelo después de la aplicación. Lluvias posteriores de 15-20 mm asegurarán la incorporación de los herbicidas a la matriz del suelo, garantizando su efectividad. En suelos con menos de 5% de materia orgánica y lluvias torrenciales en un corto periodo de tiempo, el producto puede estar expuesto a lixiviación disminuyendo su capacidad de control.\n\nMaíz IMI: El maíz no debe presentar un estado de desarrollo superior a 6ta hoja desplegada con lígula visible. No aplicar en casos de falta de humedad prolongada y cuando la maleza presenta síntomas de marchitez.\n\nSoja: Aplicar la dosis menor 90 días previo a la siembra y la dosis mayor 120 días previo a la siembra. Comenzando a contar los días luego de la primera precipitación de 20 mm post aplicación.\n\nCaña de azúcar: Aplicar en preemergencia del cultivo o antes de que brote la soca. Se puede aplicar en pre emergencia o post emergencia temprana de malezas. Para alcanzar la máxima actividad del producto, es preferible que las malezas se encuentren emergidas, que no superen las 4 hojas verdaderas y estén en un período de activo crecimiento\n\nSorgo IMI: Sorgo Forrajero: Una aplicación en premergencia del cultivo. Sorgo Granífero: una aplicación entre la siembra y hasta 4 hojas verdaderas del sorgo.",
    bandaToxicologica: "Azul",
    descargas: {
      marbete: "topground/TopGround_etiqueta.pdf",
      hojaDeDatosDeSeguridad: "topground/TopGround_MSDS.pdf",
      flyerComercial: "topground/FlyerTopGround_2022.pdf",
    },
  },
  {
    link: "toprice",
    nombre: "TOP RICE®",
    thumbnail: "toprice/toprice.png",
    imagen: "toprice/Toprice-1024x588.jpg",
    categoria: "herbicidas",
    principioActivo: "Imazapic 17,5% + Imazapir 52,5%",
    formulacion: "Polvo Soluble (SP)",
    descripcion:
      "Es un herbicida de residualidad prolongada para aplicación secuencial en pre-emergencia y post-emergencia temprana indicado para cultivos de arroz tolerante a las imidazolinonas. Su acción herbicida, especialmente contra arroz colorado, se complementa con la inundación temprana del cultivo. Por su acción residual controla malezas que nacen después de la aplicación, una vez que ha sido incorporado al suelo por precipitaciones adecuadas.",
    accion: "Sistémico, residual.",
    mecanismoDeAccion:
      "Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B",
    malezas: [
      {
        nombre: "Latifoliadas",
        datos:
          "Laguinilla, Porotillo, Duraznillo de agua, Verdolaga, Eclipta, Pata de loro, Eichornia, Caperonia.",
      },
      {
        nombre: "Gramíneas",
        datos:
          "Arroz colorado, Arroz común, Capín colorado, Capín arroz, Chacrilla, Pasto brachiaria, Pasto colchón, Cola de zorro, Pasto cuaresma, Pasto dulce, Gramón, Pastos de agua, Pasto moro.",
      },
      {
        nombre: "Ciperáceas",
        datos: "Chufa, Junquillo, Totorilla.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Arroz"],
    dosis: [
      {
        nombre: "",
        datos:
          "Pre-emergencia: 140 g/ha – Post-emergencia: 140 g/ha + coadyuvante.",
      },
    ],
    recomendacionesDeUso:
      "Debe ser aplicado en forma secuencial:\n1er aplicación, en pre emergencia, es necesario disponer de buena humedad en el suelo siendo favorecida la incorporación del producto al suelo por las lluvias posteriores a la aplicación. Por su acción residual, controla malezas que aun no han emergido, siempre y cuando las condiciones de humedad en el suelo sean las adecuadas.\n\nLa 2da aplicación, en post-emergencia, se realiza con la adición de coadyuvante para mejorar la absorción foliar del producto. De 2 a 4 días de la aplicación post-emergente, se completa la acción del producto con la inundación del cultivo.\n\nNo aplicar en condiciones de sequía prolongada o con el cultivo y malezas con síntomas de marchitez.\n\n1) Para el control de malezas emergidas en aplicaciones de pre emergencia del cultivo, aplicar Glifosato a dosis recomendadas, en aplicaciones separadas.\n\n2) Para aplicaciones post-emergentes del cultivo, agregar surfactante en dosis mínima de 250 g de ingrediente activo del surfactante cada 100 L de caldo.",
    descargas: {
      marbete: "toprice/Agrofina-Toprice-Marbete.pdf",
      hojaDeDatosDeSeguridad: "toprice/Top_Rice_MSDS.pdf",
      flyerComercial: "toprice/FlyerTopRice2022.pdf",
    },
  },
  {
    link: "verosil",
    nombre: "VEROSIL®",
    thumbnail: "verosil/verosil.png",
    imagen: "verosil/Verosil20L-798x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "Imazetapir 10,59%",
    formulacion: "SL (Concentrado Soluble)",
    descripcion:
      "Herbicida sistémico selectivo de acción residual, en aplicaciones post emergentes es absorbido por follaje y raíz. También tiene aplicación como herbicida selectivo pre emergente en poroto. Ejerce un control residual en las malezas que germinan después de la aplicación.",
    accion: "Sistémico y residual.",
    mecanismoDeAccion: "Inhibidor de la enzima aceto lactato sintetasa (ALS).",
    malezas: [
      {
        nombre: "",
        datos:
          "Abrojillo, abrojo grande, afata, amor seco, bejuco, bolsa de pastor, capín, capiquí, cebada cervecera, cebollín, chamico, chinchilla, enredadera anual, falsa biznaga, farolito, girasolillo, lengua de vaca, malva, mastuerzo, mostacilla, nabo, nabón, ortiga, ortiga mansa, pasto colorado, pasto cuaresma, perejilillo, quinoa, revienta caballo, sanguinaria, sorgo de alepo, trigo, verdolaga, yuyo colorado.",
      },
    ],
    enfermedades: "",
    plagas: "",
    cultivos: ["Soja", "Maní", "Maíz IMI", "Alfalfa", "Arveja", "Poroto"],
    dosis: [
      {
        nombre: "Soja, Maní, Maíz IMI, alfalfa, arveja",
        datos: "0,8 – 1 L/ha. Poroto: 0,5 L/ha.",
      },
    ],
    recomendacionesDeUso:
      "Iniciar el control de las malezas desde su emergencia hasta la 4ta hoja verdadera de ellas. En caso de alta infestación se consigue control óptimo aplicando antes de la 2da hoja verdadera de la maleza. Para un óptimo control, las condiciones de humedad deben ser tales que favorezcan un activo crecimiento de las malezas.",
    descargas: {
      marbete: "verosil/Verosil_etiqueta.pdf",
      hojaDeDatosDeSeguridad: "",
      flyerComercial: "verosil/Verosil_flyer.pdf",
    },
  },
  {
    link: "zinax",
    nombre: "ZINAX®",
    thumbnail: "zinax/zinax.png",
    imagen: "zinax/Zinax20L_1-798x1024.jpg",
    categoria: "herbicidas",
    principioActivo: "EMAG 75%",
    formulacion: "",
    descripcion:
      "Coadyuvante para mezclar con otros plaguicidas. Actúa como vehículo, haciendo más eficiente el mojado y mejorando la absorción foliar de los plaguicidas en las plantas.\n\nAdherente, mejorando la adherencia sobre la hoja, protegiendo al producto, reduciendo el lavado por lluvias, permaneciendo más tiempo para facilitar la absorción y reduciendo el escurrimiento.\n\nAntievaporante, reduciendo pérdidas de productos y ayudando a la deposición.",
    accion: "",
    mecanismoDeAccion: "",
    malezas: [],
    enfermedades: "",
    plagas: "",
    cultivos: [],
    dosis: [
      {
        nombre: "",
        datos:
          "La dosis recomendadas varían entre el 0,2% y el 0,5% del volumen de aplicación. Seguir las recomendaciones específicas del fabricante o formulador del producto fitosanitario que se habrá de aplicar.",
      },
    ],
    recomendacionesDeUso:
      "Agitar bien el envase antes de usar. Una vez preparada la solución con el plaguicida, agregar la dosis correspondiente del coadyuvante, agitando continuamente para lograr una mezcla uniforme.",
    descargas: {
      marbete: "zinax/ZINAX-marbete-2023.pdf",
      hojaDeDatosDeSeguridad: "zinax/Zinax_MSDS.pdf",
      flyerComercial: "",
    },
  },
];

// {
//     nombre: "",
//     thumbnail: "",
//     imagen: "",
//     categoria: "",
//     principioActivo: "",
//     formulacion: "",
//     descripcion: "",
//     accion: "",
//     mecanismoDeAccion: "",
//     malezas: [
//       {
//         nombre: "",
//         datos: "",
//       },
//     ],
//     enfermedades: "",
//     plagas: "",
//     cultivos: [],
//     dosis: [
//       {
//         nombre: "",
//         datos: "",
//       },
//     ],
//     recomendacionesDeUso: "",
//     descargas: {
//       marbete: "",
//       hojaDeDatosDeSeguridad: "",
//       flyerComercial: "",
//     },
//   },
