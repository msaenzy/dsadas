import dentalImg from '../assets/images/dental_clinic_website_1786033556849.jpg';
import medicalSpaImg from '../assets/images/medical_spa_website_1786033572692.jpg';
import coffeeImg from '../assets/images/coffee_shop_website_1786033591739.jpg';
import consultingImg from '../assets/images/consulting_firm_website_1786033610774.jpg';

export type CategoryId = 'medico' | 'cafeteria' | 'consultoria' | 'mas' | 'todos';

export interface ProjectStat {
  label: string;
  value: string;
}

export interface CaseProject {
  id: string;
  title: string;
  category: 'medico' | 'cafeteria' | 'consultoria' | 'mas';
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  location: string;
  metricBadge: string;
  url: string;
  heroGradient: string;
  accentColor: string;
  tags: string[];
  objective: string;
  result: string;
  technologies: string[];
  challenge: string;
  solution: string;
  features: string[];
  stats: ProjectStat[];
  quote: string;
  author: string;
  authorRole: string;
  initials: string;
  demoUrl?: string;
}

export const CATEGORIES_CONFIG = [
  {
    id: 'medico' as const,
    label: 'Dental / Médico',
    iconName: 'Stethoscope',
    description: 'Clínicas dentales, consultorios médicos, estéticas y especialistas en salud.',
  },
  {
    id: 'cafeteria' as const,
    label: 'Cafeterías & Gastronomía',
    iconName: 'Coffee',
    description: 'Cafés de especialidad, bistro, panaderías artesanales y restaurantes.',
  },
  {
    id: 'consultoria' as const,
    label: 'Consultoría & Servicios',
    iconName: 'Briefcase',
    description: 'Estudios jurídicos, firmas contables, arquitectura e industrias B2B.',
  },
  {
    id: 'mas' as const,
    label: 'Más Categorías',
    iconName: 'Sparkles',
    description: 'Inmobiliaria, centros de fitness, tiendas online y marcas en crecimiento.',
  },
];

