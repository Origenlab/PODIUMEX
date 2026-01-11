/**
 * PODIUMEX - Main Application Script
 * Version 2.0 - Professional Edition
 */

'use strict';

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    whatsappNumber: '525530454714',
    headerScrollThreshold: 50,
    scrollTopThreshold: 300,
    animationThreshold: 0.1,
    debounceDelay: 100
};

// ============================================
// DOM READY INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize header and footer functionality
    initializeMenu();
    initializeHeaderScroll();
    initializeScrollTop();

    // Initialize all modules
    initializeFAQ();
    initializeServiceFAQ();
    initializeCTAForm();
    initializeSmoothScroll();
    initializeAnimations();
    initializeWhatsAppForm();
    initializeContactForm();
    initializeLazyLoading();
});

// ============================================
// NAVIGATION MENU
// ============================================
function initializeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) return;

    // Mobile menu toggle
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });

    // Close menu when clicking a link (not dropdown toggle)
    navLinks.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Dropdown handling
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();

                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });

                dropdown.classList.toggle('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown') && !e.target.closest('.menu-toggle')) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navLinks.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initializeHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let ticking = false;

    const updateHeader = () => {
        if (window.scrollY > CONFIG.headerScrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function initializeScrollTop() {
    const scrollTop = document.getElementById('scrollTop');
    if (!scrollTop) return;

    let ticking = false;

    const updateVisibility = () => {
        if (window.scrollY > CONFIG.scrollTopThreshold) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateVisibility);
            ticking = true;
        }
    }, { passive: true });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// FAQ ACCORDION
// ============================================
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!question) return;

        // Set ARIA attributes
        const id = `faq-${Math.random().toString(36).substr(2, 9)}`;
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', id);
        if (answer) {
            answer.id = id;
            answer.setAttribute('role', 'region');
            answer.setAttribute('aria-labelledby', question.id || id + '-q');
        }

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isActive);
        });

        // Keyboard navigation
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
}

// ============================================
// SERVICE FAQ ACCORDION
// ============================================
function initializeServiceFAQ() {
    const serviceFaqItems = document.querySelectorAll('.service-faq-item');
    if (!serviceFaqItems.length) return;

    serviceFaqItems.forEach(item => {
        const question = item.querySelector('.service-faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            // Close all others
            serviceFaqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update URL without scrolling
            history.pushState(null, '', href);
        });
    });
}

// ============================================
// CTA FORM
// ============================================
function initializeCTAForm() {
    const ctaForm = document.getElementById('ctaForm');
    if (!ctaForm) return;

    ctaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = ctaForm.querySelector('input[type="email"]');
        const email = emailInput?.value || '';

        if (!validateEmail(email)) {
            showFormError(emailInput, 'Por favor ingresa un email válido');
            return;
        }

        // Success feedback
        showNotification('¡Gracias! Te enviaremos una cotización personalizada en menos de 2 horas.', 'success');
        ctaForm.reset();
    });
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================
function initializeContactForm() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';

    // Required check
    if (field.required && !value) {
        isValid = false;
        message = 'Este campo es requerido';
    }

    // Email validation
    if (field.type === 'email' && value && !validateEmail(value)) {
        isValid = false;
        message = 'Por favor ingresa un email válido';
    }

    // Phone validation
    if (field.type === 'tel' && value && !validatePhone(value)) {
        isValid = false;
        message = 'Por favor ingresa un teléfono válido (10 dígitos)';
    }

    if (!isValid) {
        showFieldError(field, message);
    } else {
        clearFieldError(field);
    }

    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    field.classList.add('error');

    const errorEl = document.createElement('span');
    errorEl.className = 'field-error';
    errorEl.textContent = message;
    errorEl.style.cssText = 'color:#dc2626;font-size:0.85rem;margin-top:0.25rem;display:block;';

    field.parentNode.appendChild(errorEl);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorEl = field.parentNode.querySelector('.field-error');
    if (errorEl) errorEl.remove();
}

function showFormError(input, message) {
    if (input) {
        input.focus();
        showFieldError(input, message);
    }
}

