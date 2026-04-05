import type { Translations } from '../types';

const es: Translations = {
  nav: {
    products: 'Productos',
    support: 'Soporte',
    langLabel: 'Idioma',
  },
  footer: {
    tagline: 'Herramientas para el Mac que realmente usas.',
    productsHeading: 'Productos',
    companyHeading: 'Empresa',
    support: 'Soporte',
    privacy: 'Política de privacidad',
    madeOnMac: 'Hecho en un Mac.',
    appStoreBlurb: 'Disponible exclusivamente en Mac App Store',
  },
  home: {
    hero: {
      studioLabel: 'smooth-mac',
      headline: 'Herramientas para el Mac\nque realmente usas.',
      subheadline: 'Dos aplicaciones. Hechas con cuidado. Discretamente útiles.',
    },
    showcase: {
      label: 'Nuestras apps',
      headline: 'Dos apps. Un estudio.',
      subtext: 'Cada una resuelve un problema real en macOS — nada más, nada menos.',
    },
    values: [
      {
        title: 'Diseñada para macOS',
        body: 'No es un port de Windows ni iOS. Construida para Mac desde el principio — respetando sus convenciones, atajos y usuarios.',
      },
      {
        title: 'Sin suscripciones',
        body: 'Compra única. Tuya para siempre. Actualizaciones incluidas. Creemos que el buen software debe ser algo que poseas.',
      },
      {
        title: 'Privacidad primero',
        body: 'Sin analíticas. Sin cuentas. Ningún dato sale de tu dispositivo. Lo que haces con tu Mac es solo tu asunto.',
      },
    ],
    cta: {
      appStoreText: 'Disponible exclusivamente en Mac App Store',
      requiresText: 'Requiere macOS 13 Ventura o posterior · Binario universal (Apple Silicon + Intel)',
    },
    seo: {
      title: 'smooth-mac — Utilidades para macOS, cuidadosamente hechas',
      description:
        'smooth-mac crea utilidades enfocadas para macOS. SmoothSnap para gestión de ventanas. SmoothPeek para previsualizar ventanas desde el Dock.',
    },
  },
  product: {
    downloadButton: 'Descargar en App Store',
    seeFeatures: 'Ver todas las funciones ↓',
    learnMore: 'Saber más',
    appStore: 'App Store',
    featuresLabel: 'Funciones',
    featuresHeadline: ['Todo lo que necesitas.', 'Nada que no necesites.'],
    onePurchase: 'Compra única',
  },
  products: {
    smoothsnap: {
      tagline: 'Ajuste de ventanas que se siente nativo.',
      description: 'Ajuste de ventanas para macOS — rápido, controlado por teclado e invisible hasta que lo necesitas.',
      longDescription:
        'macOS nunca tuvo un ajuste de ventanas que se sintiera bien. SmoothSnap llena ese vacío sin luchar contra el sistema operativo. Funciona con tus atajos de teclado existentes, se mantiene completamente fuera del camino y se comporta exactamente como esperarías de una app que podría haber hecho Apple.',
      features: [
        { title: 'Primero el teclado', description: 'Ajusta ventanas con atajos que se sienten naturales — sin necesidad de nueva memoria muscular.' },
        { title: 'Compatible con Stage Manager', description: 'Funciona perfectamente junto a Stage Manager y múltiples pantallas.' },
        { title: 'Consciente del notch', description: 'Las ventanas se ajustan correctamente alrededor del notch del MacBook sin superposición.' },
        { title: 'Sin icono en la barra de menús', description: 'Sin icono en tu barra de menús, sin configuraciones innecesarias. Solo ajuste.' },
        { title: 'Hecho para macOS', description: 'No es un port de Windows. Diseñado desde cero para cómo funciona realmente macOS.' },
        { title: 'Respuesta instantánea', description: 'Tiempo de respuesta inferior a 16ms. El ajuste ocurre en el momento en que lo deseas.' },
      ],
      philosophy:
        'macOS está bellamente diseñado en casi todos los aspectos.\nLa gestión de ventanas siempre ha sido la excepción silenciosa.\n\nCada solución o bien lucha contra el sistema operativo o incluye una docena de funciones que nadie pidió. SmoothSnap existe porque una cosa debería simplemente funcionar: mover tus ventanas exactamente donde quieres, de inmediato, sin pensar en ello.\n\nNada más. Nada menos. Solo el Mac, funcionando como debería.',
      protocol: {
        requirement: 'macOS 13 Ventura o posterior',
        architecture: 'Binario universal (Apple Silicon + Intel)',
        permissions: ['Accesibilidad'],
        permissionPurpose:
          'SmoothSnap necesita el permiso de Accesibilidad para mover y cambiar el tamaño de las ventanas de otras apps. Es el único permiso que solicita. Ningún dato sale de tu dispositivo.',
        price: '$4.99 · Compra única · Sin suscripción',
        distribution: 'Mac App Store',
      },
      ctaHeadline: '¿Listo para ajustar?',
      ctaSubtext: 'Compra única',
      crossSell: 'Échale un vistazo también a',
      crossSellTagline: 'Mira antes de cambiar.',
      seo: {
        title: 'SmoothSnap — Ajuste de ventanas para macOS',
        description: 'Ajuste de ventanas para macOS — rápido, controlado por teclado e invisible hasta que lo necesitas.',
      },
      screenshotAlts: ['SmoothSnap ajustando ventanas', 'SmoothSnap con múltiples pantallas'],
    },
    smoothpeek: {
      tagline: 'Mira antes de cambiar.',
      description: 'Pasa el cursor sobre cualquier icono del Dock para previsualizar al instante todas las ventanas abiertas — luego haz clic para cambiar con precisión.',
      longDescription:
        'Hacer clic en la ventana equivocada desperdicia más tiempo del que crees. SmoothPeek muestra vistas previas en vivo de cada ventana abierta en el momento en que pasas el cursor sobre un icono del Dock — para que siempre llegues exactamente a donde querías.',
      features: [
        { title: 'Vista previa instantánea del Dock', description: 'Pasa el cursor sobre cualquier icono del Dock para ver miniaturas en vivo de todas las ventanas abiertas — sin necesidad de hacer clic.' },
        { title: 'Todas las ventanas a la vez', description: 'Todas las ventanas abiertas de una app, mostradas una al lado de la otra. Encuentra la correcta de un vistazo.' },
        {
          title: 'Foco con un clic',
          description: 'Toca cualquier miniatura para traer esa ventana al frente. Sin buscar entre cambiadores de apps.',
        },
        {
          title: 'Bellamente nativo',
          description: 'Animaciones de desvanecimiento suaves y un diseño visual que parece pertenecer a macOS.',
        },
        { title: 'Respuesta en 100ms', description: 'Las vistas previas aparecen en el instante en que pasas el cursor. Sin carga, sin retraso, sin indicador.' },
        { title: 'Compatible con teclado', description: 'Muévete entre ventanas con Tab y presiona Enter para cambiar. Funciona completamente sin ratón.' },
      ],
      philosophy:
        'Construimos SmoothPeek porque hacer clic en la ventana incorrecta es una fricción que se repite decenas de veces al día. macOS siempre ha tenido un Dock brillante — pero no muestra lo que hay dentro. SmoothPeek llena ese hueco con un simple hover. Una mirada. Un clic. La ventana correcta, siempre. Las buenas herramientas son las que dejas de notar.',
      protocol: {
        requirement: 'macOS 14 Sonoma o posterior',
        architecture: 'Binario universal (Apple Silicon + Intel)',
        permissions: ['Accesibilidad', 'Grabación de pantalla'],
        permissionPurpose:
          'El permiso de Accesibilidad detecta eventos de hover en los iconos del Dock. La Grabación de pantalla captura miniaturas de ventanas localmente. Ningún dato se transmite ni almacena.',
        price: '$2.99 · Compra única · Sin suscripción',
        distribution: 'Mac App Store',
      },
      ctaHeadline: 'Tu Dock, mejorado.',
      ctaSubtext: 'Compra única',
      crossSell: 'Échale un vistazo también a',
      crossSellTagline: 'Ajuste de ventanas que se siente nativo.',
      seo: {
        title: 'SmoothPeek — Vistas previas de ventanas desde el Dock',
        description: 'Pasa el cursor sobre cualquier icono del Dock para previsualizar instantáneamente todas las ventanas abiertas. Haz clic para cambiar con precisión. Requiere macOS 14 Sonoma o posterior.',
      },
      screenshotAlts: ['SmoothPeek mostrando vistas previas de ventanas al pasar el cursor', 'SmoothPeek panel de vista previa de múltiples ventanas'],
    },
  },
  support: {
    headline: 'Soporte',
    subheadline: '¿Tienes problemas? Estamos aquí para ayudar.',
    smoothsnap: {
      faqs: [
        {
          q: '¿Qué versiones de macOS son compatibles?',
          a: 'SmoothSnap requiere macOS 13 Ventura o posterior. Funciona de forma nativa tanto en Macs con Apple Silicon como con Intel.',
        },
        {
          q: '¿Funciona con Stage Manager?',
          a: 'Sí. SmoothSnap es completamente compatible con Stage Manager y funciona junto a él sin conflictos.',
        },
        {
          q: '¿Puedo personalizar los atajos de teclado?',
          a: 'Sí — abre las preferencias de SmoothSnap para personalizar cualquier atajo de ajuste.',
        },
      ],
    },
    smoothpeek: {
      faqs: [
        {
          q: '¿Cómo funciona SmoothPeek?',
          a: 'Cuando pasas el cursor sobre un icono del Dock, SmoothPeek muestra un panel flotante con miniaturas en vivo de todas las ventanas abiertas de esa app. Haz clic en cualquier miniatura para cambiar a esa ventana al instante.',
        },
        {
          q: '¿Qué versiones de macOS son compatibles?',
          a: 'SmoothPeek requiere macOS 14 Sonoma o posterior. Funciona de forma nativa tanto en Macs con Apple Silicon como con Intel.',
        },
        {
          q: '¿Por qué SmoothPeek necesita permisos de Accesibilidad y Grabación de pantalla?',
          a: 'El permiso de Accesibilidad se usa para detectar eventos de cursor en los iconos del Dock. La Grabación de pantalla se usa para capturar miniaturas en vivo de ventanas en tu dispositivo local. No se transmiten ni almacenan datos — todo queda en tu Mac.',
        },
      ],
    },
    contact: {
      headline: '¿Aún necesitas ayuda?',
      subtext: 'Escríbenos y te responderemos en un día hábil.',
      emailLabel: 'support@smoothmac.app',
    },
    seo: {
      title: 'Soporte — smooth-mac',
      description: 'Obtén ayuda con SmoothSnap o SmoothPeek. Preguntas frecuentes, información de compatibilidad y contacto.',
    },
  },
  privacy: {
    headline: 'Política de privacidad',
    shortVersion: 'La versión corta: las apps de smooth-mac no recopilan datos personales. Nada sale de tu dispositivo.',
    sections: [
      {
        title: 'Recopilación de datos',
        body: 'Las apps de smooth-mac (SmoothSnap, SmoothPeek) no recopilan, transmiten ni almacenan datos personales. No hay cuentas, no hay analíticas y no hay telemetría.',
      },
      {
        title: 'Este sitio web',
        body: 'smoothmac.app usa Cloudflare Web Analytics — una solución de análisis que preserva la privacidad, no requiere cookies y no recopila información de identificación personal. Sin píxeles de seguimiento, sin scripts de terceros.',
      },
      {
        title: 'Permisos del sistema',
        body: 'SmoothPeek solicita permisos de Accesibilidad y Grabación de pantalla únicamente para detectar qué app está activa en tu Dock y capturar vistas previas de ventanas en tu dispositivo local. Ningún dato obtenido a través de estos permisos se transmite, almacena ni comparte. Puedes revocar estos permisos en cualquier momento desde Configuración del sistema > Privacidad y seguridad.',
      },
      {
        title: 'App Store',
        body: 'Las compras son procesadas por Apple a través de Mac App Store. La política de privacidad de Apple rige cualquier dato recopilado durante la compra.',
      },
      {
        title: 'Contacto',
        body: '¿Preguntas? Escríbenos a',
      },
    ],
    lastUpdated: 'Última actualización: marzo de 2026',
    seo: {
      title: 'Política de privacidad — smooth-mac',
      description: 'Política de privacidad de smooth-mac. No recopilamos datos personales.',
    },
  },
  notFound: {
    headline: 'Página no encontrada.',
    subheadline: 'Esa página no existe — pero nuestras apps sí.',
    goHome: 'Ir a inicio',
  },
};

export default es;
