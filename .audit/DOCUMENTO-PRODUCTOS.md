# DOCUMENTO-PRODUCTOS.md
## Guía Completa para Añadir Nuevos Productos al Catálogo PODIUMEX

---

**Autor:** IA (Claude)
**Versión:** 1.7
**Fecha de creación:** 2025-11-28
**Última actualización:** 2025-11-28

---

## Tabla de Contenidos

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Flujo General del Proceso](#2-flujo-general-del-proceso)
3. [Checklist Inicial](#3-checklist-inicial)
4. [Taxonomía y Categorías](#4-taxonomía-y-categorías)
5. [Estructura de Archivos](#5-estructura-de-archivos)
6. [Imágenes y Multimedia](#6-imágenes-y-multimedia)
7. [Card del Producto en Catálogo](#7-card-del-producto-en-catálogo)
8. [Página de Detalle del Producto](#8-página-de-detalle-del-producto)
9. [Formulario de Cotización para Renta](#9-formulario-de-cotización-para-renta)
10. [Metadatos y SEO](#10-metadatos-y-seo)
11. [Ficha Técnica](#11-ficha-técnica)
12. [Generación de Reseña](#12-generación-de-reseña)
13. [Cross-sell y Productos Relacionados](#13-cross-sell-y-productos-relacionados)
14. [JSON-LD Schema](#14-json-ld-schema)
15. [Redes Sociales y Open Graph](#15-redes-sociales-y-open-graph)
16. [Checklist de Publicación](#16-checklist-de-publicación)
17. [Plantillas Reutilizables](#17-plantillas-reutilizables)
18. [Ejemplo Completo](#18-ejemplo-completo)
19. [Instrucciones para la IA](#19-instrucciones-para-la-ia)
20. [FAQ del Editor](#20-faq-del-editor)
21. [Historial de Cambios](#21-historial-de-cambios)

---

## 1. Resumen Ejecutivo

Este documento establece el proceso estandarizado para añadir nuevos productos al catálogo de PODIUMEX. Cada producto requiere:

1. **Card en catálogo.html** - Tarjeta visible en la página principal del catálogo
2. **Página de detalle** - Archivo HTML individual en `/catalogo/`
3. **Imágenes optimizadas** - Mínimo 1, ideal 3-4 vistas
4. **Contenido SEO** - Título, descripción, keywords, JSON-LD
5. **Reseña comercial** - Texto persuasivo orientado a conversión

**Objetivo:** Cualquier persona pueda añadir productos siguiendo esta guía sin asistencia adicional.

---

## 2. Flujo General del Proceso

```
┌─────────────────────────────────────────────────────────────────┐
│  1. RECEPCIÓN DE ESPECIFICACIONES                               │
│     └─ Datos técnicos, imágenes, categoría, precio              │
├─────────────────────────────────────────────────────────────────┤
│  2. PREPARACIÓN DE IMÁGENES                                     │
│     └─ Optimizar, nombrar, colocar en /img/catalogo/            │
├─────────────────────────────────────────────────────────────────┤
│  3. CREACIÓN DE CARD EN CATÁLOGO                                │
│     └─ Editar catalogo.html, añadir card en sección correcta    │
├─────────────────────────────────────────────────────────────────┤
│  4. CREACIÓN DE PÁGINA DE DETALLE                               │
│     └─ Crear archivo en /catalogo/nombre-producto.html          │
├─────────────────────────────────────────────────────────────────┤
│  5. GENERACIÓN DE CONTENIDO                                     │
│     └─ Reseña, ficha técnica, SEO, JSON-LD                      │
├─────────────────────────────────────────────────────────────────┤
│  6. VERIFICACIÓN Y PUBLICACIÓN                                  │
│     └─ Checklist final, pruebas, deploy                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Checklist Inicial

Antes de comenzar, verifica que tienes:

### Datos Obligatorios

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Nombre del producto | Nombre comercial completo | Podium de Acrílico Transparente |
| SKU / Slug | Identificador único (minúsculas, guiones) | `acrilico-transparente` |
| Serie | Categoría de la línea | Premium Series |
| Categoría técnica | Para filtros (data-category) | `acrilico`, `madera`, `combinado` |
| Altura | En centímetros | 120 cm |
| Ancho | En centímetros | 50 cm |
| Profundidad/Fondo | En centímetros | 40 cm |
| Peso | En kilogramos | 18-22 kg |
| Material principal | Material base | Acrílico cristal 15mm |
| Acabado | Tipo de acabado | Transparente brillante |
| Color(es) | Colores disponibles | Transparente, Negro |
| Descripción corta | Máx. 140 caracteres | Para card del catálogo |
| Descripción larga | Mín. 250 palabras | Para página de detalle |
| Características | Lista de 4-6 features | Bullets para la card |
| Usos recomendados | Lista de aplicaciones | Conferencias, eventos, etc. |
| Imagen principal | Archivo .webp | podium-acrilico-transparente.webp |

### Datos Opcionales (Recomendados)

- Imágenes adicionales (lateral, detalle, en uso)
- Certificaciones
- Garantía específica
- Capacidad de carga
- Compatibilidades
- Video demostrativo

---

## 4. Taxonomía y Categorías

### Series Disponibles

| Serie | ID Sección | data-category | Descripción |
|-------|------------|---------------|-------------|
| Premium Series | `#premium` | `acrilico` | Podiums de acrílico transparente |
| Classic Series | `#classic` | `madera` | Podiums de madera tradicional |
| Executive Series | `#executive` | `combinado` | Combinaciones madera + acrílico |
| Signature Series | `#signature` | `negro` | Acabados en negro (acrílico o madera) |
| Tech Series | `#tech` | `led` | Podiums con tecnología LED |

### Reglas de Categorización

1. **Un producto = Una serie principal**
2. El `data-category` determina los filtros del sidebar
3. El producto debe ir en la sección HTML correspondiente a su serie
4. Si es "destacado", también puede aparecer en `#destacados`

---

## 5. Estructura de Archivos

```
PODIUMEX/
├── catalogo.html                    # Página principal del catálogo
├── catalogo/
│   ├── podium-madera-negro.html     # Ejemplo existente
│   ├── [nuevo-producto].html        # Nueva página de detalle
│   └── ...
├── img/
│   ├── catalogo/
│   │   ├── [slug].webp              # Imagen principal
│   │   ├── [slug]-lateral.webp      # Vista lateral
│   │   ├── [slug]-detalle.webp      # Detalle/close-up
│   │   └── [slug]-uso.webp          # En contexto de uso
│   └── index/
│       └── ...                       # Imágenes del home
└── css/
    └── style.css                     # Estilos globales
```

### Nomenclatura de Archivos

- **Página de detalle:** `catalogo/[slug].html`
- **Imagen principal:** `img/catalogo/[slug].webp`
- **Imágenes adicionales:** `img/catalogo/[slug]-[sufijo].webp`

**Sufijos válidos:** `-lateral`, `-detalle`, `-frontal`, `-uso`, `-contexto`, `-01`, `-02`

---

## 6. Imágenes y Multimedia

### Requisitos Técnicos

| Tipo | Dimensiones | Peso Máx. | Formato |
|------|-------------|-----------|---------|
| Principal | 800x1000px (portrait) | 150KB | .webp |
| Thumbnails | 200x200px | 30KB | .webp |
| Galería | 800x1000px | 150KB | .webp |
| OG Image | 1200x630px | 200KB | .webp/.jpg |

### Proporción Recomendada

- **Ratio:** 4:5 (portrait) para mostrar bien los podiums verticales
- **Fondo:** Blanco o gris claro (#f8fafc) para consistencia
- **Iluminación:** Uniforme, sin sombras duras

### Texto ALT

**Plantilla:**
```
[Nombre del Producto] - [Descripción de la vista/ángulo] para [uso principal]
```

**Ejemplos:**
```
alt="Podium de Acrílico Transparente - Vista frontal para eventos corporativos"
alt="Podium de Madera Negro - Vista lateral mostrando acabado mate"
alt="Podium Executive - Detalle de unión madera y acrílico"
```

---

## 7. Card del Producto en Catálogo

### Ubicación en catalogo.html

Todas las cards de productos se encuentran en un **único grid** dentro de la sección principal "Nuestros Podiums". Esta estructura permite que las cards se muestren lado a lado automáticamente según el espacio disponible.

```html
<div class="category-section" id="productos">
    <div class="category-title">
        <h3>Nuestros Podiums</h3>
        <span class="category-count">[N] modelos</span>
    </div>
    <div class="catalog-grid">
        <!-- Card 1 -->
        <div class="catalog-card" data-category="madera">...</div>
        <!-- Card 2 -->
        <div class="catalog-card" data-category="acrilico">...</div>
        <!-- Card 3 -->
        <div class="catalog-card" data-category="acrilico">...</div>
        <!-- Agregar más cards aquí -->
    </div>
</div>
```

### Comportamiento Responsive

El grid utiliza `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`:
- **Desktop (>1024px):** 3 cards por fila
- **Tablet (768-1024px):** 2 cards por fila
- **Móvil (<768px):** 1 card por fila

### Al Agregar un Nuevo Producto

1. Añadir la nueva card dentro del `<div class="catalog-grid">` existente
2. Actualizar el contador en `<span class="category-count">[N] modelos</span>`
3. Actualizar el contador del sidebar: `<p>[N] productos disponibles</p>`
4. Actualizar el `<span id="resultCount">[N]</span>` en el topbar

### Plantilla de Card

```html
<div class="catalog-card" data-category="[categoria]">
    <div class="catalog-card-image">
        <img src="img/catalogo/[slug].webp"
             alt="[Nombre Producto] - [Descripción breve de la imagen]"
             loading="lazy">
        <span class="catalog-badge [tipo]">[Etiqueta]</span>
    </div>
    <div class="catalog-card-content">
        <span class="catalog-series">[Serie] Series</span>
        <h3>[Nombre del Producto]</h3>
        <p>[Descripción corta - máx 140 caracteres]</p>
        <div class="catalog-specs">
            <div class="spec-item">
                <span class="spec-label">Altura</span>
                <span class="spec-value">[X] cm</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Ancho</span>
                <span class="spec-value">[X] cm</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Material</span>
                <span class="spec-value">[Material]</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Peso</span>
                <span class="spec-value">[X-X] kg</span>
            </div>
        </div>
        <ul class="catalog-features">
            <li>[Característica 1]</li>
            <li>[Característica 2]</li>
            <li>[Característica 3]</li>
            <li>[Característica 4]</li>
        </ul>
        <div class="catalog-pricing">
            <div class="catalog-actions">
                <a href="contacto.html?producto=[slug]" class="btn-primary">Cotizar Ahora</a>
                <a href="catalogo/[slug].html" class="btn-secondary">Ver Detalles</a>
            </div>
        </div>
    </div>
</div>
```

### Badges Disponibles

| Clase | Texto Sugerido | Uso |
|-------|----------------|-----|
| `popular` | Disponible | Producto en stock |
| `new` | Nuevo | Producto recién añadido |
| `featured` | Destacado | Producto promocionado |
| (sin badge) | - | Producto estándar |

---

## 8. Página de Detalle del Producto

### Estructura Base

La página de detalle sigue el modelo de `catalogo/podium-madera-negro.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Meta tags SEO -->
    <!-- Estilos inline específicos de producto -->
</head>
<body>
    <div id="header-container"></div>

    <main class="product-page">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">...</nav>

        <div class="product-wrapper">
            <!-- Sidebar -->
            <aside class="product-sidebar">
                <!-- Navegación interna -->
                <!-- Specs rápidas -->
                <!-- Productos relacionados -->
                <!-- Servicios -->
                <!-- CTAs -->
            </aside>

            <!-- Contenido Principal -->
            <div class="product-main">
                <!-- Hero con galería + info -->
                <!-- Especificaciones técnicas -->
                <!-- Características -->
                <!-- Usos recomendados -->
                <!-- CTA final -->
            </div>
        </div>
    </main>

    <div id="footer-container"></div>

    <script><!-- Inicialización --></script>
</body>
</html>
```

### Secciones del Producto

1. **Hero (product-hero)**
   - Galería de imágenes (izquierda)
   - Info básica: badge, título, serie, descripción, highlights (derecha)

2. **Especificaciones Técnicas (specs-grid)**
   - Grid de 6 cards con métricas principales

3. **Características Destacadas (features-list)**
   - 4 features con icono, título y descripción

4. **Usos Recomendados (use-tags)**
   - Tags/chips con aplicaciones del producto

5. **Formulario de Cotización (rental-form)**
   - Formulario completo para solicitar renta del producto
   - Envío vía WhatsApp con datos estructurados

---

## 9. Formulario de Cotización para Renta

Cada página de producto incluye un formulario completo para solicitar cotización de renta. Este formulario captura todos los datos necesarios del evento y envía la información estructurada vía WhatsApp.

### Estructura del Formulario

El formulario está dividido en 4 secciones:

#### 1. Datos de Contacto
| Campo | Tipo | Requerido | Placeholder |
|-------|------|-----------|-------------|
| Nombre completo | text | Sí | Tu nombre |
| Empresa / Organización | text | No | Nombre de tu empresa (opcional) |
| Teléfono | tel | Sí | 55 1234 5678 |
| Correo electrónico | email | Sí | tu@email.com |

#### 2. Datos del Evento
| Campo | Tipo | Requerido | Opciones/Placeholder |
|-------|------|-----------|----------------------|
| Fecha del evento | date | Sí | - |
| Hora del evento | time | Sí | - |
| Tipo de evento | select | Sí | Conferencia, Corporativo, Congreso, Rueda de Prensa, Lanzamiento, Académico, Ceremonia, Político, Religioso, Otro |
| Nombre del evento | text | No | Ej: Congreso Nacional de... |
| Dirección del evento | text | Sí | Calle, número, colonia, ciudad |
| A nombre de quién (facturación) | text | No | Nombre o razón social |
| ¿Requiere factura? | select | No | No / Sí |

#### 3. Servicios Adicionales (Checkboxes)
| Servicio | Valor | Preseleccionado |
|----------|-------|-----------------|
| Personalización con logo | personalizacion | No |
| Entrega e instalación | instalacion | **Sí** |
| Soporte técnico en sitio | soporte | No |
| Micrófono incluido | microfono | No |

#### 4. Comentarios Adicionales
| Campo | Tipo | Requerido |
|-------|------|-----------|
| Comentarios | textarea | No |

### Plantilla HTML del Formulario

```html
<!-- Formulario de Cotización -->
<section class="content-section" id="cotizar">
    <h2 class="section-title">Solicitar Cotización para Renta</h2>
    <p style="color: var(--text-light); margin-bottom: 1.5rem;">Completa el formulario con los datos de tu evento y te enviaremos una cotización personalizada en menos de 2 horas.</p>

    <form class="rental-form" id="rentalForm">
        <input type="hidden" name="producto" value="[NOMBRE_PRODUCTO]">

        <div class="form-section">
            <h3 class="form-section-title">Datos de Contacto</h3>
            <div class="form-row">
                <div class="form-group">
                    <label for="nombre">Nombre completo *</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
                </div>
                <div class="form-group">
                    <label for="empresa">Empresa / Organización</label>
                    <input type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa (opcional)">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="telefono">Teléfono *</label>
                    <input type="tel" id="telefono" name="telefono" placeholder="55 1234 5678" required>
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico *</label>
                    <input type="email" id="email" name="email" placeholder="tu@email.com" required>
                </div>
            </div>
        </div>

        <div class="form-section">
            <h3 class="form-section-title">Datos del Evento</h3>
            <div class="form-row">
                <div class="form-group">
                    <label for="fechaEvento">Fecha del evento *</label>
                    <input type="date" id="fechaEvento" name="fechaEvento" required>
                </div>
                <div class="form-group">
                    <label for="horaEvento">Hora del evento *</label>
                    <input type="time" id="horaEvento" name="horaEvento" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="tipoEvento">Tipo de evento *</label>
                    <select id="tipoEvento" name="tipoEvento" required>
                        <option value="">Selecciona el tipo de evento</option>
                        <option value="conferencia">Conferencia</option>
                        <option value="corporativo">Evento Corporativo</option>
                        <option value="congreso">Congreso / Seminario</option>
                        <option value="rueda-prensa">Rueda de Prensa</option>
                        <option value="lanzamiento">Lanzamiento de Producto</option>
                        <option value="academico">Evento Académico</option>
                        <option value="ceremonia">Ceremonia</option>
                        <option value="politico">Evento Político</option>
                        <option value="religioso">Evento Religioso</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="nombreEvento">Nombre del evento</label>
                    <input type="text" id="nombreEvento" name="nombreEvento" placeholder="Ej: Congreso Nacional de...">
                </div>
            </div>
            <div class="form-group full-width">
                <label for="direccion">Dirección del evento *</label>
                <input type="text" id="direccion" name="direccion" placeholder="Calle, número, colonia, ciudad" required>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="nombreFactura">A nombre de quién (para facturación)</label>
                    <input type="text" id="nombreFactura" name="nombreFactura" placeholder="Nombre o razón social">
                </div>
                <div class="form-group">
                    <label for="requiereFactura">¿Requiere factura?</label>
                    <select id="requiereFactura" name="requiereFactura">
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="form-section">
            <h3 class="form-section-title">Servicios Adicionales</h3>
            <div class="form-checkboxes">
                <label class="checkbox-item">
                    <input type="checkbox" name="servicios" value="personalizacion">
                    <span class="checkbox-custom"></span>
                    Personalización con logo
                </label>
                <label class="checkbox-item">
                    <input type="checkbox" name="servicios" value="instalacion" checked>
                    <span class="checkbox-custom"></span>
                    Entrega e instalación
                </label>
                <label class="checkbox-item">
                    <input type="checkbox" name="servicios" value="soporte">
                    <span class="checkbox-custom"></span>
                    Soporte técnico en sitio
                </label>
                <label class="checkbox-item">
                    <input type="checkbox" name="servicios" value="microfono">
                    <span class="checkbox-custom"></span>
                    Micrófono incluido
                </label>
            </div>
        </div>

        <div class="form-group full-width">
            <label for="comentarios">Comentarios adicionales</label>
            <textarea id="comentarios" name="comentarios" rows="4" placeholder="Cuéntanos más detalles sobre tu evento, requerimientos especiales, horarios de montaje, etc."></textarea>
        </div>

        <div class="form-submit">
            <button type="submit" class="btn-submit-form">
                Enviar Solicitud de Cotización
            </button>
            <p class="form-note">Te responderemos en menos de 2 horas por WhatsApp o correo electrónico.</p>
        </div>
    </form>
</section>
```

### Estilos CSS del Formulario

Los estilos deben incluirse en el `<style>` de cada página de producto:

```css
/* Rental Form Styles */
.rental-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.form-section {
    background: var(--secondary);
    padding: 1.5rem;
    border-radius: 12px;
}

.form-section-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
}

.form-row:last-child {
    margin-bottom: 0;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-group label {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--primary);
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 0.875rem 1rem;
    border: 2px solid var(--border);
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: inherit;
    color: var(--text);
    background: var(--white);
    transition: all 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #94a3b8;
}

.form-group textarea {
    resize: vertical;
    min-height: 100px;
}

.form-checkboxes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
}

.checkbox-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: var(--white);
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    color: var(--text);
    transition: all 0.2s;
    border: 2px solid transparent;
}

.checkbox-item:hover {
    border-color: var(--accent);
}

.checkbox-item input[type="checkbox"] {
    display: none;
}

.checkbox-custom {
    width: 20px;
    height: 20px;
    border: 2px solid var(--border);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s;
}

.checkbox-item input[type="checkbox"]:checked + .checkbox-custom {
    background: var(--accent);
    border-color: var(--accent);
}

.checkbox-item input[type="checkbox"]:checked + .checkbox-custom::after {
    content: '✓';
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
}

.form-submit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
}

.btn-submit-form {
    background: linear-gradient(135deg, var(--accent) 0%, #1d4ed8 100%);
    color: white;
    padding: 1.25rem 3rem;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    width: 100%;
    max-width: 400px;
}

.btn-submit-form:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(37, 99, 235, 0.4);
}

.form-note {
    font-size: 0.85rem;
    color: var(--text-light);
    text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }

    .form-checkboxes {
        grid-template-columns: 1fr;
    }

    .form-section {
        padding: 1rem;
    }
}
```

### JavaScript para Envío vía WhatsApp

El formulario envía los datos estructurados a WhatsApp. Añadir este código en el `<script>` de la página:

```javascript
// Rental Form Submission
const rentalForm = document.getElementById('rentalForm');
if (rentalForm) {
    rentalForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const producto = formData.get('producto');
        const nombre = formData.get('nombre');
        const empresa = formData.get('empresa');
        const telefono = formData.get('telefono');
        const email = formData.get('email');
        const fechaEvento = formData.get('fechaEvento');
        const horaEvento = formData.get('horaEvento');
        const tipoEvento = formData.get('tipoEvento');
        const nombreEvento = formData.get('nombreEvento');
        const direccion = formData.get('direccion');
        const nombreFactura = formData.get('nombreFactura');
        const requiereFactura = formData.get('requiereFactura');
        const comentarios = formData.get('comentarios');

        // Get checked services
        const serviciosChecked = [];
        document.querySelectorAll('input[name="servicios"]:checked').forEach(cb => {
            const labels = {
                'personalizacion': 'Personalización con logo',
                'instalacion': 'Entrega e instalación',
                'soporte': 'Soporte técnico en sitio',
                'microfono': 'Micrófono incluido'
            };
            serviciosChecked.push(labels[cb.value] || cb.value);
        });

        // Format date
        const fecha = new Date(fechaEvento);
        const fechaFormateada = fecha.toLocaleDateString('es-MX', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Build WhatsApp message
        let mensaje = `🎤 *SOLICITUD DE RENTA DE PODIUM*\n\n`;
        mensaje += `📦 *Producto:* ${producto}\n\n`;
        mensaje += `👤 *DATOS DE CONTACTO*\n`;
        mensaje += `• Nombre: ${nombre}\n`;
        if (empresa) mensaje += `• Empresa: ${empresa}\n`;
        mensaje += `• Teléfono: ${telefono}\n`;
        mensaje += `• Email: ${email}\n\n`;
        mensaje += `📅 *DATOS DEL EVENTO*\n`;
        mensaje += `• Fecha: ${fechaFormateada}\n`;
        mensaje += `• Hora: ${horaEvento}\n`;
        mensaje += `• Tipo: ${tipoEvento}\n`;
        if (nombreEvento) mensaje += `• Nombre del evento: ${nombreEvento}\n`;
        mensaje += `• Dirección: ${direccion}\n`;
        if (nombreFactura) mensaje += `• Facturar a: ${nombreFactura}\n`;
        mensaje += `• Requiere factura: ${requiereFactura === 'si' ? 'Sí' : 'No'}\n\n`;

        if (serviciosChecked.length > 0) {
            mensaje += `🔧 *SERVICIOS ADICIONALES*\n`;
            serviciosChecked.forEach(s => mensaje += `• ${s}\n`);
            mensaje += `\n`;
        }

        if (comentarios) {
            mensaje += `💬 *COMENTARIOS*\n${comentarios}\n`;
        }

        // Encode and open WhatsApp
        const mensajeEncoded = encodeURIComponent(mensaje);
        const whatsappURL = `https://wa.me/525512345678?text=${mensajeEncoded}`;
        window.open(whatsappURL, '_blank');
    });
}
```

### Actualización del Sidebar

El sidebar debe incluir el enlace al formulario:

```html
<!-- En la navegación del sidebar -->
<ul class="sidebar-nav">
    <li><a href="#descripcion" class="active">Descripción</a></li>
    <li><a href="#especificaciones">Especificaciones</a></li>
    <li><a href="#caracteristicas">Características</a></li>
    <li><a href="#usos">Usos Recomendados</a></li>
    <li><a href="#cotizar">Solicitar Cotización</a></li>  <!-- NUEVO -->
</ul>

<!-- En el CTA del sidebar -->
<div class="sidebar-cta">
    <a href="#cotizar" class="btn-primary">Cotizar Ahora</a>  <!-- Enlaza al formulario -->
    <a href="https://wa.me/525512345678?text=..." class="btn-whatsapp" target="_blank">WhatsApp Directo</a>
</div>
```

### Formato del Mensaje WhatsApp

El mensaje enviado tiene el siguiente formato estructurado:

```
🎤 *SOLICITUD DE RENTA DE PODIUM*

📦 *Producto:* Podium de Madera Negro

👤 *DATOS DE CONTACTO*
• Nombre: Juan Pérez
• Empresa: Empresa SA de CV
• Teléfono: 55 1234 5678
• Email: juan@empresa.com

📅 *DATOS DEL EVENTO*
• Fecha: viernes, 15 de diciembre de 2025
• Hora: 10:00
• Tipo: corporativo
• Nombre del evento: Congreso Anual
• Dirección: Av. Reforma 123, CDMX
• Facturar a: Empresa SA de CV
• Requiere factura: Sí

🔧 *SERVICIOS ADICIONALES*
• Entrega e instalación
• Personalización con logo

💬 *COMENTARIOS*
Necesitamos el podium instalado a las 8am para pruebas de sonido.
```

---

## 10. Metadatos y SEO

### Title Tag

**Plantilla (máx. 60 caracteres):**
```
[Nombre Producto] - Renta de Podiums Profesionales | PODIUMEX
```

**Ejemplo:**
```html
<title>Podium de Acrílico Transparente - Renta de Podiums | PODIUMEX</title>
```

### Meta Description

**Plantilla (máx. 155 caracteres):**
```
Renta el [Nombre]: [beneficio principal]. [Especificación clave]. [Uso principal]. Cotiza ahora.
```

**Ejemplo:**
```html
<meta name="description" content="Renta el Podium de Acrílico Transparente: diseño moderno y elegante. Altura 120cm, acrílico cristal 15mm. Ideal para eventos corporativos. Cotiza ahora.">
```

### Keywords

**Plantilla:**
```html
<meta name="keywords" content="[nombre producto], renta [tipo], podium [material], podium [uso1], podium [uso2], PODIUMEX">
```

### Encabezados (H1-H3)

```
H1: [Nombre del Producto]
    H2: Especificaciones Técnicas
    H2: Características Destacadas
    H2: Usos Recomendados
    H2: ¿Listo para rentar este podium?
```

---

## 10. Ficha Técnica

### Plantilla de Tabla

```markdown
| Especificación | Valor |
|----------------|-------|
| **Altura** | [X] cm |
| **Ancho** | [X] cm |
| **Profundidad** | [X] cm |
| **Peso** | [X-X] kg |
| **Material** | [Material principal] |
| **Grosor** | [X] mm/cm |
| **Acabado** | [Tipo de acabado] |
| **Color** | [Color(es)] |
| **Capacidad de carga** | Hasta [X] kg |
| **Certificaciones** | [Si aplica] |
| **Garantía** | [Período] |
```

### Specs Grid (HTML)

```html
<div class="specs-grid">
    <div class="spec-card">
        <div class="spec-card-value">[X] cm</div>
        <div class="spec-card-label">Altura</div>
    </div>
    <!-- Repetir para cada spec -->
</div>
```

---

## 11. Generación de Reseña

### Estructura de la Reseña Comercial

1. **Lead (1-2 oraciones):** Presenta el producto y su propuesta de valor
2. **Párrafo 1:** Descripción del diseño y materiales
3. **Párrafo 2:** Beneficios funcionales y técnicos
4. **Párrafo 3:** Aplicaciones y usos ideales
5. **Conclusión:** Llamada a la acción

### Plantilla de Reseña

```markdown
## [Nombre del Producto]

[Lead: Oración de apertura que captura la esencia del producto y su beneficio principal.]

### Diseño y Construcción

[Párrafo describiendo materiales, acabados, estética. Incluir dimensiones clave.
Enfatizar calidad y atención al detalle. Usar adjetivos sensoriales pero medidos.]

### Funcionalidad y Beneficios

[Párrafo sobre características técnicas, facilidad de uso, transporte, instalación.
Destacar lo que lo diferencia. Mencionar garantías o servicios incluidos.]

### Aplicaciones Ideales

[Párrafo sobre los contextos de uso: tipos de eventos, industrias, ocasiones.
Ser específico: conferencias ejecutivas, graduaciones, ruedas de prensa, etc.]

### Servicios Incluidos

Con la renta de este podium recibes:
- Entrega e instalación profesional
- Soporte técnico durante tu evento
- Seguro de responsabilidad
- [Servicio adicional si aplica]

**¿Listo para elevar tu próximo evento?** Cotiza ahora y recibe respuesta en menos de 2 horas.
```

### Reglas de Estilo

- **Longitud:** Mínimo 250 palabras para descripción larga
- **Tono:** Profesional, confiable, orientado a beneficios
- **Evitar:** Superlativos excesivos ("el mejor", "único en el mundo")
- **Incluir:** Datos concretos (medidas, materiales, tiempos)
- **Keywords:** Integrar naturalmente, sin forzar
- **Variación:** No repetir estructuras entre productos

---

## 12. Cross-sell y Productos Relacionados

### Estrategia de Selección

| Tipo de Relación | Descripción | Ejemplo |
|------------------|-------------|---------|
| **Complementario** | Mismo estilo, diferente función | Podium + Atril portátil |
| **Alternativa** | Similar función, diferente estilo | Acrílico vs Madera |
| **Upgrade** | Versión superior | Basic → Premium |
| **Mismo material** | Productos del mismo material | Todos los de acrílico |

### Plantilla Sidebar Productos Relacionados

```html
<div class="sidebar-section">
    <h3 class="sidebar-title">Productos Relacionados</h3>
    <div class="related-products">
        <a href="../catalogo.html#[seccion]" class="related-product-card">
            <div class="related-product-thumb">
                <img src="../img/index/[imagen].webp" alt="[Nombre]" loading="lazy">
            </div>
            <div class="related-product-info">
                <span class="related-product-series">[Serie] Series</span>
                <span class="related-product-name">[Nombre Corto]</span>
            </div>
        </a>
        <!-- Repetir 3-4 productos -->
    </div>
    <a href="../catalogo.html" class="sidebar-view-all">Ver catálogo completo →</a>
</div>
```

---

## 13. JSON-LD Schema

### Plantilla Completa

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "[Nombre del Producto]",
    "image": [
        "https://podiumex.com/img/catalogo/[slug].webp",
        "https://podiumex.com/img/catalogo/[slug]-lateral.webp"
    ],
    "description": "[Descripción de 150-300 caracteres]",
    "sku": "[SKU]",
    "mpn": "PDX-[CÓDIGO]",
    "brand": {
        "@type": "Brand",
        "name": "PODIUMEX"
    },
    "manufacturer": {
        "@type": "Organization",
        "name": "PODIUMEX"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://podiumex.com/catalogo/[slug].html",
        "priceCurrency": "MXN",
        "price": "[PRECIO_RENTA_DIA]",
        "priceValidUntil": "[FECHA_YYYY-MM-DD]",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "PODIUMEX"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
    },
    "category": "Podiums para Eventos",
    "material": "[Material]",
    "color": "[Color]",
    "height": {
        "@type": "QuantitativeValue",
        "value": "[ALTURA]",
        "unitCode": "CMT"
    },
    "width": {
        "@type": "QuantitativeValue",
        "value": "[ANCHO]",
        "unitCode": "CMT"
    },
    "depth": {
        "@type": "QuantitativeValue",
        "value": "[FONDO]",
        "unitCode": "CMT"
    },
    "weight": {
        "@type": "QuantitativeValue",
        "value": "[PESO]",
        "unitCode": "KGM"
    }
}
</script>
```

---

## 14. Redes Sociales y Open Graph

### Meta Tags OG

```html
<meta property="og:title" content="[Nombre Producto] - PODIUMEX">
<meta property="og:description" content="[Descripción 100-150 chars para compartir]">
<meta property="og:type" content="product">
<meta property="og:url" content="https://podiumex.com/catalogo/[slug].html">
<meta property="og:image" content="https://podiumex.com/img/catalogo/[slug].webp">
<meta property="og:site_name" content="PODIUMEX">
<meta property="og:locale" content="es_MX">
```

### Copy para Redes Sociales

**Twitter/X (280 chars):**
```
[Nombre Producto]: [beneficio en 1 línea]. Perfecto para [uso]. Renta con entrega en 24hrs. 🎤 Cotiza → podiumex.com/catalogo/[slug]
```

**Facebook/LinkedIn:**
```
Presentamos el [Nombre Producto]

[2-3 líneas describiendo el producto y sus beneficios principales]

✓ Entrega en 24 horas
✓ Instalación incluida
✓ Soporte técnico 24/7

Cotiza ahora: podiumex.com/catalogo/[slug]
```

---

## 15. Checklist de Publicación

### Antes de Publicar

- [ ] **Imágenes**
  - [ ] Imagen principal en `/img/catalogo/[slug].webp`
  - [ ] Imágenes adicionales (mín. 2 recomendadas)
  - [ ] Todas optimizadas (< 150KB)
  - [ ] Textos ALT descriptivos

- [ ] **Card en Catálogo**
  - [ ] Card añadida en sección correcta de `catalogo.html`
  - [ ] `data-category` correcto
  - [ ] Badge apropiado (si aplica)
  - [ ] Descripción corta ≤ 140 caracteres
  - [ ] Specs completas (altura, ancho, material, peso)
  - [ ] 4 características en bullets
  - [ ] Enlace a contacto con `?producto=[slug]`
  - [ ] Enlace a página de detalle

- [ ] **Página de Detalle**
  - [ ] Archivo creado en `/catalogo/[slug].html`
  - [ ] Title tag ≤ 60 caracteres
  - [ ] Meta description ≤ 155 caracteres
  - [ ] Keywords relevantes
  - [ ] H1 único y descriptivo
  - [ ] Breadcrumbs correctos
  - [ ] Galería funcionando
  - [ ] Sidebar con productos relacionados
  - [ ] Servicios incluidos enlazados
  - [ ] CTAs con WhatsApp configurado
  - [ ] Footer y header cargando
  - [ ] Formulario de cotización incluido
  - [ ] Navegación sidebar incluye enlace a #cotizar
  - [ ] Botón "Cotizar Ahora" del sidebar enlaza a #cotizar

- [ ] **Contenido**
  - [ ] Reseña/descripción ≥ 250 palabras
  - [ ] Ficha técnica completa
  - [ ] Usos recomendados (mín. 6 tags)
  - [ ] Sin errores ortográficos

- [ ] **SEO**
  - [ ] JSON-LD implementado
  - [ ] Open Graph tags
  - [ ] URLs amigables

- [ ] **Pruebas**
  - [ ] Visualización desktop correcta
  - [ ] Visualización mobile correcta
  - [ ] Todos los enlaces funcionan
  - [ ] Imágenes cargan correctamente
  - [ ] Formularios/CTAs funcionan

---

## 16. Plantillas Reutilizables

### Variables del Sistema

Cuando se procese un nuevo producto, usar estas variables:

| Variable | Descripción |
|----------|-------------|
| `[NOMBRE]` | Nombre completo del producto |
| `[SLUG]` | Identificador URL (minúsculas, guiones) |
| `[SERIE]` | Premium/Classic/Executive/Signature/Tech |
| `[CATEGORIA]` | acrilico/madera/combinado/negro/led |
| `[ALTURA]` | Altura en cm |
| `[ANCHO]` | Ancho en cm |
| `[FONDO]` | Profundidad en cm |
| `[PESO]` | Peso en kg |
| `[MATERIAL]` | Material principal |
| `[ACABADO]` | Tipo de acabado |
| `[COLOR]` | Color(es) |
| `[DESC_CORTA]` | Descripción ≤ 140 chars |
| `[DESC_LARGA]` | Descripción ≥ 250 palabras |
| `[FEAT_1-4]` | Características principales |
| `[USO_1-10]` | Usos recomendados |

---

## 17. Ejemplo Completo

### Input de Especificaciones

```yaml
nombre: Podium de Acrílico Premium LED
slug: acrilico-premium-led
serie: Tech
categoria: led
altura: 125
ancho: 55
fondo: 45
peso: 25-30
material: Acrílico cristal 20mm con paneles LED RGB
acabado: Transparente con iluminación programable
color: Transparente con LED multicolor
caracteristicas:
  - Iluminación LED RGB programable
  - Control remoto inalámbrico incluido
  - Panel frontal personalizable con logo
  - Base reforzada con sistema antivuelco
usos:
  - Lanzamientos de producto
  - Eventos tecnológicos
  - Galas corporativas
  - Conciertos y espectáculos
  - Conferencias de prensa
  - Eventos nocturnos
```

### Outputs Generados

#### 1. Card HTML

```html
<div class="catalog-card" data-category="led">
    <div class="catalog-card-image">
        <img src="img/catalogo/acrilico-premium-led.webp"
             alt="Podium de Acrílico Premium LED - Vista frontal con iluminación RGB para eventos tecnológicos"
             loading="lazy">
        <span class="catalog-badge new">Nuevo</span>
    </div>
    <div class="catalog-card-content">
        <span class="catalog-series">Tech Series</span>
        <h3>Podium de Acrílico Premium LED</h3>
        <p>Podium de vanguardia con iluminación LED RGB programable. Impacto visual máximo para eventos tecnológicos y lanzamientos.</p>
        <div class="catalog-specs">
            <div class="spec-item">
                <span class="spec-label">Altura</span>
                <span class="spec-value">125 cm</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Ancho</span>
                <span class="spec-value">55 cm</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Material</span>
                <span class="spec-value">Acrílico 20mm + LED</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Peso</span>
                <span class="spec-value">25-30 kg</span>
            </div>
        </div>
        <ul class="catalog-features">
            <li>Iluminación LED RGB programable</li>
            <li>Control remoto inalámbrico incluido</li>
            <li>Panel frontal personalizable con logo</li>
            <li>Base reforzada con sistema antivuelco</li>
        </ul>
        <div class="catalog-pricing">
            <div class="catalog-actions">
                <a href="contacto.html?producto=acrilico-premium-led" class="btn-primary">Cotizar Ahora</a>
                <a href="catalogo/acrilico-premium-led.html" class="btn-secondary">Ver Detalles</a>
            </div>
        </div>
    </div>
</div>
```

#### 2. Meta Tags

```html
<title>Podium de Acrílico Premium LED - Renta de Podiums | PODIUMEX</title>
<meta name="description" content="Renta el Podium de Acrílico Premium LED: iluminación RGB programable, control remoto incluido. Altura 125cm. Ideal para lanzamientos y eventos tech. Cotiza ahora.">
<meta name="keywords" content="podium LED, renta podium iluminado, podium acrilico LED, podium eventos tecnologicos, podium RGB, PODIUMEX">
```

---

## 18. Instrucciones para la IA

### Proceso Automatizado

Cuando el usuario proporcione especificaciones de un nuevo producto, la IA debe:

1. **Leer este documento** (`DOCUMENTO-PRODUCTOS.md`) en su totalidad
2. **Validar especificaciones** - Verificar que están todos los campos obligatorios
3. **Generar en una sola respuesta:**
   - Card HTML completa para `catalogo.html`
   - Página de detalle completa (archivo `.html`)
   - Meta tags SEO
   - Textos ALT para imágenes
   - Reseña comercial (≥250 palabras)
   - Ficha técnica en formato tabla
   - JSON-LD completo
   - Open Graph tags
   - Copy para redes sociales
   - Checklist de publicación marcada

4. **Verificar:**
   - Descripción corta ≤ 140 caracteres
   - Title ≤ 60 caracteres
   - Meta description ≤ 155 caracteres
   - Reseña ≥ 250 palabras
   - Todos los enlaces con rutas correctas

### Formato de Entrega

```markdown
## Nuevo Producto: [Nombre]

### 1. Card para catalogo.html
[Código HTML]

### 2. Página de Detalle
[Archivo HTML completo]

### 3. Imágenes Requeridas
- [ ] img/catalogo/[slug].webp (principal)
- [ ] img/catalogo/[slug]-lateral.webp
- [ ] img/catalogo/[slug]-detalle.webp

### 4. Checklist de Publicación
[Checklist completada]

### 5. Instrucciones de Implementación
1. Copiar card en catalogo.html sección [X]
2. Crear archivo catalogo/[slug].html
3. Subir imágenes a img/catalogo/
4. Verificar enlaces
5. Probar en mobile y desktop
```

---

## 19. FAQ del Editor

### ¿Dónde coloco la card en catalogo.html?

Busca la sección correspondiente a la serie del producto:
- Premium Series → `<div class="category-section" id="premium">`
- Classic Series → `<div class="category-section" id="classic">`
- etc.

Añade la card dentro del `<div class="catalog-grid">` de esa sección.

### ¿Cómo actualizo el contador de modelos?

En cada sección hay un `<span class="category-count">X modelos</span>`. Incrementa el número al añadir un producto.

### ¿Qué hago si el producto no encaja en ninguna serie?

Contacta al administrador para crear una nueva serie o determinar la más apropiada.

### ¿Las imágenes son obligatorias antes de publicar?

Sí. Mínimo la imagen principal. El sitio no debe mostrar imágenes rotas.

### ¿Puedo usar imágenes temporales?

No recomendado. Si es absolutamente necesario, usa un placeholder genérico de PODIUMEX y marca el producto como "Próximamente".

### ¿Cómo pruebo los enlaces de WhatsApp?

El formato es:
```
https://wa.me/525512345678?text=Hola,%20me%20interesa%20el%20[Nombre%20Producto]
```
Verifica que el texto esté URL-encoded (espacios = `%20`).

---

## 21. Historial de Cambios

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 2025-11-28 | Documento inicial completo |
| 1.1 | 2025-11-28 | Añadida sección 9: Formulario de Cotización para Renta. Incluye estructura del formulario, campos requeridos, estilos CSS, JavaScript para envío vía WhatsApp, actualización del sidebar y formato del mensaje. |
| 1.2 | 2025-11-28 | Actualizada sección 7: Nueva estructura de catálogo con grid único. Todas las cards ahora se muestran en un solo grid "Nuestros Podiums" para visualización lado a lado. Añadido comportamiento responsive y pasos para agregar nuevos productos. |
| 1.3 | 2025-11-28 | Añadido nuevo producto: **Podium Madera Caoba y Acrílico** (Executive Series, slug: `madera-caoba-acrilico`). Card en catálogo, página de detalle con formulario de cotización. Contadores actualizados de 3 a 4 productos. |
| 1.4 | 2025-11-28 | Añadido nuevo producto: **Podium Madera Negro Compacto** (Classic Series, slug: `podium-madera-negro-compacto`). Versión compacta: 110cm altura, 40cm ancho, 30cm fondo, 9-11kg peso, acabado negro satinado. Contadores actualizados de 4 a 5 productos. |
| 1.5 | 2025-11-28 | Añadido nuevo producto: **Podium Acrílico Transparente Compacto** (Premium Series, slug: `acrilico-transparente-compacto`). Versión compacta: 100cm altura, 30cm ancho, 25cm fondo, 6-8kg peso, acrílico 5mm, acabado pulido brillante. Ideal para podcasts, streaming y espacios reducidos. Contadores actualizados de 5 a 6 productos. |
| 1.6 | 2025-11-28 | Añadido nuevo producto: **Podium Acrílico Negro Compacto** (Signature Series, slug: `acrilico-negro-compacto`). Versión compacta: 100cm altura, 30cm ancho, 25cm fondo, 6-8kg peso, acrílico negro 5mm, acabado pulido brillante. Look sofisticado para podcasts, streaming y espacios reducidos. Contadores actualizados de 6 a 7 productos. |
| 1.7 | 2025-11-28 | Añadido nuevo producto: **Podium Madera Caoba y Acrílico Compacto** (Executive Series, slug: `madera-caoba-acrilico-compacto`). Versión compacta: 100cm altura, 25cm ancho, 20cm fondo, 7-9kg peso, MDF 1.2cm + Acrílico 5mm, acabado satinado. Ideal para espacios reducidos y presentaciones íntimas. Contadores actualizados de 7 a 8 productos. |

---

## ¿Producto Listo?

Antes de considerar un producto listo para publicación, verifica:

- [ ] Todas las imágenes subidas y optimizadas
- [ ] Card añadida en `catalogo.html` (dentro del grid único)
- [ ] Contador de modelos actualizado
- [ ] Página de detalle creada en `/catalogo/`
- [ ] Formulario de cotización funcionando correctamente
- [ ] Envío a WhatsApp verificado con datos correctos
- [ ] Todos los enlaces verificados
- [ ] Prueba en desktop completada
- [ ] Prueba en mobile completada
- [ ] JSON-LD validado (usar Google Rich Results Test)
- [ ] Sin errores ortográficos
- [ ] Aprobación del responsable

**Si todos los puntos están marcados, el producto está listo para publicación.**

---

*Documento generado automáticamente. Para actualizaciones, contactar al administrador del sitio.*
