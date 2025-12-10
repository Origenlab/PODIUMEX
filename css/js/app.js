async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        if (elementId === 'header-container') {
            initializeMenu();
            initializeHeaderScroll();
        }
        if (elementId === 'footer-container') {
            initializeScrollTop();
        }
    } catch (error) {
        console.error(`Error loading ${componentPath}:`, error);
    }
}
document.addEventListener('DOMContentLoaded', async function() {
    await loadComponent('header-container', 'header.html');
    await loadComponent('footer-container', 'footer.html');
    initializeFAQ();
    initializeServiceFAQ();
    initializeCTAForm();
    initializeSmoothScroll();
    initializeAnimations();
    initializeWhatsAppForm();
});
function initializeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            });
        }
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}
function initializeHeaderScroll() {
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}
function initializeScrollTop() {
    const scrollTop = document.getElementById('scrollTop');
    if (scrollTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        });
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        }
    });
}
function initializeServiceFAQ() {
    const serviceFaqItems = document.querySelectorAll('.service-faq-item');
    serviceFaqItems.forEach(item => {
        const question = item.querySelector('.service-faq-question');
        if (question) {
            question.addEventListener('click', () => {
                serviceFaqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        }
    });
}
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
function initializeCTAForm() {
    const ctaForm = document.getElementById('ctaForm');
    if (ctaForm) {
        ctaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = ctaForm.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : '';
            alert(`�Gracias! Te enviaremos una cotizaci�n personalizada a ${email} en menos de 2 horas.`);
            ctaForm.reset();
        });
    }
}
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    const animatedElements = document.querySelectorAll(
        '.product-card, .service-card, .pricing-card, .faq-item'
    );
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
function formatPrice(price) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0
    }).format(price);
}
function initializeWhatsAppForm() {
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const empresa = document.getElementById('empresa').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const ciudad = document.getElementById('ciudad').value;
            const fecha = document.getElementById('fecha').value;
            const mensaje = document.getElementById('mensaje').value;
            const fechaFormateada = fecha ? new Date(fecha + 'T00:00:00').toLocaleDateString('es-MX', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }) : '';
            const pagePath = window.location.pathname;
            let servicioNombre = 'servicio PODIUMEX';
            if (pagePath.includes('entrega-e-instalacion')) {
                servicioNombre = 'entrega e instalación express';
            } else if (pagePath.includes('personalizacion-total')) {
                servicioNombre = 'personalización con grabado láser';
            } else if (pagePath.includes('setup-para-streaming')) {
                servicioNombre = 'setup para streaming profesional';
            } else if (pagePath.includes('soporte-tecnico')) {
                servicioNombre = 'soporte técnico 24/7 en sitio';
            } else if (pagePath.includes('financiamiento')) {
                servicioNombre = 'financiamiento flexible sin intereses';
            } else if (pagePath.includes('sustentabilidad')) {
                servicioNombre = 'sustentabilidad certificada FSC y carbono neutro';
            } else if (pagePath.includes('mantenimiento')) {
                servicioNombre = 'mantenimiento preventivo y correctivo profesional';
            } else if (pagePath.includes('asesoria-de-eventos')) {
                servicioNombre = 'asesoría de eventos profesional y personalizada';
            }
            let whatsappMessage = `Hola, solicito cotización para ${servicioNombre}:%0A%0A`;
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
            const whatsappNumber = '525512345678';
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
        });
    }
}
window.PODIUMEX = {
    loadComponent,
    formatPrice,
    getQueryParam,
    debounce
};
