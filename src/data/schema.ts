/* ============================================================
   PODIUMEX — Datos canónicos + constructores de Schema.org
   ------------------------------------------------------------
   Fuente ÚNICA de verdad para todo el structured data del sitio.
   - NAP (nombre, dirección, teléfono) consistente en cada página.
   - LocalBusiness + WebSite con @id reutilizable por @id-reference.
   - Constructores que devuelven STRING (JSON) listos para
     <script type="application/ld+json" set:html={...}>.
   ============================================================ */

export const SITE = {
  name: 'PODIUMEX',
  url: 'https://podiumex.com',
  logo: 'https://podiumex.com/img/podiumex.webp',
  image: 'https://podiumex.com/img/img-general/coleccion-podiums-profesionales-variados.webp',
  phone: '+525516567973',
  phoneDisplay: '55 1656 7973',
  email: 'podiumexmx@gmail.com',
  foundingDate: '2020',
  slogan: 'Renta y venta de podiums profesionales en México',
  description:
    'Especialistas en renta y venta de podiums profesionales en México: acrílico, madera y combinados, con entrega en 24 h, personalización con grabado láser y garantía escrita.',
  address: {
    street: 'Av. Tamaulipas 150-1301B',
    locality: 'Condesa, Ciudad de México',
    region: 'CDMX',
    postalCode: '06140',
    country: 'MX',
  },
  geo: { lat: 19.4109, lng: -99.1757 },
  areaServed: [
    'Ciudad de México',
    'Estado de México',
    'Monterrey',
    'Guadalajara',
    'Puebla',
    'Querétaro',
    'México',
  ],
  sameAs: [] as string[],
} as const;

const BUSINESS_ID = `${SITE.url}/#business`;
const WEBSITE_ID = `${SITE.url}/#website`;

/* ---- Nodos reutilizables (sin @context: van dentro de @graph) ---- */

export const businessNode = {
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: SITE.name,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: SITE.logo },
  image: SITE.image,
  description: SITE.description,
  slogan: SITE.slogan,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: '$$',
  currenciesAccepted: 'MXN',
  paymentAccepted: 'Efectivo, Tarjeta de crédito, Transferencia bancaria',
  foundingDate: SITE.foundingDate,
  knowsLanguage: 'es-MX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  areaServed: SITE.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' },
  ],
  ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
};

export const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  inLanguage: 'es-MX',
  publisher: { '@id': BUSINESS_ID },
};

/* ---- @graph global (se inyecta en TODAS las páginas vía Layout) ---- */
export function globalGraph(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [businessNode, websiteNode],
  });
}

/* ---- BreadcrumbList ---- */
type Crumb = { name: string; path?: string };
export function breadcrumb(items: Crumb[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.path ? { item: `${SITE.url}${c.path}` } : {}),
    })),
  });
}

/* ---- Product (sin ratings inventados; offer honesto por cotización) ---- */
type ProductOpts = {
  name: string;
  slug: string;
  description: string;
  images: string[];
  sku: string;
  material?: string;
};
export function productSchema(o: ProductOpts): string {
  const url = `${SITE.url}/catalogo/${o.slug}`;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: o.name,
    image: o.images.map((i) => (i.startsWith('http') ? i : `${SITE.url}${i}`)),
    description: o.description,
    sku: o.sku,
    category: 'Podiums profesionales',
    ...(o.material ? { material: o.material } : {}),
    brand: { '@type': 'Brand', name: SITE.name },
    manufacturer: { '@id': BUSINESS_ID },
    url,
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@id': BUSINESS_ID },
      areaServed: 'MX',
    },
  });
}

/* ---- Service (páginas de servicio) ---- */
type ServiceOpts = {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
};
export function serviceSchema(o: ServiceOpts): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: o.name,
    description: o.description,
    serviceType: o.serviceType || o.name,
    url: `${SITE.url}${o.path}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE.url}${o.path}`,
      servicePhone: SITE.phone,
    },
  });
}

/* ---- WebPage genérica (about, testimonios, etc.) ---- */
type WebPageOpts = {
  name: string;
  description: string;
  path: string;
  type?: string; // WebPage | AboutPage | ContactPage | CollectionPage
};
export function webPageSchema(o: WebPageOpts): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': o.type || 'WebPage',
    name: o.name,
    description: o.description,
    url: `${SITE.url}${o.path}`,
    inLanguage: 'es-MX',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
  });
}

/* ---- ItemList (catálogo / venta) ---- */
type ListItemOpts = { name: string; path: string };
export function itemListSchema(name: string, description: string, path: string, items: ListItemOpts[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE.url}${path}`,
    inLanguage: 'es-MX',
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: `${SITE.url}${it.path}`,
      })),
    },
  });
}

/* ---- FAQPage ---- */
type QA = { q: string; a: string };
export function faqSchema(faqs: QA[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });
}

/* ---- BlogPosting ---- */
type ArticleOpts = {
  title: string;
  description: string;
  image: string;
  path: string;
  datePublished: string;
  dateModified: string;
  section?: string;
  keywords?: string;
};
export function articleSchema(o: ArticleOpts): string {
  const url = `${SITE.url}${o.path}`;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: o.title,
    description: o.description,
    image: o.image.startsWith('http') ? o.image : `${SITE.url}${o.image}`,
    datePublished: o.datePublished,
    dateModified: o.dateModified,
    inLanguage: 'es-MX',
    author: { '@id': BUSINESS_ID },
    publisher: { '@id': BUSINESS_ID },
    isPartOf: { '@id': WEBSITE_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(o.section ? { articleSection: o.section } : {}),
    ...(o.keywords ? { keywords: o.keywords } : {}),
  });
}
