# DOCUMENTO OFICIAL: METODOLOGÍA PARA CREACIÓN DE PÁGINAS DE SERVICIOS
## PODIUMEX - Guía de Implementación Estándar

**Versión:** 1.0
**Fecha:** Noviembre 2025
**Documento de referencia:** `entrega-e-instalacion.html`
**Propósito:** Establecer el protocolo oficial para la creación de páginas de servicios individuales que mantengan uniformidad visual, estructural y de conversión en el sitio web de PODIUMEX.

---

## TABLA DE CONTENIDOS

1. [Introducción](#1-introducción)
2. [Estructura Base HTML](#2-estructura-base-html)
3. [Elementos SEO Obligatorios](#3-elementos-seo-obligatorios)
4. [Arquitectura de Contenido](#4-arquitectura-de-contenido)
5. [Módulos Visuales y Componentes](#5-módulos-visuales-y-componentes)
6. [Sistema de Estilos CSS](#6-sistema-de-estilos-css)
7. [Copywriting y Estrategia de Conversión](#7-copywriting-y-estrategia-de-conversión)
8. [Enlaces Internos y Navegación](#8-enlaces-internos-y-navegación)
9. [Checklist de Implementación](#9-checklist-de-implementación)
10. [Validación Final](#10-validación-final)

---

## 1. INTRODUCCIÓN

### 1.1 Propósito del Documento

Este documento establece el **estándar oficial** para la creación de páginas de servicios individuales en el sitio web de PODIUMEX. Cada nueva página de servicio debe seguir esta metodología para garantizar:

- **Uniformidad visual** con el resto del sitio
- **Consistencia en la experiencia del usuario**
- **Optimización SEO homogénea**
- **Tasas de conversión estandarizadas**
- **Mantenibilidad del código**

### 1.2 Diferencia con la Página de Servicios General

Es crítico distinguir entre dos tipos de páginas:

- **`servicios.html`**: Página general que lista TODOS los servicios con cards grandes (service-detail-card)
- **Páginas individuales de servicio** (ej: `entrega-e-instalacion.html`): Páginas dedicadas a UN solo servicio con diseño modular

Esta guía se enfoca exclusivamente en las **páginas individuales de servicio**.

### 1.3 Diseño de Referencia

Todas las páginas de servicios deben replicar el diseño y estructura de:
```
/entrega-e-instalacion.html
```

---

## 2. ESTRUCTURA BASE HTML

### 2.1 Estructura DOCTYPE y HEAD

Toda página de servicio debe comenzar con la siguiente estructura exacta:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Nombre del Servicio] - PODIUMEX</title>
    <meta name="description" content="[Descripción SEO del servicio - máximo 160 caracteres]">
    <link rel="stylesheet" href="css/style.css">
</head>
```

**Reglas obligatorias:**
- `lang="es"` debe estar presente en el tag `<html>`
- El título debe seguir el formato: `[Nombre Servicio] - PODIUMEX`
- La meta description debe ser única, persuasiva y menor a 160 caracteres
- El CSS debe cargarse desde `css/style.css` (ruta relativa)

### 2.2 Estructura BODY Completa

```html
<body>
    <!-- Header Container (cargado dinámicamente) -->
    <div id="header-container"></div>

    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" aria-label="Navegación">
        <!-- contenido breadcrumbs -->
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <!-- contenido hero -->
    </section>

    <!-- Trust Bar -->
    <section class="trust-bar">
        <!-- contenido trust bar -->
    </section>

    <!-- Service Single Content -->
    <section class="service-single-content">
        <!-- todos los módulos del servicio -->
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
        <!-- formulario de cotización integrado -->
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <!-- llamado a la acción final -->
    </section>

    <!-- Footer Container (cargado dinámicamente) -->
    <div id="footer-container"></div>

    <script src="js/app.js"></script>
</body>
</html>
```

**Notas críticas:**
- El header y footer se cargan dinámicamente vía JavaScript desde `header.html` y `footer.html`
- El script `js/app.js` debe cargarse al final del body
- La sección `service-single-content` tiene background gris claro aplicado en CSS
- El formulario de contacto (`contact-form-section`) se inserta DESPUÉS del contenido del servicio y ANTES del CTA final

---

## 3. ELEMENTOS SEO OBLIGATORIOS

### 3.1 Meta Tags en HEAD

```html
<title>[Nombre del Servicio] Express - PODIUMEX</title>
<meta name="description" content="[Descripción persuasiva del servicio que incluya: beneficio principal, cobertura geográfica, garantía o diferenciador clave. Máximo 160 caracteres.]">
```

**Ejemplo real (entrega-e-instalacion.html):**
```html
<title>Entrega e Instalación Express - PODIUMEX</title>
<meta name="description" content="Servicio de entrega express en menos de 24 horas en CDMX, Monterrey y Guadalajara. Instalación profesional incluida en toda la República Mexicana.">
```

### 3.2 Estructura Semántica de Encabezados

**Regla de oro:** Solo debe existir UN `<h1>` por página (en el Hero Section).

**Jerarquía obligatoria:**

```
H1: Título principal del servicio (Hero Section)
│
├─ H2: Subtítulo introductorio (Hero Section)
│
├─ H2: "Servicio de [Nombre] Profesional" (Service Intro Section)
│
├─ H3: "Proceso de [Servicio] en 4 Pasos" (Timeline)
│
├─ H3: Títulos de columnas (Two Column Sections)
│
├─ H3: "Garantía de [Beneficio] 100%" (Banner)
│
├─ H3: "Preguntas Frecuentes" (FAQ Section)
│
└─ H2: "¿Necesitas [acción]?" (CTA Final)
```

### 3.3 Atributos Semánticos Obligatorios

```html
<!-- Navegación de breadcrumbs -->
<nav class="breadcrumbs" aria-label="Navegación">

<!-- Todos los enlaces deben incluir hover states -->
<a href="index.html" class="breadcrumb-link">Inicio</a>

<!-- Íconos SVG deben ser inline y accessibility-friendly -->
<svg class="breadcrumb-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## 4. ARQUITECTURA DE CONTENIDO

### 4.1 Secciones Obligatorias (en orden)

Cada página de servicio individual DEBE contener las siguientes secciones en este orden exacto:

1. **Header Container** (dinámico)
2. **Breadcrumbs**
3. **Hero Section**
4. **Trust Bar**
5. **Service Single Content** (contenedor principal)
   - Service Intro Section
   - Service Timeline
   - Service Two Column (Coverage/Features)
   - Info Cards Grid
   - Service Banner
   - Service Two Column (Schedule/Installation)
   - Service FAQ
6. **Contact Form Section** (formulario de cotización integrado con WhatsApp)
7. **CTA Section**
8. **Footer Container** (dinámico)

### 4.2 Breadcrumbs Navigation

**Propósito:** Proporcionar contexto de navegación y mejorar SEO interno.

```html
<nav class="breadcrumbs" aria-label="Navegación">
    <div class="breadcrumbs-wrapper">
        <a href="index.html" class="breadcrumb-link">Inicio</a>
        <svg class="breadcrumb-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <a href="servicios.html" class="breadcrumb-link">Servicios</a>
        <svg class="breadcrumb-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="breadcrumb-current">[Nombre del Servicio]</span>
    </div>
</nav>
```

**Reglas:**
- Siempre incluir: Inicio → Servicios → Servicio Actual
- El último elemento debe usar `<span class="breadcrumb-current">` (sin enlace)
- Usar SVG inline para las flechas (no imágenes ni íconos de fuentes)

### 4.3 Hero Section

**Estructura completa:**

```html
<section class="hero">
    <div class="hero-content">
        <div class="hero-text">
            <h1>[Nombre del Servicio] <span class="highlight">[Diferenciador Clave]</span></h1>
            <p>[Propuesta de valor principal en 1-2 líneas. Debe responder: ¿Qué ofrecemos? ¿Por qué somos diferentes?]</p>
            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number">[Métrica 1]</span>
                    <span class="stat-label">[Descripción]</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">[Métrica 2]</span>
                    <span class="stat-label">[Descripción]</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">[Métrica 3]</span>
                    <span class="stat-label">[Descripción]</span>
                </div>
            </div>
        </div>
        <div class="hero-intro">
            <h2>[Título descriptivo del servicio]</h2>
            <p>[Párrafo 1: Contexto del servicio. Explicar el problema que resuelve y por qué es importante para el cliente. Incluir palabras clave SEO de forma natural.]</p>
            <p>[Párrafo 2: Detalles técnicos y garantías. Explicar cómo funciona el servicio, qué incluye y qué beneficios concretos obtiene el cliente.]</p>
        </div>
    </div>
</section>
```

**Ejemplo real (entrega-e-instalacion.html):**

```html
<h1>Entrega e <span class="highlight">Instalación Express</span></h1>
<p>Logística profesional con entrega garantizada en menos de 24 horas. Instalación técnica incluida para que tu evento comience sin contratiempos.</p>
```

**Reglas de copywriting para Hero:**
- El `<h1>` debe contener el nombre del servicio + diferenciador
- Usar `<span class="highlight">` para resaltar la palabra clave principal
- Las métricas en `hero-stats` deben ser específicas y verificables
- Los dos párrafos en `hero-intro` deben usar `<strong>` para destacar beneficios clave

### 4.4 Trust Bar

**Propósito:** Generar confianza inmediata con 4 beneficios clave.

```html
<section class="trust-bar">
    <div class="trust-content">
        <div class="trust-item">
            <div class="trust-text">
                <h3>[Beneficio 1]</h3>
                <p>[Descripción breve]</p>
            </div>
        </div>
        <div class="trust-item">
            <div class="trust-text">
                <h3>[Beneficio 2]</h3>
                <p>[Descripción breve]</p>
            </div>
        </div>
        <div class="trust-item">
            <div class="trust-text">
                <h3>[Beneficio 3]</h3>
                <p>[Descripción breve]</p>
            </div>
        </div>
        <div class="trust-item">
            <div class="trust-text">
                <h3>[Beneficio 4]</h3>
                <p>[Descripción breve]</p>
            </div>
        </div>
    </div>
</section>
```

**Reglas:**
- Siempre incluir exactamente 4 trust items
- Cada título debe ser 2-4 palabras máximo
- La descripción debe ser 3-5 palabras máximo
- NO usar iconos (anteriormente se usaban emojis, ahora se eliminaron)

---

## 5. MÓDULOS VISUALES Y COMPONENTES

### 5.1 Service Single Content (Contenedor Principal)

Todas las secciones de contenido específicas del servicio deben estar dentro de:

```html
<section class="service-single-content" style="background: var(--secondary);">
    <!-- Todos los módulos aquí dentro -->
</section>
```

**IMPORTANTE:** El atributo `style="background: var(--secondary);"` es OBLIGATORIO inline.

### 5.2 Service Intro Section

**Propósito:** Introducción profesional al servicio.

```html
<div class="service-intro-section">
    <h2>Servicio de [Nombre del Servicio] Profesional</h2>
    <p>[Párrafo 1: Compromiso con la excelencia. Explicar qué garantiza PODIUMEX en este servicio específico.]</p>
    <p>[Párrafo 2: Adaptabilidad y profesionalismo. Explicar cómo el servicio se adapta a diferentes tipos de eventos.]</p>
</div>
```

**Estructura de copywriting:**
- H2 debe seguir el formato: "Servicio de [Nombre] Profesional"
- Primer párrafo: compromiso y respaldo técnico
- Segundo párrafo: versatilidad y casos de uso

### 5.3 Service Timeline (Proceso en Pasos)

**Propósito:** Visualizar el proceso del servicio en 4 pasos claramente definidos.

```html
<div class="service-timeline">
    <h3>Proceso de [Nombre del Servicio] en 4 Pasos</h3>
    <div class="timeline-steps">
        <div class="timeline-step">
            <div class="timeline-number">1</div>
            <h4>[Nombre del Paso 1]</h4>
            <p>[Descripción breve del paso 1]</p>
        </div>
        <div class="timeline-step">
            <div class="timeline-number">2</div>
            <h4>[Nombre del Paso 2]</h4>
            <p>[Descripción breve del paso 2]</p>
        </div>
        <div class="timeline-step">
            <div class="timeline-number">3</div>
            <h4>[Nombre del Paso 3]</h4>
            <p>[Descripción breve del paso 3]</p>
        </div>
        <div class="timeline-step">
            <div class="timeline-number">4</div>
            <h4>[Nombre del Paso 4]</h4>
            <p>[Descripción breve del paso 4]</p>
        </div>
    </div>
</div>
```

**Reglas:**
- SIEMPRE 4 pasos (ni más ni menos)
- Los números se generan automáticamente con CSS
- Una línea conectora horizontal se dibuja con `::before` en CSS (ya implementado)
- Los títulos (H4) deben ser 2-4 palabras
- Las descripciones deben ser 1 línea máximo

### 5.4 Service Two Column Layout

**Propósito:** Presentar información complementaria en dos columnas.

Se debe usar DOS VECES en cada página de servicio:

**Primera aparición: Cobertura + Características**

```html
<div class="service-two-col">
    <div class="service-col">
        <h3>[Título Columna Izquierda - Ej: "Cobertura Express"]</h3>
        <ul class="service-list">
            <li>[Item 1]</li>
            <li>[Item 2]</li>
            <li>[Item 3]</li>
            <li>[Item 4]</li>
            <li>[Item 5]</li>
        </ul>
    </div>
    <div class="service-col">
        <h3>[Título Columna Derecha - Ej: "Incluido en Cada [Servicio]"]</h3>
        <ul class="service-list">
            <li>[Item 1]</li>
            <li>[Item 2]</li>
            <li>[Item 3]</li>
            <li>[Item 4]</li>
            <li>[Item 5]</li>
            <li>[Item 6]</li>
        </ul>
    </div>
</div>
```

**Segunda aparición: Horarios/Opciones + Proceso Técnico**

```html
<div class="service-two-col">
    <div class="service-col">
        <h3>[Título - Ej: "Horarios Disponibles"]</h3>
        <ul class="service-list">
            <li>[Item 1]</li>
            <li>[Item 2]</li>
            <li>[Item 3]</li>
            <li>[Item 4]</li>
            <li>[Item 5]</li>
        </ul>
    </div>
    <div class="service-col">
        <h3>[Título - Ej: "Proceso de [Servicio]"]</h3>
        <ul class="service-list">
            <li>[Item 1]</li>
            <li>[Item 2]</li>
            <li>[Item 3]</li>
            <li>[Item 4]</li>
            <li>[Item 5]</li>
            <li>[Item 6]</li>
        </ul>
    </div>
</div>
```

**Reglas:**
- Usar `service-list` para listas con checkmarks automáticos (CSS)
- Las columnas son responsivas: en móvil se apilan verticalmente
- Los títulos H3 deben tener barra azul a la izquierda (implementado en CSS)

### 5.5 Info Cards Grid

**Propósito:** Destacar 3 características clave en formato de tarjetas.

```html
<div class="info-cards-grid">
    <div class="info-card">
        <h4>[Título Card 1]</h4>
        <p>[Descripción breve card 1]</p>
    </div>
    <div class="info-card">
        <h4>[Título Card 2]</h4>
        <p>[Descripción breve card 2]</p>
    </div>
    <div class="info-card">
        <h4>[Título Card 3]</h4>
        <p>[Descripción breve card 3]</p>
    </div>
</div>
```

**Reglas:**
- SIEMPRE 3 cards (ni más ni menos)
- NO usar iconos (política actual: sin emojis ni íconos decorativos)
- Los títulos deben ser 2-4 palabras
- Las descripciones deben ser 1 línea máximo
- Las cards tienen hover effect automático (CSS)

### 5.6 Service Banner

**Propósito:** Destacar una garantía o diferenciador clave con fondo azul degradado.

```html
<div class="service-banner">
    <h3>[Garantía o Promesa Principal]</h3>
    <p>[Explicación detallada de la garantía. Puede incluir métricas específicas, condiciones y beneficios concretos para el cliente.]</p>
</div>
```

**Ejemplo real:**
```html
<div class="service-banner">
    <h3>Garantía de Puntualidad 100%</h3>
    <p>Si llegamos más de 30 minutos tarde a la ventana horaria acordada, obtienes un descuento del 20% en tu próxima renta. Nuestro índice de puntualidad es del 99.2% en los últimos 12 meses.</p>
</div>
```

**Reglas:**
- El banner tiene fondo con gradiente azul (CSS: `linear-gradient(135deg, var(--accent) 0%, #60a5fa 100%)`)
- Texto debe ser blanco
- Usar datos específicos y verificables

### 5.7 Service FAQ Section

**Propósito:** Resolver objeciones comunes y mejorar SEO con contenido long-tail.

```html
<div class="service-faq">
    <h3>Preguntas Frecuentes</h3>

    <div class="service-faq-item">
        <div class="service-faq-question">[Pregunta 1]</div>
        <div class="service-faq-answer">[Respuesta detallada 1]</div>
    </div>

    <div class="service-faq-item">
        <div class="service-faq-question">[Pregunta 2]</div>
        <div class="service-faq-answer">[Respuesta detallada 2]</div>
    </div>

    <div class="service-faq-item">
        <div class="service-faq-question">[Pregunta 3]</div>
        <div class="service-faq-answer">[Respuesta detallada 3]</div>
    </div>

    <div class="service-faq-item">
        <div class="service-faq-question">[Pregunta 4]</div>
        <div class="service-faq-answer">[Respuesta detallada 4]</div>
    </div>

    <div class="service-faq-item">
        <div class="service-faq-question">[Pregunta 5]</div>
        <div class="service-faq-answer">[Respuesta detallada 5]</div>
    </div>
</div>
```

**Reglas:**
- Incluir mínimo 5 preguntas
- Las preguntas deben ser en lenguaje natural (cómo hablaría un cliente)
- Las respuestas deben ser específicas, honestas y detalladas
- Usar funcionalidad de acordeón desplegable (implementado con JavaScript)
- Formato: pregunta con ícono "+" que rota a "×" al expandir, respuesta colapsable
- El acordeón se inicializa automáticamente con la función `initializeServiceFAQ()` en `js/app.js`

**Características del acordeón:**
- Estado inicial: todas las respuestas colapsadas (`max-height: 0`)
- Al hacer click: la pregunta actual se expande, las demás se colapsan
- Ícono "+" se transforma en "×" (rotación de 45 grados) al estar activo
- Transiciones suaves con CSS (`transition: max-height 0.3s ease`)
- Hover effect: la pregunta cambia a color azul (`var(--accent)`)

**Estrategia de preguntas:**
1. Cobertura geográfica o disponibilidad
2. Precio o qué incluye el servicio
3. Proceso o logística
4. Garantías o política de problemas
5. Seguimiento post-servicio

### 5.8 Contact Form Section (Formulario de Cotización)

**Propósito:** Capturar leads mediante un formulario integrado que redirige a WhatsApp con información pre-llenada.

```html
<section class="contact-form-section">
    <div class="contact-form-container">
        <div class="contact-form-header">
            <h2>Solicita tu Cotización Express</h2>
            <p>Completa el formulario y recibe una respuesta inmediata por WhatsApp con tu cotización personalizada.</p>
        </div>
        <form id="whatsappForm" class="whatsapp-form">
            <div class="form-row">
                <div class="form-group">
                    <label for="nombre">Nombre completo *</label>
                    <input type="text" id="nombre" name="nombre" required placeholder="Ej: Juan Pérez">
                </div>
                <div class="form-group">
                    <label for="empresa">Empresa / Organización</label>
                    <input type="text" id="empresa" name="empresa" placeholder="Ej: ACME Corporation">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="telefono">Teléfono (WhatsApp) *</label>
                    <input type="tel" id="telefono" name="telefono" required placeholder="Ej: 55 1234 5678">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Ej: contacto@empresa.com">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="ciudad">Ciudad *</label>
                    <select id="ciudad" name="ciudad" required>
                        <option value="">Selecciona tu ciudad</option>
                        <option value="CDMX">Ciudad de México</option>
                        <option value="Monterrey">Monterrey</option>
                        <option value="Guadalajara">Guadalajara</option>
                        <option value="Puebla">Puebla</option>
                        <option value="Querétaro">Querétaro</option>
                        <option value="Otra">Otra ciudad</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="fecha">Fecha del evento *</label>
                    <input type="date" id="fecha" name="fecha" required>
                </div>
            </div>

            <div class="form-group">
                <label for="mensaje">Detalles adicionales (opcional)</label>
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Cuéntanos más sobre tu evento: tipo de evento, número de asistentes, requerimientos especiales, etc."></textarea>
            </div>

            <div class="form-submit">
                <button type="submit" class="btn-submit-whatsapp">
                    Enviar Cotización por WhatsApp
                </button>
                <p class="form-note">Al enviar, serás redirigido a WhatsApp con tu información pre-llenada</p>
            </div>
        </form>
    </div>
</section>
```

**Ubicación del formulario:**
- Insertar DESPUÉS de la sección `service-single-content`
- Insertar ANTES de la sección `cta-section`

**Características del diseño:**

1. **Fondo decorativo con gradiente:**
   - Gradiente azul claro: `linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)`
   - Elementos decorativos circulares con `::before` y `::after`
   - Efecto de profundidad y profesionalismo

2. **Contenedor del formulario:**
   - Fondo blanco con sombra elevada
   - Borde sutil azul: `border: 1px solid rgba(37, 99, 235, 0.1)`
   - Border-radius: 20px para esquinas suaves
   - Padding generoso: 3.5rem

3. **Header del formulario:**
   - Título con subrayado decorativo (::after pseudo-element)
   - Gradiente en el subrayado: azul a celeste
   - Separación con borde inferior gris

4. **Campos del formulario:**
   - Background sutil gris: `#fafbfc`
   - Bordes suaves: `2px solid #e5e7eb`
   - Border-radius: 10px
   - Focus state: fondo blanco + sombra azul + elevación sutil
   - Hover state: cambio de color de borde
   - Placeholders optimizados en color gris medio

5. **Botón de envío:**
   - Gradiente verde WhatsApp: `linear-gradient(135deg, #25D366 0%, #1da851 100%)`
   - Efecto de brillo animado con `::before` pseudo-element
   - Hover: elevación con sombra incrementada
   - Padding generoso: 1.4rem 3.5rem
   - Sombra verde prominente: `box-shadow: 0 6px 24px rgba(37, 211, 102, 0.35)`

**Funcionalidad JavaScript:**

La función `initializeWhatsAppForm()` en `js/app.js` maneja el envío:

```javascript
function initializeWhatsAppForm() {
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const empresa = document.getElementById('empresa').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const ciudad = document.getElementById('ciudad').value;
            const fecha = document.getElementById('fecha').value;
            const mensaje = document.getElementById('mensaje').value;

            // Formatear fecha
            const fechaFormateada = fecha ? new Date(fecha + 'T00:00:00').toLocaleDateString('es-MX', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }) : '';

            // Construir mensaje para WhatsApp
            let whatsappMessage = `Hola, solicito cotización para [servicio específico]:%0A%0A`;
            whatsappMessage += `👤 *Nombre:* ${nombre}%0A`;

            if (empresa) {
                whatsappMessage += `🏢 *Empresa:* ${empresa}%0A`;
            }

            whatsappMessage += `📱 *Teléfono:* ${telefono}%0A`;

            if (email) {
                whatsappMessage += `📧 *Email:* ${email}%0A`;
            }

            whatsappMessage += `📍 *Ciudad:* ${ciudad}%0A`;
            whatsappMessage += `📅 *Fecha del evento:* ${fechaFormateada}%0A`;

            if (mensaje) {
                whatsappMessage += `%0A📝 *Detalles adicionales:*%0A${mensaje}%0A`;
            }

            whatsappMessage += `%0AGracias por su atención.`;

            // Número de WhatsApp (actualizar según sea necesario)
            const whatsappNumber = '525512345678';

            // Abrir WhatsApp en nueva pestaña
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
        });
    }
}
```

**Reglas para el formulario:**

1. **Campos obligatorios:**
   - Nombre completo
   - Teléfono (WhatsApp)
   - Ciudad
   - Fecha del evento

2. **Campos opcionales:**
   - Empresa/Organización
   - Email
   - Detalles adicionales

3. **Personalización por servicio:**
   - Cambiar el título según el servicio: "Solicita tu Cotización Express"
   - Ajustar el mensaje de WhatsApp pre-llenado para que mencione el servicio específico
   - En la línea 278 de `js/app.js`: actualizar el texto del servicio

4. **Responsive:**
   - En móvil: los campos se apilan en una columna
   - Padding reducido en contenedor
   - Botón adaptado a ancho completo

**Ventajas del diseño integrado:**

- ✅ Fondo decorativo que genera confianza visual
- ✅ Formulario elevado con sombras profesionales
- ✅ Estados interactivos (hover, focus) bien definidos
- ✅ Botón con efecto de brillo animado
- ✅ Integración perfecta con el esquema de colores del sitio
- ✅ Conversión directa a WhatsApp con información estructurada
- ✅ Experiencia de usuario fluida sin salir del sitio web

---

## 6. SISTEMA DE ESTILOS CSS

### 6.1 Clases CSS Disponibles

Todas las páginas de servicio individuales usan las siguientes clases CSS definidas en `css/style.css`:

**Contenedores principales:**
- `.service-single-content` - Contenedor principal (max-width: 1200px)
- `.service-intro-section` - Card introductoria con fondo blanco
- `.service-timeline` - Contenedor del timeline con 4 pasos
- `.service-two-col` - Layout de dos columnas
- `.info-cards-grid` - Grid de 3 tarjetas
- `.service-banner` - Banner destacado con gradiente azul
- `.service-faq` - Sección de preguntas frecuentes
- `.contact-form-section` - Contenedor del formulario con fondo gradiente azul
- `.contact-form-container` - Card blanco del formulario con sombra

**Elementos de timeline:**
- `.timeline-steps` - Grid de 4 columnas con línea conectora
- `.timeline-step` - Cada paso individual
- `.timeline-number` - Círculo numerado azul
- `.timeline-step h4` - Título del paso
- `.timeline-step p` - Descripción del paso

**Elementos de columnas:**
- `.service-col` - Cada columna individual con fondo blanco
- `.service-col h3` - Título con barra azul a la izquierda (::before)
- `.service-list` - Lista con checkmarks automáticos
- `.service-list li` - Item individual con checkmark azul (::before)

**Elementos de info cards:**
- `.info-card` - Tarjeta individual con hover effect
- `.info-card h4` - Título de la tarjeta
- `.info-card p` - Descripción de la tarjeta

**Elementos de FAQ:**
- `.service-faq-item` - Cada pregunta/respuesta con funcionalidad acordeón
- `.service-faq-question` - Pregunta con ícono "+" que rota al expandir
- `.service-faq-answer` - Respuesta colapsable (max-height: 0 por defecto)
- `.service-faq-item.active` - Estado expandido del acordeón

**Elementos del formulario de contacto:**
- `.contact-form-header` - Header del formulario con título y descripción
- `.whatsapp-form` - Formulario principal
- `.form-row` - Fila de dos campos (grid 2 columnas)
- `.form-group` - Grupo de label + input/select/textarea
- `.form-group label` - Label del campo
- `.form-group input/select/textarea` - Campos del formulario con estados hover/focus
- `.form-submit` - Contenedor del botón de envío
- `.btn-submit-whatsapp` - Botón verde WhatsApp con efecto de brillo
- `.form-note` - Nota explicativa debajo del botón

### 6.2 Variables CSS Utilizadas

El sitio usa CSS Custom Properties definidas en `:root`:

```css
--primary: #1a1a1a (negro principal)
--accent: #2563eb (azul principal)
--white: #ffffff
--secondary: #f5f7fa (gris claro de fondo)
--text: #333333 (texto principal)
--text-light: #666666 (texto secundario)
--border: #e5e7eb (bordes sutiles)
--success: #10b981 (verde para checkmarks)
```

**Regla crítica:** NUNCA usar colores hexadecimales directos en el HTML. Siempre usar `var(--nombre-variable)`.

### 6.3 Responsive Breakpoints

El CSS incluye media queries para:

**Tablet (max-width: 1024px):**
- `.service-two-col` cambia a 1 columna
- `.timeline-steps` cambia a 2 columnas (2x2)
- `.info-cards-grid` cambia a 2 columnas

**Mobile (max-width: 768px):**
- Todos los grids cambian a 1 columna
- Padding reducido en cards y secciones
- Timeline se apila verticalmente (sin línea conectora)

**NO es necesario escribir CSS adicional para responsive** - ya está implementado.

---

## 7. COPYWRITING Y ESTRATEGIA DE CONVERSIÓN

### 7.1 Principios de Copywriting

Cada página de servicio debe seguir estos principios:

**1. Enfoque en beneficios, no características**
❌ Mal: "Tenemos camiones con GPS"
✅ Bien: "Rastreo en tiempo real para que sepas exactamente cuándo llega tu podium"

**2. Usar números específicos**
❌ Mal: "Entrega rápida"
✅ Bien: "Entrega en menos de 24 horas"

**3. Incluir garantías concretas**
❌ Mal: "Servicio confiable"
✅ Bien: "Garantía de puntualidad del 100%: si llegamos tarde más de 30 minutos, obtienes 20% de descuento"

**4. Lenguaje profesional pero accesible**
- Evitar jerga técnica innecesaria
- Usar segunda persona ("tu evento", "tu podium")
- Ser específico y directo

### 7.2 Estructura de Contenido por Sección

**Hero Section (H1 + párrafo inicial):**
- Longitud: 15-25 palabras
- Incluir: nombre del servicio + beneficio principal + diferenciador clave
- Palabras clave SEO: al inicio del título

**Hero Intro (2 párrafos descriptivos):**
- Párrafo 1: 40-60 palabras - Contexto y problema que resuelve
- Párrafo 2: 40-60 palabras - Solución técnica y garantías
- Usar `<strong>` para destacar 3-5 conceptos clave por párrafo

**Service Intro Section:**
- Párrafo 1: Compromiso con excelencia (30-40 palabras)
- Párrafo 2: Versatilidad del servicio (30-40 palabras)

**Timeline (4 pasos):**
- Título de cada paso: 2-4 palabras
- Descripción: 8-12 palabras

**Two Column Lists:**
- 5-6 items por columna
- Cada item: 4-8 palabras máximo
- Usar verbos de acción cuando sea posible

**Service Banner:**
- Título: 3-5 palabras (debe incluir "Garantía" o "100%")
- Descripción: 30-50 palabras con datos específicos

**FAQ:**
- Pregunta: 6-12 palabras en forma interrogativa
- Respuesta: 30-60 palabras, específica y honesta

### 7.3 Llamados a la Acción (CTAs)

Cada página debe tener exactamente 1 CTA al final:

```html
<section class="cta-section">
    <div class="cta-content">
        <h2>¿[Pregunta motivadora relacionada con urgencia o necesidad]?</h2>
        <p>[Promesa de valor + facilidad del proceso + garantía].</p>
        <div class="cta-buttons">
            <a href="https://wa.me/525512345678?text=Hola,%20necesito%20[servicio específico]" class="btn-whatsapp" target="_blank">
                WhatsApp
            </a>
            <a href="tel:+525512345678" class="btn-call">
                Llamar Ahora
            </a>
        </div>
    </div>
</section>
```

**Reglas para CTAs:**
- H2 debe ser una pregunta directa
- Párrafo debe resumir beneficios clave en 1 línea
- WhatsApp link debe incluir mensaje pre-escrito específico del servicio
- Mantener números de teléfono actualizados

### 7.4 Densidad de Palabras Clave SEO

Cada página debe incluir la palabra clave principal (nombre del servicio) con esta densidad:

- **H1:** 1 vez (obligatorio)
- **Meta description:** 1 vez
- **H2-H3:** 3-4 veces distribuidas
- **Cuerpo del texto:** 6-8 veces de forma natural
- **Variaciones de la palabra clave:** 4-6 veces

**Palabras clave secundarias a incluir:**
- "PODIUMEX" → 3-4 veces
- "profesional" → 2-3 veces
- Ciudades cubiertas (CDMX, Monterrey, Guadalajara) → 1-2 veces
- "garantía" → 1-2 veces

---

## 8. ENLACES INTERNOS Y NAVEGACIÓN

### 8.1 Breadcrumbs (Navegación Estructural)

Obligatorio en todas las páginas de servicio:

```html
<nav class="breadcrumbs" aria-label="Navegación">
    <div class="breadcrumbs-wrapper">
        <a href="index.html" class="breadcrumb-link">Inicio</a>
        <svg class="breadcrumb-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <a href="servicios.html" class="breadcrumb-link">Servicios</a>
        <svg class="breadcrumb-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="breadcrumb-current">[Nombre del Servicio]</span>
    </div>
</nav>
```

### 8.2 Enlaces en Header (Dinámico)

El header se carga desde `header.html` y contiene un dropdown de servicios:

```html
<li class="dropdown">
    <a href="servicios.html" class="dropdown-toggle">
        Servicios
        <span class="dropdown-arrow">▼</span>
    </a>
    <div class="dropdown-menu">
        <a href="entrega-e-instalacion.html">Entrega e Instalación</a>
        <a href="[nuevo-servicio].html">[Nombre Nuevo Servicio]</a>
        <!-- Agregar nuevo servicio aquí -->
        <a href="servicios.html">Ver Todos los Servicios</a>
    </div>
</li>
```

**Acción requerida al crear un nuevo servicio:**
Actualizar `header.html` agregando el nuevo servicio en el dropdown menu.

### 8.3 Enlaces en Footer (Dinámico)

El footer se carga desde `footer.html` y tiene una sección de servicios:

```html
<div class="footer-section">
    <h4>Servicios</h4>
    <ul>
        <li><a href="entrega-e-instalacion.html">Entrega e Instalación</a></li>
        <li><a href="[nuevo-servicio].html">[Nombre Nuevo Servicio]</a></li>
        <!-- Agregar nuevo servicio aquí -->
        <li><a href="servicios.html">Ver Todos los Servicios</a></li>
    </ul>
</div>
```

**Acción requerida al crear un nuevo servicio:**
Actualizar `footer.html` agregando el nuevo servicio en la lista.

### 8.4 Actualizar servicios.html

Cuando se crea una nueva página de servicio individual, también debe crearse una tarjeta en `servicios.html`:

```html
<div class="service-detail-card">
    <div class="service-detail-image"></div>
    <div class="service-detail-content">
        <span class="service-badge">[Categoría del Servicio]</span>
        <h2>[Nombre del Servicio]</h2>
        <p class="service-intro">[Descripción del servicio - 2-3 líneas]</p>

        <div class="service-features">
            <h3>¿Qué Incluye?</h3>
            <ul>
                <li>[Característica 1]</li>
                <li>[Característica 2]</li>
                <li>[Característica 3]</li>
                <li>[Característica 4]</li>
            </ul>
        </div>

        <div class="service-process">
            <h3>¿Cómo Funciona?</h3>
            <div class="process-steps">
                <div class="process-step">
                    <span class="step-number">1</span>
                    <p>[Paso 1]</p>
                </div>
                <div class="process-step">
                    <span class="step-number">2</span>
                    <p>[Paso 2]</p>
                </div>
                <div class="process-step">
                    <span class="step-number">3</span>
                    <p>[Paso 3]</p>
                </div>
                <div class="process-step">
                    <span class="step-number">4</span>
                    <p>[Paso 4]</p>
                </div>
            </div>
        </div>

        <div style="margin-top: 2rem;">
            <a href="[nuevo-servicio].html" class="btn-primary" style="display: inline-block; text-decoration: none;">Ver Detalles Completos del Servicio</a>
        </div>
    </div>
</div>
```

### 8.5 Actualizar index.html

También agregar una tarjeta en la sección de servicios de `index.html`:

```html
<a href="[nuevo-servicio].html" class="service-card">
    <div class="service-image"></div>
    <div class="service-content">
        <h3>[Nombre del Servicio]</h3>
        <p>[Descripción breve - 1 línea]</p>
    </div>
</a>
```

---

## 9. CHECKLIST DE IMPLEMENTACIÓN

Usar este checklist al crear una nueva página de servicio:

### 9.1 Estructura HTML Base

- [ ] Archivo creado con nombre en formato kebab-case: `nombre-del-servicio.html`
- [ ] DOCTYPE y estructura HTML5 correcta
- [ ] `<html lang="es">`
- [ ] Meta charset UTF-8
- [ ] Meta viewport para responsive
- [ ] Title tag con formato: `[Nombre Servicio] - PODIUMEX`
- [ ] Meta description única (máx. 160 caracteres)
- [ ] Link a `css/style.css`
- [ ] Script a `js/app.js` al final del body

### 9.2 Secciones Obligatorias

- [ ] Header container (`<div id="header-container"></div>`)
- [ ] Breadcrumbs con navegación correcta
- [ ] Hero Section con H1 único
- [ ] Hero stats con 3 métricas
- [ ] Hero intro con 2 párrafos
- [ ] Trust Bar con 4 items
- [ ] Service Single Content (con background aplicado en CSS)
- [ ] Service Intro Section con 2 párrafos
- [ ] Service Timeline con 4 pasos
- [ ] Service Two Column (primera aparición)
- [ ] Info Cards Grid con 3 tarjetas
- [ ] Service Banner con garantía
- [ ] Service Two Column (segunda aparición)
- [ ] Service FAQ con mínimo 5 preguntas (funcionalidad acordeón incluida)
- [ ] Contact Form Section con formulario de WhatsApp integrado
- [ ] Formulario con todos los campos requeridos (nombre, teléfono, ciudad, fecha)
- [ ] Función JavaScript `initializeWhatsAppForm()` funcionando correctamente
- [ ] Mensaje de WhatsApp personalizado para el servicio específico
- [ ] CTA Section con botones WhatsApp y teléfono
- [ ] Footer container (`<div id="footer-container"></div>`)

### 9.3 SEO y Contenido

- [ ] Solo un H1 en toda la página
- [ ] Jerarquía de encabezados correcta (H1 → H2 → H3)
- [ ] Palabras clave principal mencionada 8-12 veces
- [ ] "PODIUMEX" mencionado 3-4 veces
- [ ] Uso de `<strong>` para destacar beneficios clave
- [ ] Todos los párrafos sin justificación (`text-align: justify` eliminado)
- [ ] Copywriting enfocado en beneficios, no características
- [ ] Números específicos y verificables en métricas
- [ ] Garantías concretas mencionadas

### 9.4 Enlaces y Navegación

- [ ] Breadcrumbs linkeando a `index.html` y `servicios.html`
- [ ] Links de WhatsApp con mensaje pre-escrito específico del servicio
- [ ] Link de teléfono funcional en CTA
- [ ] Actualizado `header.html` con nuevo servicio en dropdown
- [ ] Actualizado `footer.html` con nuevo servicio en lista
- [ ] Creada tarjeta en `servicios.html` con link al nuevo servicio
- [ ] Creada tarjeta en `index.html` con link al nuevo servicio

### 9.5 Estilos y Diseño

- [ ] Todas las clases CSS usan las definidas en `style.css` (sin CSS custom)
- [ ] Uso correcto de variables CSS (`var(--primary)`, `var(--accent)`, etc.)
- [ ] NO hay iconos ni emojis en el contenido
- [ ] Info Cards sin `info-card-icon`
- [ ] Service Banner con fondo gradiente azul
- [ ] Checkmarks automáticos en `service-list`
- [ ] Timeline con línea conectora horizontal (automática en desktop)

### 9.6 Testing Responsive

- [ ] Probado en desktop (1920px)
- [ ] Probado en tablet (1024px)
- [ ] Probado en móvil (375px)
- [ ] Timeline se apila correctamente en móvil
- [ ] Two columns se apilan en tablet
- [ ] Info Cards se adaptan a 2 columnas en tablet y 1 en móvil
- [ ] Breadcrumbs responsivos con texto reducido en móvil

---

## 10. VALIDACIÓN FINAL

### 10.1 Validación Técnica

Antes de considerar completa una página de servicio, ejecutar:

**1. Validación HTML:**
- Usar: https://validator.w3.org/
- Debe pasar sin errores críticos

**2. Validación de Enlaces:**
- Verificar que todos los enlaces internos funcionen
- Verificar que el link de WhatsApp abra correctamente con mensaje pre-escrito
- Verificar que el link de teléfono funcione en móvil

**3. Validación SEO:**
- Title tag único (no duplicado con otras páginas)
- Meta description única y persuasiva
- H1 único en la página
- Jerarquía de encabezados lógica (H1 → H2 → H3, sin saltos)
- Densidad de palabras clave apropiada (1-2% del contenido total)

**4. Validación de Accesibilidad:**
- Atributo `lang="es"` presente
- Atributo `aria-label` en navegación de breadcrumbs
- Contraste de colores adecuado (automático con variables CSS)

### 10.2 Validación de Contenido

**Verificar que cada sección contenga:**

- [ ] Hero Section: título impactante + propuesta de valor + 3 métricas verificables
- [ ] Trust Bar: 4 beneficios relevantes al servicio específico
- [ ] Service Intro: compromiso + versatilidad del servicio
- [ ] Timeline: 4 pasos lógicos y secuenciales
- [ ] Two Column 1: cobertura/opciones + características incluidas
- [ ] Info Cards: 3 diferenciadores clave (sin iconos)
- [ ] Banner: garantía específica con datos reales
- [ ] Two Column 2: horarios/modalidades + proceso técnico
- [ ] FAQ: 5+ preguntas resolviendo objeciones principales

### 10.3 Validación de Conversión

**Elementos de conversión obligatorios:**

- [ ] Mínimo 1 mención de garantía o política de satisfacción
- [ ] Datos específicos (números, porcentajes, tiempos) en lugar de adjetivos vagos
- [ ] CTA visible y claro al final de la página
- [ ] Mensaje de WhatsApp personalizado al servicio específico
- [ ] Tono profesional pero cercano (uso de "tu/tus")
- [ ] Beneficios destacados con `<strong>` en hero intro

### 10.4 Checklist de Publicación

Antes de considerar el servicio "publicado":

- [ ] Página individual creada y funcionando correctamente
- [ ] Header actualizado con link en dropdown de Servicios
- [ ] Footer actualizado con link en sección de Servicios
- [ ] Tarjeta creada en `servicios.html` con botón "Ver Detalles Completos"
- [ ] Tarjeta creada en `index.html` en sección de Servicios
- [ ] Probado en navegadores: Chrome, Firefox, Safari
- [ ] Probado en dispositivos: Desktop, Tablet, Móvil
- [ ] Tiempos de carga < 3 segundos
- [ ] Sin errores de consola JavaScript

---

## APÉNDICE A: PLANTILLA COMPLETA HTML

A continuación, la estructura HTML completa que debe copiarse y adaptarse:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Nombre del Servicio] - PODIUMEX</title>
    <meta name="description" content="[Descripción SEO optimizada - máximo 160 caracteres]">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header Container (cargado dinámicamente) -->
    <div id="header-container"></div>

    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" aria-label="Navegación">
        <div class="breadcrumbs-wrapper">
            <a href="index.html" class="breadcrumb-link">Inicio</a>
            <svg class="breadcrumb-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a href="servicios.html" class="breadcrumb-link">Servicios</a>
            <svg class="breadcrumb-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="breadcrumb-current">[Nombre del Servicio]</span>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>[Nombre] <span class="highlight">[Diferenciador]</span></h1>
                <p>[Propuesta de valor principal - 1-2 líneas]</p>
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-number">[Métrica 1]</span>
                        <span class="stat-label">[Label 1]</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">[Métrica 2]</span>
                        <span class="stat-label">[Label 2]</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">[Métrica 3]</span>
                        <span class="stat-label">[Label 3]</span>
                    </div>
                </div>
            </div>
            <div class="hero-intro">
                <h2>[Título Descriptivo del Servicio]</h2>
                <p>[Párrafo 1: Contexto y problema que resuelve. Usar <strong> para destacar conceptos clave.]</p>
                <p>[Párrafo 2: Solución técnica y garantías. Usar <strong> para destacar beneficios.]</p>
            </div>
        </div>
    </section>

    <!-- Trust Bar -->
    <section class="trust-bar">
        <div class="trust-content">
            <div class="trust-item">
                <div class="trust-text">
                    <h3>[Beneficio 1]</h3>
                    <p>[Descripción]</p>
                </div>
            </div>
            <div class="trust-item">
                <div class="trust-text">
                    <h3>[Beneficio 2]</h3>
                    <p>[Descripción]</p>
                </div>
            </div>
            <div class="trust-item">
                <div class="trust-text">
                    <h3>[Beneficio 3]</h3>
                    <p>[Descripción]</p>
                </div>
            </div>
            <div class="trust-item">
                <div class="trust-text">
                    <h3>[Beneficio 4]</h3>
                    <p>[Descripción]</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Service Single Content -->
    <section class="service-single-content" style="background: var(--secondary);">

        <!-- Intro Section -->
        <div class="service-intro-section">
            <h2>Servicio de [Nombre] Profesional</h2>
            <p>[Párrafo 1: Compromiso con la excelencia]</p>
            <p>[Párrafo 2: Versatilidad y adaptabilidad]</p>
        </div>

        <!-- Timeline Process -->
        <div class="service-timeline">
            <h3>Proceso de [Servicio] en 4 Pasos</h3>
            <div class="timeline-steps">
                <div class="timeline-step">
                    <div class="timeline-number">1</div>
                    <h4>[Paso 1]</h4>
                    <p>[Descripción paso 1]</p>
                </div>
                <div class="timeline-step">
                    <div class="timeline-number">2</div>
                    <h4>[Paso 2]</h4>
                    <p>[Descripción paso 2]</p>
                </div>
                <div class="timeline-step">
                    <div class="timeline-number">3</div>
                    <h4>[Paso 3]</h4>
                    <p>[Descripción paso 3]</p>
                </div>
                <div class="timeline-step">
                    <div class="timeline-number">4</div>
                    <h4>[Paso 4]</h4>
                    <p>[Descripción paso 4]</p>
                </div>
            </div>
        </div>

        <!-- Two Column Section - Coverage/Features -->
        <div class="service-two-col">
            <div class="service-col">
                <h3>[Título Columna 1]</h3>
                <ul class="service-list">
                    <li>[Item 1]</li>
                    <li>[Item 2]</li>
                    <li>[Item 3]</li>
                    <li>[Item 4]</li>
                    <li>[Item 5]</li>
                </ul>
            </div>
            <div class="service-col">
                <h3>[Título Columna 2]</h3>
                <ul class="service-list">
                    <li>[Item 1]</li>
                    <li>[Item 2]</li>
                    <li>[Item 3]</li>
                    <li>[Item 4]</li>
                    <li>[Item 5]</li>
                    <li>[Item 6]</li>
                </ul>
            </div>
        </div>

        <!-- Info Cards -->
        <div class="info-cards-grid">
            <div class="info-card">
                <h4>[Título Card 1]</h4>
                <p>[Descripción card 1]</p>
            </div>
            <div class="info-card">
                <h4>[Título Card 2]</h4>
                <p>[Descripción card 2]</p>
            </div>
            <div class="info-card">
                <h4>[Título Card 3]</h4>
                <p>[Descripción card 3]</p>
            </div>
        </div>

        <!-- Banner -->
        <div class="service-banner">
            <h3>[Garantía Principal]</h3>
            <p>[Descripción detallada de la garantía con datos específicos]</p>
        </div>

        <!-- Two Column Section - Schedule/Process -->
        <div class="service-two-col">
            <div class="service-col">
                <h3>[Título Columna 1]</h3>
                <ul class="service-list">
                    <li>[Item 1]</li>
                    <li>[Item 2]</li>
                    <li>[Item 3]</li>
                    <li>[Item 4]</li>
                    <li>[Item 5]</li>
                </ul>
            </div>
            <div class="service-col">
                <h3>[Título Columna 2]</h3>
                <ul class="service-list">
                    <li>[Item 1]</li>
                    <li>[Item 2]</li>
                    <li>[Item 3]</li>
                    <li>[Item 4]</li>
                    <li>[Item 5]</li>
                    <li>[Item 6]</li>
                </ul>
            </div>
        </div>

        <!-- FAQ Section -->
        <div class="service-faq">
            <h3>Preguntas Frecuentes</h3>

            <div class="service-faq-item">
                <div class="service-faq-question">[Pregunta 1]</div>
                <div class="service-faq-answer">[Respuesta 1]</div>
            </div>

            <div class="service-faq-item">
                <div class="service-faq-question">[Pregunta 2]</div>
                <div class="service-faq-answer">[Respuesta 2]</div>
            </div>

            <div class="service-faq-item">
                <div class="service-faq-question">[Pregunta 3]</div>
                <div class="service-faq-answer">[Respuesta 3]</div>
            </div>

            <div class="service-faq-item">
                <div class="service-faq-question">[Pregunta 4]</div>
                <div class="service-faq-answer">[Respuesta 4]</div>
            </div>

            <div class="service-faq-item">
                <div class="service-faq-question">[Pregunta 5]</div>
                <div class="service-faq-answer">[Respuesta 5]</div>
            </div>
        </div>

    </section>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
        <div class="contact-form-container">
            <div class="contact-form-header">
                <h2>Solicita tu Cotización Express</h2>
                <p>Completa el formulario y recibe una respuesta inmediata por WhatsApp con tu cotización personalizada.</p>
            </div>
            <form id="whatsappForm" class="whatsapp-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nombre">Nombre completo *</label>
                        <input type="text" id="nombre" name="nombre" required placeholder="Ej: Juan Pérez">
                    </div>
                    <div class="form-group">
                        <label for="empresa">Empresa / Organización</label>
                        <input type="text" id="empresa" name="empresa" placeholder="Ej: ACME Corporation">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="telefono">Teléfono (WhatsApp) *</label>
                        <input type="tel" id="telefono" name="telefono" required placeholder="Ej: 55 1234 5678">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Ej: contacto@empresa.com">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="ciudad">Ciudad *</label>
                        <select id="ciudad" name="ciudad" required>
                            <option value="">Selecciona tu ciudad</option>
                            <option value="CDMX">Ciudad de México</option>
                            <option value="Monterrey">Monterrey</option>
                            <option value="Guadalajara">Guadalajara</option>
                            <option value="Puebla">Puebla</option>
                            <option value="Querétaro">Querétaro</option>
                            <option value="Otra">Otra ciudad</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="fecha">Fecha del evento *</label>
                        <input type="date" id="fecha" name="fecha" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="mensaje">Detalles adicionales (opcional)</label>
                    <textarea id="mensaje" name="mensaje" rows="4" placeholder="Cuéntanos más sobre tu evento: tipo de evento, número de asistentes, requerimientos especiales, etc."></textarea>
                </div>

                <div class="form-submit">
                    <button type="submit" class="btn-submit-whatsapp">
                        Enviar Cotización por WhatsApp
                    </button>
                    <p class="form-note">Al enviar, serás redirigido a WhatsApp con tu información pre-llenada</p>
                </div>
            </form>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="cta-content">
            <h2>¿[Pregunta motivadora]?</h2>
            <p>[Promesa de valor + facilidad + garantía]</p>
            <div class="cta-buttons">
                <a href="https://wa.me/525512345678?text=Hola,%20necesito%20[servicio específico]" class="btn-whatsapp" target="_blank">
                    WhatsApp
                </a>
                <a href="tel:+525512345678" class="btn-call">
                    Llamar Ahora
                </a>
            </div>
        </div>
    </section>

    <!-- Footer Container (cargado dinámicamente) -->
    <div id="footer-container"></div>

    <script src="js/app.js"></script>
</body>
</html>
```

---

## APÉNDICE B: GUÍA RÁPIDA DE NOMBRES DE ARCHIVOS

### Convención de Nombres

Todos los archivos de servicios individuales deben seguir el formato:

```
[nombre-del-servicio].html
```

**Reglas:**
- Todo en minúsculas
- Palabras separadas por guiones (`-`)
- Sin espacios, acentos ni caracteres especiales
- Sin prefijos ni sufijos adicionales

**Ejemplos correctos:**
- `entrega-e-instalacion.html` ✅
- `personalizacion-total.html` ✅
- `setup-para-streaming.html` ✅
- `soporte-tecnico-24-7.html` ✅

**Ejemplos incorrectos:**
- `Entrega-e-Instalacion.html` ❌ (mayúsculas)
- `entrega_e_instalacion.html` ❌ (guiones bajos)
- `servicio-entrega-e-instalacion.html` ❌ (prefijo innecesario)
- `entregaeinstalacion.html` ❌ (sin guiones)

---

## APÉNDICE C: GLOSARIO DE TÉRMINOS

**Service Single Content:** Contenedor principal que agrupa todos los módulos de contenido de un servicio individual. Se diferencia de los service-detail-card usados en servicios.html.

**Hero Section:** Sección principal de la página que aparece inmediatamente después de breadcrumbs. Contiene el H1, propuesta de valor, estadísticas y descripción detallada.

**Trust Bar:** Barra horizontal con 4 beneficios clave que genera confianza inmediata. Sin íconos, solo texto.

**Timeline:** Componente visual que muestra el proceso del servicio en 4 pasos numerados con línea conectora horizontal.

**Two Column Layout:** Sistema de dos columnas con listas. Se usa dos veces por página: primero para cobertura/features, luego para horarios/proceso.

**Info Cards:** Grid de 3 tarjetas destacadas sin íconos. Tienen hover effect automático.

**Service Banner:** Sección destacada con fondo gradiente azul que resalta una garantía o promesa principal.

**Service FAQ:** Sección de preguntas frecuentes sin acordeón desplegable (todo visible).

**CTA Section:** Call-to-Action final con botones de WhatsApp y teléfono.

**Breadcrumbs:** Navegación estructural que muestra: Inicio → Servicios → Servicio Actual.

**Hero Stats:** Tres métricas destacadas en formato numérico con label descriptivo.

**Service List:** Lista con checkmarks automáticos generados por CSS (::before).

---

## CONCLUSIÓN

Este documento establece el estándar oficial para la creación de páginas de servicios individuales en PODIUMEX. Seguir esta metodología garantiza:

1. **Uniformidad visual** en todo el sitio
2. **SEO optimizado** con estructura semántica correcta
3. **Experiencia de usuario consistente**
4. **Tasas de conversión estandarizadas**
5. **Mantenibilidad del código a largo plazo**

**Regla de oro:** Cuando tengas dudas, consulta `entrega-e-instalacion.html` como referencia definitiva.

---

**Documento creado:** Noviembre 2025
**Última actualización:** Noviembre 2025
**Autor:** Equipo de Desarrollo PODIUMEX
**Versión:** 1.1

**Cambios en versión 1.1:**
- Agregada sección 5.8: Contact Form Section (Formulario de Cotización integrado con WhatsApp)
- Actualizada funcionalidad de FAQ a acordeón desplegable con JavaScript
- Agregadas clases CSS para el formulario de contacto
- Actualizado checklist de implementación con validaciones del formulario
- Actualizada plantilla HTML completa en Apéndice A
- Documentada función `initializeWhatsAppForm()` en JavaScript
- Agregadas mejoras visuales del formulario: gradientes, sombras, efectos hover/focus
- Documentado efecto de brillo animado en botón de envío
