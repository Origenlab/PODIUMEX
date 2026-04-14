---
titulo: Arquitectura Astro v6 — PODIUMEX
tipo: documentacion-tecnica
tags: [astro, arquitectura, content-collections, seo]
---

# Arquitectura Astro v6 — PODIUMEX

## Stack Tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Astro | 6.0.4 |
| Output | Static (SSG) | — |
| Content | Content Collections + glob loader | — |
| Sitemap | @astrojs/sitemap | 3.7.1 |
| Estilos | CSS custom + variables | — |
| Scripts | Vanilla JS | — |
| Imágenes | WebP nativo | — |
| Deploy | GitHub Pages / CNAME | podiumex.com |

---

## Reglas Críticas Astro v6

> ⚠️ Astro v6 cambió varias APIs. Estas reglas evitan errores de build.

### Content Collections
```ts
// ✅ CORRECTO — archivo en raíz de src/
// src/content.config.ts

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // ← OBLIGATORIO en v6

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({ ... })
});
```

```ts
// ❌ INCORRECTO (Astro 4 legacy)
// src/content/config.ts  ← ubicación incorrecta en v6
```

### API de Render
```astro
---
// ✅ CORRECTO en Astro v6
import { getCollection, render } from 'astro:content';
const { Content } = await render(post);  // ← render(entry)

// ❌ INCORRECTO — era la API de Astro 4
const { Content } = await post.render(); // ← NO funciona en v6
---
```

### IDs en rutas dinámicas
```astro
---
// ✅ CORRECTO en Astro v6 con glob loader
params: { slug: post.id }   // post.id = filename sin extensión

// ❌ INCORRECTO — slug no existe en entradas de glob loader v6
params: { slug: post.slug }
---
```

---

## Variables CSS Globales del Sistema

Definidas en `Header.astro` bajo `:root` (se propagan globalmente):

```css
:root {
  --topbar-h: 36px;    /* altura barra oscura superior */
  --header-h: 86px;    /* altura header principal */
  --nav-offset: 122px; /* suma total = padding-top del main */
}
```

`Layout.astro` aplica: `<main style="padding-top: var(--nav-offset, 122px);">`

En móvil (`max-width: 768px`): `--header-h: 72px` → nav-offset = 108px.

---

## Flujo de Content Collections (Blog)

```
src/content/blog/*.md
        ↓
src/content.config.ts  (schema Zod + glob loader)
        ↓
src/pages/blog/index.astro   → getCollection('blog') → listado
src/pages/blog/[slug].astro  → getStaticPaths() + render(post) → artículo
        ↓
dist/blog/[slug]/index.html  (SSG)
```

### Schema del blog (Zod)
```ts
z.object({
  title: z.string().max(65),
  description: z.string().max(160),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('PODIUMEX'),
  category: z.enum(['Guías','Comparativas','Consejos','Tendencias',
                    'Organización de Eventos','Personalización']),
  tags: z.array(z.string()),
  image: z.string(),
  imageAlt: z.string(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
})
```

---

## Props del Layout

```astro
<Layout
  title="..."           // requerido, max ~60 chars
  description="..."     // requerido, max 160 chars
  canonical="/ruta"     // requerido, sin dominio, empieza con /
  ogType="website"      // opcional: 'website' | 'article'
  ogImage="/img/..."    // opcional, ruta relativa o URL absoluta
  ogImageAlt="..."      // opcional
  schema={jsonString}   // opcional, JSON-LD principal
  breadcrumbSchema={s}  // opcional, JSON-LD BreadcrumbList separado
  noindex={false}       // opcional, para páginas que no deben indexarse
/>
```

---

## Componentes: Interfaz de Props

### WhatsAppButton.astro
```astro
<WhatsAppButton
  text="Cotizar ahora"          // texto del botón (default: 'WhatsApp')
  message="Hola, quiero..."     // mensaje pre-cargado en WhatsApp
  class="btn-whatsapp"          // clase CSS (default: 'btn-whatsapp')
  size={20}                     // tamaño del ícono SVG en px
/>
```

### Header.astro / Topbar.astro
Sin props — usan datos hardcoded (teléfono, email, links de nav).
Para cambiar el teléfono: buscar `525564328954` en `/src/`.

---

## Build y Deploy

```bash
npm run build   # genera dist/ estático
# dist/ NO debe commitearse — se regenera siempre
# gitignore incluye dist/
```

El sitemap se genera automáticamente en `dist/sitemap-index.xml` gracias a `@astrojs/sitemap`.

CNAME de GitHub Pages apunta a `podiumex.com`.
