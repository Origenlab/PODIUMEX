---
titulo: Inventario de Páginas — PODIUMEX
tipo: inventario
tags: [paginas, seo, rutas]
---

# Inventario de Páginas — PODIUMEX

## Páginas Principales

| Ruta | Archivo | Título SEO | Schema |
|---|---|---|---|
| `/` | `index.astro` | Venta y Renta de Podiums Profesionales en México \| PODIUMEX | LocalBusiness |
| `/catalogo` | `catalogo.astro` | Catálogo de Podiums Profesionales — Todos los Modelos | — |
| `/venta-de-podiums` | `venta-de-podiums.astro` | Venta de Podiums Profesionales en México | — |
| `/renta-de-podiums` | `renta-de-podiums.astro` | Renta de Podiums para Eventos en México | — |
| `/nosotros` | `nosotros.astro` | Nosotros — PODIUMEX | Organization |
| `/contacto` | `contacto.astro` | Contacto — Cotiza tu Podium | — |
| `/preguntas-frecuentes` | `preguntas-frecuentes.astro` | Preguntas Frecuentes | FAQPage |
| `/testimonios` | `testimonios.astro` | Testimonios de Clientes | — |
| `/404` | `404.astro` | Página no encontrada | — |
| `/blog` | `blog/index.astro` | Blog de PODIUMEX | Blog |
| `/blog/[slug]` | `blog/[slug].astro` | Dinámico desde frontmatter | Article |

---

## Páginas de Catálogo (Productos)

| Ruta | Archivo | Material | SKU |
|---|---|---|---|
| `/catalogo/acrilico-transparente` | `acrilico-transparente.astro` | Acrílico | PDX-ACR-TRANS-001 |
| `/catalogo/acrilico-negro` | `acrilico-negro.astro` | Acrílico | PDX-ACR-NEG-001 |
| `/catalogo/podium-madera-negro` | `podium-madera-negro.astro` | Madera | PDX-MAD-NEG-001 |
| `/catalogo/madera-caoba-acrilico` | `madera-caoba-acrilico.astro` | Combinado | PDX-MAD-CAO-001 |
| `/catalogo/acrilico-transparente-compacto` | `acrilico-transparente-compacto.astro` | Acrílico Compacto | PDX-ACR-TRANS-002 |
| `/catalogo/acrilico-negro-compacto` | `acrilico-negro-compacto.astro` | Acrílico Compacto | PDX-ACR-NEG-002 |
| `/catalogo/podium-madera-negro-compacto` | `podium-madera-negro-compacto.astro` | Madera Compacto | PDX-MAD-NEG-002 |
| `/catalogo/madera-caoba-acrilico-compacto` | `madera-caoba-acrilico-compacto.astro` | Combinado Compacto | PDX-MAD-CAO-002 |

> ⚠️ **Pendiente**: Migrar páginas de catálogo a Content Collections para hacerlas data-driven.

---

## Páginas de Servicios

| Ruta | Archivo | Descripción |
|---|---|---|
| `/servicios` | `servicios.astro` | Hub de todos los servicios |
| `/entrega-e-instalacion` | `entrega-e-instalacion.astro` | Logística express con GPS |
| `/personalizacion-total` | `personalizacion-total.astro` | Grabado láser y vinilado |
| `/setup-para-streaming` | `setup-para-streaming.astro` | Audio/video para eventos híbridos |
| `/soporte-tecnico` | `soporte-tecnico.astro` | Soporte 24/7 durante eventos |
| `/financiamiento` | `financiamiento.astro` | Meses sin intereses |
| `/mantenimiento` | `mantenimiento.astro` | Pulido y restauración |
| `/sustentabilidad` | `sustentabilidad.astro` | Certificación ESG |
| `/asesoria-de-eventos` | `asesoria-de-eventos.astro` | Consultoría sin costo |

---

## Artículos del Blog (Content Collections)

| Slug | Categoría | Featured |
|---|---|---|
| `guia-elegir-podium-perfecto` | Guías | ✅ |
| `venta-vs-renta-podium` | Comparativas | ✅ |
| `tendencias-podiums-2025` | Tendencias | ✅ |
| `podium-acrilico-vs-madera` | Comparativas | — |
| `organizar-evento-corporativo` | Organización de Eventos | — |
| `grabado-laser-podiums` | Personalización | — |
| `podiums-eventos-hibridos` | Tendencias | — |
| `mantenimiento-podiums` | Consejos | — |
| `protocolo-uso-podium` | Consejos | — |

> 📝 **Artículos planeados** (ver `.audit/DOCUMENTO-ARTICULO.md`): 8 artículos adicionales del plan de content marketing.

---

## Quick Links (Sección debajo del Hero)

Reemplazó el antiguo trust bar. Son botones de navegación rápida:

1. **Catálogo Completo** → `/catalogo`
2. **Renta de Podiums** → `/renta-de-podiums`
3. **Personalización con Logo** → `/personalizacion-total`
4. **Entrega e Instalación** → `/entrega-e-instalacion`
5. **Cotización Gratuita** → WhatsApp (destacado en negro)
