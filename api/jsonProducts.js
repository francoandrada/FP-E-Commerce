const jsonProducts = [
	{
		name: 'Disco Seagate Ironwolf 10Tb 35 Sata',
		priceNormal: 99999,
		priceSpecial: 66999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53524_800_image.jpg',
		description:
			'Tanto si eres un usuario doméstico como un profesional creativo, para uso doméstico u oficina, la unidad de disco duro NAS IronWolf de 10 TB de Seagate es la solución de almacenamiento de alta capacidad que necesita.',
		weight: 1,
		brand: 'Seagate',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/disco_seagate_ironwolf_10tb_35_sata-53524.html',
	},
	{
		name: 'Smartband Samsung Fit Silver Acelerom Cardio',
		priceNormal: 8899,
		priceSpecial: 8109,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/0/40974_800_image.jpg',
		description:
			'•Pantalla de 0,95" AMOLED\n•Conexión Bluetooth v5.0 ?\n•RAM 2 Mb\n•ROM 32 Mb\n•Acelerómetro, Giroscopio, Sensor HR\n•Batería 120 mAh\n•Resistente al polvo y agua\n•50m de profundidad ',
		weight: 1,
		brand: 'Samsung',
		category: 'smartbands-smartwatchs',
		descriptionLink:
			'https://delta.com.ar/smartband_samsung_fit_silver_acelerom_cardio-40974.html',
	},
	{
		name: 'Monitor Gamer 27 Acer Predator XB271H 144Hz',
		priceNormal: 112999,
		priceSpecial: 97999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/M/4/M44304_800_image.jpg',
		description:
			'Screen Size\n27"\nMaximum Resolution\n(Full HD)1920 x <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b283828a82f2838686">[email&nbsp;protected]</a> Hz\nAspect Ratio\n16:9\nResponse Time\n1 ms GTG\nColor Supported\n16.7 Million\nBrightness\n300 cd/m²\nBacklight\nLED\nViewing Angles\n170° Horizontal\n160° Vertical\nPanel Type\nTN (Twisted Nematic Film)\nStand\nTilt (-5°~35°)\nSwivel (30°)\nHeight adj (5.91" (150 mm))\nSpeakers\n2 x 2 W\nPorts &amp; Connectors\n1x HDMI®-in\n1x DisplayPort\n1x USB 3.0 Upstream\n4x USB 3.0 Downstream\nPower\n29 W (Power On)\nColors\nBlack\nTearing Prevention Technology\nNVIDIA® G-SYNC®\nVESA Compatible\n(Yes)\n100 x 100mm\nDimensions (W x H x D)\n25.20" x 14.06" x 2.44"\n25.20" (640 mm) x 22.24" (565 mm) x 10.55" (268 mm) (with stand)\nWeight (Approximate)\n12.5 lbs.\n7.70 kg (with stand)\nPackage Contents\nPredator XB271H Widescreen LCD Monitor\n1 x Displayport Cable\n1 x HDMI Cable\nPower Cord\n1 x USB 3.0 Cable',
		weight: 6000,
		brand: 'Acer',
		category: 'monitors',
		descriptionLink:
			'https://delta.com.ar/monitor_gamer_27_acer_predator_xb271h_144hz-m44304.html',
	},
	{
		name: 'Notebook 2 En 1 Hp Envy R5 4500U 8Gb 256Gb 13 W10H',
		priceNormal: 179999,
		priceSpecial: 167489,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/9/49526_800_image.jpg',
		description:
			'Descripción\nDiseño\nLa notebook HP ENVYx360 convertible cuenta con un diseño compacto y funcional. Sus prácticas medidas de: 30,65 cm de largo x 19,46 cm de ancho x 1,64 cm de alto, y su liviano peso de tan sólo: 1,32 Kg permiten que puedas llevarla con vos a donde vayas.\nDesempeño\nSu procesador AMD Ryzen 5 4500U y su memoria de 8 GB se complementan para ofrecer un mayor rendimiento con un bajo consumo de energía.\nAdemás, su disco sólido de 256GB le da una gran capacidad de almacenamiento de datos y te permite guardar una mayor cantidad de contenido multimedia.\nPantalla\nPosee una pantalla multitáctil con retroiluminación WLED FHD IPS de 13,3" pulgadas con una resolución de 1920x1080 que te permitirá disfrutar de una gran calidad de colores e imagen. Ideal para ver maratones de series y películas.',
		weight: 2420,
		brand: 'HP',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_2_en_1_hp_envy_r5_4500u_8gb_256gb_13_w10h-49526.html',
	},
	{
		name: 'Tablet Lenovo Tb-7305F 1Gb Ram 16Gb',
		priceNormal: 17399,
		priceSpecial: 14899,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/2/2/22301_800_image.jpg',
		description:
			'Descargá y Jugá juegos super divertidos como Free Fire, Clash Royale, Plants vs. Zombies en esta tablet! (Disponibles en Playstore).\nTe sorprenderá cómo en el Tab E7 cabe tanto en un perfil tan delgado. Con tan solo 8,8 mm de espesor, la construcción elegante es un placer para usar y lo podrás llevar en cualquier parte. Guarda más fotos y videos con la ranura de almacenamiento adicional microSD de hasta 128GB extras.\nNo te preocupes por la carga, porque el Tab E7 tiene suficiente batería para ver un par de películas del tirón. ',
		weight: 800,
		brand: 'Lenovo',
		category: 'tablets',
		descriptionLink:
			'https://delta.com.ar/tablet_lenovo_tb_7305f_1gb_ram_16gb-22301.html',
	},
	{
		name: 'UPS FORZA 800VA smart interactiva 4 tomas 480 WATTS 220V',
		priceNormal: 11569,
		priceSpecial: 10329,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/5/45854_800_image.jpg',
		description:
			'La nueva serie SL de sistemas de UPS inteligentes de Forza ha sido rediseñada con una pantalla táctil LCD para facilitar su uso a través de su interfaz fácil de usar que también muestra las condiciones de energía en tiempo real. La serie SL cuenta con la certificación UL y es una solución completa para agencias gubernamentales o empresas privadas en los sectores educativo, financiero y público.\nLa UPS inteligente de línea interactiva, con pantalla LCD táctil de fácil lectura. Incluye la supresión de sobretensión, funciones de regulación de voltaje y de respaldo con baterías de larga duración.Con regulador automático (AVR) mediante reducción y elevación de voltaje y puerto USB habilitado. Incluye software de monitoreo ForzaTracker.\n• Capacidad: 800VA/480W\n• Topología: Interactiva\n• Forma de onda: Onda senoidal simulada\n• Voltaje: 220V\n• Tipo de entrada: IRAM Tipo I\n• Tipo de salida: 4 x IRAM Tipo I\n• Comunicación: USB\n• Indicador visual: Pantalla táctil de LCD de estado\n• Software de gestión: Forza Tracker',
		weight: 15000,
		brand: 'Forza',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/ups_forza_800va_smart_interactiva_4_tomas_480_watts_220v-45854.html',
	},
	{
		name: 'Monitor Acer 19 V206Hql VgaHdmi',
		priceNormal: 29999,
		priceSpecial: 20199,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/M/4/M49703_800_image.jpg',
		description:
			'Información Técnica - Número de Pantallas: 1 - Modo de Pantalla: HD - Tiempo de Respuesta: 5ms - Relación de aspecto: 16:9 - Angulo de Visión Horizontal: 90° - Ángulo de Visión Vertical: 65° - Tecnología de iluminación de Fondo: LED - Tecnología de Pantalla: Film de Torcedura Nemática (TN Film) - Ángulo de inclinación: -5°a25° - Ángulo de Giro: No - Altura máxima ajustable: No - Pivote de Pantalla Ajustable: No\nVídeo - Resolución máx.: 1366 x 768 - Índice de refresco estándar: 60Hz - Colores Admitidos: 16,7 Millones de colores - Brillo: 200cd/m²\nInterfaces/Puertos - VGA: Sí - HDMI: Sí\nCaracterísticas Físicas - Montaje estándar VESA: 100 x 100 - Color: Negro - Altura: 276.2mm - Anchura: 463.4mm - Profundidad: 50mm - Altura con Soporte: 362.20mm - Anchura con Soporte: 463.40mm - Profundidad con Soporte: 191mm - Peso (Aproximado): 2.50kg - Peso con soporte (Aproximado): 2.90kg\nVarios - Contenido de la Caja: - Monitor LCD pantalla panorámica V206HQL - Cable de alimentación - 1 x Cable VGA',
		weight: 7000,
		brand: 'Acer',
		category: 'monitors',
		descriptionLink:
			'https://delta.com.ar/monitor_acer_19_v206hql_vgahdmi-m49703.html',
	},

	{
		name: 'Placa de Video Palit Stormx Geforce Gtx 1050 Gddr5 4Gb',
		priceNormal: 79999,
		priceSpecial: 67899,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53796_800_image.jpg',
		description:
			'Specifications\nMemory Amount\t4Gb\nMemory Interface\t128bit\nDRAM Type\tGDDR5\nGraphics Clock\t1354MHz\nBoost Clock\t1455MHz\nMemory Clock\t7000MHz\nCUDA Cores\t640\nMemory Bandwidth (GB/sec)\t112\nMicrosoft DirectX\t12\nOpenGL\t4.5\nBus Support\tPCI-E 3.0 x 16\nDVI\tDual-Link DVI-D\nHDMI\tHDMI 2.0b\nDisplayPort\tSi\nMaximum Digital Resolution\t4096x2160\nMaximum VGA Resolution\t2048x1536\nHeight\t2 Slot\nBoard Size\t166mm x 112mm\nGraphics Card Power\t75W\nRecommended System Power\t300 W\nAccessory\tManual\nNVIDIA® Pascal\nNVIDIA Dynamic Super Resolution [DSR] Technology\nNVIDIA Adaptive Vertical Sync\nNVIDIA CUDA Technology\nNVIDIA PhysX-ready\nNVIDIA 3D Vision Ready\nNVIDIA Multi-Projection\nNVIDIA Ansel\nNVIDIA Vulkan API\nNVIDIA G-SYNC\nNVIDIA GPU Boost\t3.0\nNVIDIA GameStream Technology ',
		weight: 2000,
		brand: 'Palit',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/catalog/product/view/id/11467/s/placa_de_video_palit_stormx_geforce_gtx_1050_gddr5_4gb-53796/category/2160/',
	},
	{
		name: 'Monitor Acer 195 V206Hq Vga',
		priceNormal: 19999,
		priceSpecial: 15599,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/M/4/M42162_800_image.jpg',
		description:
			'Los monitors de la serie V6 incorporan la tecnología Acer eColor para imágenes impactantes y las innovaciones Acer ComfyView que reducen la degradación para entregar una perspectiva más cómoda. Estos resistentes monitors también integran una gran gama de puertos para que pueda conectar distintos tipos de dispositivos y realice más funciones a la vez. Además, poseen características ecológicas para ahorrar energía y dinero.\n&lt;br&gt;\nMarca: Acer&lt;br&gt;\nDimensiones de pantalla: 19.5"&lt;br&gt;\nTipo de pantalla: Plana&lt;br&gt;\nResolución de Pantalla: 1366X768',
		weight: 1,
		brand: 'Acer',
		category: 'monitors',
		descriptionLink:
			'https://delta.com.ar/monitor_acer_195_v206hq_vga-m42162.html',
	},
	{
		name: 'Notebook Lenovo Yoga Slim 7 i5 8Gb 512Gb W10H',
		priceNormal: 178939,
		priceSpecial: 148999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51529_800_image.jpg',
		description:
			"RENDIMIENTO\nProcesador\nIntel Core i5-1035G4 (4C / 8T, 1,1 / 3,7 GHz, 6 MB)\nGráficos\nGráficos integrados Intel Iris Plus\nChipset\nPlataforma Intel SoC\nMemoria\nLPDDR4x-3200 soldado de 8GB\nRanuras de memoria\nMemoria soldada al tablero del sistema, sin ranuras, capacidad de doble canal\nMemoria máxima\nMemoria soldada de 8GB, no actualizable\nAlmacenamiento\nSSD de 512 GB M.2 2280 PCIe 3.0x4 NVMe\nSoporte de almacenamiento\nUna unidad, 1x SSD M.2 2280 o 1x SSD M.2 2242\n• SSD M.2 2280 de hasta 1 TB\n• SSD M.2 2242 de hasta 512 GB\nLector de tarjetas\nLector de tarjetas microSD\nÓptico\nNinguno\nChip de audio\nAudio de alta definición (HD)\nAltavoces\nAltavoces estéreo, 2 W x2, Dolby Atmos\nCámara\n720p + IR + ToF\nMicrófono\n2x, matriz\nBatería\nIntegrado 60,7 Wh\nDuración máxima de la batería\nMobileMark 2014: 15 h (FHD + gráficos integrados)\nAdaptador de corriente\nUSB-C de 65 W\nDISEÑO\nMostrar\n14 'FHD (1920 x 1080) IPS 300 nits Antirreflejo, 100% sRGB\nPantalla táctil\nNinguno\nTeclado\nRetroiluminado, Español (LA)\nColor de la caja\nPizarra gris\nTratamiento de superficies\nAnodizado con chorro de arena\nMaterial de la Caja\nAluminio (arriba), Aluminio (abajo)\nDimensiones (An x Pr x Al)\n320,6 x 208,18 x 15,1 mm (12,62 x 8,19 x 0,59 pulgadas)\nPeso\n1,5 kg (3,3 libras)\nSOFTWARE\nSistema operativo\nWindows 10 Home 64, español\nSoftware incluido\nPrueba de oficina\nconnectivity\nEthernet\nNinguno\nWLAN + Bluetooth\n11ax, 2x2 + BT5.0\nPuertos estándar\n1x lector de tarjetas\n1x USB-C 3.2 Gen 2 / Thunderbolt 3 (admite transferencia de datos, Power Delivery 3.0 y DisplayPort 1.4)\n1x USB 3.2 de 1.a generación\n1x USB 3.2 Gen 1 (siempre encendido)\n1x conector combinado de auriculares / micrófono (3,5 mm)\n1x USB-C (solo admite Power Delivery 3.0)\n1x HDMI 2.0b\nSEGURIDAD Y PRIVACIDAD\nChip de seguridad\nFirmware TPM 2.0\nLector de huellas dactilares\nEstilo táctil\nOtra seguridad\nCámara de infrarrojos para Windows Hello\nSERVICIO\nGarantía básica\n1 año, depósito\nActualización incluida\nNinguno\nACCESORIOS\nAccesorios incluidos\nNinguno\nCERTIFICACIONES\nCertificaciones ecológicas\nENERGY STAR 8.0\nErP lote 3\nRoHS",
		weight: 3500,
		brand: 'Lenovo',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_lenovo_yoga_slim_7_i5_8gb_512gb_w10h-51529.html',
	},
	{
		name: 'Smartwatch Fitbit Inspire 2 - BlackBlack',
		priceNormal: 17999,
		priceSpecial: 13999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50213_800_image.jpg',
		description:
			'PRUEBA FITBIT PREMIUM GRATIS\nTu pulsera de actividad Inspire 2 incluye una suscripción gratuita de prueba de 1 año a Fitbit Premium para nuevos usuarios además de consejos personalizados, información exclusiva, herramientas de sueño avanzadas y mucho más.\nMONITORIZACIÓN CONTINUA DEL RITMO CARDIACO\nAl monitorizar tu frecuencia cardiaca de manera continua podrás sacar todo el partido a las sesiones de ejercicio, ver las zonas de frecuencia cardiaca, tus fases de sueño y llevar un mejor control de las calorías que quemas.\nRITMO CARDIACO EN REPOSO\nLleva puesta tu Inspire 2 día y noche para registrar tu frecuencia cardiaca en reposo y ver su evolución a lo largo del tiempo.\nSESIONES DE RESPIRACIÓN GUIADA\nInspire 2 te ayuda a encontrar momentos de calma a lo largo del día con sesiones de respiración guiada personalizadas adaptadas a tu frecuencia cardiaca.\nANÁLISIS DE LA SALUD Y FERTILIDAD FEMENINA\nConoce mejor tu cuerpo usando tu pulsera junto con la aplicación de Fitbit y controla todo lo relacionado con la salud femenina: tus periodos, sus síntomas y mucho más.\nREGISTRO DE ALIMENTOS\nSaca todo el partido a la aplicación de Fitbit y registra tus comidas para comparar las calorías que has ingerido con las que has quemado a medida que vas consiguiendo tus objetivos.\nMINUTOS EN ZONA ACTIVA\nLos Minutos en Zona Activa te ayudan a hacer que cada minuto cuente durante los entrenamientos ya que esta función hace vibrar tu muñeca cuando entras en la zona de frecuencia cardiaca que hayas establecido como objetivo.\nACTIVIDAD DIARIA\nCada segundo del día cuenta para alcanzar tus objetivos: Inspire 2 monitoriza los pasos que das, la distancia que recorres y las calorías que quemas.\nZONAS DE FRECUENCIA CARDIACA\nInspire 2 personaliza tus estadísticas en tiempo real en función de tu edad y tu frecuencia cardiaca en reposo para mostrarte si están en zona de quema de grasas, cardio o pico.',
		weight: 200,
		brand: 'Fitbit',
		category: 'smartbands-smartwatchs',
		descriptionLink:
			'https://delta.com.ar/smartwatch_fitbit_inspire_2_blackblack-50213.html',
	},
	{
		name: 'Notebook Lenovo Thinkpad R5 8Gb 256Ssd 14 FreeDOS',
		priceNormal: 159999,
		priceSpecial: 134599,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/0/40988_800_image.jpg',
		description:
			'Descripción\nEl ThinkPad E495 te aporta el procesador AMD potente e inteligente con la durabilidad legendaria del ThinkPad. Su chip TPM independiente y el lector de huellas dactilares biométrico opcional ayudan a salvaguardar tus datos, mientras que los numerosos puertos te permiten hacer varias tareas a la vez como si nada. El almacenamiento en unidad dual, la pantalla FHD y el elegante E495 lo convierten en la elección inteligente para los profesionales de los negocios en constante movimiento.\nSea Mas Productivo\nCon la gama thinkpad Produzca mas en menor tiempo, sus cualidades legendarias y su característico trackball central, le dan posibilidades que ninguna otra Notebook tiene.\nEspecificaciones Tecnicas\nTamaño de pantalla: 14\nTipo de pantalla: LED HD\nResolución de pantalla: 1366x768\nProcesador: Ryzen 5\nNúcleos: 4\nDisco de estado sólido: 256GB\nMemoria RAM: 8GB\nMemoria RAM máxima: 32GB DDR4\nSistema operativo: FreeDOS\nGráficos: AMD Radeon Vega 8\nUnidad óptica: NO\nWi-Fi: Si\nCámara Web: HD 720p\nTeclado numérico: No\nBatería: 45Wh\nColor: Negro',
		weight: 3500,
		brand: 'Lenovo',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_lenovo_thinkpad_r5_8gb_256ssd_14_freedos-40988.html',
	},
	{
		name: 'Placa de Video Palit RTX 1660 Super Gaming Gg 6GB GDDR6',
		priceNormal: 134999,
		priceSpecial: 109999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53993_800_image.jpg',
		description:
			'Especificaciones\nCantidad de memoria\t6G\nInterfaz de la Memoria\t192bit\nTipo de DRAM\tGDDR6\nReloj de Gráficos\t1530 MHz\nReloj de Boost\t1785 MHz\nReloj de la Memoria\t14 Gbps\nNúcleos CUDA\t1408\nAncho de banda de memoria (GB / seg)\t336\nMicrosoft DirectX\t12 API, Vulkan API\nOpenGL\t4.6\nSoporte de Bus\tPCI-E 3.0 x 16\nDVI\tDual-Link DVI-D\nHDMI\tHDMI 2.0b\nDisplayPort\tDP1.4a x 1\nMáxima Resolución Digital\t<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6f5859575f175b5c5d5f2f595f2715">[email&nbsp;protected]</a>\nAltura\t2 Slot\nTamaño de Placa\t235 x 115 x 40 mm\nPotencia de la Tarjeta Gráfica\t125 W\nSistema de Energía Recomendado\t450 W\nConectores de Alimentación Suplementarios\t8-pin x 1\nAccesorio\tManual\nDrMOS\nIluminación LED\nNVIDIA Turing™\nNVIDIA® Highlights\nNVIDIA CUDA Technology\nMulti Monitor\t3\nNVIDIA Ansel\nNVIDIA Vulkan API\nNVIDIA G-SYNC\nNVIDIA GPU Boost\t4\nNVIDIA GameStream Technology\nVirtual Reality ready',
		weight: 2000,
		brand: 'Palit',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/catalog/product/view/id/11560/s/placa_de_video_palit_rtx_1660_super_gaming_gg_6gb_gddr6-53993/category/2160/',
	},
	{
		name: 'Notebook Lenovo IdeaPad Gaming 3 Intel I5-10300H | 8GB DDR4 | GTX1650 4Gb | 1TB HDD 128GB SSD',
		priceNormal: 189999,
		priceSpecial: 163999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/9/49755_800_image.jpg',
		description:
			'PROCESADOR\nMarca: Intel / Modelo: I5-10300H\nNúcleos: 4 / Frecuencia: 4.50 GHz\nGRÁFICOS\nMarca: nVidia / Modelo: GeForce GTX1650 4Gb\nMEMORIA\nCapacidad: 8GB (2x4GB) / Tipo: DDR4 SODIMM\nExpansión: 1 Slot Ocupado (Reemplazable hasta 16Gb)\nALMACENAMIENTO\nCapacidad: 1Tb HDD + 128Gb SSD / Clase: HDD/SSD\nPuerto M2: Si\nPANTALLA\nTamaño: 15.6 / Resolución: 1920x1080\nconnectivity\nWiFi: Si, AC / Bluetooth: Si, 4.2\nHDMI: Si / Red: Si\nUSB 2.0: 0 / USB 3.1: 3\nGrabadora DVD: No / Lector Memorias: Si\nSISTEMA OPERATIVO\nOS: Windows 10 Home SL 64bits\nOTRAS ESPECIFICACIONES\nColor: Negra / WebCam: Si, 0.3MP\nTeclado: Español / Pad Numérico: Si\nDimensiones: 24.9cm Profundidad, 35.9cm Ancho, 2.49cm Alto\nBatería: 3 celdas / Garantía: 12 Meses Lenovo Oficial\nPeso: 2.19Kg / Modelo: 81Y400F1AR',
		weight: 1,
		brand: 'Lenovo',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_lenovo_ideapad_gaming_3_intel_i5_10300h_8gb_ddr4_gtx1650_4gb_1tb_hdd_128gb_ssd-49755.html',
	},
	{
		name: 'Mb Amd (Am4) Asus Tuf Gaming B550M-Plus',
		priceNormal: 25599,
		priceSpecial: 21299,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/8/48556_800_image.jpg',
		description:
			'Zócalo AMD AM4: listo para procesadores AMD Ryzen ™ de tercera generación\nSolución de potencia mejorada: 8 + 2 etapas de potencia DrMOS, conector ProCool, components TUF de grado militar y Digi + VRM para una máxima durabilidad\nRefrigeración completa: disipadores de calor VRM, disipador de calor sin ventilador PCH, disipador de calor M.2, cabezales de ventilador híbridos y utilidad Fan Xpert 2+.\nconnectivity de última generación: compatibilidad con PCIe 4.0 M.2, USB 3.2 Gen 2 tipo A y tipo C.\nHecho para juegos en línea: tecnología Ethernet 2.5Gb, TUF LANGuard y TurboLAN.\nCódec Realtek S1200A: calidad de audio impecable con una relación señal / ruido de 108 dB sin precedentes para salida de línea estéreo y SNR de 103 dB para entrada de línea.\nMicrófono con cancelación de ruido AI: proporciona una comunicación de voz clara en el juego.',
		weight: 1,
		brand: 'Asus',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/catalog/product/view/id/6590/s/mb_amd_am4_asus_tuf_gaming_b550m_plus-48556/category/2160/',
	},

	{
		name: 'Notebook Lenovo Ip3 -14ada05 R7 8gb',
		priceNormal: 147999,
		priceSpecial: 139999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52146_800_image.jpg',
		description:
			'Una laptop accesible que no ralentiza tu trabajo\nProcesadores hasta AMD Ryzen™ 7 y potentes opciones de memoria y almacenamiento\nPantalla de 14” y tapa de seguridad en cámara web\nLa IdeaPad 3 tiene un aspecto limpio gracias a los bordes delgados en ambos lados, que también te ofrecen una excelente experiencia de visión. Dolby Audio™, por su parte, te brinda un sonido ultra nítido cuando retransmites música, chateas por videollamada o ves tus videos favoritos. Seguro te encantará también cómo suena.\nVeloz o callada: tú eliges. Cambia sin esfuerzo del “Modo máximo”, donde tu CPU tomará el control y te ofrecerá el rendimiento más rápido, al “Modo sigiloso” para disfrutar de una experiencia de usuario más silenciosa y una mayor duración de la batería.',
		weight: 1,
		brand: 'Lenovo',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_lenovo_ip3_14ada05_r7_8gb-52146.html',
	},
	{
		name: 'Combo Teclado y Mouse Gamer Lenovo Legion Km300 Rgb',
		priceNormal: 10151,
		priceSpecial: 8951,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52901_800_image.jpg',
		description:
			'nformación general\nDiseñado para igualar las condiciones, el teclado Lenovo™ Legion K300 ofrece a los jugadores principiantes todo lo necesario para competir con los profesionales, a una fracción del costo. El diseño de teclado de tamaño completo, las teclas programables y una membrana anti efecto fantasma de 24 teclas con luz RGB de 5 zonas establecen una sólida base de estilo y rendimiento. El diseño compacto y la capacidad de ajuste lo convierten en el compañero perfecto para el uso casual y en torneos. El mouse para juegos Lenovo™ Legion M300 RGB brinda el rendimiento, la comodidad y el control que los jugadores de nivel de entrada necesitan para jugar como profesionales. Destinado a ser un aliado de confianza, se jacta de un diseño ergonómico y ambidiestro, 8 botones fácilmente programables, un sensor ultrafino ajustable de 8.000 DPI y una retroiluminación LED RGB personalizable en el logotipo icónico de Legion.\nEsp. Técnicas:\nDistribución del teclado Disposición de 3 zonas\nCantidad de teclas Español de Latinoamérica\nColor Negro\nTipo de conector Cableado mediante USB 2.0\nLargo y tipo de cable 1,8 m (5,9 pies) / PVC\nPeso Mouse: 119 g (4,20 oz) Keyboard: 1035 g (36,5 oz)\nRetroiluminación RGB dinámico de 5 zonas\nBotón de mouse 8 botones programables\nButton Life Izquierda / Derecha: 10 millones de clics; Botones laterales/botón de DPI: 3 millones de clics\nDPI Hasta 8.000 DPI\nVida útil del teclado Hasta 20 millones de clics\nSensor de mouse Pixart 3325\nGarantía CRU\nDesplazamiento Arriba / Abajo\nMarca Lenovo\nRequirimiento de sistema operativo Windows 7, Windows 10\nPeso del paquete 1585 g (55,91 oz)\nAprobación de agencia CB, cTUVus, TUV Mark, EN62471, FCC SDOC, IECS-003, CE, VCCI, BSMI, KCC-EMC\nTipo de paquete Caja minorista\nDimensiones del paquete (A x A x P) 550 * 198 * 52 mm (21,65 x 7,80 x 2,05 pulgadas)\nAltura Mouse: 42,05 mm (1,66 pulgadas) Teclado: 34.68 mm (1,37 pulgadas)\nLargo Mouse: 127,65 mm (5,03 pulgadas) Teclado: 456 mm (17,95 pulgadas)\nProfundidad Mouse: 68,2 mm (2,69 pulgadas) Teclado: 151 mm (5,93 pulgadas)\nPeríodo de garantía 1 año\nMáxima temperatura operacional 40 grados Celsios (104 °F)\nMínima temperatura operacional 0 grados Celsios (32 °F)\nHumedad máxima relativa (%) 95 %\nHumedad mínima relativa (%) 20 %\nGrupo de envío Teclado, mouse, publicaciones',
		weight: 1,
		brand: 'Lenovo',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/combo_teclado_y_mouse_gamer_lenovo_legion_km300_rgb-52901.html',
	},

	{
		name: 'Smartwatch Fitbit Sense - Lunar WhiteSoft Gold Stainless Steel',
		priceNormal: 49999,
		priceSpecial: 43737,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50220_800_image.jpg',
		description:
			'Qué incluye:\nSmartwatch Fitbit Sense\nCorrea clásica (pequeña y grande)\nCable de carga\nSensores y components\nSensor óptico multirruta de frecuencia cardiaca\nSensores eléctricos con múltiples funciones compatibles con la aplicación Escáner EDA.\nSensor de temperatura cutánea\nGiroscopio\nAltímetro\nAcelerómetro de tres ejes\nSensor de luz ambiental\nWifi (802.11b/g/n 2,4 GHz)\nChip NFC (Near field communication)\nGPS integrado + GLONASS\nMotor de vibración\nAltavoz (75 dB SPL @10 cm)\nMicrófono\nBatería y alimentación\nBatería que dura más de seis días. La duración de la batería y los ciclos de carga varían según el uso, la configuración y otros factores; los resultados reales también variarán. Si usas la función de pantalla siempre activa tendrás que recargar el dispositivo con más frecuencia. Recomendamos que cargues tu dispositivo cada pocos días para que la monitorización sea continua.\nTipo de batería: polímero de litio\nTiempo de carga: (10-80 %): Aproximadamente 40 minutos\nCarga rápida: 1 día de batería en apenas 12 minutos.\nTransceptor de radio: Bluetooth® 5.0\nMemoria\nGuarda todos los datos de tus movimientos durante siete días, minuto a minuto\nGuarda el total diario durante los últimos 30 días\nAlmacena datos sobre el ritmo cardiaco en intervalos de un segundo durante la monitorización del ejercicio y de cinco segundos el resto del tiempo\nResistencia al agua\nSumergible hasta 50 metros. Después de nadar o de mojar la correa recomendamos secarla porque, como cualquier dispositivo que se lleva puesto, es mejor para la piel que la correa esté limpia y seca. Obtén más información.\nCuidado\nDale un descanso a tu muñeca quitándote la correa de vez en cuando. Si la pulsera se humedece o sudas con ella puesta, quítatela y sécala completamente antes de volver a ponértela.\nMateriales\nEste smartwatch incluye una correa fabricada en un material flexible y duradero similar al que se emplea en muchos relojes deportivos. También cuenta con una hebilla y una caja de aluminio.\nMonitorización de la frecuencia cardiaca\nComo sucede con todas las tecnologías de monitorización del ritmo cardiaco, la precisión se ve afectada por la fisiología, el lugar donde se coloque el dispositivo y el tipo de movimiento.\nRequisitos medioambientales\nTemperatura de funcionamiento: de -10 a 45 °C\nAltitud máxima de funcionamiento: 8535 metros\nSincronizar\nLa aplicación de Fitbit es compatible con la mayoría de móviles y tablets. Para poder configurar y usar los dispositivos y servicios de Fitbit, debes instalar la aplicación de Fitbit en un dispositivo compatible con sistema operativo:\nApple iOS 12.2 o superior.\nAndroid OS 7.0 o superior. Consulta nuestros consejos adicionales para móviles y tablets Android aquí.\nRango de sincronización: hasta 9 m\nAlgunas funciones, como las notificaciones del smartphone, pueden requerir Android 7.0 o superior. Verifica la compatibilidad de tu dispositivo.\nLa sincronización requiere Bluetooth® LE y conexión a Internet.\nSe sincroniza con equipos con Mac OS X 12.2 y posteriores, iPhone 5S y posteriores, iPad de 5.ª generación y posteriores, y Android 7.0 y posteriores.\nControla tu música favorita mediante Bluetooth® Clásico en los dispositivos Android, y con Bluetooth LE en iOS.',
		weight: 200,
		brand: 'Fitbit',
		category: 'smartbands-smartwatchs',
		descriptionLink:
			'https://delta.com.ar/smartwatch_fitbit_sense_lunar_whitesoft_gold_stainless_steel-50220.html',
	},
	{
		name: 'Notebook Hp 240 g7 - Intel Celeron N4100 4 Gb 500 Gb 14',
		priceNormal: 71999,
		priceSpecial: 60999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/2/42027_800_image.jpg',
		description:
			'Especificaciones de Notebook HP 240 G7 27R70LT 14 " Intel Celeron 4 GB DDR4 500GB\nGENERALES\nMarcaHP\nTipo.Notebook\nModelo240 G7 27R70LT\nApto para uso enHogar, Estudio, Trabajo, Oficina\nPROCESADOR\nMarca de ProcesadorIntel\nModelo de ProcesadorN4100\nVelocidad Máxima CPU1.1 GHz\nVersión del ProcesadorCeleron\nVelocidad del Procesador2.4 GHzVer menos\nMEMORIA\nMemoria RAM\n4 GB\nMemoria IntegradaNo\nMemoria Ram (Física)4x1\nClaseDDR4\nPANTALLA\nTamaño de Pantalla14"\nResolución1366 x 768\nTipo de PantallaLED\nPantalla TáctilNo\nGRÁFICOS\nMarca Procesador GráficoIntel\nProcesador Gráfico IntegradoNo\nProcesador GráficoIntel HD Graphics\nALMACENAMIENTO\nCapacidad Disco Rígido500GB\nTamaño del Disco2.5"\nPermite RemplazoNo\nRPM de Disco5400 rpm\nPermite Segunda UnidadNo\nPermite AgregadoNoVer menos\nconnectivity\nWi-Fi\nSí\nSalida HDMI\nSí\nUSB 3.02\nLector de Tarjetas de MemoriaSí\nBluetooth\nSí\nPuerto de RedSí\nSalida VGANo\nApto ThunderboltNo\nEntrada para MicrófonoNo\nVersión Bluetooth4.2Ver menos\nALIMENTACIÓN\nBatería ExtraibleNo\nDIMENSIONES\nAncho23 cm\nAlto33 cm\nProfundidad2 cm\nPeso1.6 kg\nOTRAS ESPECIFICACIONES\nMarcaHP\nColorNegro\nUnidad ÓpticaNo Incluida\nTeclado NuméricoNo\nTeclado Español (Ñ)No\nAccesorios IncluidosCargador\nModelo240 G7 27R70LT\nWebCam\nIncorporada\nTouch BarNo\nTeclado IluminadoNo\nLector de HuellasNoVer menos\nSISTEMA OPERATIVO (OS)\nSistema Operativo Windows 10 Home\nVersion de Office IncluidoNo\nIdiomaEspañol\nGARANTÍA\nDuración12 meses\nCoberturaOficial\nOrigenChina',
		weight: 3500,
		brand: 'HP',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_hp_240_g7_intel_celeron_n4100_4_gb_500_gb_14-42027.html',
	},
	{
		name: 'Tablet Lenovo Yt3 Smart 10 4Gb 64Gb',
		priceNormal: 56999,
		priceSpecial: 38999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/2/2/22395_800_image.jpg',
		description:
			'Processor .\n-Qualcomm Snapdragon 439 (8C, 8x A53 @2.0GHz).\nSistema operativo.\n-Android Pie.\nPantalla.\n-FHD de 25,65 cm ( 10,1" ), 1920 x 1200).\nMemoria.\n-RAM: 4 GB.\n-Almacenamiento: 64 GB.\nBatería.\n-7000 mAh.\n-Navegación web: hasta 11 horas.\n-Reproducción de vídeo ( 1080p ): hasta 10 horas.\nSonido.\n-2 altavoces JBL de 2 W reforzados con Dolby Atmos.\n-Micrófono.\n-3 micrófonos digitales.\nCámara.\n-Parte posterior: de 8 MP con enfoque automático / Parte delantera: de 5 MP con enfoque fijo.\nPeso.\n-580 g.\nconnectivity.\n-Wifi 802.11 a / b / g / n / ac, banda dual 2,4 GHz y 5 GHz.\n-Bluetooth 4.2.\nPuertos.\n-USB-C 2.0.\n-Ranura para tarjeta microSD ampliable hasta 256 GB.\n-Toma de audio 3,5 mm. ',
		weight: 1500,
		brand: 'Lenovo',
		category: 'tablets',
		descriptionLink:
			'https://delta.com.ar/tablet_lenovo_yt3_smart_10_4gb_64gb-22395.html',
	},

	{
		name: 'Disco Rigido Externo 1tb Seagate Usb 30',
		priceNormal: 7317,
		priceSpecial: 6469,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/7/47045_800_image.jpg',
		description:
			'Su capacidad de 1TB es útil para guardar programas y todo tipo de documentos.\nTamaño de 2.5".\nApto para pc.\nEs compatible con Windows.\nFácil e ideal de transportar a cualquier lugar.\nAccesorios incluidos: cable USB 3.0.\nInterfaz de conexión: USB 3.0.',
		weight: 1,
		brand: 'Seagate',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/catalog/product/view/id/6152/s/disco_rigido_externo_1tb_seagate_usb_30-47045/category/2160/',
	},
	{
		name: 'Notebook Acer Amd R7 Aspire 3 12Gb 1Tb 156 Black W10H SDvd',
		priceNormal: 144999,
		priceSpecial: 114999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53495_800_image.jpg',
		description:
			"Sistema operativo1, 2 Windows 10 Home de 64 bits (W10HSL64)\nCPU y chipset1 AMD Ryzen ™ 7 3700U\nMemoria1, 3, 4, 5 12 GB de memoria del sistema DDR4 integrada, hasta 12 GB de memoria del sistema DDR4\nPantalla 1.6 15.6 'Full HD 1920 x 1080, TFT con retroiluminación LED Acer ComfyViewTM de alto brillo\nLCD\n• Relación de aspecto 16: 9\n• Diseño ultradelgado\n• Sin mercurio, respetuoso con el medio ambiente\nGráficos1 Gráficos móviles AMD Radeon Vega\nAudio • Dos altavoces estéreo integrados\n• Micrófono digital incorporado\nAlmacenamiento1, 7 HDD:\n• 1 TB\nVideoconferencia Webcam1\nImágenes de rango dinámico súper alto (SHDR)\nCámara web Acer con resolución de 640 x 480\nCámara web HD con resolución de 1280 x 720\nInalámbrico y\nnetworking1\nWLAN:\n• LAN inalámbrica 802.11a / b / g / n / ac\n• Funciona a 2,4 GHz y 5 GHz\n• Intel® Dual Band Wireless-AC\n• LAN inalámbrica 802.11ac / a / b / g / n\nWPAN:\n• Bluetooth® 4.2\n• Bluetooth® 4.1\nLAN:\n• Gigabit Ethernet, listo para Wake-on-LAN\nSecurityl1 Firmware Trusted Platform Module (TPM), usuario de BIOS, supervisor, contraseñas de disco duro, ranura de bloqueo Kensington\nDimensiones y\npeso 8, 9\nDimensiones:\n• 363,4 (ancho) x 250,5 (profundidad) x 19,9 (alto) mm (14,31 x 9,86 x 0,78 pulgadas)\nPeso:\n• 1,9 kg (4,19 libras) con paquete de batería de 2 celdas\nAdaptador de corriente y\nbatería 10\nA315-23:\nAdaptador de corriente: adaptador de CA de 3 pines y 45 W\nBatería: Iones de litio de 2 celdas y 36,7 Wh (para modelos con HD\nPanel + HDD + SSD)\nDuración de la batería:\nHasta 9 horas (según la prueba MobileMark® 2014\nresultados)\nHasta 8 horas (según los resultados de la prueba de reproducción de video)\nEntrada y control 1 Teclado:\nTeclado FineTip de 100/101/104 teclas con teclado numérico independiente,\nsoporte de idiomas internacionales y botón de encendido\nTeclas de medios:\nTeclas de control de medios (impresas en el teclado): subir volumen, bajar volumen\nPanel táctil:\nPanel táctil de múltiples gestos, que admite desplazamiento con dos dedos; pellizco; gestos para\nabre Cortana, Action Center, multitarea; comandos de la aplicación\n• Certificación Microsoft Precision Touchpad\nEscritorio de Windows\naplicaciones11\n• Acer Care Center\n• Administrador de configuración de Acer\n• Acceso rapido\n• Norton ™ Internet Security\n• Registro de productos Acer\nGarantía Garantía de viajero internacional de un año (ITW)",
		weight: 1,
		brand: 'Acer',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_acer_amd_r7_aspire_3_12gb_1tb_156_black_w10h_sdvd-53495.html',
	},
	{
		name: 'Tablet Lenovo Tab3 M8 Smart 8 2Gb 32 CBase',
		priceNormal: 29999,
		priceSpecial: 23099,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/9/49230_800_image.jpg',
		description:
			'Procesador\nProcesador MediaTek ™ A22 (cuatro núcleos, 4 x A53 a 2,0 GHz)\nSistema operativo\nAndroid Pie ™\nMemoria 2 GB de RAM EMMC de 32 GB\nAlmacenamiento ampliable hasta 1 TB mediante ranura para tarjeta MicroSD\nPantalla IPS de 8 "HD (1280 x 800), pantalla táctil, 350 nits\nAudio 2 x altavoces laterales Dolby Atmos ™\nMicrófono\nMicrófonos duales\nExperiencia de asistente a domicilio\nEl modo ambiental del Asistente de Google\nVida útil de la batería Navegación web: hasta 18 horas Reproducción de video: hasta 12 horas\nDimensiones\n199.1 mm x 121.8 mm x 8.15 mm / 7.8 "x 4.8" x .32 "\nPeso\n305 g / 0,67 libras\nColor Gris Hierro\nconnectivity\nWiFi 802.11 a / b / g / n / ac; Wi-Fi de banda dual de 2,4 GHz / 5 GHz Bluetooth ™ 5.0 (LE)\nCámara Delantero: 2MP de enfoque fijo Trasera: Enfoque automático de 5MP\nPuertos Conector de audio de 3,5 mm Tableta: Micro USB 2.0: Pin Pogo para cargar Estación de carga inteligente: Micro USB 2.0\nQué hay en la caja Smart Tab M8 Cargador de CA Base de carga inteligente',
		weight: 1500,
		brand: 'Lenovo',
		category: 'tablets',
		descriptionLink:
			'https://delta.com.ar/tablet_lenovo_tab3_m8_smart_8_2gb_32_cbase-49230.html',
	},
	{
		name: 'Monitor Led 25 Acer Predator Gaming XB253Q',
		priceNormal: 89999,
		priceSpecial: 76299,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/M/5/M52582_800_image.jpg',
		description:
			'Resolución Máxima\n(Full HD) 1920 x 1080 a 144 Hz\nRelación de aspecto\n16: 9\nRelación de contraste\n1.000: 1\nTiempo de respuesta\n2 ms\nColor admitido\n16,7 millones\nGestión de contraste adaptativa (ACM)\n100.000.000: 1\nBrillo\n400 cd / m²\nIluminar desde el fondo\nDIRIGIÓ\nÁngulos de visión\n178 ° horizontal\n178 ° vertical\nTipo de panel\nIPS (conmutación en el plano)\nPararse\nInclinación (-5 ° ~ 25 °)\nAjuste de altura (4.53 ")\nAltavoces\n2 x 2 W\nPuertos y conectores\n2 entradas HDMI®\n1x DisplayPort\nAuricular\n1x USB 3.0 de subida\n4x USB 3.0 de bajada\nEnergía\n450 mW (energía en espera)\n250 mW (apagado)\n17,40 W (encendido)\nCertificación ambiental\nMPR II\nColores\nNegro\nTecnología de prevención de desgarros\nCompatible con NVIDIA® G-SYNC®\nCompatible con VESA\n(Sí)\n100 x 100 mm\nDimensiones (An x Al x Pr)\n21,97 "x 12,99" x 2,60 "\n22 "x 20.2" x 9.3 "(con soporte)\nPeso (aproximado)\n7.1 libras\n11,7 libras (con soporte)\ncontenidos del paquete\n1 x Monitor LCD de pantalla ancha Predator XB253Q GP\n1 x cable Displayport\n1 x cable HDMI\n1 x cable de alimentación (EE. UU.)\n1 x cable USB 3.0',
		weight: 1,
		brand: 'Acer',
		category: 'monitors',
		descriptionLink:
			'https://delta.com.ar/monitor_led_25_acer_predator_gaming_xb253q-m52582.html',
	},
	{
		name: 'All in One Lenovo A340-22Ast A69225 1Tb 4G (F0Eq006Car)',
		priceNormal: 79999,
		priceSpecial: 69999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53734_800_image.jpg',
		description:
			"ACTUACIÓN\nProcesador\nAMD A6-9225 (2C / 2T, 2.6 / 3.1GHz, 1MB L2)\nGráficos\nGráficos integrados AMD Radeon R4\nChipset\nPlataforma AMD SoC\nMemoria\n1x 4GB SO-DIMM DDR4-2666\nRanuras de memoria\nUna ranura DDR4 SO-DIMM\nMemoria máxima\nHasta 8GB DDR4-2400\nAlmacenamiento\nDisco duro de 1 TB 5400 rpm 2,5 '\nSoporte de almacenamiento\nHasta 2 unidades, 1x HDD de 2,5 '+ 1x M.2 SSD\n• Disco duro de 2,5 'hasta 1 TB\n• SSD M.2 de hasta 512 GB\nLector de tarjetas\nLector de tarjetas 3 en 1\nÓptico\nNinguno\nChip de audio\nAudio de alta definición (HD)\nAltavoces\n3Wx2\nCámara\n720p\nMicrófono\nMono\nFuente de alimentación\nAdaptador 65W Negro\nDISEÑO\nMonitor\n21,5 'FHD (1920 x 1080) WVA 250 nits\nPantalla táctil\nNinguno\nTeclado\nTeclado inalámbrico Calliope, negro, español (LA)\nRatón\nRatón inalámbrico Calliope, negro\nRanuras de expansión\nDos ranuras M.2 (una para WLAN, otra para SSD)\nColor de la caja\nNegocios Negro\nPararse\nSoporte AIO\nFactor de forma\nAIO (21,5 pulgadas)\nDimensiones (An x Pr x Al)\n490,5 x 185 x 418,88 mm (19,31 x 7,28 x 16,49 pulgadas)\nPeso\n5,28 kg (11,64 libras)\nconnectivity\nEthernet\nIntegrado 100 / 1000M\nWLAN + Bluetooth\n11ac, 1x1 + BT4.0\nPuertos traseros\n1x conector de alimentación\n1x salida HDMI 1.4\n1x Ethernet (RJ-45)\n2x USB 2.0\n1x USB 3.1 de 1.a generación\nPuertos izquierdos\n1x conector combinado de auriculares / micrófono (3,5 mm)\n1x lector de tarjetas\n1x USB 3.1 de 1.a generación\nPuertos correctos\nNinguno\nSERVICIO\nGarantía básica\n1 año, depósito\nActualización incluida\nNinguno\nCERTIFICACIONES\nCertificaciones ecológicas\nErP lote 3 y lote 7\nRoHS\nSOFTWARE\nSistema operativo\nWindows 10 Home 64, español\nSoftware incluido\nNinguno",
		weight: 1,
		brand: 'Lenovo',
		category: 'all-in-one',
		descriptionLink:
			'https://delta.com.ar/catalog/product/view/id/11436/s/all_in_one_lenovo_a340_22ast_a69225_1tb_4g_f0eq006car-53734/category/2159/',
	},
	{
		name: 'Notebook Lenovo Ip S340 Fhd Ryzen3 4gb W10h',
		priceNormal: 117999,
		priceSpecial: 91799,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52142_800_image.jpg',
		description:
			'La IdeaPad S340 da vida a tu experiencia de audio con el sonido de calidad cinematográfica de Dolby Audio™. Además, gracias a los finos bordes en la parte superior y los laterales, y a la resolución hasta FHD, podrás aprovechar al máximo la pantalla.\nDesempeño\nSu procesador AMD Ryzen 3 3200U junto con su memoria RAM de 4GB se complementan y ofrecen el máximo rendimiento con mejor consumo de energía. A su vez que permite ejecutar cualquier tarea con facilidad. También, guarda tu contenido multimedia y programas favoritos en el disco SSD de 256GB.\nPantalla\nPodrás disfrutar de películas, videos y juegos o de navegar en internet con una gran definición en tu pantalla de 15,6 pulgadas HD.\nconnectivity\nDispone de 2 puertos USB 3.1 más 1 puerto USB-C y salida HDMI, lo que te permite conectarla a una TV o a un monitor externo para tener una mayor visualización.',
		weight: 3000,
		brand: 'Lenovo',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_lenovo_ip_s340_fhd_ryzen3_4gb_w10h-52142.html',
	},
	{
		name: 'Tablet Pcbox Flash Pcb-T104 101 IPS 16Gb 2Gb',
		priceNormal: 23999,
		priceSpecial: 19999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/9/49147_800_image.jpg',
		description:
			'Modelo PCB-T104\nSistema Operativo Android 10\nProcesador Mediatek MTK8167B Quad Core 1,3 GHz ARM Cortex-A35, 64bit\nMemoria 2GB\nAlmacenamiento 16GB*\nPantalla multi touch 10.1” 1280×800 IPS\nCámara frontal 0,3MP\nCámara trasera 2 MP\nGPS\nPuerto Micro USB\nAudio Jack 3,5mm\nBluetooth 4.1\nWi Fi 802.11 b/g/n\nBatería 3.7 / de 5.000mAh\nLector de Tarjetas Micro SD hasta 128GB**\nDimensiones 243.2 x 172.2 x 10 mm\nColor: azul oscuro',
		weight: 1500,
		brand: 'Pcbox',
		category: 'tablets',
		descriptionLink:
			'https://delta.com.ar/tablet_pcbox_flash_pcb_t104_101_ips_16gb_2gb-49147.html',
	},
	{
		name: 'Notebook Acer I5-9300Hq Nitro5 8Gb 1Tb Gtx1650 156 Black W10H (An515-54-50T7)(NhQ59Al01A)',
		priceNormal: 185999,
		priceSpecial: 166999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50073_800_image.jpg',
		description:
			'-Procesador : Intel® Core™ i5-9300H\n-Disco rígido : 1TB\n-Memoria ram : 8 GB\n-Tipo de disco : HDD\n-Sistema operativo\n-Windows 10 Home\n-Tamaño de pantalla : 15.6 pulgadas\n-Resolución de pantalla :1920 X 1080\n-Placa de video : NVIDIA GeForce GTX 1650 (4 GB)\n-Puerto HDMI: Sí\n-Bluetooth: Sí\n-Medidas: 36,3 cm x 25,5 cm x 2,5 cm\n-Peso : 2,3 kg\n-Batería : 4 Celdas ',
		weight: 1,
		brand: 'Acer',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_acer_i5_9300hq_nitro5_8gb_1tb_gtx1650_156_black_w10h_an515_54_50t7_nhq59al01a-50073.html',
	},
	{
		name: 'Cooler Sharkoon Lights Rgb Fan 120Mm Black',
		priceNormal: 4999,
		priceSpecial: 3899,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50753_800_image.jpg',
		description:
			'General\n-Velocidad del ventilador:1.000 rpm\n-Tipo de rodamiento: Rodamiento dinámico fluido\n-Máx. flujo de aire: 56 m³/h\n-Máx. presión de aire: 0,46 mm-H²0\n-Nivel del ruido: 15,2 dBA\n-Durabilidad: Mín. 50.000 horas\n-Iluminación: 20x LEDs RGB direccionables\n-Peso incl. cable fijo: 135 g\n-Dimensiones (L x An x Al): 120 x 120 x 25 mm ',
		weight: 150,
		brand: 'Sharkoon',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/cooler_sharkoon_lights_rgb_fan_120mm_black-50753.html',
	},
	{
		name: 'All in One Lenovo A9-9425 1Tb 4Gb',
		priceNormal: 89999,
		priceSpecial: 74999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53912_800_image.jpg',
		description:
			'La IdeaCentre A340 se ha diseñado para llamar la atención con su elegante y moderno soporte y su pantalla de marco fino. Enciéndela y te sorprenderá la manera en la que puede con todo de manera fácil, rápida y fluida. A pesar de su diseño compacto, cuenta con una gran capacidad de almacenamiento (puede variar según el modelo). En conjunto, este equipo todo en uno de 21,5" (54,61 cm) es el equipo ideal para tu hogar. Colores sujetos a disponibilidad.\nProcesador\nAMD A9-9425 Processor ( 3.10GHz 1MB )\nSistema Operativo\nWindows 10 Home Single Language 64\nPantalla\n21,5"FHD LED AntiGlare Backlight 1920x1080\nMemoria\n4.0GB DDR4-2666 DDR4 SODIMM 2666MHz\nAlmacenamiento\n1TB 5400\nUnidad Óptica\nDVD-RW\nGarantía\nUn año Depósito\nTarjeta Gráfica\nGráficos R5 AMD integrados\nconnectivity Inalámbrica\nInalámbrico Lenovo AC + Bluetooth versión 4.2\nTeclado',
		weight: 1,
		brand: 'Lenovo',
		category: 'all-in-one',
		descriptionLink:
			'https://delta.com.ar/catalog/product/view/id/11523/s/all_in_one_lenovo_a9_9425_1tb_4gb-53912/category/2159/',
	},

	{
		name: 'Memoria Sodimm Crucial Basics 16Gb Ddr4-2666 (Cb16Gs2666)',
		priceNormal: 13999,
		priceSpecial: 12999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53722_800_image.jpg',
		description:
			'La memoria es un componente de su computadora que permite el acceso a datos a corto plazo. Dado que las operaciones de su sistema de momento a momento dependen del acceso a datos a corto plazo (cargar aplicaciones, navegar por la Web o editar una hoja de cálculo), la velocidad y la cantidad de memoria en su sistema juega un papel crítico. Carga aplicaciones en segundos aumentando la velocidad de tu memoria e instalando más.',
		weight: 1,
		brand: 'Crucial',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/catalog/product/view/id/11428/s/memoria_sodimm_crucial_basics_16gb_ddr4_2666_cb16gs2666-53722/category/2160/',
	},
	{
		name: 'Soporte PAuricular Corsair Headset Stand Cg-Rgb',
		priceNormal: 13999,
		priceSpecial: 11199,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51822_800_image.jpg',
		description:
			'Soporte P/Auricular Corsair Headset Stand Cg-Rgb (Ca-9011167-Na)',
		weight: 500,
		brand: 'Corsair',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/soporte_pauricular_corsair_headset_stand_cg_rgb-51822.html',
	},
	{
		name: 'Mouse Wireless Lenovo Yoga CPresentador Laser',
		priceNormal: 7382,
		priceSpecial: 6419,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52899_800_image.jpg',
		description:
			'Especificaciones técnicas\nColor Gris hierro\nAutonomía de la batería Hasta 2 meses\nTipo de conexión Inalámbrico a través de un receptor nano de 2,4 GHz o Bluetooth 5.0\nLongitud o tipo de cable Cable de carga USB C a USB A (0,5 m)\nPeso 60 g (2,1 oz)\nCaracterísticas especiales de diseño Diseño de bisagra-torsión; Compartimiento de receptor USB nano\nBotón del ratón 4\nVida útil del botón Botones izquierdo y derecho: ciclo de 3 millones de clics; Botón central: hasta 100.000 clics\nPPP DPI ajustable en la marcha de 3 niveles (1600. 1200, 800)\nSensor del ratón Sensor óptico rojo\nRequisitos de hardware Se admiten equipos con puerto USB A; Sistemas admitidos compatibles con Bluetooth 4.0 o superior\nGarantía Unidad reemplazable por el cliente (CRU)\nRequisitos energéticos 5 / 500 mA\nDesplazamiento Rueda de desplazamiento bidireccional (arriba/abajo)\nSoftware o controlador especializados No requiere software/controlador\nMarca Lenovo Yoga\nRequisitos del SO Windows 7 (solo para 2,4 G), Windows 8,1, Windows 10; Chrome OS;\nPeso con embalaje 200 g (0,44 lbs)\nOtras especificaciones físicas Modalidad de mouse (L x P x A): 106 x 57 x 30 mm (4,17 x 2,24 x 1,18 )\nAprobaciones de organismos CB, CEC, CE-RED, cTUVus, DOE, FCC, FDA, IC, IDA, IEC 60825-1:2014, MSIP, NCC, Nrcan, SDOC, TUV Mark, UAE\nTipo de paquete Caja minorista\nDimensiones del paquete (An. x Pr. x Al.) 91 mm x 44 mm x 151 mm (3,58 x 1,73 x 5,94 pulgadas)\nAlto 14 mm (0,54 pulgadas)\nAncho 111 mm (4,38 pulgadas)\nProfundidad 57 mm (2,24)\nCaracterísticas especiales o añadidas Puntero láser clase I; Botones de presentación (página siguiente, página anterior, inicio/final); Carga rápida;\nPeriodo de garantía 1 año\nTemperatura de funcionamiento máxima 40 grados centígrados (104 grados Fahrenheit)\nTemperatura de funcionamiento mínima 0 grados centígrados (32 grados Fahrenheit\nHumedad relativa máxima (%) 90 %\nHumedad relativa mínima (%) 10 %\nTiempo de carga de la batería Carga completa en 1,5 horas\nAccesorio incluido Cable de carga USB C a USB A (0,5 m)\nGrupo de envío Mouse Lenovo yoga con presentador láser; Receptor USB nano; Cable de carga USB C a USB A (0,5 m); Guía de inicio rápido; Póster de garantía; Póster de configuración',
		weight: 1,
		brand: 'Lenovo',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_wireless_lenovo_yoga_cpresentador_laser-52899.html',
	},
	{
		name: 'Mouse Wireless Lenovo 530 Platinum Grey',
		priceNormal: 3875,
		priceSpecial: 3137,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52895_800_image.jpg',
		description:
			'Esp. Técnicas\nColor Gris platino\nDuración de la batería Hasta 12 meses (podría variar según el uso)\nTipo de conector 2,4 GHz inalámbrico a través de nano USB\nPeso 65 g (2,29 oz)\nCaracterísticas de diseño especiales Diseño ambidextro\nBotón de mouse 3 (clic izquierdo, clic derecho, rueda de pulsación)\nButton Life Botón izquierdo/derecho: hasta 8 millones de clics; Clic de desplazamiento: hasta 100 mil clics\nDPI 1200 DPI\nSensor de mouse Sensor óptico\nRequerimientos de hardware Se admite PC con puerto USB-A\nGarantía Unidad reemplazable por el cliente (CRU)\nRequisitos de energía 1 batería AA\nDesplazamiento Rueda de desplazamiento (arriba/abajo)\nMarca Lenovo\nRequirimiento de sistema operativo Windows 10, Windows 8.1, Windows 8, Windows 7\nPeso del paquete 125 g (4,41 oz)\nAprobación de agencia ANATEL, ANRT, CAK, CB, CE, CERT, CITC, CITRA, CONATEL, cTUVus, ETA, FCC, IC, ICASA, ICT, IDA, IFETEL, MIC, MTC, NCC, NTC, SDoC, SDPPI, SIRIM, SRRC, SUBTEL, TRA, TRC, marca TUV, VCCI\nTipo de paquete Paquete de blister\nDimensiones del paquete (A x A x P) 120 x 197 x 33 mm (4,72 x 7,76 x 1,30 pulg.)\nAltura 37 mm (1,46 pulgadas)\nLargo 63 mm (2,48 pulgadas)\nProfundidad 106 mm (4,17 pulgadas)\nPeríodo de garantía 1 año\nMáxima temperatura operacional 40 grados centígrados (104 grados Fahrenheit)\nMínima temperatura operacional 0 grados centígrados (32 grados Fahrenheit)\nHumedad máxima relativa (%) 95 %\nHumedad mínima relativa (%) 20 %\nGrupo de envío Mouse inalámbrico Lenovo 530: 1 Receptor USB nano; Póster de configuración e información de producto',
		weight: 1,
		brand: 'Lenovo',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_wireless_lenovo_530_platinum_grey-52895.html',
	},
	{
		name: 'Disco Wd Red Plus 14Tb 35 Sata Wd140Effx',
		priceNormal: 139999,
		priceSpecial: 114999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53521_800_image.jpg',
		description:
			'Transmita, haga copias de seguridad, comparta y organice su contenido digital con un NAS y unidades WD Red ™ Plus diseñadas para compartir contenido sin esfuerzo con los dispositivos de su hogar o negocio. La tecnología NASware ™ 3.0 aumenta la compatibilidad de sus unidades con su red y dispositivos existentes. Para empresas más grandes con hasta 24 bahías.\nDado que su sistema NAS está siempre encendido, una unidad confiable es esencial. Con un MTBF de hasta 1 millón de horas, la unidad WD Red ™ Plus está diseñada para hacer frente a entornos 24x7. ',
		weight: 1,
		brand: 'Western Digital',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/disco_wd_red_plus_14tb_35_sata_wd140effx-53521.html',
	},
	{
		name: 'Notebook Noblex N14wd21 Celeron N3350 4Gb 500Gb 14',
		priceNormal: 56899,
		priceSpecial: 48999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/2/42372_800_image.jpg',
		description:
			'Diseño\nLa notebook Noblex N14WD21 cuenta con un diseño compacto y funcional. Llevala con vos a donde vayas gracias a su liviano peso y sus prácticas medidas.\nDesempeño\nSu procesador Intel Celeron N3350 y su memoria RAM de 4GB se complementan para ofrecer un mayor rendimiento con un bajo consumo de energía. Además, su disco de 500GB le da una gran capacidad de almacenamiento de datos y te permite guardar una mayor cantidad de contenido multimedia.\nPantalla\nCon su pantalla de 14,1 pulgadas con una resolución de 1366x768, podrás disfrutar de películas, videos y juegos o de navegar en internet.\nCARATERÍSTICAS\nAlto: 33.5cm\nAncho: 1.5cm\nColor: GRIS\nModelo: N14WD21\nSistema Operativo: Windows 10 Home\nOrigen: CHINA\nProfundidad: 22cm\nBluetooth: SI\nCapacidad de Disco: 500 GB\nHDMI: SI\nLector de tarjetas: SI\nMemoria RAM: 4\nProcesador: CELERON N3350\nUSB: SI\nWi Fi: SI\nTamaño de pantalla: 14.1',
		weight: 1,
		brand: 'Noblex',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_noblex_n14wd21_celeron_n3350_4gb_500gb_14-42372.html',
	},
	{
		name: 'Tira Led Sharkoon Shark Blades Rgb Strip',
		priceNormal: 3699,
		priceSpecial: 2999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50756_800_image.jpg',
		description:
			'-Colorida y flexible. La tira tiene 18 LEDs RGB direccionables 5050 a lo largo de un cuerpo con una total longitud de 360 milímetros. Con una placa compatible, tu hardware va a experimentar una notable mejora con una variedad de tonos coloridos personalizables.\n-Elección de conexiones. Para una máxima compatibilidad, los LEDs RGB de las tiras SHARK Blades RGB están conectados por medio de un cabezal de 3 pines 5V-D-G o de un cabezal de 4 pines 5V-D-coded-G, dependiendo de la placa.\n-Fácil de integrar. La tira SHARK Blades RGB está certificada por Asus Aura Sync, MSI Mystic Light Sync así como Gigabyte Fusion, de esta manera se puede incorporar fácilmente a los sistemas existentes hoy día en el mercado.\n-Flexible y fácil de instalar. La tira está dimensionada de una forma óptima para todos los PCs comunes, y gracias a su flexibilidad se puede ubicar en esquinas y bordes. La instalación se puede realizar magnéticamente o por medio de una tira adhesiva en la superficie de montaje.\nGeneral\nTipo de LED: 5050 Addressable RGB\nLongitud:360 mm\nAncho:10 mm\nNúm. de LEDs:18\nConector:3 pines &amp; 4 pines\nClavija:5V-D-G &amp; 5V-D-coded-G\nLongitud de cable:60 cm\nFijación: Magnetic/Self-Adhesive\nVoltaje nominal:5V DC\nCorriente nominal:600 mA\nPeso:30 g\nDimensiones (L x An x Al):360 x 10 x 3 mm ',
		weight: 100,
		brand: 'Sharkoon',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/tira_led_sharkoon_shark_blades_rgb_strip-50756.html',
	},
	{
		name: 'Mouse Wireless Lenovo 400 (WO Battery)',
		priceNormal: 3229,
		priceSpecial: 2449,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52894_800_image.jpg',
		description:
			'Hoy estás en la oficina, pero mañana, ¿quién sabe? Sin embargo, sin importar dónde se encuentre, necesita un mouse en el que pueda confiar: fácil de empacar, enchufar y usar, con una simplicidad que no sacrifica la calidad. El mouse inalámbrico Lenovo 400 te lo da todo.\nCaracterísticas principales:\nNano USB proporciona una conexión inalámbrica fuerte de 2.4 GHz;\nSeguimiento sensible y claro con sensor óptico de resolución de 1200 DPI;\nHasta 8 millones de clics para los botones izquierdo y derecho;\nCómodo y funcional en mano izquierda o derecha;\nLigero para viajar a 65 g (2.29 oz);\nLa vida útil de la batería dura hasta 12 meses (puede variar según el uso)',
		weight: 1,
		brand: 'Lenovo',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_wireless_lenovo_400_wo_battery-52894.html',
	},
	{
		name: 'Notebook Hp 156 Pentium N5000 4Gb 500Gb W10',
		priceNormal: 79862,
		priceSpecial: 73299,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/5/45362_800_image.jpg',
		description:
			'Diseño\nLa notebook HP DA0055LA tiene un diseño atractivo y moderno. Además, vas a poder llevarla con vos a donde vayas gracias a sus medidas y su liviano peso de 1.91 Kg.\nDesempeño\nEn su disco rígido de 500 GB almacená datos multimedia y tus programas favoritos. Además su procesador Intel Pentium Silver N5000 y su memoria RAM de 4 GB se complementan para ofrecer el máximo rendimiento con un bajo consumo de energía.\nPantalla\nCon su pantalla de 15,6 pulgadas HD podrás de disfrutar de películas, videos y juegos o de navegar en internet con una resolución de 1366 x 768 píxeles.\nconnectivity\nLa HP DA0055LA, tiene salida HDMI que te permitirá conectarla a una TV o a un monitor externo para tener una mayor visualización. También, incluye 2 puertos USB 3.1 y 1 puerto USB 2.0.',
		weight: 1,
		brand: 'HP',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_hp_156_pentium_n5000_4gb_500gb_w10-45362.html',
	},
	{
		name: 'Cooler Sharkoon Shark Blades Rgb Fan 120Mm Black',
		priceNormal: 4199,
		priceSpecial: 3199,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50755_800_image.jpg',
		description:
			'General\n-Velocidad del ventilador: 1200 rpm ± 10 %\n-Tipo de rodamiento: Rodamiento dinámico fluido\n-Máx. flujo de aire: 94,8 m³/h\n-Máx. presión de aire: 1,16 mm-H²0\n-Nivel del ruido: 18,2 dBA\n-Durabilidad: Mín. 50.000 horas\n-Iluminación: 20x RGB LEDs\n-Peso incl. cable fijo: 140 g\n-Dimensiones (L x An x Al): 120 x 120 x 25,5 mm ',
		weight: 200,
		brand: 'Sharkoon',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/cooler_sharkoon_shark_blades_rgb_fan_120mm_black-50755.html',
	},
	{
		name: 'Tablet Pcbox Curi Lite 16Gb 10 Android 7 Wifi',
		priceNormal: 18999,
		priceSpecial: 12999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/3/3/33403_800_image.jpg',
		description:
			'La tablet de Pcbox Curi Lite cuenta con un Sistema Operativo: Android 7.0. Procesador: Mediatek Mtk8127 Quad Core 1.3 Ghz ARM Cortex A7. Memoria: 1 GB RAM. Almacenamiento: 16 GB. Pantalla: Multitouch 10.1" 1024x600, 5 puntos multitouch. Cámara trasera: 2 MP. Cámara delantera: 0.5 MP. GPS | Puerto Micro HDMI. Micro USB / USB OTG. Audio Jack 3.5mm. Bluetooth 4.0. | Wifi. Bateria 3.7V / 5000 mAh. Dimensiones: 260.8 x 149.4 x 9.9 mm.',
		weight: 1,
		brand: 'DL',
		category: 'tablets',
		descriptionLink:
			'https://delta.com.ar/tablet_pcbox_curi_lite_16gb_10_android_7_wifi-33403.html',
	},
	{
		name: 'Base P Notebook Razer Chroma (Rc21-01110200-R3M1)',
		priceNormal: 24999,
		priceSpecial: 20999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51368_800_image.jpg',
		description:
			'RAZER LAPTOP STAND CHROMA\nDiseñada para el nuevo Razer Blade, la base ergonómica para portátil elevará tus juegos con un ángulo de visión óptimo. Ahora con la iluminación Razer Chroma y tres puertos USB adicionales, puedes conectar todos tus dispositivos a la base y tenerlo todo ordenado para maximizar la eficiencia y reducir la cantidad de cables al mínimo.\nDISEÑO ERGONÓMICO\nDiseñada para Razer Blade y Razer Blade Stealth, la base de portátil de diseño ergonómico completamente de aluminio tiene una inclinación de 18º para tener un ángulo de visión óptimo.\nMANTENTE CONECTADO CON MÁS PUERTOS\nGracias a su concentrador con tres puertos USB 3.0, puedes conectar directamente tus dispositivos a la base. Es una manera cómoda de maximizar la eficiencia y reducir la cantidad de cables al mínimo.\nCON TECNOLOGÍA RAZER CHROMA\nElige entre los efectos de iluminación predeterminados o crea tu propia combinación de colores a partir de 16,8 millones de opciones de color para disfrutar de una experiencia de juego totalmente personalizada, fácil de configurar a través de Razer Synapse.\nESPECIFICACIONES TÉCNICAS\n• Diseñada para Razer Blade y Razer Blade Stealth*.\n• Diseño ergonómico con una inclinación de 18º.\n• Concentrador con tres puertos USB 3.0.\n• Compatible con Razer Chroma.\n• Estructura de aluminio.\n* Puede ser compatible con otros portátiles de 15 .',
		weight: 1,
		brand: 'Razer',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/base_p_notebook_razer_chroma_rc21_01110200_r3m1-51368.html',
	},

	{
		name: 'Disco Rigido Skyhawk 2Tb Seagate Surveillance Sata 64Mb',
		priceNormal: 9999,
		priceSpecial: 7699,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/7/47037_800_image.jpg',
		description:
			'Disco Duro 3.5 Seagate 2TB SATA 3 256MB SkyHawk Videovigilancia ST2000VX015\nOptimizados para sistemas DVR y NVR, las unidades SkyHawk para sistemas de seguridad están ideadas para cargas operativas las 24 horas en capacidades de 2 TB. Equipada con el firmware ImagePerfect mejorado, SkyHawk ayuda a limitar los fotogramas perdidos y el tiempo de inactividad con una calificación operativa el triple del de las unidades de sobremesa, y está lista para grabar hasta 90 % del tiempo con transmisiones de hasta 64 cámaras de alta definición.\nVigilancia inteligente\nEl firmware innovador ImagePerfect e ImagePerfect AI de SkyHawk permite una transferencia continua uniforme y nítida para entornos de vigilancia siempre encendidos, las 24 horas, para ayudar a garantizar que su negocio siempre cuente con protección formidable. Además, ImagePerfect AI limita la pérdida en la integridad de los datos de IA para un rendimiento aún mejor.\nMantenga su unidad en buen estado\nSkyHawk Health Management (SHM) es el primero en el mercado con análisis profundo que le ayuda a prevenir la pérdida de datos. SHM analiza y brinda información detallada sobre cómo mejorar el rendimiento del almacenamiento. SHM viene integrado en los sistemas con Hikvision NVR 4.0 OS.\nEl diseño listo para NVR permite a las unidades mantener el rendimiento en sistemas RAID y multi-drive.\nUn menor consumo de energía reduce las emisiones de calor y mejora la confiabilidad de las soluciones de vigilancia.\nLa capacidad de carga de 180TB/año, funciona de manera confiable en sistemas de vigilancia de escritura intensiva.\nCaracterísticas: Marca: Seagate Serie: SkyHawk Modelo: ST2000VX015\nRendimiento: Capacidad: 2TB Interfaz: SATA III, 6.0Gb/s Cache: 256MB\nEspecificaciones Físicas: Factor de Forma: 3.5? Medidas: 20.2 x 101.85 x 146.99mm Peso: 415g',
		weight: 1500,
		brand: 'Seagate',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/disco_rigido_skyhawk_2tb_seagate_surveillance_sata_64mb-47037.html',
	},

	{
		name: 'Smartband Samsung Fit - Negro Acelerom Cardio',
		priceNormal: 8899,
		priceSpecial: 8109,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/0/40398_800_image.jpg',
		description:
			'•Pantalla de 0,95" AMOLED\n•Conexión Bluetooth v5.0\n•RAM 2 Mb\n•ROM 32 Mb\n•Acelerómetro\n•Batería 120 mAh\n•Resistente al polvo y agua\n•50m de profundidad ',
		weight: 1,
		brand: 'Samsung',
		category: 'smartbands-smartwatchs',
		descriptionLink:
			'https://delta.com.ar/smartband_samsung_fit_negro_acelerom_cardio-40398.html',
	},

	{
		name: 'Auricular CMic Corsair Virtuoso Wireless White',
		priceNormal: 34999,
		priceSpecial: 27199,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51816_800_image.jpg',
		description:
			'En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Corsair y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.\nEl formato perfecto para vos\nAl ser headset podrás escuchar tu música preferida, mantener llamadas telefónicas y jugar en línea desde tu PC sin perderte ningún detalle.',
		weight: 250,
		brand: 'Corsair',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/auricular_cmic_corsair_virtuoso_wireless_white-51816.html',
	},
	{
		name: 'Notebook Lenovo Ip3 14ada05 R5 8gb',
		priceNormal: 119999,
		priceSpecial: 108999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52144_800_image.jpg',
		description:
			'Diseñada para un rendimiento duradero, la IdeaPad 3 (14", AMD) ofrece una extraordinaria experiencia en un laptop accesible.\nLa IdeaPad 3 tiene un aspecto limpio gracias a los bordes delgados en ambos lados, que también te ofrecen una excelente experiencia de visión. Dolby Audio™, por su parte, te brinda un sonido ultra nítido cuando retransmites música, chateas por videollamada o ves tus videos favoritos. Seguro te encantará también cómo suena.\nDisfruta chateando por videollamada con amigos y familiares, pero sin tener que preocuparte por que te vean cuando no la utilices. Solo tienes que cerrar la tapa de la cámara web para bloquearle el paso a los hackers.\nVeloz o callada: tú eliges. Cambia sin esfuerzo del “Modo máximo”, donde tu CPU tomará el control y te ofrecerá el rendimiento más rápido, al “Modo sigiloso” para disfrutar de una experiencia de usuario más silenciosa y una mayor duración de la batería.',
		weight: 1,
		brand: 'Lenovo',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_lenovo_ip3_14ada05_r5_8gb-52144.html',
	},
	{
		name: 'Disco Wd Red Pro 12Tb 35 Sata Wd121Kfbx',
		priceNormal: 124999,
		priceSpecial: 88999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53522_800_image.jpg',
		description:
			'Diseñadas específicamente para los clientes de empresas medianas o grandes, las unidades WD Red ™ Pro están disponibles para sistemas NAS de hasta 24 bahías. Diseñado para manejar cargas de trabajo de alta intensidad en entornos 24x7, WD Red ™ Pro es ideal para archivar y compartir, así como para la reconstrucción de matrices RAID en sistemas operativos extendidos como ZFS u otros sistemas de archivos. Estas unidades agregan valor a su negocio al permitir que sus empleados compartan rápidamente sus archivos y carpetas de respaldo de manera confiable en su solución NAS.\nPrueba de disco extendida Un entorno NAS que tiene hasta 24 bahías es muy exigente en un disco duro con vibración y calor adicionales. Ésta es la razón por la que cada unidad WD Red ™ Pro se envía con pruebas de quemado de ciclo térmico extendido para ayudar a garantizar que cada unidad se pruebe para un funcionamiento confiable prolongado.',
		weight: 1,
		brand: 'Western Digital',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/disco_wd_red_pro_12tb_35_sata_wd121kfbx-53522.html',
	},
	{
		name: 'Disco Wd Red Pro 10Tb 35 Sata Wd102Kfbx',
		priceNormal: 129999,
		priceSpecial: 83999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53523_800_image.jpg',
		description:
			'Diseñadas específicamente para los clientes de empresas medianas o grandes, las unidades WD Red ™ Pro están disponibles para sistemas NAS de hasta 24 bahías. Diseñado para manejar cargas de trabajo de alta intensidad en entornos 24x7, WD Red ™ Pro es ideal para archivar y compartir, así como para la reconstrucción de matrices RAID en sistemas operativos extendidos como ZFS u otros sistemas de archivos. Estas unidades agregan valor a su negocio al permitir que sus empleados compartan rápidamente sus archivos y carpetas de respaldo de manera confiable en su solución NAS.\nDiseñado para una compatibilidad NAS óptima Las unidades WD Red ™ Pro con tecnología NASware ™ eliminan las conjeturas al seleccionar una unidad. Optimizado para sistemas NAS, nuestro algoritmo único equilibra el rendimiento y la confiabilidad en entornos NAS y RAID. En pocas palabras, una unidad WD Red ™ Pro es una de las unidades más compatibles disponibles para gabinetes NAS. Pero no confíe en nuestra palabra. Las unidades WD Red ™ Pro son un reflejo de la amplia participación en la tecnología de los socios NAS y las pruebas de compatibilidad.\nPrueba de disco extendida Un entorno NAS que tiene hasta 24 bahías es muy exigente en un disco duro con vibración y calor adicionales. Ésta es la razón por la que cada unidad WD Red ™ Pro se envía con pruebas de quemado de ciclo térmico extendido para ayudar a garantizar que cada unidad se pruebe para un funcionamiento confiable prolongado',
		weight: 1,
		brand: 'Western Digital',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/disco_wd_red_pro_10tb_35_sata_wd102kfbx-53523.html',
	},
	{
		name: 'Auricular CMic Corsair Virtuoso Wireless Pearl',
		priceNormal: 29999,
		priceSpecial: 27999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51817_800_image.jpg',
		description:
			'La comodidad es la clave\nLas almohadillas de espuma viscoelástica premium se adaptan a la forma de su cabeza; además, la banda ligera ofrece una comodidad duradera y suave como una almohada para que pueda jugar durante horas.\nFabricación ligera premium\nLa construcción de aluminio mecanizado consigue que los VIRTUOSO RGB Wireless ofrezcan un diseño ligero, una fuerte durabilidad y la mayor comodidad en una combinación perfecta.\nTres formas de conexión\nLos VIRTUOSO RGB Wireless pueden conectarse a casi cualquier lugar, independientemente de dónde vaya a jugar.\nMicrófono extraíble\ncon calidad de transmisión\nEs, sencillamente, uno de los mejores micrófonos que hemos incluido en unos auriculares. El micrófono omnidireccional de gran ancho de banda de los VIRTUOSO RGB Wireless ofrece un amplio rango dinámico y una claridad vocal magnífica que rivaliza con los micrófonos independientes. Además, es completamente extraíble y cuenta con un anillo LED RGB que indica si el micrófono se oye o si está silenciado.\nMicrófono extraíble\ncon calidad de transmisión\nEl gran ancho de banda del micrófono, junto con la conexión hiperrápida de la tecnología SLIPSTREAM CORSAIR WIRELESS, aumenta drásticamente la respuesta de frecuencia a casi el doble de unos auriculares de juego inalámbricos normales. Esto significa que su voz se escuchará con más claridad, más precisión y más naturalidad cuando se comunique con sus amigos y compañeros de equipo.',
		weight: 250,
		brand: 'Corsair',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/auricular_cmic_corsair_virtuoso_wireless_pearl-51817.html',
	},
	{
		name: 'Mouse Mat Gamer Corsair Cgmm350 Xl',
		priceNormal: 5999,
		priceSpecial: 4699,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51255_800_image.jpg',
		description:
			'PRUEBA ESTO POR TAMAÑO\nHaga grandes jugadas con un control superior gracias a una alfombrilla de mouse de superficie textil tejida con deslizamiento mejorado optimizada para ratones de juego de alto rendimiento, con seguimiento de baja fricción para una orientación perfecta en píxeles.\nLa superficie gráfica resistente al desgaste mantiene su configuración con un aspecto fresco\nCOMODIDAD CUANDO CUENTA\nDisfrute de la comodidad de permanecer en el juego por más tiempo con el diseño de goma de felpa gruesa de 5 mm que también ayuda a suavizar las superficies irregulares del escritorio.\nLa base de goma con textura antideslizante mantiene la alfombrilla del mouse en su lugar de forma segura incluso durante las sesiones de juego más intensas.\nNUNCA TEMAS A LA FRAY\nDiseño duradero que resiste los juegos diarios con un borde antideshilachado de 360 ° cosido con precisión que protege contra el pelado de la superficie.\nGarantía del tapete\nDos años\nMaterial de la estera\nTela\nTamaño de la alfombrilla\nExtragrande\n450 mm x 400 mm x 5 mm',
		weight: 500,
		brand: 'Corsair',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_mat_gamer_corsair_cgmm350_xl_ch_9413561_ww-51255.html',
	},
	{
		name: 'PAD MOUSE SHARKOON 1337 V2 GAMING MAT XL(444x355x24MM) 240GRS',
		priceNormal: 2599,
		priceSpecial: 1999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50760_800_image.jpg',
		description:
			'Con el 1337 V2, hemos mejorado aún más nuestra alfombrilla de ratón más popular. Hemos revestido la superficie textil con un revestimiento hidrófugo y, además, todos los bordes han sido cortados con láser con precisión, evitando así cualquier deshilachado antiestético alrededor de la alfombra. Como todas las alfombrillas de ratón para juegos de la serie 1337, la V2 también tiene una parte inferior de goma completamente antideslizante y una superficie textil para unas propiedades de deslizamiento óptimas para todo tipo de sensor.\nUna base sólida para todos los propósitos. La alfombrilla para ratón para juegos 1337 V2 está disponible en los tamaños M, L, XL y XXL. La talla M tiene una longitud de 280 milímetros y una anchura de 195 milímetros, y está especialmente diseñada para su uso con dispositivos móviles como portátiles y tablets. La talla L, con una longitud de 355 milímetros y una anchura de 255 milímetros, cabe incluso sobre encimeras más pequeñas. El XL, con su longitud de 444 milímetros y su ancho de 355 milímetros, ofrecerá suficiente espacio para maniobras que deben ejecutarse en el frenesí del juego. Cualquiera que quiera cubrir casi todo su tablero de juego con una excelente superficie deslizante puede optar por la variante XXL con sus gigantescos 900 milímetros de largo y 400 milímetros de ancho. Con 1,4 milímetros para las variantes M y L y 2,4 milímetros para XL y XXL, las alfombrillas para ratón son convenientemente delgadas y de bajo perfil, además de robustas.\nJuego y trabajo sin problemas. El 1337 V2 mantiene una superficie textil probada y confiable, que no solo es robusta y duradera, sino que también ofrece un arrastre mínimo y una resistencia de arranque insignificante. Por lo tanto, la alfombrilla del mouse proporciona un deslizamiento excepcional sin importar qué tipo de sensor de mouse se esté utilizando. La parte inferior está hecha de goma estable, lo que evita que la alfombrilla del mouse se deslice inadvertidamente mientras se juega o se trabaja.\nBien protegido y fácil de limpiar. Además de sus óptimas propiedades de deslizamiento, la superficie textil tiene un revestimiento hidrófugo, que evita los daños provocados por las bebidas derramadas durante el juego agitado o por otros pequeños accidentes con líquidos. Además, el 1337 V2 se puede limpiar fácilmente de polvo y suciedad con agua corriente.\nBordes ordenados que no se deshilachan. Los bordes del 1337 V2 han sido cortados con absoluta precisión por láser. Esto evita efectivamente que se deshilache alrededor de la alfombrilla del mouse y mantiene su apariencia ordenada incluso después de un largo período de uso.\nHecho de manera óptima para el transporte. Gracias a sus materiales flexibles, el 1337 V2 se puede enrollar fácilmente cuando sea necesario. De este modo, la alfombrilla del ratón se puede almacenar cómodamente y acompañar a su propietario a fiestas LAN, eventos de deportes electrónicos o mientras trabaja fuera de la oficina.\nSuperficie: Textil\nBase de goma antideslizante: ?\nCorte láser en los bordes: ?\nSuperficie repelente al agua: ?\nAltura: 2,4 mm\nPeso: 240 g\nDimensiones (L x An x Al): 444 x 355 x 2,4 mm',
		weight: 270,
		brand: 'Sharkoon',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/pad_mouse_sharkoon_1337_v2_gaming_mat_xl_444x355x24mm_240grs-50760.html',
	},

	{
		name: 'Mouse Wireless Lenovo 530 Abyss Blue',
		priceNormal: 3875,
		priceSpecial: 3137,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52896_800_image.jpg',
		description:
			'Esp. Técnicas\nColor Gris platino\nDuración de la batería Hasta 12 meses (podría variar según el uso)\nTipo de conector 2,4 GHz inalámbrico a través de nano USB\nPeso 65 g (2,29 oz)\nCaracterísticas de diseño especiales Diseño ambidextro\nBotón de mouse 3 (clic izquierdo, clic derecho, rueda de pulsación)\nButton Life Botón izquierdo/derecho: hasta 8 millones de clics; Clic de desplazamiento: hasta 100 mil clics\nDPI 1200 DPI\nSensor de mouse Sensor óptico\nRequerimientos de hardware Se admite PC con puerto USB-A\nGarantía Unidad reemplazable por el cliente (CRU)\nRequisitos de energía 1 batería AA\nDesplazamiento Rueda de desplazamiento (arriba/abajo)\nMarca Lenovo\nRequirimiento de sistema operativo Windows 10, Windows 8.1, Windows 8, Windows 7\nPeso del paquete 125 g (4,41 oz)\nAprobación de agencia ANATEL, ANRT, CAK, CB, CE, CERT, CITC, CITRA, CONATEL, cTUVus, ETA, FCC, IC, ICASA, ICT, IDA, IFETEL, MIC, MTC, NCC, NTC, SDoC, SDPPI, SIRIM, SRRC, SUBTEL, TRA, TRC, marca TUV, VCCI\nTipo de paquete Paquete de blister\nDimensiones del paquete (A x A x P) 120 x 197 x 33 mm (4,72 x 7,76 x 1,30 pulg.)\nAltura 37 mm (1,46 pulgadas)\nLargo 63 mm (2,48 pulgadas)\nProfundidad 106 mm (4,17 pulgadas)\nPeríodo de garantía 1 año\nMáxima temperatura operacional 40 grados centígrados (104 grados Fahrenheit)\nMínima temperatura operacional 0 grados centígrados (32 grados Fahrenheit)\nHumedad máxima relativa (%) 95 %\nHumedad mínima relativa (%) 20 %\nGrupo de envío Mouse inalámbrico Lenovo 530: 1 Receptor USB nano; Póster de configuración e información de producto',
		weight: 1,
		brand: 'Lenovo',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_wireless_lenovo_530_abyss_blue-52896.html',
	},

	{
		name: 'Soporte PAuricular Razer V2 Chroma Usb 31 Hub White',
		priceNormal: 13999,
		priceSpecial: 10099,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51369_800_image.jpg',
		description:
			"CONECTAR Y CONTROLAR\nAgrega más funcionalidad y estilo a tu configuración de juegos con Razer Base Station V2 Chroma. Sincronice sus efectos de iluminación RGB con nuestro nuevo y mejorado concentrador USB para soporte de auriculares, diseñado para colgar y mostrar sus auriculares mientras se toma un descanso del juego o del trabajo.\nHUB USB CON SONIDO ENVOLVENTE 7.1\nCon dos puertos USB 3.1 SuperSpeed ??y un puerto combinado de 3.5 mm con un DAC incorporado, puede conectar más dispositivos y obtener acceso a nuestra aplicación de sonido envolvente 7.1 *, transformando su sonido estéreo en sonido envolvente para un nivel más profundo de inmersión y disfrute .\nSOPORTE INTEGRADO PARA AURICULARES CON BASE ANTIDESLIZANTE\nSu elegante diseño metálico ahora es más alto con 278 mm de altura, por lo que puede colgar y exhibir auriculares más grandes, mientras que una base estable evita que se vuelque o se mueva durante el uso.\nALIMENTADO POR RAZER CHROMA ™ RGB\nCon 16,8 millones de colores, innumerables patrones, efectos de iluminación dinámicos en el juego, experimente una personalización RGB completa y una inmersión más profunda con el ecosistema de iluminación más grande del mundo para dispositivos de juego. Compatible con una lista creciente de miles de dispositivos y cientos de juegos y aplicaciones, llévelo al siguiente nivel con funciones avanzadas como Chroma Studio, Visualizer, Connect y Workshop.\nTE TENEMOS CUBIERTO\nObtenga hasta 1 año de garantía y acceda a soporte técnico confiable. Compre directamente en RazerStore y obtenga 14 días de devolución sin riesgos.\nDe un vistazo\n2 x puertos USB 3.1\n1 puerto combinado de 3,5 mm con DAC incorporado\nSonido envolvente 7.1\nRazer Chroma ™ RGB\nConstrucción de aluminio completamente nueva\nAltura mejorada para auriculares más grandes\nBase antideslizante\nDimensiones:\nDiámetro de la base: 4.72 '/ 120 mm\nAltura: 10,94 '/ 278 mm\nPeso: 1 lbs / 460 g",
		weight: 500,
		brand: 'Razer',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/soporte_pauricular_razer_v2_chroma_usb_31_hub_white-51369.html',
	},
	{
		name: 'Mouse Mat Gamer Corsair Cgmm350 Exl (Ch-9413571-Ww)',
		priceNormal: 8999,
		priceSpecial: 6699,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51256_800_image.jpg',
		description:
			"PRUEBA ESTO POR TAMAÑO\nHaga grandes jugadas con un control superior gracias a una alfombrilla de mouse con superficie textil tejida con deslizamiento mejorado optimizada para ratones de juego de alto rendimiento, con seguimiento de baja fricción para una orientación perfecta en píxeles.\nNunca se quede sin espacio con una superficie expansiva de 930 mm x 400 mm (36,6 'x 15,7') para grandes movimientos del mouse.\nLa superficie gráfica resistente al desgaste mantiene su configuración con un aspecto fresco\nCOMODIDAD CUANDO CUENTA\nDisfrute de la comodidad de permanecer en el juego por más tiempo con el diseño de goma de felpa gruesa de 5 mm que también ayuda a suavizar las superficies irregulares del escritorio.\nLa base de goma con textura antideslizante mantiene la alfombrilla del mouse en su lugar de forma segura incluso durante las sesiones de juego más intensas.\nNUNCA TEMAS A LA FRAY\nDiseño duradero que resiste los juegos diarios con un borde antideshilachado de 360 ° cosido con precisión que protege contra el pelado de la superficie.\nMat Material\nCloth\nMat Size\nExtended XL\n930mm x 400mm x 5mm",
		weight: 500,
		brand: 'Corsair',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_mat_gamer_corsair_cgmm350_exl_ch_9413571_ww-51256.html',
	},

	{
		name: 'Disco Rigido Externo 2Tb Seagate Slim PS4 Marvel',
		priceNormal: 14999,
		priceSpecial: 13129,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52075_800_image.jpg',
		description:
			'Con licencia oficial para su sistema PS4™.Game Drive es una mejora de disco duro externa para consolas PS4™de cualquier generación (versión de software 4.50 o posterior). Concapacidad para instalar más de 50 juegos, puede guardar una bibliotecade clásicos y títulos recién estrenados al alcance de los dedos.1 Lainterfaz USB 3.0 de alta velocidad conduce a una experiencia de juegocon máxima velocidad, igual que jugar desde la unidad interna de suconsola. Configure en menos de tres minutos: simplemente conecte lasolución Game Drive en cualquier puerto USB de su PS4™ y siga lasinstrucciones paso a paso fáciles y rápidas.Capacidad para 50 juegos o más.1USB 3.0 de alta velocidad le brinda una experiencia de juego aplena velocidad, como jugar con la unidad interna de su PS4™.Se conecta directamente a cualquier puerto USB de la consolaPS4™.La sencilla configuración guiada del PS4™ toma aproximadamentetres minutos.Diseñada y probada para juegos en PS4™.Juegue en cualquier parte gracias a su fácil configuración yportabilidad.2Compatible con consolas PS4™ de cualquier generación (softwaredel sistema versión 4.50 o posterior).1 En base a un requisito de almacenamiento promedio de 40 GB para juegosPS4™publicados el junio de 2018 o antes de esa fecha.2 Cuando se guarda contenido en este dispositivo, solo se puede acceder al mismo através de la cuenta que transfirió el contenido a la cuenta.',
		weight: 2000,
		brand: 'Seagate',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/disco_rigido_externo_2tb_seagate_slim_ps4_marvel-52075.html',
	},
	{
		name: 'Placa Pci Paralelo Noganet',
		priceNormal: 299,
		priceSpecial: 259,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/1/9/19183_800_image.jpg',
		description:
			'Agregue un puerto paralelo a su PC, es ideal para ser usada como herramienta de control de motores, Impresoras, Scanners; etc.\nPlaca PCI con Puerto Paralelo DB25. Con selección automatica de IRQ e I/O address.',
		weight: 1,
		brand: 'Noganet',
		category: 'connectivity',
		descriptionLink:
			'https://delta.com.ar/placa_pci_paralelo_noganet-19183.html',
	},

	{
		name: 'Pc Pcbox Core I3 Coffee lake 4gb 240ssd w10',
		priceNormal: 67985,
		priceSpecial: 49999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/8/48232_800_image.jpg',
		description:
			'Procesador Intel® Core™ i3 Coffee lake\nMemoria 4 GB DDR4\nDisco rígido 240ssd\nGabinete Pcbox 360\nw10',
		weight: 5000,
		brand: 'Pcbox',
		category: 'all-in-one',
		descriptionLink:
			'https://delta.com.ar/pc_pcbox_core_i3_coffee_lake_4gb_240ssd_w10-48232.html',
	},
	{
		name: 'Protector de Voltaje Forza Fvp-1202N-A Zion 220V 1800W Rj45 Negro',
		priceNormal: 2229,
		priceSpecial: 1989,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/8/48344_800_image.jpg',
		description:
			'FVP-1202N-A\nNivel de Protección 3\nProtector de voltaje\nCapacidad: 1500W\nVoltaje: 220V\nTipo de entrada: IRAM Type I\nTipo de salida: IRAM Type I\nIndicador visual: LED status light',
		weight: 600,
		brand: 'Forza',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/protector_de_voltaje_forza_fvp_1202n_a_zion_220v_1800w_rj45_negro-48344.html',
	},

	{
		name: 'Placa Riser Ver009S PCI-E 1X a 16X',
		priceNormal: 3299,
		priceSpecial: 1489,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52750_800_image.jpg',
		description:
			'*El color del producto puede variar segun disponibilidad, las especificaciones del mismo son iguales independientemente del color\nCaracterísticas del producto:\n1. 100% nuevo y de alta calidad.\n2. Usando un cable USB 3.0 de 60 cm como cable extensor, calidad superior y súper velocidad.\n3. Con 3 condensadores sólidos FP, lo que hace que la fuente de alimentación de gráficos sea más estable y segura.\n4. Contactos chapados en oro para una mejor connectivity y una vida útil prolongada.\n5. Compatible con ranuras PCI-E 1x, 4x, 8x, 16x de la placa base.\n6. Con clip lateral para sujetar otra tarjeta.\n7. No se necesita controlador.\n8. Dedicado a la minería de criptomonedas.\n9.Tamaño del tablero: aproximadamente 12.8cm * 4.2cm * 1.0cm / 5.03 * 1.65 * 0.39 \\\\ `\\\\`\n10: Color: placa de circuito - rojo / negro / azul. Cable USB3.0: azul o negro\n11. Longitud del cable USB: aproximadamente 60 cm / 1,96 pies.',
		weight: 1000,
		brand: 'VER009S',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/placa_riser_ver009s_pci_e_1x_a_16x-52750.html',
	},
	{
		name: 'Micro Intel (1200) Core I7-10700K Comet Lake 38Ghz',
		priceNormal: 65999,
		priceSpecial: 52999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/8/48215_800_image.jpg',
		description:
			'Socket: LGA1200.\nFrecuencia Base: hasta 3.8Ghz.\nCantidad de Cores: 8.\nCantidad de Threads: 16.\nCache: 16M.\nVideo: Intel UHD Graphics 630.',
		weight: 500,
		brand: 'Intel',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/catalog/product/view/id/6502/s/micro_intel_1200_core_i7_10700k_comet_lake_38ghz-48215/category/2160/',
	},
	{
		name: 'Smartwatch Fitbit Versa 2 NFC - BlackCarbon Aluminum',
		priceNormal: 34999,
		priceSpecial: 25837,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50221_800_image.jpg',
		description:
			'Qué incluye:\nSmartwatch Fitbit Versa 2\nCorrea clásica (pequeña y grande)\nCable de carga\nSensores y components\nAcelerómetro de tres ejes\nMonitor óptico del ritmo cardiaco\nAltímetro\nMotor de vibración\nSensor SpO2 relativo\nChip NFC (Near field communication)\nSensor de luz ambiental\nAntena wifi (802.11 b/g/n)\nMicrófono\nSensor de temperatura del dispositivo (detección de variaciones en temperatura cutánea solo disponible para usuarios Premium)†\nBatería y alimentación\nBatería que dura más de seis días. La duración de la batería y los ciclos de carga varían según el uso, la configuración y otros factores; los resultados reales también variarán. Si usas la función de pantalla siempre activa tendrás que recargar el dispositivo con más frecuencia. Recomendamos que cargues tu smartwatch cada pocos días para asegurarte de que la monitorización es continua.\nTipo de batería: polímero de litio\nTiempo de carga (0-100 %): dos horas\nReceptor de radio: Bluetooth 4.0\nMemoria\nGuarda todos los datos de tus movimientos durante siete días, minuto a minuto\nGuarda el total diario durante los últimos 30 días\nAlmacena datos sobre el ritmo cardiaco en intervalos de un segundo durante la monitorización del ejercicio y de cinco segundos el resto del tiempo\nResistencia al agua\nResistente al agua hasta 50 metros Después de nadar o de mojar la correa recomendamos secarla, porque al igual que otros wearables, es mejor para tu piel que la correa esté limpia y seca. No te recomendamos que lleves puesto tu Versa 2 ni en jacuzzis ni en saunas. Más información\nCuidado\nDale un descanso a tu muñeca quitándote la correa de vez en cuando. Si la pulsera se humedece o sudas con ella puesta, quítatela y sécala completamente antes de volver a ponértela. Más información\nMateriales\nEste smartwatch incluye una correa fabricada en un material flexible y duradero similar al que se emplea en muchos relojes deportivos. También cuenta con una hebilla y una caja de aluminio. La cómoda correa textil está fabricada de poliéster e incluye una hebilla de aluminio.\nMonitorización del ritmo cardiaco\nComo sucede con todas las tecnologías de monitorización del ritmo cardiaco, la precisión se ve afectada por la fisiología, el lugar donde se coloque el dispositivo y el tipo de movimiento. Obtén más información acerca de cómo llevar puesto el monitor durante los entrenamientos.\nRequisitos medioambientales\nTemperatura de funcionamiento: de -20 a 60 °C\nAltitud máxima de funcionamiento: 8535 metros\nSincronizar\nSe sincroniza de manera automática e inalámbrica con ordenadores y más de 200 de los principales dispositivos iOS y Android mediante la tecnología inalámbrica Bluetooth LE.\nRango de sincronización: hasta 6,1 metros\nAlgunas funciones, como las notificaciones del smartphone, pueden requerir Android 7.0 o superior. Verifica la compatibilidad de tu dispositivo.\nLa sincronización requiere Bluetooth LE y conexión a Internet.\nControla tu música favorita mediante Bluetooth Clásico en los dispositivos Android, y con Bluetooth LE en iOS.',
		weight: 200,
		brand: 'Fitbit',
		category: 'smartbands-smartwatchs',
		descriptionLink:
			'https://delta.com.ar/smartwatch_fitbit_versa_2_nfc_blackcarbon_aluminum-50221.html',
	},
	{
		name: 'Pad Mouse Sharkoon 1337 V2 280X195X14mm 60Grs',
		priceNormal: 1599,
		priceSpecial: 1299,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50758_800_image.jpg',
		description:
			'Con el 1337 V2, hemos mejorado aún más nuestra alfombrilla de ratón más popular. Hemos revestido la superficie textil con un revestimiento hidrófugo y, además, todos los bordes han sido cortados con láser con precisión, evitando así cualquier deshilachado antiestético alrededor de la alfombra. Como todas las alfombrillas de ratón para juegos de la serie 1337, la V2 también tiene una parte inferior de goma completamente antideslizante y una superficie textil para unas propiedades de deslizamiento óptimas para todo tipo de sensor.\nUna base sólida para todos los propósitos. La alfombrilla para ratón para juegos 1337 V2 está disponible en los tamaños M, L, XL y XXL. La talla M tiene una longitud de 280 milímetros y una anchura de 195 milímetros, y está especialmente diseñada para su uso con dispositivos móviles como portátiles y tablets. La talla L, con una longitud de 355 milímetros y una anchura de 255 milímetros, cabe incluso sobre encimeras más pequeñas. El XL, con su longitud de 444 milímetros y su ancho de 355 milímetros, ofrecerá suficiente espacio para maniobras que deben ejecutarse en el frenesí del juego. Cualquiera que quiera cubrir casi todo su tablero de juego con una excelente superficie deslizante puede optar por la variante XXL con sus gigantescos 900 milímetros de largo y 400 milímetros de ancho. Con 1,4 milímetros para las variantes M y L y 2,4 milímetros para XL y XXL, las alfombrillas para ratón son convenientemente delgadas y de bajo perfil, además de robustas.\nJuego y trabajo sin problemas. El 1337 V2 mantiene una superficie textil probada y confiable, que no solo es robusta y duradera, sino que también ofrece un arrastre mínimo y una resistencia de arranque insignificante. Por lo tanto, la alfombrilla del mouse proporciona un deslizamiento excepcional sin importar qué tipo de sensor de mouse se esté utilizando. La parte inferior está hecha de goma estable, lo que evita que la alfombrilla del mouse se deslice inadvertidamente mientras se juega o se trabaja.\nBien protegido y fácil de limpiar. Además de sus óptimas propiedades de deslizamiento, la superficie textil tiene un revestimiento hidrófugo, que evita los daños provocados por las bebidas derramadas durante el juego agitado o por otros pequeños accidentes con líquidos. Además, el 1337 V2 se puede limpiar fácilmente de polvo y suciedad con agua corriente.\nBordes ordenados que no se deshilachan. Los bordes del 1337 V2 han sido cortados con absoluta precisión por láser. Esto evita efectivamente que se deshilache alrededor de la alfombrilla del mouse y mantiene su apariencia ordenada incluso después de un largo período de uso.\nHecho de manera óptima para el transporte. Gracias a sus materiales flexibles, el 1337 V2 se puede enrollar fácilmente cuando sea necesario. De este modo, la alfombrilla del ratón se puede almacenar cómodamente y acompañar a su propietario a fiestas LAN, eventos de deportes electrónicos o mientras trabaja fuera de la oficina.\nSuperficie: Textil\nBase de goma antideslizante: ?\nCorte láser en los bordes: ?\nSuperficie repelente al agua: ?\nAltura: 1,4 mm\nPeso: 60 g\nDimensiones (L x An x Al): 280 x 195 x 1,4 mm280 x 195 x 1,4 mm',
		weight: 70,
		brand: 'Sharkoon',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/pad_mouse_sharkoon_1337_v2_280x195x14mm_60grs-50758.html',
	},
	{
		name: 'Mouse Pad Gamer Razer Gigantus V2 Soft Large Nasa Mat',
		priceNormal: 4499,
		priceSpecial: 3499,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51407_800_image.jpg',
		description:
			'TECH SPECS\nSizes\tLarge\nThickness\t0.11" / 3 mm\nSurface\tSoft\nMat Type\tSoft\nChroma RGB\tNo\nSpecial Features\tNone',
		weight: 300,
		brand: 'Razer',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_pad_gamer_razer_gigantus_v2_soft_large_nasa_mat-51407.html',
	},
	{
		name: 'Mouse Mat Gamer Razer Gigantus V2 Soft Xxl Nasa Pad',
		priceNormal: 5999,
		priceSpecial: 4999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51408_800_image.jpg',
		description:
			'XXL\t940 mm / 37 in\t410 mm / 16.14 in\t4 mm / 0.15 in\nSizes\tXXL\nThickness\t0.16" / 4 mm\nSurface\tSoft\nMat Type\tSoft\nChroma RGB\tNo\nSpecial Features\tNone',
		weight: 500,
		brand: 'Razer',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_mat_gamer_razer_gigantus_v2_soft_xxl_nasa_pad-51408.html',
	},
	{
		name: 'Notebook Hp Gamer OMEN 15-ek0062la Intel® Core™ i7-10750H 8GB 512GB SSD 32GB Intel® Optane™ ',
		priceNormal: 229000,
		priceSpecial: 198999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/9/49529_800_image.jpg',
		description:
			'Notebook Hp Omen 15-Ek0062La Ci7 10750H 8Gb Ssd 512Gb Optane 32Gb Gf1650Ti 4Gb 15" W10H (1M1L9La#Ac8)\nSISTEMA OPERATIVO Windows 10 Home 64\nFAMILIA DE PROCESADOR Procesador Intel® Core ™ i7 de 10.ª generación\nPROCESADOR Intel® Core ™ i7-10750H (frecuencia base de 2,6 GHz, hasta 5,0 GHz con tecnología Intel® Turbo Boost, 12 MB de caché L3 y 6 núcleos)\nMEMORIA 8 GB de SDRAM DDR4-2933 (1 x 8 GB) 1 x 8 GB\nDISCO DURO Unidad de estado sólido Intel® de 512 GB\nSERVICIO EN LA NUBE Dropbox\nMONITOR Pantalla con retroiluminación WLED FHD, IPS, antirreflectante y microborde, de 15,6 "en diagonal, 250 nits, 45% de NTSC (1920 x 1080)\nGRÁFICOS Integrada\nGRÁFICOS Gráficos Intel® UHD\nGRÁFICOS Discreto\nGRÁFICOS NVIDIA® GeForce® GTX 1650 Ti (GDDR6 de 4 GB dedicado)\nPUERTOS 1 USB Type-C® con SuperSpeed ??de 5 Gbps Velocidad de señalización (DisplayPort ™ 1.4, HP Sleep and Charge); 1 USB tipo A con SuperSpeed ??de 5 Gbps Velocidad de señalización (HP Sleep and Charge); 2 USB Tipo-A con SuperSpeed ??de 5 Gbps Velocidad de señalización; 1 Mini DisplayPort ™; 1 HDMI 2.0a; 1 RJ-45; 1 conector inteligente CA; 1 combinación de auriculares y micrófono\nRANURAS DE EXPANSIÓN 1 lector de tarjetas SD multiformato\nCÁMARA WEB Cámara HD HP Wide Vision con doble micrófono digital integrado\nFUNCIONES DE AUDIO Audio de Bang &amp; Olufsen; DTS: X® Ultra; Soporte de control de audio OMEN DTS: X® Ultra; Altavoces dobles; HP Audio Boost 2.0\nTECLADO Teclado de tamaño completo, retroiluminado con RGB en 4 zonas, de color negro sombra, con teclado numérico y tecnología de teclas antiefecto fantasma con 26 pulsaciones de teclas simultáneas\nDISPOSITIVO APUNTADOR Mousepad que admite gestos multitáctiles\nCONEXIÓN INALÁMBRICA Conjunto Intel® Wi-Fi 6 AX 201 (2x2) y Bluetooth® 5 (compatible con velocidades de transferencia de archivos gigabit)\nINTERFAZ DE RED LAN 10/100/1000 GbE integrada\nTIPO DE FUENTE DE ALIMENTACIÓN Adaptador de alimentación de CA inteligente de 150 W\nTIPO DE BATERÍA Iones de litio de 3 celdas y 52,5 Wh\nEFICIENCIA ENERGÉTICA Certificación ENERGY STAR®\nDIMENSIONES (ANCHO X FONDO X ALTO) 35,79 x 23,97 x 2,25 centímetros\nPESO 2,36 kg A partir de 5,20 libras\nDISEÑO DE PRODUCTOS Base y cubierta mate de metal, marco de teclado anodizado\nGARANTÍA 1 año de garantía limitada de hardware con soporte técnico telefónico gratuito; 90 días de soporte técnico limitado para software (a partir de la fecha de compra)\nSOFTWARE INCLUIDO\nMcAfee LiveSafe ™ Netflix\nCOLOR DE PRODUCTO Cubierta y base negras sombra y armazón de teclado en aluminio negro sombra',
		weight: 3650,
		brand: 'HP',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_hp_omen_15_ek0062la_ci7_10750h_8gb_ssd_512gb_optane_32gb_gf1650ti_4gb_15_w10h-49529.html',
	},
	{
		name: 'MB Intel (1200) Asus Prime B460M-Plus',
		priceNormal: 19599,
		priceSpecial: 15730,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/9/49098_800_image.jpg',
		description:
			'Socket Intel® LGA 1200: listo para procesadores Intel® Core ™ de 10a generación\nASUS OptiMem: enrutamiento cuidadoso de trazas y vías para preservar la integridad de la señal para mejorar la estabilidad de la memoria.\nFan Xpert 2+: controles flexibles para la máxima refrigeración y tranquilidad, además de detección de temperatura de GPU para juegos más frescos.\n5X Protection III: múltiples protecciones de hardware para una protección integral.\nconnectivity ultrarrápida: flexibilidad suprema con soporte nativo M.2 para velocidades de almacenamiento ultrarrápidas',
		weight: 1,
		brand: 'Asus',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/mb_intel_1200_asus_prime_b460m_plus-49098.html',
	},
	{
		name: 'Auricular Marshall Major IV On Ear Bt',
		priceNormal: 20999,
		priceSpecial: 15999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52279_800_image.jpg',
		description:
			'Te presentamos Major IV, los auriculares emblemáticos de Marshall que ofrecen más de 80 horas de reproducción inalámbrica, carga inalámbrica y un nuevo y mejorado diseño ergonómico. Con más de tres días completos de batería, ya no tendrás que preocuparte de que tus auriculares se queden sin carga cuando más los necesitas. Sus controladores dinámicos personalizables proporcionan unos potentes bajos, suaves medios y brillantes agudos, y ofrecen un sonido intenso e inigualable que nunca querrás dejar de escuchar.\nSONIDO CARISMÁTICO\nLos Major IV ofrecen el sonido Marshall característico que esperas. Incorporan más de 55 años de conocimientos para producir un sonido explosivo. Sus controladores dinámicos personalizables proporcionan unos potentes bajos, suaves medios y brillantes agudos, ofrecen un sonido intenso e inigualable que nunca querrás dejar de escuchar.\nMÁS DE 80 HORAS DE REPRODUCCIÓN INALÁMBRICA\nLos Major IV ofrecen más de 80 horas de reproducción inalámbrica con capacidad de carga rápida: solo 15 minutos de carga proporcionan 15 horas de reproducción. Son auriculares diseñados para acompañarte durante mucho tiempo.\nCARGA INALÁMBRICA\nLos Major IV cuentan con carga inalámbrica para que sea aún más fácil cargarlos y seguir en marcha. Puedes colocar los auriculares convenientemente en una almohadilla de carga y los ribetes de silicona mate de los cascos impedirán que se muevan. Pasa menos tiempo buscando el cable de carga entre el lío de cables que suele ser habitual y más tiempo escuchando tu música.\n*Los auriculares vienen con un cable de carga USB-C. La almohadilla de carga inalámbrica no está incluida.\nDISEÑO ERGONÓMICO MEJORADO\nLos nuevos auriculares Major IV cuentan con un diseño ergonómico mejorado: cuando te sumerges en tu música, la décima hora te resultará tan cómoda como la primera. Las almohadillas de estos auriculares son más suaves y se ajustan mejor a la forma de tu oreja.\nBOTÓN DE CONTROL MULTIDIRECCIONAL\nCon el botón de control multidireccional, puedes reproducir, detener, saltar y ajustar el volumen de tu dispositivo, así como encender o apagar tus auriculares. También puedes controlar algunas funciones del teléfono como responder, rechazar o finalizar una llamada con unos pocos clics.\nCOMPARTE TU MÚSICA\nLos Major IV vienen con una clavija de 3,5 mm que, además de servir para conectar los auriculares y dejarte reproducir música cuando tienen poca carga, permite que un amigo pueda conectarse a ellos y disfrutar de tu música. Compartir música con amigos es rápido y sencillo.\nDISEÑO MARSHALL EMBLEMÁTICO\nLos Major IV combinan una mejor usabilidad con los elementos clásicos de Marshall en un diseño que es a la vez icónico e innovador. El nuevo clip permite plegar los auriculares para que tengan un tamaño aún menor y las almohadillas de los cascos están protegidas del desgaste. Cuentan con un eficiente botón de control táctil, vinilo negro texturizado y el logotipo de Marshall caligrafiado, además de una gran durabilidad que es necesaria en la anarquía del día a día.\nEspecificaciones técnicas\nMAJOR IV BLACK\nESPECIFICACIONES DE SONIDO\nRespuesta en frecuencia\n20 Hz – 20 kHz\nSENSIBILIDAD DEL CONTROLADOR\n99 dB SPL (100mV 1kHz)\nTipos de controladores\nDinámico\nImpedancia del controlador\n32 Ohm\nControladores\n40 mm\nBATERÍA\nCarga Inalámbrica\nSí (La almohadilla de carga inalámbrica no está incluida)\nTiempo de reproducción\nMás de 80 horas con Bluetooth\nTiempo de carga\n3 horas\n15 minutos proporcionan 15 horas de reproducción inalámbrica\nCONTROLES Y connectivity\nMicrófono y Control Remoto\nSí\nGama Bluetooth\n10 m\nPerilla de control\nSí\nconnectivity Inalámbrica\nBluetooth 5.0\nINCLUIDO EN LA CAJA\nContenido de la caja\nAuriculares Major IV\nCable de sonido de 3,5 mm\nManual de usuario e información legal y de seguridad\nCable de carga USB-C\nUNIDAD FÍSICA\nPlegable\nSí\nPeso\n165 g\n5.82 oz\nColores\nNegro',
		weight: 300,
		brand: 'Marshall',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/auricular_marshall_major_iv_on_ear_bt-52279.html',
	},
	{
		name: 'Monitor Led 24 Acer Gaming Kg241q 165Hz',
		priceNormal: 61999,
		priceSpecial: 48199,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/M/4/M49704_800_image.jpg',
		description:
			'Características principales\nMarca\tAcer\nLínea\tKG1\nModelo\tKG241Q\nTamaño de la pantalla\t24 "\nVoltaje\t110V/220V\nOtras características\nModelo detallado: KG241Q\nFrecuencia de refresco: 144 Hz\nTipo de pantalla: LED\nTipo de resolución: Full HD\nResolución de la pantalla: 1920 px x 1080 px\nConexiones del monitor: HDMI,VGA\nEs curvo: No\nEs gamer: Sí\nTecnología de la pantalla: TN\nRelación de aspecto: 16:9\nBrillo: 300 cd/m²\nTiempo de respuesta: 1 ms\nCon altavoces incorporados: No',
		weight: 8000,
		brand: 'Acer',
		category: 'monitors',
		descriptionLink:
			'https://delta.com.ar/monitor_led_24_acer_gaming_kg241q_165hz-m49704.html',
	},
	{
		name: 'Tablet Philco Tp7A6 - 7 16 Gb Android 10',
		priceNormal: 10999,
		priceSpecial: 7499,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/2/42079_800_image.jpg',
		description:
			'Especificaciones técnicas Imagen Tamaño de Pantalla 7" Resolución de pantalla 1024 x 600p Resolución cámara 2 Mp Capacidad Multitouch Sí Memoria Memoria Interna 16 GB Memoria RAM 1 GB Expandible a 32 GB Sistema Operativo Sistema Operativo Android 10 Procesador Mod. Procesador Allwinner A50 (Quad-core Cortex A7) Cámara Cámara Trasera 2 Mpx Cámara Frontal 0.3 Mp connectivity Wi-Fi Sí Bluetooth Sí Batería Batería 2000 mAh Características generales Medidas 191x109x9 mm Peso 272,5 gramos Modelo y origen Modelo TP7A6\nDescripción\nDisfrutá un mayor rendimiento\nLa TP7A6 dispone de Android 10 que permite mejorar el rendimiento de tu tablet optimizando la memoria RAM de 1GB y perfeccionando la precisión del tacto.\nAdemás, gracias a su pantalla de 7 pulgadas podrás reproducir videos y películas con una resolución de hasta 1024 x 600.\nCapturá tus momentos\nCon la cámara principal de 2 megapíxeles podrás capturar imágenes. Mientras que con la frontal de 0,3 MP podrás realizar videollamadas o sacarte fotos instantáneas con mayor facilidad.\nPersonalizá tu Tablet\nGracias a la memoria interna de la tablet Philco TP7A6 podrás utilizar tus aplicaciones favoritas, mensajear tus redes sociales, llevar tus juegos y guardar tu música, fotos e inclusive libros. La misma cuenta con 16GB disponibles y la posibilidad de expandirlos hasta 32GB con una tarjeta MicroSD.',
		weight: 2000,
		brand: 'Philco',
		category: 'tablets',
		descriptionLink:
			'https://delta.com.ar/tablet_philco_tp7a6_7_16_gb_android_10-42079.html',
	},
	{
		name: 'Notebook Acer I5-1135G7 Swift 3 8Gb 256Gb Ssd 14 Silver W10Hsl ',
		priceNormal: 160999,
		priceSpecial: 149999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53493_800_image.jpg',
		description:
			"Sistema operativo1, 2 Windows 10 Home de 64 bits (W10HSL64)\nCPU y chipset1 Procesador Intel® CoreTM i5-1135G7\nMemoria1, 3, 4 Compatibilidad con SDRAM LPDDR4X de doble canal\n• 8 GB de memoria del sistema LPDDR4X incorporada\nPantalla5 Pantalla de 14 'con tecnología IPS (In-Plane Switching), Full HD 1920 x 1080, alto brillo (300 nits) LCD TFT con retroiluminación LED de Acer ComfyViewTM\n• Relación de aspecto 16: 9, gama de colores 100% sRGB\n• Amplio ángulo de visión de hasta 170 grados\n• Diseño elegante y delgado\n• Sin mercurio, respetuoso con el medio ambiente\nGráficos1 Gráficos Intel® Iris® Xe\nAudio • Audio DTS®, con respuesta de graves optimizada y distorsión de microaltavoces\nprevención\n• Dos altavoces estéreo frontales integrados\n• Acer Purificado. Tecnología de voz con micrófonos integrados duales\n• Compatible con Cortana con Voice\n• Tecnología Acer TrueHarmony\nAlmacenamiento1, 6.7 Unidad de estado sólido\n• 256 GB, PCIe Gen3, 8 Gb / s, NVMe\nVideoconferencia Webcam1\nCámara web HD con:\n• Resolución de 1280 x 720\n• Grabación de audio / video HD de 720p\n• Imágenes de rango dinámico súper alto (SHDR)\nInalámbrico y\nnetworking1\nWLAN\n• Intel® Wireless Wi-Fi 6 AX201\n• LAN inalámbrica 802.11a / b / g / n / acR2 + ax\n• Doble banda (2,4 GHz y 5 GHz)\n• Tecnología 2x2 MU-MIMO\n• Soporta Bluetooth® 5.1\n• Interfaz Wi-Fi PCIe\nWPAN\n• Bluetooth® 5.0\nSeguridad Solución de huellas dactilares Acer Bio-Protection, con protección de computadora y certificación Windows Hello\nUsuario de BIOS, supervisor, contraseñas de disco duro\ncerradura Kensington\nDimensiones y\npeso, 8,9\nDimensiones: 323,4 (W) x 218,9 (D) x 15,95 (H) mm (12,73 x 8,62 x 0,63 pulgadas)\nPeso: 1,2 kg (2,65 libras) con paquete de batería de 3 celdas\nAdaptador de corriente y\nbatería10.11\nAdaptador de corriente\n• Adaptador de CA de 3 pines y 65 W\nBatería\n• Batería de iones de litio de 3 celdas y 48 Wh\n• Admite la tecnología de carga rápida\n(para modelos con Full HD IPS Panel + SSD\n• Hasta 13 horas (según los resultados de las pruebas de MobileMark® 2014)\n• Hasta 14,5 horas (según los resultados de la prueba de reproducción de video)\n• Hasta 10 horas (según los resultados de la prueba de navegación web)\nTeclado de entrada y control\nTeclado Acer FineTip de 83/84/87 teclas con compatibilidad con idiomas internacionales\nTeclado retroiluminado FineTip de tamaño completo de 83/84/87 teclas con idioma internacional\napoyo\nPanel táctil\nPanel táctil de múltiples gestos, que admite desplazamiento con dos dedos; pellizco; gestos para abrir\nCortana, Action Center, multitarea; comandos de la aplicación\n• Certificación Microsoft Precision Touchpad\nTienda de Windows\nAplicaciones12\nEn casa\n• Registro de productos Acer\nProductividad\n• Cyberlink® PhotoDirector 8\n• Cyberlink® PowerDirector 14\nGarantía Garantía de viajero internacional de un año (ITW)",
		weight: 1,
		brand: 'Acer',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_acer_i5_1135g7_swift_3_8gb_256gb_ssd_14_silver_w10hsl-53493.html',
	},
	{
		name: 'D Rigido Pc Seagate 1Tb Skyhawk',
		priceNormal: 7999,
		priceSpecial: 6199,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/7/47036_800_image.jpg',
		description:
			'Características principales\nMarca\tSeagate\nLínea\tSkyHawk\nModelo\tST1000VX005\nCapacidad\t1 TB\nOtras características\nTecnología de almacenamientoHDD\nInterfacesSATA III\nAplicacionesSistema de videovigilancia\nUbicación del discoInterno\nFactor de forma3.5"\nCaché de datos64 MB\nCon RAIDSí',
		weight: 1,
		brand: 'Seagate',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/d_rigido_pc_seagate_1tb_skyhawk-47036.html',
	},
	{
		name: 'Mouse Gamer Lenovo Legion M300 Rgb',
		priceNormal: 5075,
		priceSpecial: 4521,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52900_800_image.jpg',
		description:
			'Color Negro\nTipo de conector Cableado vía USB 2.0\nLargo y tipo de cable 1,8 m (5,9 pies)\nPeso 88 g (excluye el cable)\nCaracterísticas de diseño especiales Diseño ambidiestro para agarre de palma y de garra; Cable ultra suave;Agarres laterales con textura para un mejor control; 16,8 millones colores RGB\nRetroiluminación Sí\nBotón de mouse 8 botones programables\nButton Life Izquierda / Derecha: 10 millones de clics; Botones laterales/botón de DPI: 3 millones de clics\nDPI Hasta 8.000 DPI\nSensor de mouse Pixart 3325\nRequerimientos de hardware Equipo con puerto USB-A\nGarantía Unidad reemplazable por el cliente (CRU)\nDesplazamiento Arriba / Abajo\nSoftware o controlador especializado Legion Accessory Central para configuraciones avanzadas\nMarca Lenovo\nRequirimiento de sistema operativo Windows 10\nPeso del paquete 208 g (7,33 oz)\nAprobación de agencia CB, marca cTUVus, marca TUV, CE, FCC, ICES, VCCI, BSMI, RCM, EAC, KCC, EU REACH, EU RoHS\nTipo de paquete Caja minorista\nDimensiones del paquete (A x A x P) 109 mm x 170.5 mm x 64 mm 4,3 x 6,7 x 2,5\nAltura 42,1 mm (1,7 pulgadas)\nLargo 127,6 mm (5,0 pulgadas)\nProfundidad 68,2 mm (2,7 pulgadas)\nCaracterísticas especiales/añadidas Cambio de DPI rápido; Botones laterales simétricos\nPeríodo de garantía 1 año\nMáxima temperatura operacional 40 grados Celsios (104 °F)\nMínima temperatura operacional 0 grados Celsios (32 °F)\nHumedad máxima relativa (%) 0,95\nHumedad mínima relativa (%) 0,2\nGrupo de envío Mouse de precisión para juegos RGB Lenovo Legion M300, guía de inicio rápido, póster de garantía',
		weight: 1,
		brand: 'Lenovo',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_gamer_lenovo_legion_m300_rgb-52900.html',
	},
	{
		name: 'Mouse Bluetooth Lenovo 600 Silent',
		priceNormal: 4521,
		priceSpecial: 3829,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52898_800_image.jpg',
		description:
			'Descripción general\nEl Lenovo 600 Bluetooth Silent Mouse toma un concepto desgastado y lo pone patas arriba, brindando un dispositivo de productividad que no se interpone en el camino de las personas ocupadas que lo usan. Está esculpido para ser cómodo para apoyar la palma de la mano, con un diseño minimalista de bajo perfil que hace que el mouse sea fácil de transportar y quepa en los bolsillos sin abultamiento. Haga más con el sensor óptico azul que le permite trabajar en la mayoría de las superficies, los revolucionarios botones silenciosos sin distracciones y los controles DPI ajustables sobre la marcha. Empareje sin esfuerzo hasta dos dispositivos a la vez y cambie rápidamente entre ellos con solo presionar un botón, gracias a la tecnología Bluetooth 5.0 y Microsoft Swift Pair.\ncaracterísticas y beneficios\nBluetooth 5.0 de doble host para cambiar entre 2 dispositivos\nSwift Pair para conectarse cómodamente a nuevos dispositivos\nBotones silenciosos sin los molestos sonidos de clic\nSensor óptico azul que funciona en la mayoría de superficies\nAjuste de DPI sobre la marcha: 2400, 1600, 800\nHasta 1 año de duración de la batería con una sola batería AA (puede variar según el uso)\nEspecificaciones técnicas\nColor\ngris hierro\nDuración de la batería\nHasta 12 meses (puede variar según el uso)\nTipo de conexión\nBluetooth 5.0\nPeso a 61 g (2,15 oz)\nBotón de ratón\n3 (clic izquierdo, clic derecho, clic de desplazamiento)\nDuración del botón\nBotones derecha / izquierda: hasta 3 millones de clics; Botón de desplazamiento: hasta 100.000 clics\nDPI\nDPI ajustable de 3 niveles (2400, 1600, 800)\nSensor de ratón\nsensor óptico azul\nTipo de garantía\nUnidad reemplazable por el cliente (CRU)\nRequisito de energía con 1 pila AA\nDesplazamiento\nrueda de desplazamiento bidireccional (arriba, abajo)\nMarca\nLenovo\nRequisitos del sistema operativo en Windows 10\nPeso empaquetado\n129 g (4.56 oz)\nAprobaciones de agencias\nANATEL, ANRT, ARTCI, BSMI, CB, CE-RED-EMC + RF, CERT, cTUVus, DWLF &amp; M, EN62471, ENACOM, FCC ID, IC, ictQATAR, IMDA, JRF, KC, MIC, NCC, SRRC, SUBTEL, TRA, TRA, TRC, TUV Mark, UCC, WPC\nTipo de paquete\nCaja al por menor\nDimensiones del paquete (L x D x H)\n110 x 78 x 40 mm; (4,33 pulgadas x 3,07 pulgadas x 1,57 pulgadas)\nAltura a 29 mm (1,13 pulg.)\nLongitud a 107 mm (4,23 pulgadas)\nProfundidad a 58 mm (2,28 pulg.)\nCaracterísticas especiales / agregadas\nDiseño de perfil bajo; connectivity Swift Pair; Bluetooth de doble host; Fácilmente entre dos dispositivos\nPeríodo de garantía a 1 año\nTemperatura máxima de funcionamiento a 40 grados Celsius (104 grados Fahrenheit)\nTemperatura mínima de funcionamiento a 0 grados Celsius (32 grados Fahrenheit\nHumedad relativa máxima (%)\n90%\nHumedad relativa mínima (%)\n10%\nTiempo de carga de la batería con 1 batería AA\nGrupo de envío\nLenovo 600 Bluetooth Silent Mouse; 1 x pila AA; Póster de instalación; Póster de garantía',
		weight: 1,
		brand: 'Lenovo',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/mouse_bluetooth_lenovo_600_silent-52898.html',
	},
	{
		name: 'Auricular Gamer Lenovo Legion H300 Stereo ',
		priceNormal: 8006,
		priceSpecial: 7584,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52902_800_image.jpg',
		description:
			'Información general\nLos auriculares estéreo para juegos Legion H300 están diseñados para satisfacer a los jugadores profesionales sin sacrificar la calidad. Disfruta de una experiencia de sonido enriquecida, construcción ergonómica, diseño de auriculares y características inteligentes de usabilidad en todo el equipo, en un compañero elegante para tus sesiones de juegos y multimedia favoritos.\nEsp. Técnicas\nColor Negro\nTipo de conector Cableado vía 3.5 mm\nLargo y tipo de cable 1,85 m, cable trenzado\nPeso 330 g\nGarantía CRU o servicio en centros de reparación autorizados\nControles Micrófono de encendido / apagado; Subir / bajar volumen',
		weight: 1,
		brand: 'Lenovo',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/auricular_gamer_lenovo_legion_h300_stereo-52902.html',
	},
	{
		name: 'Ups Forza Interactiva Serie Nt 500Va250W',
		priceNormal: 6459,
		priceSpecial: 5769,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/5/45851_800_image.jpg',
		description:
			'La serie NT de Forza ofrece protección eléctrica a su computadora personal y periféricos.\nDe tamaño compacto, la unidad es ideal para espacios de trabajo limitados en la oficina y el hogar. Aunque pequeña en tamaño, proporciona la máxima protección ante la constante amenaza de fallas en el suministro eléctrico.\nAlimentación de respaldo de emergencia Con un tiempo de autonomía de hasta 25 minutos\nProtección Protección total en sus 4 tomas (batería, regulación, supresión)\nRegulación Automática Función de regulación automática de voltaje incorporada\nProtección de línea de datos y teléfono RJ-11\nConectores de salida Tipo de enchufe Argentino Tipo I\nCapacidad: 500VA / 250W Topología: interactiva Forma de onda: onda sinusoidal simulada Voltaje: 220V Tipo de entrada: IRAM Tipo I Tipo de salida: 4 x IRAM Tipo I Indicador visual: luz LED de estado',
		weight: 12000,
		brand: 'Forza',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/ups_forza_interactiva_serie_nt_500va250w-45851.html',
	},
	{
		name: 'Pad Mouse Sharkoon 1337 Rgb V2 360X270X3Mm 235Grs',
		priceNormal: 3699,
		priceSpecial: 2899,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50762_800_image.jpg',
		description:
			'El tapete para juegos 1337 RGB V2 amplía nuestra serie de tapetes para mouse populares con otra pieza de equipo para juegos de alta calidad. La alfombrilla del mouse llama la atención con una iluminación RGB que envuelve sus bordes. Usando el controlador incorporado, la iluminación se puede ajustar con efectos impresionantes, incluido un modo con dos colores simultáneos. La superficie textil suave permite un deslizamiento suave para maniobras sensibles del mouse, mientras que la parte inferior de goma ofrece una sujeción firme. Al mismo tiempo, la alfombrilla del ratón es repelente al agua y resistente, pudiendo soportar un uso intenso.\nHecho para satisfacer todas las demandas. Disponible en tres tamaños diferentes, el 1337 RGB V2 cabe encima de cualquier escritorio. Está disponible en las variantes 360, 800 y 900. Con una longitud de 360 milímetros y un ancho de 270 milímetros, el modelo 360 ahorra espacio, pero al mismo tiempo es lo suficientemente grande para movimientos intensivos del mouse. Con sus dimensiones de 800 por 300 milímetros, el modelo 800 tiene una superficie significativamente mayor, sin dejar de tener un grosor delgado. El modelo 900 es uno de los más grandes de nuestras alfombrillas para ratón. Acostado sobre el escritorio con sus 900 milímetros de largo y 425 milímetros de ancho, el 900 proporciona al mouse y al teclado una sujeción antideslizante, así como una enorme cantidad de espacio para maniobras de barrido.\nResaltado visual para todas las configuraciones. Una iluminación atmosférica integrada en los bordes le da al 1337 RGB V2 un aspecto impresionante. El controlador permite elegir y ajustar libremente cuatro modos de iluminación expresivos: colores individuales o dos colores mostrados simultáneamente, o un modo con cambios de color pulsantes. El borde está cosido con finos hilos de nailon para garantizar una luminosidad total, lo que convierte al 1337 RGB V2 en un punto culminante realmente efectivo.\nHecho para juegos precisos. La superficie del 1337 RGB V2 está diseñada para brindar precisión y deslizamiento suave. El material blando es resistente y ofrece una resistencia mínima. Los jugadores exigentes se benefician de las propiedades de deslizamiento óptimas, que permiten movimientos rápidos y sensibles. El 1337 RGB V2 puede soportar incluso los movimientos más agitados gracias a su parte inferior de goma. La alfombrilla del mouse también viene con un revestimiento repelente al agua, lo que facilita su limpieza.\nControl total y sencillo. El controlador actualizado del 1337 RGB V2 se encuentra en el borde superior izquierdo de la alfombrilla del mouse. Con su delgada altura de solo 9 milímetros, el controlador permanece bajo y discreto. El controlador está conectado a la PC a través de un cable USB desmontable con un conector micro-B. Un solo botón de fácil acceso en la parte superior controla y establece los efectos de iluminación.\nPara usar en cualquier lugar. Su alta flexibilidad, el cable desmontable y el controlador delgado e integrado hacen que el tapete para juegos 1337 RGB V2 sea fácil de transportar. Se puede guardar fácilmente en bolsas o mochilas y, por lo tanto, siempre está listo para usar en cualquier lugar.\nGeneral\nSuperficie:\nTextil\nIluminación ajustable:\nSi\nBase de goma antideslizante:\nSi\nCostura de puntada duradera:\nSi\nSuperficie repelente al agua:\nSi\nAltura:\n3 mm\nPeso:\n235 g\nDimensiones (L x An x Al):\n360 x 270 x 3 mm\ncontenidos del paquete\nAlfombrilla para juegos 1337 RGB V2 360\nManual',
		weight: 300,
		brand: 'Sharkoon',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/pad_mouse_sharkoon_1337_rgb_v2_360x270x3mm_235grs-50762.html',
	},
	{
		name: 'Kit de 3 Coolers Aerocool Duo 12 Pro ARGB - Dual Ring',
		priceNormal: 8549,
		priceSpecial: 6899,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/5/45369_800_image.jpg',
		description:
			'Ventilador.\nModelo: Duo 12 Pro Dual Ring ARGB.\nIncluido: Duo 12 x 3 / Hub x 1 / Control remoto x 1.\nDimensión del ventilador (L x W x H): 120 x 120 x 25 mm.\nVelocidad del ventilador: 1000 rpm.\nTipo de conector: 6 pines.\nVoltaje de arranque del ventilador: 6 V.\nTensión nominal: 12 V.\nCorriente nominal: 0.15A.\nConsumo de energía: 1.8 W.\nPresión de aire: 1.29 mmH2O.\nFlujo de aire: 33.4CFM.\nNivel de ruido del ventilador: 19.7dBA.\nTipo de rodamiento: rodamiento hidráulico.\nMTBF (tiempo medio antes de la falla): 60000 h.\nControl remoto.\nTipo: RF inalámbrico.\nFrecuencia: 433.92 MHZ.\nAlcance de recepción 10m.\nHub (H66F).\nConector: SATA.\nTensión nominal: 12V / 5V.\nCorriente nominal: 3A.\nPuerto para ventilador: 6. ',
		weight: 1,
		brand: 'AeroCool',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/kit_de_3_coolers_aerocool_duo_12_pro_argb_dual_ring-45369.html',
	},
	{
		name: 'Pad Mouse Sharkoon 1337 Rgb V2 800X300X3Mm 510Grs',
		priceNormal: 4999,
		priceSpecial: 3899,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50763_800_image.jpg',
		description:
			'El tapete para juegos 1337 RGB V2 amplía nuestra serie de tapetes para mouse populares con otra pieza de equipo para juegos de alta calidad. La alfombrilla del mouse llama la atención con una iluminación RGB que envuelve sus bordes. Usando el controlador incorporado, la iluminación se puede ajustar con efectos impresionantes, incluido un modo con dos colores simultáneos. La superficie textil suave permite un deslizamiento suave para maniobras sensibles del mouse, mientras que la parte inferior de goma ofrece una sujeción firme. Al mismo tiempo, la alfombrilla del ratón es repelente al agua y resistente, pudiendo soportar un uso intenso.\nHecho para satisfacer todas las demandas. Disponible en tres tamaños diferentes, el 1337 RGB V2 cabe encima de cualquier escritorio. Está disponible en las variantes 360, 800 y 900. Con una longitud de 360 milímetros y un ancho de 270 milímetros, el modelo 360 ahorra espacio, pero al mismo tiempo es lo suficientemente grande para movimientos intensivos del mouse. Con sus dimensiones de 800 por 300 milímetros, el modelo 800 tiene una superficie significativamente mayor, sin dejar de tener un grosor delgado. El modelo 900 es uno de los más grandes de nuestras alfombrillas para ratón. Acostado sobre el escritorio con sus 900 milímetros de largo y 425 milímetros de ancho, el 900 proporciona al mouse y al teclado una sujeción antideslizante, así como una enorme cantidad de espacio para maniobras de barrido.\nResaltado visual para todas las configuraciones. Una iluminación atmosférica integrada en los bordes le da al 1337 RGB V2 un aspecto impresionante. El controlador permite elegir y ajustar libremente cuatro modos de iluminación expresivos: colores individuales o dos colores mostrados simultáneamente, o un modo con cambios de color pulsantes. El borde está cosido con finos hilos de nailon para garantizar una luminosidad total, lo que convierte al 1337 RGB V2 en un punto culminante realmente efectivo.\nHecho para juegos precisos. La superficie del 1337 RGB V2 está diseñada para brindar precisión y deslizamiento suave. El material blando es resistente y ofrece una resistencia mínima. Los jugadores exigentes se benefician de las propiedades de deslizamiento óptimas, que permiten movimientos rápidos y sensibles. El 1337 RGB V2 puede soportar incluso los movimientos más agitados gracias a su parte inferior de goma. La alfombrilla del mouse también viene con un revestimiento repelente al agua, lo que facilita su limpieza.\nControl total y sencillo. El controlador actualizado del 1337 RGB V2 se encuentra en el borde superior izquierdo de la alfombrilla del mouse. Con su delgada altura de solo 9 milímetros, el controlador permanece bajo y discreto. El controlador está conectado a la PC a través de un cable USB desmontable con un conector micro-B. Un solo botón de fácil acceso en la parte superior controla y establece los efectos de iluminación.\nPara usar en cualquier lugar. Su alta flexibilidad, el cable desmontable y el controlador delgado e integrado hacen que el tapete para juegos 1337 RGB V2 sea fácil de transportar. Se puede guardar fácilmente en bolsas o mochilas y, por lo tanto, siempre está listo para usar en cualquier lugar.',
		weight: 550,
		brand: 'Sharkoon',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/pad_mouse_sharkoon_1337_rgb_v2_800x300x3mm_510grs-50763.html',
	},
	{
		name: 'Disco Ssd Kingston 960Gb Ssdnow A400 Sata3 25 7Mm',
		priceNormal: 19166,
		priceSpecial: 13999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50604_800_image.jpg',
		description:
			'-Arranques, cargas y transferencias de archivos todos con mayor rapidez.\n-Más fiable y duradera que las unidades de disco duro.\n-Varias capacidades, para almacenar las aplicaciones o sustituir del todo unidades de disco duro.\n-SSD SATA A400 en formatos 2,5" y M.2\n-La unidad A400 de estado sólido de Kingston ofrece enormes mejoras en la velocidad de respuesta, sin actualizaciones adicionales del hardware.\n-Brinda lapsos de arranque, carga y de transferencia de archivos increíblemente más breves en comparación con las unidades de disco duro mecánico.\n-Apoyada en su controlador de la más reciente generación, que ofrece velocidades de lectura y escritura de hasta 500 MB/s y 450 MB/s, respectivamente, esta unidad SSD es 10 veces más rápida que los discos duros tradicionales y provee un mejor rendimiento, velocidad de respuesta ultrarrápida en el procesamiento multitareas y una aceleración general del sistema.\n-Además son más fiables y duraderas que las unidades de disco duro, y están disponibles en varias capacidades que van de 120 GB hasta 1,92 TB.\n-Factor de forma\t2,5"\n-Interfaz\tSATA Rev. 3.0 (6 Gb/s), retro compatible con SATA Rev. 2.0 (3 Gb/s)\n-Capacidad 960GB\n-NAND\t3D\nRendimiento de referencia\n-Transferencia de datos (ATTO)\n-960 GB – hasta 500 MB/s en lectura y 450 MB/s en escritura\n-Consumo de energía\t0,195 W en reposo / 0,279 W promedio / 0,642 W (máx) lectura / 1,535 W (máx) escritura\n-Temperatura de almacenamiento\t-40°C~85°C\n-Temperatura de servicio\t0°C~70°C\n-Dimensiones\t100,0 mm x 69,9 mm x 7,0 mm (2,5”) 80 mm x 22 mm x 1,35 mm (M.2)\n-Vibración en funcionamiento\t2,17 G máxima (7–800 Hz)\n-Vibración en reposo\t20 G máxima (10–2000 Hz)\n-Vida útil\t1 millón de horas MTBF\n-Garantía/asistencia\tTres años de garantía limitada, con asistencia técnica gratuita\n-Total de bytes escritos (TBW)\t960GB: 300TB',
		weight: 1,
		brand: 'Kingston',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/disco_ssd_kingston_960gb_ssdnow_a400_sata3_25_7mm-50604.html',
	},
	{
		name: 'Monitor 24 Acer V246Hl HDMI',
		priceNormal: 32999,
		priceSpecial: 27099,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/M/3/M39430_800_image.jpg',
		description:
			'Los monitors de la serie V6 cuentan con la tecnología Acer eColor para obtener imágenes sorprendentes y las innovaciones de Acer ComfyView que reducen el deslumbramiento para ofrecer una visión más cómoda. Estos monitors robustos también tienen una amplia gama de puertos, por lo que puede conectar muchos tipos de dispositivos y hacer más a la vez. Además, utilizan funciones ecológicas para ahorrar energía y dinero.',
		weight: 1,
		brand: 'Acer',
		category: 'monitors',
		descriptionLink:
			'https://delta.com.ar/monitor_24_acer_v246hl_hdmi-m39430.html',
	},
	{
		name: 'Monitor Led 215 Acer V226Hql Bbi',
		priceNormal: 29999,
		priceSpecial: 22899,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/M/3/M39429_800_image.jpg',
		description:
			'Los monitors Acer que utilizan tecnología de retroiluminación LED blanca brindan detalles excelentes, lo que lo hace perfecto para minimizar el impacto ambiental a la vez que proporciona un rendimiento multimedia superior HD avanzado y durabilidad. Estos monitors no contienen aplicaciones. Los monitors LED también consumen menos energía que la sustancia tóxica mercurio, haciéndolos más seguros y duran más que aquellos con lámparas CCFL.',
		weight: 1,
		brand: 'Acer',
		category: 'monitors',
		descriptionLink:
			'https://delta.com.ar/monitor_led_215_acer_v226hql_bbi-m39429.html',
	},
	{
		name: 'Notebook Pcbox Fire! 3 - Intel Core I3-1005G - 8gb',
		priceNormal: 119999,
		priceSpecial: 89999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50134_800_image.jpg',
		description:
			'NOTEBOOK PCBOX FIRE! 3 PCB-IL3W1\nSISTEMA OPERATIVO WINDOWS 10 HOME\nPROCESADOR INTEL CORE I3-1005G1\n4 MB CACHE , HASTA 3.4 GHZ EN MODO TURBO\nALMACENAMIENTO SSD 256GB M2\nPANTALLA 14 FHD 1920X1080 IPS\nCAMARA WEB 1.0MP\nCONEXIONES : USB TIPO C X1 - USB 3.1 X2 - AUDIO JACK\nLECTOR DE TARJETAS\nconnectivity: WI-FI / BLUETHOOT / LAN RJ45\nDIMENSIONES : 322MM X 222MM X 18.4\nPESO 1.5 KG\nBATERIA 4400 MHA\nCaracterísticas generales\nMarca Pcbox\nLínea Fire\nModelo PCB-IL3W1\n--Pantalla\nResolución de la pantalla 1920 px x 1080 px\nFrecuencia de actualización de la pantalla 60 Hz\nCon pantalla táctil No\nTipo de resolución Full HD\nTamaño de la pantalla 14 "\n--Sistema operativo\nNombre del sistema operativo Windows\nVersión del sistema operativo 10\nEdición del sistema operativo Home\n--Batería\nTipo de batería Ion de litio\nEspecificaciones\nEs ultrabook No\nEs 2 en 1 No\nEs gamer No\n--Memoria\nMemoria RAM 8 GB\nTipo de memoria RAM DDR4\n--Almacenamiento\nCapacidad del SSD 256 GB\n--Procesador\nGPU Intel UHD Graphics 600\nMarca del procesador Intel\nLínea del procesador CORE I3-1005G1\nCantidad de núcleos 4\nVelocidad del procesador 3.4 GHz\n--connectivity\nUnidades ópticas NO\nCon USB Sí\nCon Wi-Fi Sí\nPeso y dimensiones\nPeso 1.5 kg\n--Cámara\nResolución de la cámara web 1 Mpx\nCon cámara web Sí ',
		weight: 2500,
		brand: 'Pcbox',
		category: 'notebooks',
		descriptionLink:
			'https://delta.com.ar/notebook_pcbox_fire_3_intel_core_i3_1005g_8gb-50134.html',
	},
	{
		name: 'Pad Mouse Sharkoon 1337 Rgb V2900X425X3Mm 780Grs',
		priceNormal: 5999,
		priceSpecial: 4699,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50764_800_image.jpg',
		description:
			'Características &lt;br&gt;\n-Superficie optimizada para un seguimiento preciso del mouse&lt;br&gt;\n-Diseño de base de silicio híbrido&lt;br&gt;\n-Borde de moldeo por calor para ultra confort&lt;br&gt;\n-Resistente a derrames y lavable&lt;br&gt;\n-Dimensiones (L x An x Al): 900 x 425 x 3 mm',
		weight: 820,
		brand: 'Sharkoon',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/pad_mouse_sharkoon_1337_rgb_v2900x425x3mm_780grs-50764.html',
	},
	{
		name: 'Auricular CMic Corsair Virtuoso Wireless Se Gunmetal (Ca-9011180-Na)',
		priceNormal: 45999,
		priceSpecial: 35999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51818_800_image.jpg',
		description:
			'Los CORSAIR VIRTUOSO RGB Wireless SE ofrecen una experiencia de sonido de alta fidelidad y una comodidad continua gracias a las orejeras de espuma con memoria premium y una connectivity hiperrápida con tecnología SLIPSTREAM WIRELESS.\nEncontrar un minorista detalles DESCARGAS SOPORTE\nCalidad de sonido impecable\nCon los VIRTUOSO RGB Wireless podrá escucharlo todo, desde la pisada más fuerte hasta el tono bajo más profundo. Un par de transductores de neodimio de alta densidad de 50 mm ajustados con precisión ofrecen un rango de frecuencia de 20 Hz-40 000 Hz, el doble que casi todos los auriculares de juego.\nLa comodidad es la clave\nLas almohadillas de espuma viscoelástica premium se adaptan a la forma de su cabeza; además, la banda ligera ofrece una comodidad duradera y suave como una almohada para que pueda jugar durante horas.\nFabricación ligera premium\nLa construcción de aluminio mecanizado consigue que los VIRTUOSO RGB Wireless ofrezcan un diseño ligero, una fuerte durabilidad y la mayor comodidad en una combinación perfecta.\nTres formas de conexión\nLos VIRTUOSO RGB Wireless pueden conectarse a casi cualquier lugar, independientemente de dónde vaya a jugar.\nMicrófono extraíble\ncon calidad de transmisión\nEs, sencillamente, uno de los mejores micrófonos que hemos incluido en unos auriculares. El micrófono omnidireccional de gran ancho de banda de los VIRTUOSO RGB Wireless ofrece un amplio rango dinámico y una claridad vocal magnífica que rivaliza con los micrófonos independientes. Además, es completamente extraíble y cuenta con un anillo LED RGB que indica si el micrófono se oye o si está silenciado.\nMicrófono extraíble\ncon calidad de transmisión\nEl gran ancho de banda del micrófono, junto con la conexión hiperrápida de la tecnología SLIPSTREAM CORSAIR WIRELESS, aumenta drásticamente la respuesta de frecuencia a casi el doble de unos auriculares de juego inalámbricos normales. Esto significa que su voz se escuchará con más claridad, más precisión y más naturalidad cuando se comunique con sus amigos y compañeros de equipo.\nCaracterísticas avanzadas de los VIRTUOSO WIRELESS RGB SE\nCaracterísticas estándar Sueño y vigilia inteligentes Un acelerómetro interno apaga los auriculares automáticamente cuando se los quita y los vuelve a encender cuando se los pone. Sonido envolvente 7.1 Iluminación RGB Batería\nCaracterísticas exclusivas de los SE Construcción de aluminio mecanizado Los VIRTUOSO RGB Wireless SE suman unas placas de aluminio a los auriculares, un conector y un cabezal de micrófono de aluminio y detalles de aluminio al transmisor USB inalámbrico para refinar un poco más el estilo exclusivo de los auriculares en color gris acero.',
		weight: 250,
		brand: 'Corsair',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/auricular_cmic_corsair_virtuoso_wireless_se_gunmetal_ca_9011180_na-51818.html',
	},
	{
		name: 'Adaptador Vertical PPlaca Grafica Sharkoon Elite Shark Series',
		priceNormal: 7999,
		priceSpecial: 5999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50754_800_image.jpg',
		description:
			'El Vertical Graphics Card Kit es un set de Sharkoon que permite montar rápida y fácilmente tarjetas gráficas verticalmente. ¡De esta manera, tarjetas gráficas iluminadas se pueden montar y presentar de forma óptima desde su mejor óptica y lateral! La instalación de este set ha sido especialmente desarrollada para la serie ELITE SHARK y consiste en una montura para la tarjeta gráfica y un cable elevador extra largo. La montura simplemente se atornilla sobre el túnel para Fuente de alimentación, y el cable elevador entonces se conecta a la placa base y a la tarjeta gráfica.',
		weight: 1,
		brand: 'Sharkoon',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/adaptador_vertical_pplaca_grafica_sharkoon_elite_shark_series-50754.html',
	},
	{
		name: 'Disco Seagate Ironwolf Pro 10Tb 35 Sata',
		priceNormal: 109999,
		priceSpecial: 68999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53527_800_image.jpg',
		description:
			'La unidad IronWolf Pro está diseñada para todo lo relacionado con los sistemas NAS empresariales y brinda un índice de carga de trabajo de 300 TB/año. Viene con un rendimiento con capacidad de expansión y activo todos los días y a toda hora en los entornos de múltiples bahías de los sistemas NAS para profesionales creativos y pequeñas empresas.',
		weight: 1,
		brand: 'Seagate',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/disco_seagate_ironwolf_pro_10tb_35_sata-53527.html',
	},

	{
		name: 'Pad Mouse Sharkoon 1337 V2 355X255X14mm 100Grs',
		priceNormal: 1999,
		priceSpecial: 1599,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50759_800_image.jpg',
		description:
			'Superficie: Textil\nBase de goma antideslizante: ?\nCorte láser en los bordes: ?\nSuperficie repelente al agua: ?\nAltura: 1,4 mm\nPeso: 100 g\nDimensiones (L x An x Al): 355 x 255 x 1,4 mm\nCon el 1337 V2, hemos mejorado aún más nuestra alfombrilla de ratón más popular. Hemos revestido la superficie textil con un revestimiento hidrófugo y, además, todos los bordes han sido cortados con láser con precisión, evitando así cualquier deshilachado antiestético alrededor de la alfombra. Como todas las alfombrillas de ratón para juegos de la serie 1337, la V2 también tiene una parte inferior de goma completamente antideslizante y una superficie textil para unas propiedades de deslizamiento óptimas para todo tipo de sensor.\nUna base sólida para todos los propósitos. La alfombrilla para ratón para juegos 1337 V2 está disponible en los tamaños M, L, XL y XXL. La talla M tiene una longitud de 280 milímetros y una anchura de 195 milímetros, y está especialmente diseñada para su uso con dispositivos móviles como portátiles y tablets. La talla L, con una longitud de 355 milímetros y una anchura de 255 milímetros, cabe incluso sobre encimeras más pequeñas. El XL, con su longitud de 444 milímetros y su ancho de 355 milímetros, ofrecerá suficiente espacio para maniobras que deben ejecutarse en el frenesí del juego. Cualquiera que quiera cubrir casi todo su tablero de juego con una excelente superficie deslizante puede optar por la variante XXL con sus gigantescos 900 milímetros de largo y 400 milímetros de ancho. Con 1,4 milímetros para las variantes M y L y 2,4 milímetros para XL y XXL, las alfombrillas para ratón son convenientemente delgadas y de bajo perfil, además de robustas.\nJuego y trabajo sin problemas. El 1337 V2 mantiene una superficie textil probada y confiable, que no solo es robusta y duradera, sino que también ofrece un arrastre mínimo y una resistencia de arranque insignificante. Por lo tanto, la alfombrilla del mouse proporciona un deslizamiento excepcional sin importar qué tipo de sensor de mouse se esté utilizando. La parte inferior está hecha de goma estable, lo que evita que la alfombrilla del mouse se deslice inadvertidamente mientras se juega o se trabaja.\nBien protegido y fácil de limpiar. Además de sus óptimas propiedades de deslizamiento, la superficie textil tiene un revestimiento hidrófugo, que evita los daños provocados por las bebidas derramadas durante el juego agitado o por otros pequeños accidentes con líquidos. Además, el 1337 V2 se puede limpiar fácilmente de polvo y suciedad con agua corriente.\nBordes ordenados que no se deshilachan. Los bordes del 1337 V2 han sido cortados con absoluta precisión por láser. Esto evita efectivamente que se deshilache alrededor de la alfombrilla del mouse y mantiene su apariencia ordenada incluso después de un largo período de uso.\nHecho de manera óptima para el transporte. Gracias a sus materiales flexibles, el 1337 V2 se puede enrollar fácilmente cuando sea necesario. De este modo, la alfombrilla del ratón se puede almacenar cómodamente y acompañar a su propietario a fiestas LAN, eventos de deportes electrónicos o mientras trabaja fuera de la oficina.',
		weight: 130,
		brand: 'Sharkoon',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/pad_mouse_sharkoon_1337_v2_355x255x14mm_100grs-50759.html',
	},
	{
		name: 'EQUIPO TODO EN UNO HP',
		priceNormal: 110999,
		priceSpecial: 84099,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/2/42291_800_image.jpg',
		description:
			'Obtén todo lo que necesitas con el elegante PC Todo-en-Uno empresarial HP 205. Mantén tu trabajo y tu espacio organizados con esta poderosa, confiable y asequible Todo-en-Uno.\nAdministre con eficiencia su espacio de trabajo gracias a este diseño inteligente y delgado. El HP 205 es fácil de configurar y de usar; basta desempacar, colocar en el escritorio, conectar y empezar a trabajar.',
		weight: 1,
		brand: 'HP',
		category: 'all-in-one',
		descriptionLink:
			'https://delta.com.ar/catalog/product/view/id/11476/s/equipo_todo_en_uno_hp-42291/category/2159/',
	},
	{
		name: 'Gabinete Corsair Gamer 465X Rgb Tg White (Cc-9011189-Ww)',
		priceNormal: 26999,
		priceSpecial: 21999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51252_800_image.jpg',
		description:
			"Dimensiones de la caja\n467 mm x 216 mm x 455 mm\nLongitud máxima de GPU\n370 mm\nLongitud máxima de la fuente de alimentación\n180 mm\nAltura máxima del enfriador de la CPU\n170 mm\nRanuras de expansión\n7 + 2 verticales\nBahías de unidad de caja\n(x2) 3,5 pulgadas (x4) 2,5 pulgadas\nFactor de forma\nMid-Tower\nCaso con ventana\nVidrio templado\nGarantía de la caja\nDos años\nCorsair Link habilitado\nsí\nMaterial de la Caja\nAcero, vidrio templado\nCompatibilidad del radiador\n120 mm, 140 mm, 240 mm, 280 mm, 360 mm\nRefrigeradores líquidos Corsair compatibles\nH55, H60, H75, H80i, H90, H100i, H105, H110i, H115i, H150i\nFuente de alimentación de la caja\nATX (no incluido)\nPeso\n8 kg / 17,63 libras\nEncendiendo\nRGB\nBahías de unidad 3,5 '\n4\nBahías de unidad 2.5 '\n2",
		weight: 10010,
		brand: 'Corsair',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/gabinete_corsair_gamer_465x_rgb_tg_white_cc_9011189_ww-51252.html',
	},
	{
		name: 'Tablet Pcbox Live Pcb-T732 7 1Gb 16Gb',
		priceNormal: 11838,
		priceSpecial: 8799,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/6/46372_800_image.jpg',
		description:
			'Moderna y súper divertida, una Tablet que te hara disfrutar de lo que mas deseas.\nSistema Operativo: Android 9.0 Go..\nProcesador: MT8167..\nMemoria: 1 GB..\nAlmacenamiento: 16 GB..\nPantalla: Touch 7” resolución 1024x600 IPS..\nMicro SD hasta 128GB..\nCámara: Doble Cámara Frontal 0.3 MP/ Trasera 2MP..\nConexiones: Micro USB 2.0 / Audio Jack 3.5..\nBluetooth 4.0..\nLector de tarjetas..\nWifi..\nBatería: 2100 mAh..\nDimensiones: 188.4 x 108.2 x 10 mm..',
		weight: 1500,
		brand: 'Pcbox',
		category: 'tablets',
		descriptionLink:
			'https://delta.com.ar/tablet_pcbox_live_pcb_t732_7_1gb_16gb-46372.html',
	},
	{
		name: 'Gabinete Corsair Gamer Icue 465X Rgb (Cc-9011188-Ww)',
		priceNormal: 26999,
		priceSpecial: 21999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51820_800_image.jpg',
		description:
			"Dimensiones de la caja\n467 mm x 216 mm x 455 mm\nLongitud máxima de GPU\n370 mm\nLongitud máxima de la fuente de alimentación\n180 mm\nAltura máxima del enfriador de la CPU\n170 mm\nRanuras de expansión\n7 + 2 verticales\nBahías de unidad de caja\n(x2) 3,5 pulgadas (x4) 2,5 pulgadas\nFactor de forma\nMid-Tower\nCaso con ventana\nVidrio templado\nGarantía de la caja\nDos años\nCorsair Link habilitado\nsí\nMaterial de la Caja\nAcero, vidrio templado\nCompatibilidad del radiador\n120 mm, 140 mm, 240 mm, 280 mm, 360 mm\nRefrigeradores líquidos Corsair compatibles\nH55, H60, H75, H80i, H90, H100i, H105, H110i, H115i, H150i\nFuente de alimentación de la caja\nATX (no incluido)\nPeso\n8 kg / 17,63 libras\nEncendiendo\nRGB\nBahías de unidad 3,5 '\n4\nBahías de unidad 2.5 '\n2",
		weight: 10000,
		brand: 'Corsair',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/gabinete_corsair_gamer_icue_465x_rgb_cc_9011188_ww-51820.html',
	},
	{
		name: 'Pad Mouse Sharkoon 1337 V2 Xxl 900X400X24Mm 560Grs',
		priceNormal: 4799,
		priceSpecial: 3699,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/0/50761_800_image.jpg',
		description:
			'Con el 1337 V2, hemos mejorado aún más nuestra alfombrilla de ratón más popular. Hemos revestido la superficie textil con un revestimiento hidrófugo y, además, todos los bordes han sido cortados con láser con precisión, evitando así cualquier deshilachado antiestético alrededor de la alfombra. Como todas las alfombrillas de ratón para juegos de la serie 1337, la V2 también tiene una parte inferior de goma completamente antideslizante y una superficie textil para unas propiedades de deslizamiento óptimas para todo tipo de sensor.\nUna base sólida para todos los propósitos. La alfombrilla para ratón para juegos 1337 V2 está disponible en los tamaños M, L, XL y XXL. La talla M tiene una longitud de 280 milímetros y una anchura de 195 milímetros, y está especialmente diseñada para su uso con dispositivos móviles como portátiles y tablets. La talla L, con una longitud de 355 milímetros y una anchura de 255 milímetros, cabe incluso sobre encimeras más pequeñas. El XL, con su longitud de 444 milímetros y su ancho de 355 milímetros, ofrecerá suficiente espacio para maniobras que deben ejecutarse en el frenesí del juego. Cualquiera que quiera cubrir casi todo su tablero de juego con una excelente superficie deslizante puede optar por la variante XXL con sus gigantescos 900 milímetros de largo y 400 milímetros de ancho. Con 1,4 milímetros para las variantes M y L y 2,4 milímetros para XL y XXL, las alfombrillas para ratón son convenientemente delgadas y de bajo perfil, además de robustas.\nJuego y trabajo sin problemas. El 1337 V2 mantiene una superficie textil probada y confiable, que no solo es robusta y duradera, sino que también ofrece un arrastre mínimo y una resistencia de arranque insignificante. Por lo tanto, la alfombrilla del mouse proporciona un deslizamiento excepcional sin importar qué tipo de sensor de mouse se esté utilizando. La parte inferior está hecha de goma estable, lo que evita que la alfombrilla del mouse se deslice inadvertidamente mientras se juega o se trabaja.\nBien protegido y fácil de limpiar. Además de sus óptimas propiedades de deslizamiento, la superficie textil tiene un revestimiento hidrófugo, que evita los daños provocados por las bebidas derramadas durante el juego agitado o por otros pequeños accidentes con líquidos. Además, el 1337 V2 se puede limpiar fácilmente de polvo y suciedad con agua corriente.\nBordes ordenados que no se deshilachan. Los bordes del 1337 V2 han sido cortados con absoluta precisión por láser. Esto evita efectivamente que se deshilache alrededor de la alfombrilla del mouse y mantiene su apariencia ordenada incluso después de un largo período de uso.\nHecho de manera óptima para el transporte. Gracias a sus materiales flexibles, el 1337 V2 se puede enrollar fácilmente cuando sea necesario. De este modo, la alfombrilla del ratón se puede almacenar cómodamente y acompañar a su propietario a fiestas LAN, eventos de deportes electrónicos o mientras trabaja fuera de la oficina.\nSuperficie: Textil\nBase de goma antideslizante: ?\nCorte láser en los bordes: ?\nSuperficie repelente al agua: ?\nAltura: 2,4 mm\nPeso: 560 g\nDimensiones (L x An x Al): 900 x 400 x 2,4 mm',
		weight: 620,
		brand: 'Sharkoon',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/pad_mouse_sharkoon_1337_v2_xxl_900x400x24mm_560grs-50761.html',
	},
	{
		name: 'Gabinete Corsair Gamer 1000D (Cc-9011148-Ww)',
		priceNormal: 99999,
		priceSpecial: 84999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51253_800_image.jpg',
		description:
			"EL CHASIS DE PC SUPERTORRE DEFINITIVO\nLas líneas exteriores icónicas y limpias, los cuatro paneles de cristal templado ahumado y una iluminación RGB integrada perfectamente convierten el Obsidian 1000D en el chasis de la Obsidian Series más bonito hasta la fecha.\nTRANSMITIR Y JUGAR DE FORMA SIMULTÁNEA\nEl Obsidian 1000D tiene espacio para un sistema E-ATX completo y un Mini-ITX juntos, por lo que puede transmitir y jugar con la mayor fluidez con una única carcasa. Dos placas base, dos fuentes de alimentación, dos PC en un solo chasis.\nMUCHAS OPCIONES DE REFRIGERACIÓN\nHasta 18 montajes de ventilación* y espacio para un máximo de cuatro radiadores de 480 mm a la vez**\n307 mm (12,1”)\n693 mm (27,3”)\n697 mm (27,4”)\nCONFIGURACIÓN DE SERIE\nCONFIGURACIONES OPCIONALES\nLas bandejas adicionales se venden por separado\nCONFIGURACIÓN DE SERIE\nCONFIGURACIONES OPCIONALES\nLas bandejas adicionales se venden por separado\nDIMENSIONESVENTILADOR\nCAPACIDADRADIADOR\nCAPACIDAD\n*Los ventiladores se venden por separado\n**La configuración predeterminada es de dos radiadores frontales de 480 mm y uno superior de 420 mm\nCONTROL DE VENTILADORES E ILUMINACIÓN ELEGANTE INTEGRADOS\nEl controlador integrado de la iluminación y los ventiladores CORSAIR Commander PRO ofrece un control superior sobre prácticamente todos los aspectos del sistema, a través del software CORSAIR iCUE.\nDISEÑO DE TRES CÁMARAS\nMantener un PC 1000D organizado es muy sencillo con el compartimento de almacenamiento posterior de estilo «puerta francesa» incluido, la placa base E-ATX y la cubierta de la PSU y la bandeja para la placa base Mini-ITX con doble propósito.\nPANEL DELANTERO PREPARADO PARA EL FUTURO\nEl panel frontal con iluminación LED RGB incluye dos puertos USB 3.1 Gen-2 Type-C junto a cuatro puertos USB 3.0 para conexiones retrocompatibles y para conexiones futuras.\nUN EQUIPO MEJOR\nUn soporte giratorio para la GPU para montar la GPU en vertical o de forma estándar, así como varios puntos para encajar depósitos o bombas en todo el chasis, elementos que convierten el 1000D en el chasis de CORSAIR más flexible y modular hasta la fecha.\nBANDEJAS TELESCÓPICAS PARA RADIADOR\nInstale ventiladores y radiadores sin esfuerzo con las bandejas modulares de montaje del radiador sin herramientas.\nEL TAMAÑO IMPORTA\nEl 1000D de grandes dimensiones cuenta con espacio de almacenamiento para un máximo de cinco unidades HDD de 3,5” y seis SSD de 2,5”, cada una de ellas en su propio compartimento específico.\nControl inteligente. Posibilidades ilimitadas.\nEl software CORSAIR iCUE da vida a su chasis con una iluminación RGB dinámica sincronizada en todo el sistema, una velocidad personalizable en los ventiladores para silenciarlos y una supervisión avanzada del sistema.\nDimensiones de la caja\n800 mm x 505 mm x 800 mm\nLongitud máxima de GPU\n400 mm\nLongitud máxima de la fuente de alimentación\nATX - 225 mm, SFX - 140 mm\nAltura máxima del enfriador de la CPU\n180 mm\nRanuras de expansión\n10\nBahías de unidad de caja\n(x6) 2,5 (x5) 3,5\nFactor de forma\nSuper-torre\nCaso con ventana\nVidrio templado\nGarantía de la caja\nDos años\nCorsair Link habilitado\nsí\nMaterial de la Caja\nAcero, Aluminio, Vidrio templado\nCompatibilidad del radiador\n120 mm, 140 mm, 240 mm, 280 mm, 360 mm, 420 mm, 480 mm\nRefrigeradores líquidos Corsair compatibles\nH55, H60, H75, H80i, H90, H100i, H105, H110i, H115i, H150i\nFuente de alimentación de la caja\nATX (no incluido)\nPeso\n29,5 kg\nEncendiendo\nRGB\nBahías de unidad 3,5 '\n5\nBahías de unidad 2.5 '\n6",
		weight: 10010,
		brand: 'Corsair',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/gabinete_corsair_gamer_1000d_cc_9011148_ww-51253.html',
	},
	{
		name: 'Auricular Samsung Buds Sm-R180',
		priceNormal: 20999,
		priceSpecial: 16599,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/2/52077_800_image.jpg',
		description:
			'Presentamos los Galaxy Buds Live\nAuriculares diseñados para sintonizar cada momento. Gracias a su forma icónica y su diseño ergonómico se adaptan de forma natural al entorno; y su altavoz optimizado te permite disfrutar una mejor experiencia. Este sonido está hecho para tus oídos.\nLa primera Cancelación de ruido activa (ANC) de tipo abierto en los auriculares completamente inalámbricos Galaxy que suprime el ruido, pero mantiene lo que deseas escuchar del entorno. Reduce los sonidos de fondo sin descartar voces y anuncios, para que escuches más de lo que quieres. Solo basta con mantener presionado para encenderlo.\nUn asistente inteligente que te escucha\nBixby Voice wake up está listo para cuando sea que llames. Se activa con tu voz para que puedas controlar tu teléfono sin moverte. Gestiona tus llamadas, ajusta el volumen o consulta el clima cuando estás en movimiento. Encárgate de hablar y Bixby te escuchará\nLas palabras se escuchan nítidas y claras\nCon tres micrófonos integrados y la unidad de control por voz, obtendrás la mejor calidad de llamadas con estos auriculares completamente inalámbricos. La unidad de control por voz detecta el momento en el que mueves tu mandíbula y, a medida que vibra, los datos se convierten en señales de voz para brindar una calidad de sonido mejorada\nDura horas… y se queda para un acto final\nMantén el sonido activo en el trabajo, tus tiempos libres y durante mucho tiempo gracias a la batería de larga duración de los Galaxy Buds Live.\nHasta 6 horas\nDE FUNCIONAMIENTO ININTERRUMPIDO\nHasta 21 horas\nDE DURACIÓN CON ESTUCHE DE CARGA',
		weight: 1,
		brand: 'Samsung',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/auricular_samsung_buds_sm_r180-52077.html',
	},
	{
		name: 'Auricular CMic Corsair Virtuoso Wireless Se Espresso',
		priceNormal: 42999,
		priceSpecial: 34299,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/1/51819_800_image.jpg',
		description:
			'Los CORSAIR VIRTUOSO RGB Wireless SE ofrecen una experiencia de sonido de alta fidelidad y una comodidad continua gracias a las orejeras de espuma con memoria premium y una connectivity hiperrápida con tecnología SLIPSTREAM WIRELESS.\nEncontrar un minorista detalles DESCARGAS SOPORTE\nCalidad de sonido impecable\nCon los VIRTUOSO RGB Wireless podrá escucharlo todo, desde la pisada más fuerte hasta el tono bajo más profundo. Un par de transductores de neodimio de alta densidad de 50 mm ajustados con precisión ofrecen un rango de frecuencia de 20 Hz-40 000 Hz, el doble que casi todos los auriculares de juego.\nLa comodidad es la clave\nLas almohadillas de espuma viscoelástica premium se adaptan a la forma de su cabeza; además, la banda ligera ofrece una comodidad duradera y suave como una almohada para que pueda jugar durante horas.\nFabricación ligera premium\nLa construcción de aluminio mecanizado consigue que los VIRTUOSO RGB Wireless ofrezcan un diseño ligero, una fuerte durabilidad y la mayor comodidad en una combinación perfecta.\nTres formas de conexión\nLos VIRTUOSO RGB Wireless pueden conectarse a casi cualquier lugar, independientemente de dónde vaya a jugar.\nMicrófono extraíble\ncon calidad de transmisión\nEs, sencillamente, uno de los mejores micrófonos que hemos incluido en unos auriculares. El micrófono omnidireccional de gran ancho de banda de los VIRTUOSO RGB Wireless ofrece un amplio rango dinámico y una claridad vocal magnífica que rivaliza con los micrófonos independientes. Además, es completamente extraíble y cuenta con un anillo LED RGB que indica si el micrófono se oye o si está silenciado.\nMicrófono extraíble\ncon calidad de transmisión\nEl gran ancho de banda del micrófono, junto con la conexión hiperrápida de la tecnología SLIPSTREAM CORSAIR WIRELESS, aumenta drásticamente la respuesta de frecuencia a casi el doble de unos auriculares de juego inalámbricos normales. Esto significa que su voz se escuchará con más claridad, más precisión y más naturalidad cuando se comunique con sus amigos y compañeros de equipo.\nCaracterísticas avanzadas de los VIRTUOSO WIRELESS RGB SE\nCaracterísticas estándar Sueño y vigilia inteligentes Un acelerómetro interno apaga los auriculares automáticamente cuando se los quita y los vuelve a encender cuando se los pone. Sonido envolvente 7.1 Iluminación RGB Batería\nCaracterísticas exclusivas de los SE Construcción de aluminio mecanizado Los VIRTUOSO RGB Wireless SE suman unas placas de aluminio a los auriculares, un conector y un cabezal de micrófono de aluminio y detalles de aluminio al transmisor USB inalámbrico para refinar un poco más el estilo exclusivo de los auriculares en color gris acero.',
		weight: 250,
		brand: 'Corsair',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/auricular_cmic_corsair_virtuoso_wireless_se_espresso-51819.html',
	},
	{
		name: 'Auricular Philips Taph802bk00 Bt',
		priceNormal: 16629,
		priceSpecial: 12959,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/2/42147_800_image.jpg',
		description:
			'Donde sea que te lleve la semana. Estos auriculares inalámbricos supraaurales hacen que tu viaje sea más placentero con un sonido equilibrado y detallado, además de ofrecerte hasta 30 horas de tiempo de reproducción. Si necesitás más, la carga rápida te proporciona entre dos y seis horas de energía adicional.\nSemana a semana, estos auriculares están listos hasta para el viaje más exigente. Una sola carga tarda solo 1,5 horas y te ofrece 30 horas de reproducción o tiempo de conversación. Dos niveles de carga rápida (muy rápida y rápida) te ofrecen 2 o 6 horas adicionales de reproducción para seguir escuchando de lunes a viernes y aún más.\nLos controladores acústicos de neodimio perfectamente ajustados ofrecen graves profundos y frecuencias medias claras\nEstos auriculares inalámbricos incorporan almohadillas suaves que se pliegan perfectamente de dos formas. Podés plegarlos de forma plana, ideal para guardarlos en un cajón de tu oficina o en la funda de transporte incluida; o podés plegarlos hacia dentro, creando un paquete compacto que se adapta a bolsillos y bolsos. ',
		weight: 1,
		brand: 'Philips',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/auricular_philips_taph802bk00_bt-42147.html',
	},
	{
		name: 'Auricular Sony Wi-c200b Sport Bt Negro',
		priceNormal: 3999,
		priceSpecial: 3299,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/4/2/42120_800_image.jpg',
		description:
			'Disfruta de conexión inalámbrica con BLUETOOTH®\nDi adiós a los enredos de cables y a los adaptadores que se caen. Con la tecnología inalámbrica BLUETOOTH®, puedes conectar tu dispositivo sin cables y escuchar perfectamente y sin interrupciones.\n15 horas de duración de la batería\nCon hasta 15 horas de reproducción cuando están totalmente cargados, podrás escuchar tus listas de reproducción y podcasts favoritos todo el día.\nAlimentación con carga rápida\nCuando la batería se agota, una carga de solo 10 minutos te permite reproducir durante 60 minutos. De esta forma, aunque tengas prisa, pronto estarás listo para volver a disfrutar de la música. Si tienes más tiempo, puedes cargar la batería por completo en solo tres horas.\nTapones magnéticos para un transporte fácil\nCada tapón de auricular cuenta con un imán integrado para transportarlos y almacenarlos sin enredos.\nSuaves, flexibles y ligeros, los auriculares internos inalámbricos WI-C200 te permiten escuchar con comodidad en cualquier momento y lugar.\n¿Vas a llamar a un amigo desde el smartphone conectado? Toca el botón multifunción y podrás empezar a hablar. ¿Es hora de despedirse? Solo tienes que volver a pulsarlo para finalizar la llamada.\nConsulta la previsión meteorológica, infórmate de las últimas noticias y mucho más solo con tu voz. Solo tienes que tocar el botón multifunción dos veces para acceder al instante a Siri o al Asistente de Google. ',
		weight: 1,
		brand: 'Sony',
		category: 'accessories',
		descriptionLink:
			'https://delta.com.ar/auricular_sony_wi_c200b_sport_bt_negro-42120.html',
	},
	{
		name: 'Disco Seagate Ironwolf 12Tb 35 Sata',
		priceNormal: 109999,
		priceSpecial: 79999,
		img: 'https://delta.com.ar/pub/media/catalog/product/cache/9ad6f34536129571d4e291377abfd37f/5/3/53525_800_image.jpg',
		description:
			'La unidad IronWolf está diseñada para todo lo relacionado con los sistemas NAS. Acostúmbrese a un rendimiento robusto, listo para usar y con capacidad de expansión todos los días y a toda hora, que puede manejar entornos de múltiples bahías de los sistemas NAS con una amplia gama de capacidades.',
		weight: 1,
		brand: 'Seagate',
		category: 'components',
		descriptionLink:
			'https://delta.com.ar/disco_seagate_ironwolf_12tb_35_sata-53525.html',
	},
];

module.exports = {
	jsonProducts,
};
