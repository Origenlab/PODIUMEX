---
proyecto: PODIUMEX
tipo: Sitio Web Comercial
framework: Astro v6
estado: En desarrollo activo
ultima_sesion: 2026-04-14
tags: [podiumex, astro, seo, ecommerce-contenido]
---

# PODIUMEX — Estado del Proyecto

> Sitio web comercial para venta y renta de podiums profesionales en México.
> URL producción: https://podiumex.com

---

## ✅ Completado hasta Abril 2026

### Infraestructura & Arquitectura
- [x] Astro v6 con static output
- [x] `astro.config.mjs` corregido (error de sintaxis resuelto)
- [x] `@astrojs/sitemap` integrado — genera `sitemap-index.xml` automáticamente
- [x] Content Collections con glob loader (`src/content.config.ts`)
- [x] `compressHTML: true` activado
- [x] `tsconfig.json` configurado

### Componentes
- [x] `Topbar.astro` — barra oscura fija, teléfono + email + horarios + CTA
- [x] `Header.astro` — logo 66px, nav con dropdowns ricos, teléfono, "Cotizar ahora"
- [x] `Footer.astro` — 5 columnas con links completos
- [x] `WhatsAppButton.astro` — componente reutilizable con número actualizado
- [x] `Layout.astro` — topbar + header, meta tags SEO completos, schema soporte

### Layout & SEO
- [x] Variables CSS `--topbar-h: 36px` / `--header-h: 86px` / `--nav-offset: 122px`
- [x] `<main>` con `padding-top: var(--nav-offset)` — offset correcto en todas las páginas
- [x] Meta robots, theme-color, og:image:alt/width/height, twitter:site
- [x] Skip link de accesibilidad
- [x] `breadcrumbSchema` prop en Layout
- [x] Logo: `fetchpriority="high" loading="eager"` (LCP optimizado)

### Blog — Content Collections
- [x] 9 artículos Markdown en `src/content/blog/`
- [x] Ruta dinámica `blog/[slug].astro` con API Astro v6
- [x] Índice `blog/index.astro` con `getCollection()` y posts featured/regulares
- [x] Schema `Article` con `datePublished`, `dateModified`, `keywords`

### Index (Home)
- [x] Hero 2 columnas: headline + CTAs (izq) / párrafos SEO (der)
- [x] Quick Links — 5 botones de navegación rápida (estilo proyectored.com.mx)
- [x] Sección catálogo data-driven (array `products`)
- [x] Sección segmentos (array `segments`) con 6 tipos de cliente
- [x] Sección diferenciadores (array `differentiators`)
- [x] Sección servicios (array `services`)
- [x] Testimonios (array `testimonials`)
- [x] Blog preview dinámico con `getCollection()` — últimos 3 artículos
- [x] CTA final con WhatsApp + contacto + teléfono con horario
- [x] Schema `LocalBusiness` mejorado: `priceRange`, `areaServed`, `hasOfferCatalog`

### SEO Técnico
- [x] Canonical URLs en todas las páginas
- [x] `robots.txt` mejorado en `public/` con Sitemap reference
- [x] Product Schema con `offers` array, múltiples imágenes, `aggregateRating`
- [x] Acentos y ñ corregidos en todo el sitio (México, Acrílico, etc.)
- [x] `lang="es-MX"` en `<html>`

### Número de contacto
- [x] Cambiado de `525530454714` → `525564328954` (77 ocurrencias)
- [x] Formatos: URL WhatsApp, tel:, texto visible, Schema JSON-LD

---

## 🔴 Pendiente Prioritario

- [ ] **Catálogo: migrar páginas a Content Collections** — los 8 productos siguen siendo `.astro` hardcoded, deberían ser `.md` en `src/content/catalogo/`
- [ ] **Agregar artículos de blog faltantes** (ver `.audit/DOCUMENTO-ARTICULO.md` para lista)
- [ ] **Formulario de contacto funcional** — `contacto.astro` tiene formulario sin backend
- [ ] **Testimonios reales con fotos** — actualmente son datos ficticios en el index
- [ ] **Página de categorías del blog** — `/blog/categoria/[cat]`
- [ ] **RSS Feed** — instalar `@astrojs/rss`
- [ ] **OG Image dinámica** — imagen específica por página
- [ ] **Imágenes: agregar `width` y `height` explícitos** en páginas de catálogo
- [ ] **Optimizar CSS global** — hay reglas legacy de la versión HTML que pueden limpiarse

## 🟡 Pendiente Medio Plazo

- [ ] Sección precios en catálogo (cuando estén definidos)
- [ ] Dashboard de cliente / sistema de reservaciones
- [ ] Integración Google Analytics / Tag Manager
- [ ] Migrar `WhatsAppButton` a todas las páginas (actualmente solo en index)

---

## 🏗️ Comandos Esenciales

```bash
npm run dev        # Servidor local http://localhost:4321
npm run build      # Build estático → dist/
npm run preview    # Preview del build
```

---

## 📁 Estructura de Archivos Activos

```
PODIUMEX/
├── src/
│   ├── components/
│   │   ├── Header.astro        ← nav principal fija
│   │   ├── Topbar.astro        ← barra oscura superior
│   │   ├── Footer.astro        ← pie de página
│   │   └── WhatsAppButton.astro ← botón reutilizable
│   ├── content/
│   │   └── blog/               ← 9 artículos Markdown
│   ├── content.config.ts       ← schema Content Collections (Astro v6)
│   ├── layouts/
│   │   └── Layout.astro        ← layout base con SEO completo
│   ├── pages/
│   │   ├── index.astro         ← home data-driven
│   │   ├── blog/[slug].astro   ← ruta dinámica blog
│   │   ├── catalogo/           ← 8 páginas de producto
│   │   └── [servicio].astro    ← páginas de servicios
│   └── styles/
│       └── global.css          ← estilos base + variables CSS
├── public/
│   ├── img/                    ← imágenes WebP (173 archivos)
│   ├── js/app.js               ← scripts frontend
│   ├── robots.txt              ← con Sitemap reference
│   └── site.webmanifest
├── _docs/                      ← documentación del proyecto
├── .audit/                     ← documentos de auditoría originales
├── astro.config.mjs
└── package.json
```