export const projectsData: CaseProject[] = [
  // ==========================================
  // 1. DENTAL / MÉDICO (CATEGORÍA POR DEFECTO)
  // ==========================================
  {
    id: 'medico-1',
    category: 'medico',
    categoryLabel: 'Dental / Médico',
    title: 'Clínica Dental OdontoSalud',
    subtitle: 'Landing Page Médica + Agendamiento Directo',
    description: 'Sitio web higiénico y moderno para clínica especializada en diseño de sonrisa, ortodoncia invisible e implantes dentales.',
    image: dentalImg,
    location: 'Guayaquil, Ecuador',
    metricBadge: '+185% Citas Nuevas',
    url: 'odontosalud.com.ec',
    heroGradient: 'from-[#4A6A8C]/20 via-sky-500/10 to-white',
    accentColor: '#4A6A8C',
    tags: ['Odontología Especializada', 'WhatsApp Citas', 'SEO Local Guayaquil', 'Antes y Después'],
    objective: 'Convertir visitas de búsquedas locales en pacientes agendados directamente por WhatsApp sin fricción.',
    result: 'Incremento del 185% en solicitudes de valoración dental gratuita y posicionamiento destacado en búsquedas de Guayaquil.',
    technologies: ['React 18', 'Tailwind CSS', 'WhatsApp Business API', 'Google Maps Places API', 'Vite'],
    challenge: 'Dependían de referencias de boca en boca y carecían de una plataforma web que transmitiera la higiene, tecnología de vanguardia e imagen profesional de sus instalaciones.',
    solution: 'Desarrollamos una Landing Page médica ultra limpia con botón directo de agendamiento a 1 clic, catálogo visual de especialidades, sección de casos clínicos reales y mapa interactivo GPS.',
    features: [
      'Agendamiento de citas prioritario vía WhatsApp en 1 solo clic',
      'Galería interactiva antes/después de estética dental',
      'Integración GPS con Waze y Google Maps para ubicación exacta',
      'Carga ultrarrápida (<1 seg) en redes celulares 4G/5G',
      'Testimonios reales y valoraciones de Google integradas'
    ],
    stats: [
      { label: 'Citas por WhatsApp', value: '+185%' },
      { label: 'Tiempo de Carga', value: '0.7 seg' },
      { label: 'Retorno Inversión', value: '< 12 días' }
    ],
    quote: 'Desde el primer día de lanzamiento, los pacientes nos contactan por WhatsApp con la decisión tomada. La landing transmite exactamente la limpieza y profesionalismo de nuestra clínica.',
    author: 'Dra. Mariela Castro',
    authorRole: 'Directora Médica · OdontoSalud Guayaquil',
    initials: 'MC'
  },
  {
    id: 'medico-2',
    category: 'medico',
    categoryLabel: 'Dental / Médico',
    title: 'Centro Dermatológico & Estético San Rafael',
    subtitle: 'Landing Page de Salud Estética & Láser',
    description: 'Portal de alta percepción para clínica dermatológica en Samborondón especializada en rejuvenecimiento facial y tratamientos láser.',
    image: medicalSpaImg,
    location: 'Samborondón, Ecuador',
    metricBadge: '+210% Consultas Premium',
    url: 'dermatologiasanrafael.ec',
    heroGradient: 'from-[#C5A059]/20 via-amber-500/10 to-white',
    accentColor: '#C5A059',
    tags: ['Dermatología & Láser', 'Atención Exclusiva', 'Catálogo de Tratamientos', 'Cotizador Online'],
    objective: 'Atraer pacientes de perfil premium interesados en tratamientos estéticos avanzados en el sector de Samborondón.',
    result: 'Captación de más de 80 nuevas pacientes mensuales para procedimientos láser de alto valor.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'WhatsApp Webhook', 'WebP Optimization'],
    challenge: 'Necesitaban un sitio elegante que reflejara el nivel de sus equipos médicos láser y justificara la tarifa premium de sus tratamientos.',
    solution: 'Diseñamos una landing page minimalista con paleta dorada y neutra, fichas interactivas por tipo de tratamiento y cotización pre-configurada.',
    features: [
      'Catálogo estructurado por tipo de tratamiento cutáneo y láser',
      'Formulario inteligente de solicitud de valoración personalizada',
      'Reseñas verificadas de pacientes con puntuación 5 estrellas',
      'Diseño 100% responsivo con experiencia de navegación fluida'
    ],
    stats: [
      { label: 'Consultas Estéticas', value: '+210%' },
      { label: 'Satisfacción Paciente', value: '10/10' },
      { label: 'Permanencia Web', value: '2.5 min' }
    ],
    quote: 'Captamos pacientes de alto perfil que buscan atención exclusiva. La elegancia visual y rapidez del sitio web marcaron una diferencia gigante frente a la competencia.',
    author: 'Dr. Roberto San Martín',
    authorRole: 'Especialista Dermatológico · Samborondón',
    initials: 'RS'
  },
  {
    id: 'medico-3',
    category: 'medico',
    categoryLabel: 'Dental / Médico',
    title: 'Consultorio Pediátrico Dr. Mendoza',
    subtitle: 'Landing Page Pediatría & Nutrición Infantil',
    description: 'Sitio accesible y cálido para atención pediátrica integral, control de niño sano y urgencias con contacto inmediato.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    location: 'Quito, Ecuador',
    metricBadge: '+150% Control Niño Sano',
    url: 'pediatriamendoza.ec',
    heroGradient: 'from-[#37526E]/20 via-blue-500/10 to-white',
    accentColor: '#37526E',
    tags: ['Pediatría Integrada', 'GPS Ubicación', 'Contacto Urgencias', 'Convenios Seguros'],
    objective: 'Proporcionar a los padres de familia una plataforma ágil para verificar convenios de seguros, horarios de atención y contacto de urgencias.',
    result: 'Aumento del 150% en agendamiento de controles periódicos y consultas pediátricas.',
    technologies: ['React', 'Tailwind CSS', 'Google Maps API', 'Lucide Icons'],
    challenge: 'Los padres requerían información clara sobre aseguradoras asociadas y acceso rápido a la ubicación del consultorio en Quito.',
    solution: 'Landing page con colores cálidos y confiables, mapa GPS integrado, desglose de seguros médicos y botón flotante de atención médica prioritaria.',
    features: [
      'Integración GPS inmediata a Google Maps y Waze',
      'Listado claro de convenios con seguro médico privado',
      'Botón emergente para urgencias de pediatría',
      'Estructura limpia con tipografía legible y amigable'
    ],
    stats: [
      { label: 'Citas de Control', value: '+150%' },
      { label: 'Rutas Consultadas', value: '+340' },
      { label: 'Calificación Google', value: '4.9 ★' }
    ],
    quote: 'A los padres les encanta poder abrir el mapa y escribirnos directamente. La página transmite toda la calidez y seguridad que un pediatra debe inspirar.',
    author: 'Dr. Fernando Mendoza',
    authorRole: 'Pediatra & Nutricionista Infantil · Quito',
    initials: 'FM'
  },
  {
    id: 'medico-4',
    category: 'medico',
    categoryLabel: 'Dental / Médico',
    title: 'Centro Oftalmológico Visión Integral',
    subtitle: 'Landing Page Oftalmología & Cirugía Láser',
    description: 'Plataforma especializada en salud visual, corrección de miopía, cataratas y diagnósticos computarizados.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    location: 'Cuenca, Ecuador',
    metricBadge: '+170% Evaluaciones Visuales',
    url: 'visionintegral.ec',
    heroGradient: 'from-teal-500/20 via-sky-500/10 to-white',
    accentColor: '#0D9488',
    tags: ['Oftalmología Láser', 'Diagnóstico Digital', 'Reserva Online', 'Exámenes de Vista'],
    objective: 'Promocionar cirugías de corrección visual láser y evaluaciones oftalmológicas completas.',
    result: 'Más de 120 evaluaciones de vista agendadas en su primer mes de funcionamiento digital.',
    technologies: ['React', 'Tailwind CSS', 'WhatsApp Business API', 'Vite'],
    challenge: 'Explicar de forma sencilla procedimientos quirúrgicos complejos para perder el miedo y fomentar la consulta evaluativa.',
    solution: 'Sección didáctica con explicaciones paso a paso, testimonios en video y sistema de agendamiento simplificado.',
    features: [
      'Simulador de procedimientos láser explicativo',
      'Formulario interactivo de test preliminar de visión',
      'Agendamiento directo con médicos cirujanos',
      'Sección de preguntas frecuentes de pacientes'
    ],
    stats: [
      { label: 'Evaluaciones Visuales', value: '+170%' },
      { label: 'Cirugías Programadas', value: '+45' },
      { label: 'Carga de Página', value: '0.8 seg' }
    ],
    quote: 'Nuestros pacientes llegan informados y tranquilos. La página logró simplificar temas médicos complejos en una experiencia confiable.',
    author: 'Dra. Andrea Morales',
    authorRole: 'Cirujana Oftalmóloga · Cuenca',
    initials: 'AM'
  },

  // ==========================================
  // 2. CAFETERÍAS & GASTRONOMÍA
  // ==========================================
  {
    id: 'cafeteria-1',
    category: 'cafeteria',
    categoryLabel: 'Cafetería & Gastronomía',
    title: 'Café & Tostaduría Manta Bay',
    subtitle: 'Landing Page + Menú QR Interactivo',
    description: 'Experiencia gastronómica digital para cafetería de especialidad con menú interactivo y venta de café en grano a nivel nacional.',
    image: coffeeImg,
    location: 'Manta, Manabí',
    metricBadge: '+230% Pedidos Menú QR',
    url: 'cafemantabay.com.ec',
    heroGradient: 'from-[#C5A059]/25 via-amber-600/10 to-white',
    accentColor: '#C5A059',
    tags: ['Café de Especialidad', 'Menú QR', 'Venta en Grano', 'Envíos Ecuador'],
    objective: 'Sustituir menús impresos costosos y habilitar un canal de ventas online para café empacado en grano a todo Ecuador.',
    result: 'Aumento del 230% en pedidos desde la mesa y más de 150 fundas de café enviadas mensualmente a Quito y Guayaquil.',
    technologies: ['React', 'Tailwind CSS', 'QR Code Generator', 'WhatsApp Commerce', 'Vite'],
    challenge: 'Ahorrar costos de reimpresión de cartas de menú por cambios de temporada y expandir la marca fuera de Manabí.',
    solution: 'Landing page gastronómica con Menú QR responsivo en tiempo real y módulo de pedido rápido para fundas de café en grano.',
    features: [
      'Menú digital interactivo por categorías accesible por código QR en mesa',
      'Sistema de pedidos de café empacado a todo el país',
      'Fichas de origen del grano (Loja, Pichincha, Manabí)',
      'Ahorro total en costos de reimpresión de cartas'
    ],
    stats: [
      { label: 'Pedidos por QR', value: '+230%' },
      { label: 'Ventas Café Grano', value: '+160%' },
      { label: 'Ahorro Menú Papel', value: '100%' }
    ],
    quote: 'Los clientes escanean el QR en mesa y piden al instante. Además vendemos nuestro café tostado a clientes de todo el país desde la web.',
    author: 'Andrés Villamar',
    authorRole: 'Fundador & Master Barista · Manta Bay',
    initials: 'AV'
  },
  {
    id: 'cafeteria-2',
    category: 'cafeteria',
    categoryLabel: 'Cafetería & Gastronomía',
    title: 'Panadería Artesanal La Porteña',
    subtitle: 'Landing Page Bistro & Reservas de Brunch',
    description: 'Portal gastronómico para panadería de masa madre y servicio de brunch con reserva instantánea de mesas.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    location: 'Cuenca, Ecuador',
    metricBadge: '+175% Reservas Brunch',
    url: 'laportena.ec',
    heroGradient: 'from-[#4A6A8C]/20 via-amber-500/10 to-white',
    accentColor: '#4A6A8C',
    tags: ['Masa Madre', 'Reserva de Mesas', 'Brunch Cuenca', 'Promociones'],
    objective: 'Maximizar el flujo de clientes durante fines de semana para el servicio de brunch artesanal.',
    result: 'Ocupación del 100% en mesas de brunch sábados y domingos.',
    technologies: ['React', 'Tailwind CSS', 'WhatsApp Business API'],
    challenge: 'Evitar filas largas en la entrada coordinando reservas de mesas previas sin complicaciones.',
    solution: 'Landing page con fotografía de alta resolución de panadería, mapa del centro histórico de Cuenca y motor de reservas por WhatsApp.',
    features: [
      'Sistema ágil de reserva de mesas por WhatsApp con confirmación',
      'Galería gastronómica de productos de masa madre',
      'Promociones semanales y combos para grupos',
      'Ubicación exacta con referencias turísticas de Cuenca'
    ],
    stats: [
      { label: 'Reservas Brunch', value: '+175%' },
      { label: 'Llenado Fin de Semana', value: '100%' },
      { label: 'Clics WhatsApp', value: '480+/mes' }
    ],
    quote: 'Llenamos los desayunos del fin de semana. El diseño resalta el ambiente cálido de nuestro bistro y la frescura de nuestros panes.',
    author: 'Sofía Carrión',
    authorRole: 'Gerente Operativa · La Porteña Cuenca',
    initials: 'SC'
  },

  // ==========================================
  // 3. CONSULTORÍA & SERVICIOS PROFESIONALES
  // ==========================================
  {
    id: 'consultoria-1',
    category: 'consultoria',
    categoryLabel: 'Consultoría & Servicios',
    title: 'Estudio Jurídico Valdivia & Asociados',
    subtitle: 'Landing Page Corporativa & Autoridad Legal',
    description: 'Sitio institucional para firma de abogados especializada en derecho corporativo, laboral y consultoría tributaria.',
    image: consultingImg,
    location: 'Quito, Ecuador',
    metricBadge: '+140% Solicitudes B2B',
    url: 'valdiviaconsultores.ec',
    heroGradient: 'from-[#37526E]/20 via-slate-700/10 to-white',
    accentColor: '#37526E',
    tags: ['Derecho Corporativo', 'Perfil Abogados', 'Formulario Cotización', 'Respaldo B2B'],
    objective: 'Proyectar máxima solidez y autoridad institucional para captar corporaciones e industrias de Quito y Guayaquil.',
    result: 'Generación de 25+ solicitudes de auditorías y asesorías legales B2B al mes.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Formspree API'],
    challenge: 'Diferenciarse de firmas tradicionales mediante una imagen digital moderna, confiable y de respuesta inmediata.',
    solution: 'Landing page sobria y elegante con perfiles de socios senior, desglose de áreas de práctica legal y formulario de cotización B2B.',
    features: [
      'Estructura clara de servicios corporativos y contables',
      'Perfil profesional con currículum de abogados especialistas',
      'Formulario estructurado para solicitudes de cotización',
      'Descarga de brochure corporativo institucional'
    ],
    stats: [
      { label: 'Contratos B2B', value: '+140%' },
      { label: 'Reputación Digital', value: 'Alta Gama' },
      { label: 'Tiempo Cierre', value: 'Inmediato' }
    ],
    quote: 'La landing page convirtió visitas en clientes corporativos recurrentes. Es nuestra mejor carta de presentación ante cualquier directorio empresarial.',
    author: 'Dr. Alejandro Valdivia',
    authorRole: 'Socio Principal · Valdivia & Asociados',
    initials: 'AV'
  },
  {
    id: 'consultoria-2',
    category: 'consultoria',
    categoryLabel: 'Consultoría & Servicios',
    title: 'Suministros Industriales Rivas & Hnos',
    subtitle: 'Landing Page B2B & Catálogo Rápido',
    description: 'Plataforma para distribuidora de herramientas, equipos de seguridad y suministros mayoristas para el sector industrial.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    location: 'Durán / Guayaquil',
    metricBadge: '+220% Cotizaciones B2B',
    url: 'rivassuministros.com.ec',
    heroGradient: 'from-[#4A6A8C]/20 via-slate-800/10 to-white',
    accentColor: '#4A6A8C',
    tags: ['Suministros Industriales', 'Vendedores WhatsApp', 'Ubicación Bodegas', 'Atención B2B'],
    objective: 'Captar constructoras e industrias en Guayaquil y Durán que buscan proveedores mayoristas confiables.',
    result: 'Incoporación de 35+ nuevas empresas clientes cada mes.',
    technologies: ['React', 'Tailwind CSS', 'WhatsApp Multi-Agent API'],
    challenge: 'Canalizar solicitudes de cotizaciones pesadas hacia los asesores comerciales correspondientes de manera rápida.',
    solution: 'Landing page industrial directa con enlace por departamento de ventas y cotizador mayorista por WhatsApp.',
    features: [
      'Catálogo por familias de materiales y herramientas',
      'Acceso directo a ejecutivos por área técnica',
      'Ubicación GPS de matriz y bodegas de distribución',
      'Formulario para solicitud de crédito comercial'
    ],
    stats: [
      { label: 'Cotizaciones B2B', value: '+220%' },
      { label: 'Constructoras', value: '+35/mes' },
      { label: 'Conversión', value: 'Alta' }
    ],
    quote: 'Las constructoras nos encuentran en Google y nos piden cotizaciones masivas a WhatsApp. La inversión se recuperó en el primer contrato.',
    author: 'Jorge Rivas',
    authorRole: 'Gerente Comercial · Suministros Rivas',
    initials: 'JR'
  },

  // ==========================================
  // 4. MÁS CATEGORÍAS (INMOBILIARIA, RETAIL, FITNESS)
  // ==========================================
  {
    id: 'mas-1',
    category: 'mas',
    categoryLabel: 'Inmobiliaria & Arquitectura',
    title: 'Estudio de Arquitectura Alaia Studio',
    subtitle: 'Portafolio Visual & Proyectos Residenciales',
    description: 'Showcase para firma de arquitectura de lujo, diseño de interiores y renderizado 3D fotorrealista.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    location: 'Samborondón / Quito',
    metricBadge: '+165% Consultas Proyectos',
    url: 'alaiaarquitectura.ec',
    heroGradient: 'from-[#2D3436]/20 via-emerald-800/10 to-white',
    accentColor: '#2D3436',
    tags: ['Arquitectura Residencial', 'Renders 3D', 'Portafolio Visual', 'Diseño Lujo'],
    objective: 'Exhibir obras residenciales exclusivas sin ralentizar la carga en dispositivos móviles.',
    result: 'Captación de 4 nuevos proyectos de diseño arquitectónico completo en urbanizaciones privadas.',
    technologies: ['React', 'Tailwind CSS', 'Lazy Image Loading', 'Vite'],
    challenge: 'Manejar imágenes en altísima resolución sin perjudicar la velocidad de navegación en teléfonos celulares.',
    solution: 'Galería con carga inteligente progresiva, navegación tipo catálogo de lujo y cotizador de planos residenciales.',
    features: [
      'Galería fotográfica interactiva con respuesta ultrarrápida',
      'Carga optimizada para conexiones móviles 4G/5G',
      'Formulario de cotización de planos y construcción',
      'Testimonios de propietarios de viviendas exclusivas'
    ],
    stats: [
      { label: 'Proyectos Nuevos', value: '+165%' },
      { label: 'Score Velocidad', value: '99/100' },
      { label: 'Percepción Marca', value: 'Lujo' }
    ],
    quote: 'Un portafolio limpio donde la calidad de nuestras obras habla por sí sola. La experiencia de navegación en el celular es impecable.',
    author: 'Arq. Lucía Paredes',
    authorRole: 'Directora de Arquitectura · Alaia Studio',
    initials: 'LP'
  },
  {
    id: 'mas-2',
    category: 'mas',
    categoryLabel: 'Fitness & Salud',
    title: 'Centro de Entrenamiento Apex Fitness',
    subtitle: 'Landing Page Gimnasio & Pases de Prueba',
    description: 'Plataforma para gimnasio boutique de entrenamiento funcional, crossfit y asesoría nutricional.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    location: 'Guayaquil, Ecuador',
    metricBadge: '+250% Pases VIP Captados',
    url: 'apexfitness.ec',
    heroGradient: 'from-orange-500/20 via-amber-500/10 to-white',
    accentColor: '#EA580C',
    tags: ['Gimnasio Boutique', 'Pase VIP Gratis', 'Crossfit', 'Planes Nutrición'],
    objective: 'Captar nuevos socios ofreciendo un pase de prueba gratuito de 3 días a través de la landing page.',
    result: 'Más de 180 pases VIP reclamados por mes con tasa de conversión a membresía del 42%.',
    technologies: ['React', 'Tailwind CSS', 'WhatsApp Leads API'],
    challenge: 'Convertir el tráfico de redes sociales en visitas físicas reales al gimnasio.',
    solution: 'Landing page energética con contador de cupos limitados, tabla de horarios de clases y reclamo instantáneo de pase VIP.',
    features: [
      'Formulario express para reclamo de Pase VIP 3 Días',
      'Grilla interactiva de horarios de clases grupales',
      'Perfiles de entrenadores certificados',
      'Ubicación GPS y parqueo disponible'
    ],
    stats: [
      { label: 'Pases VIP Reclamados', value: '+250%' },
      { label: 'Conversión a Socio', value: '42%' },
      { label: 'Crecimiento Membresías', value: '+95' }
    ],
    quote: 'Nuestras clases grupales están a reventar. La landing convirtió nuestros anuncios de Instagram en inscripciones reales.',
    author: 'Carlos Andrade',
    authorRole: 'Head Coach & Co-Fundador · Apex Fitness',
    initials: 'CA'
  }
];
