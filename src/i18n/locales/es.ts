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
        'smooth-mac crea utilidades enfocadas para macOS. SmoothSnap para gestión de ventanas. SmoothPeek para previsualizar archivos.',
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
      ctaHeadline: '¿Listo para ajustar?',
      ctaSubtext: 'Compra única',
      crossSell: 'Échale un vistazo también a',
      crossSellTagline: 'Quick Look, elevado.',
      seo: {
        title: 'SmoothSnap — Ajuste de ventanas para macOS',
        description: 'Ajuste de ventanas para macOS — rápido, controlado por teclado e invisible hasta que lo necesitas.',
      },
      screenshotAlts: ['SmoothSnap ajustando ventanas', 'SmoothSnap con múltiples pantallas'],
    },
    smoothpeek: {
      tagline: 'Quick Look, elevado.',
      description: 'SmoothPeek le da a Quick Look una segunda opinión — más tipos de archivos, navegación más suave.',
      longDescription:
        'Pasas el cursor sobre un archivo y quieres saber qué hay dentro — al instante. SmoothPeek extiende Quick Look con soporte para más tipos de archivos, navegación fluida entre archivos y una experiencia tan nativa que olvidarás que es una app de terceros.',
      features: [
        { title: 'Más tipos de archivo', description: 'Previsualiza formatos que Quick Look ignora — archivos de código, archivos comprimidos, fuentes y más.' },
        { title: 'Navega sin cerrar', description: 'Muévete entre archivos en una carpeta mientras la previsualización sigue abierta.' },
        {
          title: 'Funciona donde Quick Look funciona',
          description: 'Finder, diálogos de apertura, escritorio — donde sea que puedas usar Quick Look, SmoothPeek lo mejora.',
        },
        {
          title: 'Se siente completamente nativo',
          description: 'Usa el mismo lenguaje visual que Quick Look — sin transiciones bruscas ni interfaz ajena.',
        },
        { title: 'Previsualización instantánea', description: 'Sin indicadores de carga. Los archivos aparecen en el momento en que presionas Espacio.' },
        { title: 'Flujo de trabajo solo con teclado', description: 'Navega, cierra y abre archivos completamente desde el teclado.' },
      ],
      ctaHeadline: 'Mira qué hay dentro.',
      ctaSubtext: 'Compra única',
      crossSell: 'Échale un vistazo también a',
      crossSellTagline: 'Ajuste de ventanas que se siente nativo.',
      seo: {
        title: 'SmoothPeek — Quick Look elevado para macOS',
        description: 'SmoothPeek le da a Quick Look una segunda opinión — más tipos de archivos, navegación más suave.',
      },
      screenshotAlts: ['SmoothPeek previsualizando un archivo', 'SmoothPeek navegando archivos'],
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
          q: '¿Qué tipos de archivo añade SmoothPeek?',
          a: 'SmoothPeek añade soporte de previsualización para archivos de código, markdown, archivos comprimidos, fuentes y más — la lista completa está disponible en la app.',
        },
        {
          q: '¿Reemplaza Quick Look?',
          a: 'SmoothPeek extiende Quick Look — no lo reemplaza. Sigues usando la tecla Espacio de forma normal.',
        },
        {
          q: '¿Es compatible con gestores de archivos de terceros?',
          a: 'SmoothPeek funciona donde sea que funcione Quick Look, incluyendo alternativas a Finder de terceros que usan la API de Quick Look.',
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
