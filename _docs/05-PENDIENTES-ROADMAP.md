---
titulo: Pendientes y Roadmap — PODIUMEX
tipo: roadmap
tags: [pendientes, roadmap, tareas]
---

# Pendientes y Roadmap — PODIUMEX

## 🔴 Prioridad Alta (próxima sesión)

### 1. Catálogo → Content Collections
Las 8 páginas de catálogo son `.astro` hardcoded. Migrarlas a Markdown como el blog.

```
src/content/catalogo/
├── acrilico-transparente.md
├── acrilico-negro.md
├── podium-madera-negro.md
├── madera-caoba-acrilico.md
├── acrilico-transparente-compacto.md
├── acrilico-negro-compacto.md
├── podium-madera-negro-compacto.md
└── madera-caoba-acrilico-compacto.md
```

Schema sugerido para cada producto:
```ts
z.object({
  nombre: z.string(),
  sku: z.string(),
  material: z.enum(['Acrílico','Madera','Combinado']),
  tamano: z.enum(['Estándar','Compacto']),
  altura: z.string(),
  peso: z.string(),
  garantia: z.string(),
  descripcion: z.string(),
  imagen: z.string(),
  imagenLateral: z.string(),
  imagenDetalle: z.string(),
  precio_venta_referencia: z.string().optional(),
  disponible_renta: z.boolean(),
  disponible_venta: z.boolean(),
  tags_uso: z.array(z.string()),
  featured: z.boolean().default(false),
})
```

### 2. Formulario de Contacto funcional
`contacto.astro` tiene formulario HTML sin backend. Opciones:
- **Opción A**: Formspree (sin costo hasta 50 envíos/mes)
- **Opción B**: Netlify Forms (si se migra deploy a Netlify)
- **Opción C**: Astro Actions (si se migra a SSR/hybrid)

### 3. Agregar imágenes `width` y `height` explícitos
Las páginas de catálogo tienen `<img>` sin dimensiones explícitas → CLS score afectado.

---

## 🟡 Prioridad Media (próximo mes)

### 4. Testimonios con datos reales
El `index.astro` tiene testimonios ficticios en el array `testimonials`.
Reemplazar con testimonios reales + fotos de clientes (con permiso).

### 5. Precios en catálogo
Cuando estén aprobados, agregar `offers.price` en el Product Schema y mostrar en las páginas de producto.

### 6. RSS Feed
```bash
npm install @astrojs/rss
```
Crear `src/pages/rss.xml.ts` para sindicación del blog.

### 7. Categorías del blog
Crear ruta `/blog/categoria/[cat]/index.astro` con `getStaticPaths()` basado en las categorías del schema.

### 8. OG Images dinámicas
Usar `@vercel/og` o `satori` para generar imágenes Open Graph específicas por página.

---

## 🟢 Prioridad Baja (trimestre)

### 9. Google Analytics / GTM
Agregar script de GA4 en `Layout.astro` head o usar GTM container.

### 10. Migración a Netlify
GitHub Pages no soporta SSR. Si se necesitan formularios nativos o funciones serverless, migrar a Netlify.

### 11. Colores en tokens
Definir la paleta completa en un archivo `src/styles/tokens.css` y hacer que `global.css` los importe.

### 12. Sistema de precios por ciudad
Páginas de destino geográficas:
- `/podiums-cdmx`
- `/podiums-monterrey`
- `/podiums-guadalajara`

Estas ayudan al SEO local y pueden tener precios/tiempos de entrega específicos.

### 13. Dashboard de cliente / reservaciones
Según la descripción del proyecto, PODIUMEX quiere una plataforma con:
- Reservación online 24/7
- Seguimiento GPS de entrega
- Confirmación digital
- Dashboard de cliente

Esto requeriría migrar a SSR (Netlify/Vercel) con base de datos.

---

## Artículos de Blog Pendientes

Según `.audit/DOCUMENTO-ARTICULO.md`, faltan:

| Título | URL objetivo | Categoría | Estado |
|---|---|---|---|
| Podiums para Hoteles y Salones de Eventos | `/blog/podiums-hoteles-salones` | Guías | ⏳ |
| Cómo Organizar una Rueda de Prensa | `/blog/rueda-de-prensa-podium` | Organización | ⏳ |
| Podiums para Graduaciones Universitarias | `/blog/podiums-graduaciones` | Guías | ⏳ |
| Streaming Profesional desde un Podium | `/blog/streaming-profesional-podium` | Tendencias | ⏳ |
| Cuánto Cuesta Rentar un Podium en México | `/blog/costo-renta-podium-mexico` | Comparativas | ⏳ |
| Diferencias entre Podium y Atril | `/blog/podium-vs-atril-diferencias` | Guías | ⏳ |
| Setup de Audio para Conferencias | `/blog/setup-audio-conferencias` | Consejos | ⏳ |

---

## Notas de Sesión

### 2026-04-14
- Corregido error crítico `astro.config.mjs`
- Migrado blog a Content Collections (9 artículos)
- Creados componentes Topbar, Header rediseñado, WhatsAppButton
- Index reescrito data-driven con 10 secciones
- Quick Links implementados (estilo proyectored.com.mx)
- Número de contacto actualizado: `525564328954`
- Archivos obsoletos eliminados: `_html_backup/`, `css/style.css`, `js/app.js.tmp`, `robots.txt` duplicado, `Breadcrumb.astro`, `src/content/config.ts`
