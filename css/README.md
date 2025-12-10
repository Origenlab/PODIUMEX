# PODIUMEX - Sitio Web

Sitio web profesional para renta y venta de podiums en México.

## 📁 Estructura de Archivos

```
PODIUMEX/
├── index.html          # Página principal (contenido)
├── header.html         # Header/Menú de navegación (separado)
├── footer.html         # Footer (separado)
├── css/
│   └── style.css      # Todos los estilos CSS
├── js/
│   └── app.js         # JavaScript principal
└── estudio-mercado-podiumex.md  # Estudio de mercado completo
```

## 🚀 Características

### Diseño Modular
- **Header separado** (`header.html`) - Se carga dinámicamente
- **Footer separado** (`footer.html`) - Se carga dinámicamente
- **Contenido principal** (`index.html`) - Solo el contenido de la página

### Beneficios de la Estructura Modular
✅ **Reutilizable**: Usa el mismo header/footer en múltiples páginas
✅ **Fácil mantenimiento**: Cambia el menú en un solo lugar
✅ **Escalable**: Agrega nuevas páginas fácilmente

## 🛠️ Cómo Funciona

El archivo `app.js` carga automáticamente el header y footer cuando la página se carga:

```javascript
// Carga header.html en el contenedor
await loadComponent('header-container', 'header.html');

// Carga footer.html en el contenedor
await loadComponent('footer-container', 'footer.html');
```

## 📄 Para Crear Nuevas Páginas

1. Crea un nuevo archivo HTML (ej: `productos.html`)
2. Copia esta estructura básica:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos - PODIUMEX</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header Container (cargado dinámicamente) -->
    <div id="header-container"></div>

    <!-- TU CONTENIDO AQUÍ -->
    <section class="hero">
        <h1>Mis Productos</h1>
    </section>

    <!-- Footer Container (cargado dinámicamente) -->
    <div id="footer-container"></div>

    <!-- Scripts -->
    <script src="js/app.js"></script>
</body>
</html>
```

3. ¡Listo! El header y footer se cargarán automáticamente

## 🎨 Estilos CSS

Todos los estilos están en `css/style.css` organizados por secciones:

- Variables CSS (colores, fuentes)
- Header y navegación
- Hero section
- Productos
- Servicios
- Precios
- FAQ
- Footer
- Responsive (móvil y tablet)

## ⚡ JavaScript Funcionalidades

El archivo `js/app.js` incluye:

- ✅ Carga dinámica de header/footer
- ✅ Menú móvil hamburguesa
- ✅ Scroll suave entre secciones
- ✅ Acordeón FAQ
- ✅ Animaciones fade-in
- ✅ Botón "volver arriba"
- ✅ Formulario de contacto
- ✅ Efectos de scroll en header

## 📱 Responsive Design

El sitio es 100% responsive con breakpoints:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Móvil**: < 768px

## 🌐 Cómo Visualizar

### Opción 1: Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (npx)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre: `http://localhost:8000`

### Opción 2: Live Server (VS Code)
1. Instala la extensión "Live Server"
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

### ⚠️ Importante
No abras el archivo directamente con `file://` porque JavaScript no podrá cargar los archivos `header.html` y `footer.html` por restricciones de seguridad del navegador.

## 🔧 Personalización

### Cambiar Colores
Edita las variables en `css/style.css`:

```css
:root {
    --primary: #1a1a1a;      /* Color principal */
    --accent: #2563eb;        /* Color de acento (azul) */
    --text: #333;             /* Color de texto */
    /* ... más colores */
}
```

### Modificar el Menú
Edita `header.html` - los cambios se verán en todas las páginas automáticamente.

### Agregar Productos
Edita la sección `.products-grid` en `index.html` y duplica cualquier `.product-card`.

## 📊 Estudio de Mercado

El archivo `estudio-mercado-podiumex.md` contiene:
- Análisis completo del mercado mexicano
- Competidores principales
- Tipos de productos
- Segmentos de clientes
- Tendencias 2025
- Estrategias de precios
- Oportunidades de negocio

## 🚀 Próximos Pasos Sugeridos

1. **Agregar imágenes reales** de los podiums
2. **Crear página de catálogo** completo
3. **Página de contacto** con formulario funcional
4. **Integrar WhatsApp Business API**
5. **Google Analytics** para métricas
6. **SEO optimization** (meta tags, schema.org)
7. **Backend** para cotizaciones y reservas

## 📞 Soporte

Para cualquier duda sobre el código o estructura del sitio, revisa los comentarios en el código o consulta este README.

---

**Desarrollado con base en estudio de mercado completo**
© 2025 PODIUMEX
