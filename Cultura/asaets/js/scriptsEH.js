// scripts.js - JavaScript unificado para El Morro de Puerto Santo

// Detectar qué página estamos visitando por el contenido o clase específica
const isEconomiaPage = document.querySelector('.faq-section') !== null;
const isHistoriaPage = document.querySelector('.timeline-section') !== null;

// ==================== CONFIGURACIÓN DE GALERÍA DE IMÁGENES ====================
// Datos de las imágenes para la galería (se carga según la página actual)
let galleryImages = [];

if (isEconomiaPage) {
    galleryImages = [
        {
            src: "asaets/img/Economía/economia1.jpg",
            alt: "",
            title: ""
        },
        {
            src: "asaets/img/Economía/pescados.jpg",
            alt: "",
            title: ""
        },
        {
            src: "asaets/img/Economía/pescados2.jpg",
            alt: "",
            title: ""
        }
    ];
} else if (isHistoriaPage) {
    galleryImages = [
        {
            src: "asaets/img/historia/historia1.jpg",
            alt: "",
            title: ""
        },
        {
            src: "asaets/img/historia/historia2.jpg",
            alt: "",
            title: ""
        },
        {
            src: "asaets/img/historia/historia3.jpg",
            alt: "",
            title: ""
        }
    ];
}

// ==================== MODAL DE IMÁGENES ====================
let currentImageIndex = 0;
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.getElementById('closeModal');
const prevButton = document.getElementById('prevImage');
const nextButton = document.getElementById('nextImage');

function openModal(index) {
    if (galleryImages.length === 0) return;
    currentImageIndex = index;
    modalImage.src = galleryImages[index].src;
    modalImage.alt = galleryImages[index].alt;
    modalCaption.textContent = galleryImages[index].title;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openModal(currentImageIndex);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openModal(currentImageIndex);
}

// Event listeners para las imágenes
document.querySelectorAll('.image-container').forEach((container, index) => {
    container.addEventListener('click', () => {
        openModal(index);
    });
});

if (closeModal) closeModal.addEventListener('click', closeImageModal);
if (prevButton) prevButton.addEventListener('click', showPrevImage);
if (nextButton) nextButton.addEventListener('click', showNextImage);

// Cerrar modal al hacer clic fuera
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (modal && modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeImageModal();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// ==================== PREGUNTAS FRECUENTES (FAQ) ====================
if (isEconomiaPage) {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answerId = this.id.replace('question', 'answer');
            const answer = document.getElementById(answerId);
            const isActive = this.classList.contains('active');

            // Cerrar todas las respuestas
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                const ansId = q.id.replace('question', 'answer');
                document.getElementById(ansId).classList.remove('open');
            });

            // Si no estaba activa, abrir esta
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('open');
            }
        });
    });
}

// ==================== INTERACTIVIDAD DE LÍNEA DE TIEMPO ====================
if (isHistoriaPage) {
    const timelineItems = document.querySelectorAll('.timeline-content');

    timelineItems.forEach(item => {
        item.addEventListener('click', function () {
            timelineItems.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            this.style.backgroundColor = '#f0f9ff';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
    });
}

// ==================== EFECTOS GENERALES ====================
document.addEventListener('DOMContentLoaded', function () {
    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Observador de aparición para párrafos, imágenes, preguntas y línea de tiempo
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

    // Aplicar a párrafos y contenedores de imágenes
    document.querySelectorAll('.paragraph-container').forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(container);
    });

    // Si es economía, aplicar a preguntas frecuentes
    if (isEconomiaPage) {
        document.querySelectorAll('.faq-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    }

    // Si es historia, aplicar a elementos de línea de tiempo
    if (isHistoriaPage) {
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    }
});