// ============================================
// WHATSAPP FORM
// ============================================
function initializeWhatsAppForm() {
    const whatsappForm = document.getElementById('whatsappForm');
    if (!whatsappForm) return;

    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = {
            nombre: document.getElementById('nombre')?.value?.trim() || '',
            empresa: document.getElementById('empresa')?.value?.trim() || '',
            telefono: document.getElementById('telefono')?.value?.trim() || '',
            email: document.getElementById('email')?.value?.trim() || '',
            ciudad: document.getElementById('ciudad')?.value?.trim() || '',
            fecha: document.getElementById('fecha')?.value || '',
            mensaje: document.getElementById('mensaje')?.value?.trim() || ''
        };

        // Validate required fields
        if (!formData.nombre) {
            showNotification('Por favor ingresa tu nombre', 'error');
            document.getElementById('nombre')?.focus();
            return;
        }

        if (!formData.telefono || !validatePhone(formData.telefono)) {
            showNotification('Por favor ingresa un teléfono válido', 'error');
            document.getElementById('telefono')?.focus();
            return;
        }

        if (!formData.ciudad) {
            showNotification('Por favor selecciona tu ciudad', 'error');
            document.getElementById('ciudad')?.focus();
            return;
        }

        // Format date
        const fechaFormateada = formData.fecha
            ? new Date(formData.fecha + 'T00:00:00').toLocaleDateString('es-MX', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            : 'Por definir';

        // Detect service from URL
        const servicioNombre = getServiceFromPath();

        // Build WhatsApp message
        let message = `Hola, solicito cotización para ${servicioNombre}:\n\n`;
        message += `👤 *Nombre:* ${formData.nombre}\n`;
        if (formData.empresa) message += `🏢 *Empresa:* ${formData.empresa}\n`;
        message += `📱 *Teléfono:* ${formData.telefono}\n`;
        if (formData.email) message += `📧 *Email:* ${formData.email}\n`;
        message += `📍 *Ciudad:* ${formData.ciudad}\n`;
        message += `📅 *Fecha del evento:* ${fechaFormateada}\n`;
        if (formData.mensaje) message += `\n📝 *Detalles adicionales:*\n${formData.mensaje}\n`;
        message += `\nGracias por su atención.`;

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
}

function getServiceFromPath() {
    const path = window.location.pathname.toLowerCase();
    const services = {
        'entrega-e-instalacion': 'entrega e instalación express',
        'personalizacion-total': 'personalización con grabado láser',
        'setup-para-streaming': 'setup para streaming profesional',
        'soporte-tecnico': 'soporte técnico 24/7 en sitio',
        'financiamiento': 'financiamiento flexible sin intereses',
        'sustentabilidad': 'sustentabilidad certificada FSC',
        'mantenimiento': 'mantenimiento preventivo y correctivo',
        'asesoria-de-eventos': 'asesoría de eventos profesional',
        'catalogo': 'podium del catálogo',
        'contacto': 'cotización general'
    };

    for (const [key, value] of Object.entries(services)) {
        if (path.includes(key)) return value;
    }
    return 'servicio PODIUMEX';
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initializeAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
        threshold: CONFIG.animationThreshold,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add CSS for animations
    if (!document.getElementById('animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.textContent = `
            .animate-target {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            .animate-target.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.product-card, .service-card, .pricing-card, .faq-item, .testimonial-card, .info-card'
    );

    animatedElements.forEach(el => {
        el.classList.add('animate-target');
        observer.observe(el);
    });
}

// ============================================
// LAZY LOADING ENHANCEMENT
// ============================================
function initializeLazyLoading() {
    if (!('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 15;
}

function debounce(func, wait = CONFIG.debounceDelay) {
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

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification-toast');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification-toast notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" aria-label="Cerrar">&times;</button>
    `;

    // Styles
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        background: ${type === 'error' ? '#dc2626' : type === 'success' ? '#059669' : '#0a0a0a'};
        color: white;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideIn 0.3s ease;
        font-size: 0.95rem;
        max-width: 400px;
    `;

    // Add animation keyframes if not exists
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-toast button {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// EXPORT PUBLIC API
// ============================================
window.PODIUMEX = {
    formatPrice,
    getQueryParam,
    debounce,
    validateEmail,
    validatePhone,
    showNotification
};
