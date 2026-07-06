// Estado de la aplicación
let currentSection = 'home';

// ---- NUEVO: Variables para navegación en galería ----
let currentGalleryImages = [];    // Array de URLs de la galería activa
let currentImageIndex = 0;        // Índice de la imagen actual en el modal

// Elementos DOM
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const header = document.getElementById('header');

// Función para mostrar sección
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('visible', 'show');
        section.style.display = 'none';
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('visible');
        setTimeout(() => {
            targetSection.classList.add('show');
        }, 50);
        currentSection = sectionId;

        const activeLink = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Función para mostrar inicio
function showHome() {
    sections.forEach(section => {
        section.classList.remove('visible', 'show');
        section.style.display = 'none';
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    const homeSection = document.getElementById('home');
    homeSection.style.display = 'block';
    homeSection.classList.add('visible', 'show');
    currentSection = 'home';

    const homeLink = document.querySelector('[onclick="showHome()"]');
    if (homeLink && homeLink.classList.contains('nav-link')) {
        homeLink.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- FUNCIÓN MEJORADA: Abrir modal con navegación ----
function openModal(imageSrc, galleryContainer = null) {
    // Si se proporciona un contenedor de galería (el div .gallery que contiene las imágenes),
    // recolectamos todas las imágenes de esa galería.
    if (galleryContainer) {
        const items = galleryContainer.querySelectorAll('.gallery-item');
        if (items.length > 0) {
            currentGalleryImages = [];
            items.forEach(item => {
                // Obtenemos la URL que está en el onclick (openModal('ruta'))
                const onclickAttr = item.getAttribute('onclick');
                if (onclickAttr) {
                    const match = onclickAttr.match(/openModal\('([^']+)'/);
                    if (match && match[1]) {
                        currentGalleryImages.push(match[1]);
                    }
                }
            });
            // Encontrar el índice de la imagen clickeada
            const clickedIndex = currentGalleryImages.findIndex(url => url === imageSrc);
            currentImageIndex = clickedIndex !== -1 ? clickedIndex : 0;
        } else {
            // Fallback: solo una imagen
            currentGalleryImages = [imageSrc];
            currentImageIndex = 0;
        }
    } else {
        // Modo simple: solo una imagen
        currentGalleryImages = [imageSrc];
        currentImageIndex = 0;
    }

    // Actualizar imagen y contador
    updateModalImage();
    modal.style.display = 'flex';
    modal.style.opacity = '1';
    document.body.style.overflow = 'hidden';
}

// Función para actualizar la imagen del modal y el contador
function updateModalImage() {
    if (currentGalleryImages.length > 0 && modalImage) {
        modalImage.src = currentGalleryImages[currentImageIndex];
        modalImage.alt = `Imagen ${currentImageIndex + 1} de ${currentGalleryImages.length}`;
        
        // Actualizar o crear contador
        let counter = document.querySelector('.modal-counter');
        if (!counter) {
            counter = document.createElement('div');
            counter.className = 'modal-counter';
            modal.appendChild(counter);
        }
        counter.textContent = `${currentImageIndex + 1} / ${currentGalleryImages.length}`;
        
        // Habilitar/deshabilitar botones visualmente (opcional)
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        if (prevBtn && nextBtn) {
            if (currentGalleryImages.length <= 1) {
                prevBtn.style.opacity = '0.3';
                nextBtn.style.opacity = '0.3';
                prevBtn.style.pointerEvents = 'none';
                nextBtn.style.pointerEvents = 'none';
            } else {
                prevBtn.style.opacity = '1';
                nextBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'auto';
                nextBtn.style.pointerEvents = 'auto';
            }
        }
    }
}

// ---- NUEVAS FUNCIONES DE NAVEGACIÓN ----
function nextImage() {
    if (currentGalleryImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
    updateModalImage();
}

function prevImage() {
    if (currentGalleryImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    updateModalImage();
}

// Cerrar modal (sin cambios en la lógica original, solo mejorada)
function closeModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Limpiar array de imágenes al cerrar (opcional)
        currentGalleryImages = [];
    }, 300);
}

// ---- SOBRESCRIBIR LOS EVENTOS DE CADA GALERÍA para que pasen el contenedor ----
// Esta función recorre todas las galerías y modifica el comportamiento de los clics
function bindGalleriesWithNavigation() {
    const allGalleries = document.querySelectorAll('.gallery');
    allGalleries.forEach(gallery => {
        const items = gallery.querySelectorAll('.gallery-item');
        items.forEach(item => {
            // Obtener la función onclick original que estaba en el HTML
            const originalOnclick = item.getAttribute('onclick');
            if (originalOnclick && originalOnclick.includes('openModal')) {
                // Extraer la ruta de la imagen
                const match = originalOnclick.match(/openModal\('([^']+)'/);
                if (match && match[1]) {
                    const imageUrl = match[1];
                    // Remover el onclick antiguo y asignar uno nuevo que incluya el contenedor
                    item.removeAttribute('onclick');
                    item.style.cursor = 'pointer';
                    // Asignar nuevo evento que pase el gallery como contexto
                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        openModal(imageUrl, gallery);
                    });
                }
            }
        });
    });
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
        closeModal();
    }
    // Navegación con flechas izquierda/derecha mientras el modal está abierto
    if (modal && modal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            prevImage();
            e.preventDefault();
        } else if (e.key === 'ArrowRight') {
            nextImage();
            e.preventDefault();
        }
    }
});

// Cerrar modal al hacer clic fuera de la imagen
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close')) {
            closeModal();
        }
    });
}

// Efectos de scroll en header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Activar enlace de inicio por defecto
    const homeNavLink = document.querySelector('.nav-link[onclick="showHome()"]');
    if (homeNavLink) {
        homeNavLink.classList.add('active');
    }

    // Asegurar que solo la sección home esté visible
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
            section.classList.remove('visible', 'show');
        }
    });

    setTimeout(() => {
        document.getElementById('home').classList.add('show');
    }, 100);

    // ---- NUEVO: Vincular todas las galerías con navegación ----
    bindGalleriesWithNavigation();

    // Crear botones de navegación dentro del modal si no existen
    if (modal && !document.querySelector('.prev-btn')) {
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '❮';
        prevButton.className = 'modal-nav prev-btn';
        prevButton.setAttribute('aria-label', 'Anterior');
        prevButton.onclick = (e) => {
            e.stopPropagation();
            prevImage();
        };
        
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '❯';
        nextButton.className = 'modal-nav next-btn';
        nextButton.setAttribute('aria-label', 'Siguiente');
        nextButton.onclick = (e) => {
            e.stopPropagation();
            nextImage();
        };
        
        modal.appendChild(prevButton);
        modal.appendChild(nextButton);
    }
});

// Manejo responsivo del menú
const handleResize = () => {};
window.addEventListener('resize', handleResize);

// Observador para animaciones (opcional)
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
document.querySelectorAll('.text-content, .gallery').forEach(el => {
    observer.observe(el);
});