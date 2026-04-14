---
titulo: Sistema de Diseño — PODIUMEX
tipo: design-system
tags: [css, colores, tipografia, componentes]
---

# Sistema de Diseño — PODIUMEX

## Paleta de Colores

```css
/* Primarios */
--primary:        #0a0a0a  /* negro casi puro — textos, fondos dark */
--primary-light:  #1a1a1a
--primary-medium: #2a2a2a

/* Fondos */
--secondary:      #fafafa  /* fondo secciones alternadas */
--secondary-dark: #f0f0f0
--white:          #ffffff

/* Acento — dorado corporativo */
--accent:         #b8860b  /* dorado principal */
--accent-light:   #d4a634  /* hover estados */
--accent-dark:    #8b6914

/* Textos */
--text:           #1a1a1a  /* texto principal */
--text-medium:    #4a4a4a  /* párrafos */
--text-light:     #6b6b6b  /* secundario */
--text-muted:     #9a9a9a  /* muy tenue */

/* Bordes y sombras */
--border:         #e0e0e0
--border-light:   #f0f0f0

/* Estados */
--success:        #059669  /* verde éxito */

/* WhatsApp */
/* #25D366 — verde WhatsApp oficial */
```

---

## Tipografía

**Fuente principal:** Inter (Google Fonts, variable weight 300–700)

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Escala tipográfica
| Uso | Tamaño | Peso |
|---|---|---|
| H1 hero | clamp(2.2rem, 5vw, 3.75rem) | 800 |
| H2 secciones | clamp(1.6rem, 3.5vw, 2.25rem) | 800 |
| H3 cards | 1.1rem | 700 |
| Párrafo body | 1rem | 400 |
| Small / meta | 0.875rem | 400 |
| Tags / badges | 0.75–0.78rem | 600–700 |

---

## Radios y Sombras

```css
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 16px
--radius-xl: 24px

--shadow-sm: 0 1px 2px rgba(0,0,0,0.04)
--shadow-md: 0 4px 12px rgba(0,0,0,0.08)
--shadow-lg: 0 12px 40px rgba(0,0,0,0.12)
--shadow-xl: 0 25px 60px rgba(0,0,0,0.15)
```

---

## Botones

### `.btn-whatsapp`
- Fondo: `#25D366` (verde WhatsApp)
- Hover: `#20bd5a`
- Padding: `0.875rem 1.75rem`
- Uso: CTA principal de conversión

### `.btn-primary`
- Fondo: `var(--primary)` negro
- Hover: `var(--primary-medium)`
- Uso: acción secundaria, ver catálogo

### `.btn-call`
- Fondo: blanco con borde
- Hover: borde oscuro
- Uso: contacto, formulario

---

## Altura de Navegación

```
Topbar:     36px  (fondo #0a0a0a)
Header:     86px  (fondo blanco con backdrop-filter)
──────────────────
Total nav: 122px  → padding-top del <main>

Móvil (≤768px):
Topbar:    36px
Header:    72px
Total:    108px
```

---

## Grid del Sitio

```css
/* Contenedor máximo */
max-width: 1400px;
margin: 0 auto;
padding: 0 2rem;  /* padding lateral estándar */

/* Grids de cards */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 1.75rem;

/* Hero 2 columnas */
grid-template-columns: 1fr 1fr;
gap: 5rem;
```

---

## Componentes de UI Reutilizables

### Card tag (badge de categoría)
```css
.card-tag {
  padding: 0.25rem 0.75rem;
  background: var(--secondary);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent);
}
```

### Section tag (label de sección)
```css
.ix-section-tag {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  background: rgba(184, 134, 11, 0.08);
  padding: 0.3rem 0.9rem;
  border-radius: 50px;
}
```

### Quick Links (`.qlinks`)
Barra de 5 botones de navegación debajo del hero.
Último ítem (`.qlink--accent`) con fondo negro y CTA de WhatsApp.

---

## Convenciones CSS

- Prefijo `ix-` para estilos específicos del index/home
- Prefijo `hdr-` para estilos del Header
- Prefijo `qlink` para los quick links
- Prefijo `blog-` para el layout de artículos
- Clases globales sin prefijo para elementos compartidos (buttons, trust-bar, cta-section, etc.)
