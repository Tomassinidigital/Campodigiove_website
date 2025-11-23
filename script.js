// ===================================
// Hero Slider
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-slider-dots .dot');
    let currentSlide = 0;
    const slideInterval = 5000; // Cambia slide ogni 5 secondi

    // Funzione per cambiare slide
    function changeSlide(n) {
        // Rimuovi active da slide e dot correnti
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Calcola nuovo indice
        currentSlide = (n + slides.length) % slides.length;

        // Aggiungi active a nuova slide e dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Auto-play slider
    let autoPlay = setInterval(() => {
        changeSlide(currentSlide + 1);
    }, slideInterval);

    // Click sui dots per navigazione manuale
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeSlide(index);
            // Reset auto-play quando utente clicca manualmente
            clearInterval(autoPlay);
            autoPlay = setInterval(() => {
                changeSlide(currentSlide + 1);
            }, slideInterval);
        });
    });

    // Pausa auto-play quando mouse sopra lo slider
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(autoPlay);
        });

        heroSection.addEventListener('mouseleave', () => {
            autoPlay = setInterval(() => {
                changeSlide(currentSlide + 1);
            }, slideInterval);
        });
    }
});

// ===================================
// Mobile Menu Toggle
// ===================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Header Scroll Effect
// ===================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ===================================
// Back to Top Button
// ===================================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Appartamento Info Buttons
// ===================================
const appartamentoButtons = document.querySelectorAll('.appartamento-card .btn-secondary');

appartamentoButtons.forEach(button => {
    button.addEventListener('click', function() {
        const appartamentoType = this.getAttribute('data-appartamento');
        const appartamentoSelect = document.getElementById('appartamento');
        const contattiSection = document.getElementById('contatti');

        // Set the select value
        if (appartamentoSelect && appartamentoType) {
            appartamentoSelect.value = appartamentoType;
        }

        // Scroll to contact form
        if (contattiSection) {
            const headerOffset = 80;
            const elementPosition = contattiSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Focus on the name field after scrolling
            setTimeout(() => {
                document.getElementById('nome').focus();
            }, 800);
        }
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const appartamento = document.getElementById('appartamento').value;
        const messaggio = document.getElementById('messaggio').value.trim();

        // Basic validation
        if (!nome || !email || !messaggio) {
            showFormMessage('Per favore, compila tutti i campi obbligatori.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Per favore, inserisci un indirizzo email valido.', 'error');
            return;
        }

        // Simulate form submission
        // In production, this would send data to a server
        const formData = {
            nome: nome,
            email: email,
            telefono: telefono,
            appartamento: appartamento,
            messaggio: messaggio,
            data: new Date().toISOString()
        };

        console.log('Form submitted:', formData);

        // Show success message
        showFormMessage('Grazie per averci contattato! Risponderemo alla tua richiesta il prima possibile.', 'success');

        // Reset form
        contactForm.reset();

        // In a real application, you would send this data to a server:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            showFormMessage('Grazie per averci contattato! Risponderemo alla tua richiesta il prima possibile.', 'success');
            contactForm.reset();
        })
        .catch(error => {
            showFormMessage('Si è verificato un errore. Per favore riprova più tardi.', 'error');
            console.error('Error:', error);
        });
        */
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide message after 5 seconds for success
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for fade-in animations
const animatedElements = document.querySelectorAll('.appartamento-card, .servizio-card, .highlight-card, .info-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Image Lazy Loading Fallback
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading natively
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Add Placeholder Images
// ===================================
// This function generates placeholder images for the apartments
// In production, replace these with actual images
function addPlaceholderImages() {
    const appartamentoImages = document.querySelectorAll('.appartamento-image img');

    appartamentoImages.forEach((img, index) => {
        // If image fails to load, show a nice placeholder
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.fontSize = '4rem';
            placeholder.textContent = '🏔️';
            this.parentElement.appendChild(placeholder);
        });
    });
}

addPlaceholderImages();

// ===================================
// Dynamic Year in Footer
// ===================================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} Appartamenti Campo di Giove. Tutti i diritti riservati.`;
}

// ===================================
// Performance: Reduce animations on low-end devices
// ===================================
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.body.style.setProperty('--animation-speed', '0.2s');
}

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🏔️ Benvenuto al sito Appartamenti Campo di Giove!', 'font-size: 20px; color: #2c5f2d; font-weight: bold;');
console.log('%cPer informazioni: info@appartamenticampodigiove.it', 'font-size: 14px; color: #636e72;');
