// Image viewer functionality
let currentImageIndex = 0;
let imagesList = [];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize image viewer  
    initImageViewer();
    
    // Initialize floating back button
    initFloatingBackButton();
    
    // Card animation observer
    const cards = document.querySelectorAll('.card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, delay);
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // Back button functionality
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            // Add your back navigation logic here
            // For example: window.history.back();
            console.log('Back button clicked');
        });
    }

    // Smooth scroll enhancement
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for header (optional enhancement)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const headerBg = document.querySelector('.header-bg');
        if (headerBg) {
            headerBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for loading effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Image Viewer Functions
function initImageViewer() {
    // Get all clickable images
    const clickableImages = document.querySelectorAll('.clickable-image');
    
    // Create images list for navigation
    imagesList = Array.from(clickableImages).map(img => ({
        src: img.src,
        alt: img.alt,
        caption: img.getAttribute('data-caption') || img.alt
    }));

    // Add click event listeners
    clickableImages.forEach((img, index) => {
        img.addEventListener('click', () => openImageViewer(index));
    });

    // Get modal elements
    const imageViewer = document.getElementById('imageViewer');
    const closeBtn = document.getElementById('closeViewer');
    const prevBtn = document.getElementById('prevImage');
    const nextBtn = document.getElementById('nextImage');

    // Close modal events
    closeBtn.addEventListener('click', closeImageViewer);
    imageViewer.addEventListener('click', (e) => {
        if (e.target === imageViewer) {
            closeImageViewer();
        }
    });

    // Navigation events
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (imageViewer.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeImageViewer();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
}

function openImageViewer(index) {
    currentImageIndex = index;
    const imageViewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');
    const viewerCaption = document.getElementById('viewerCaption');
    const prevBtn = document.getElementById('prevImage');
    const nextBtn = document.getElementById('nextImage');

    // Set image and caption
    const currentImage = imagesList[currentImageIndex];
    viewerImage.src = currentImage.src;
    viewerImage.alt = currentImage.alt;
    viewerCaption.textContent = currentImage.caption;

    // Show/hide navigation buttons
    if (imagesList.length <= 1) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }

    // Show modal
    imageViewer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageViewer() {
    const imageViewer = document.getElementById('imageViewer');
    imageViewer.classList.remove('active');
    document.body.style.overflow = '';
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + imagesList.length) % imagesList.length;
    updateViewerImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagesList.length;
    updateViewerImage();
}

function updateViewerImage() {
    const viewerImage = document.getElementById('viewerImage');
    const viewerCaption = document.getElementById('viewerCaption');
    const currentImage = imagesList[currentImageIndex];

    // Add fade effect
    viewerImage.style.opacity = '0';
    
    setTimeout(() => {
        viewerImage.src = currentImage.src;
        viewerImage.alt = currentImage.alt;
        viewerCaption.textContent = currentImage.caption;
        viewerImage.style.opacity = '1';
    }, 150);
}

// Floating Back Button - Fixed and improved
// ... (rest of your code remains unchanged)

// Floating Back Button - Fixed and improved
function initFloatingBackButton() {
    const backButtonContainer = document.querySelector('.back-button-container');
    const backButton = backButtonContainer.querySelector('.back-button');
    let lastScrollTop = 0;
    let ticking = false;

    function updateButtonPosition() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // const windowHeight = window.innerHeight;
        // const documentHeight = document.documentElement.scrollHeight;
        
        // --- ELIMINADO: Movimiento del botón usando transform ---
        // // Calculate scroll progress (0 to 1)
        // const scrollProgress = Math.min(scrollTop / (documentHeight - windowHeight), 1);
        // // Calculate how much the button should move down
        // // Maximum movement is 70% of viewport height
        // const maxMovement = windowHeight * 0.7;
        // const currentMovement = scrollProgress * maxMovement;
        // // Apply smooth movement
        // backButtonContainer.style.transform = `translateY(${currentMovement}px)`;

        // Ajusta solo el fondo y la sombra del botón según el scroll
        if (scrollTop > 100) {
            backButton.style.background = 'rgba(255, 255, 255, 0.98)';
            backButton.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
        } else {
            backButton.style.background = 'rgba(255, 255, 255, 0.95)';
            backButton.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        }

        // Efecto de escala solo al botón, no al contenedor
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // Scrolling down
            backButton.style.transform = 'scale(0.95)';
        } else {
            // Scrolling up or at top
            backButton.style.transform = 'scale(1)';
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateButtonPosition);
            ticking = true;
        }
    }

    // Use throttled scroll event for better performance
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initial call
    updateButtonPosition();
}

// ... (rest of your code remains unchanged)