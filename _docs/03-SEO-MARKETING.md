---
titulo: SEO y Marketing — PODIUMEX
tipo: seo-marketing
tags: [seo, keywords, schema, marketing]
---

# SEO y Marketing — PODIUMEX

## Keywords Principales Posicionadas

### Transaccionales (alta intención de compra)
- `venta de podiums` / `venta de podiums en México`
- `renta de podium` / `renta de podiums CDMX`
- `comprar podium profesional`
- `podiums para eventos corporativos`

### Por material
- `podium de acrílico transparente`
- `podium de acrílico negro`
- `podium de madera` / `podium madera negro`
- `podium madera con acrílico`

### Por ciudad (SEO local)
- `podium CDMX` / `podium Ciudad de México`
- `renta de podium Monterrey`
- `podium Guadalajara` / `podium Puebla`

### Por servicio
- `grabado láser logo podium`
- `personalización de podiums`
- `renta podium con instalación`
- `podium para streaming`

---

## Schema.org Implementado

| Página | Tipo Schema | Estado |
|---|---|---|
| `/` | LocalBusiness | ✅ Con priceRange, areaServed, hasOfferCatalog |
| `/catalogo/[producto]` | Product | ✅ Con offers, aggregateRating, múltiples imágenes |
| `/blog/[slug]` | Article | ✅ Con datePublished, dateModified, keywords |
| `/blog` | Blog | ✅ |
| Todas | BreadcrumbList | ✅ Via prop `breadcrumbSchema` en Layout |

### Datos de LocalBusiness (index)
```json
{
  "telephone": "+52-55-6432-8954",
  "email": "podiumexmx@gmail.com",
  "priceRange": "$$",
  "areaServed": ["Ciudad de México","Monterrey","Guadalajara","Puebla","Querétaro","México"],
  "address": "Av. Tamaulipas 150-1301B, Col. Condesa, CDMX 06140"
}
```

---

## Open Graph / Social

Implementado globalmente en `Layout.astro`:
- `og:type`, `og:url`, `og:title`, `og:description`
- `og:image` (1200×630 recomendado)
- `og:image:alt`, `og:image:width`, `og:image:height`
- `og:locale: es_MX`
- `twitter:card: summary_large_image`
- `twitter:site: @podiumex`

---

## robots.txt (`public/robots.txt`)

```
User-agent: *
Allow: /
Disallow: /dist/
Disallow: /_assets/
Sitemap: https://podiumex.com/sitemap-index.xml
```

Incluye `Crawl-delay: 10` para AhrefsBot y SemrushBot.

---

## Estrategia de Contenido Blog (Pillar-Cluster)

### Pilar 1 — Selección de Podiums
- Hub: Guía Definitiva para Elegir Podium ✅ creado
- Cluster: Acrílico vs Madera ✅ | Modelos Compactos ⏳ | Por tipo de evento ⏳

### Pilar 2 — Comparativas Comerciales
- Hub: Venta vs Renta ✅ creado
- Cluster: ROI de comprar podium ⏳ | Costos por ciudad ⏳

### Pilar 3 — Servicios y Personalización
- Hub: Grabado Láser completo ✅ creado
- Cluster: Tipos de archivo para grabado ⏳ | Vinilado vs grabado ⏳

### Pilar 4 — Eventos y Producción
- Hub: Organizar Evento Corporativo ✅ creado
- Cluster: Checklist evento ⏳ | Protocolo podium ✅

### Pilar 5 — Tendencias
- Hub: Tendencias 2025-2026 ✅ creado
- Cluster: Eventos híbridos ✅ | Streaming setup ⏳

---

## Métricas Objetivo (según estudio de mercado)

| KPI | Baseline | Target 6M | Target 12M |
|---|---|---|---|
| Tráfico orgánico | — | 15,000/mes | 50,000/mes |
| Posición promedio | — | Top 15 | Top 5 |
| Conversión a lead | — | 2.5% | 4.5% |
| Leads calificados | — | 375/mes | 2,250/mes |

---

## Conversión: CTAs en el Sitio

### WhatsApp (número activo)
```
+52 55 6432 8954
wa.me/525564328954
```

### Mensajes de WhatsApp por contexto
- Hero general: `Hola, me interesa cotizar un podium para mi evento`
- Producto específico: `Hola, me interesa el Podium de [Nombre] (SKU)`
- Blog: `Hola, leí el artículo del blog y quiero cotizar un podium`
- Quick links: `Hola, quiero una cotización rápida de un podium`
