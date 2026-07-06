// DOM Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const sportSections = document.querySelectorAll('.sport-section');
const foodSections = document.querySelectorAll('.food-section');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCounter = document.getElementById('lightboxCounter');

// Lightbox state
let currentGallery = [];
let currentImageIndex = 0;

// Initialize filter buttons
if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter sections based on page type
            if (sportSections.length > 0) {
                filterSections(sportSections, filterValue);
            }
            if (foodSections.length > 0) {
                filterSections(foodSections, filterValue);
            }
        });
    });
}

// Filter sections
function filterSections(sections, filter) {
    sections.forEach(section => {
        const categories = section.getAttribute('data-category');
        
        if (filter === 'all' || categories.includes(filter)) {
            section.classList.remove('hidden');
            // Add animation effect
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 50);
        } else {
            section.classList.add('hidden');
        }
    });
}

// Lightbox functionality
if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Determine if we're in sport or food section
            const sportSection = item.closest('.sport-section');
            const foodSection = item.closest('.food-section');
            
            let galleryImages;
            
            if (sportSection) {
                galleryImages = sportSection.querySelectorAll('.gallery-item img');
            } else if (foodSection) {
                galleryImages = foodSection.querySelectorAll('.gallery-item img');
            }
            
            // Create array of image sources
            currentGallery = Array.from(galleryImages).map(img => img.src);
            currentImageIndex = parseInt(item.getAttribute('data-index'));
            
            // Open lightbox with clicked image
            openLightbox(currentImageIndex);
        });
    });
}

// Open lightbox
function openLightbox(index) {
    lightboxImage.src = currentGallery[index];
    updateLightboxCounter();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navigate to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    lightboxImage.src = currentGallery[currentImageIndex];
    updateLightboxCounter();
}

// Navigate to previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    lightboxImage.src = currentGallery[currentImageIndex];
    updateLightboxCounter();
}

// Update lightbox counter
function updateLightboxCounter() {
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
}

// Event listeners for lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}
if (lightboxPrev) {
    lightboxPrev.addEventListener('click', prevImage);
}
if (lightboxNext) {
    lightboxNext.addEventListener('click', nextImage);
}

// Close lightbox when clicking outside the image
if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

// Add touch events for mobile navigation
let touchStartX = 0;
let touchEndX = 0;

if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightboxModal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > swipeThreshold) {
        if (difference > 0) {
            // Swipe left - next image
            nextImage();
        } else {
            // Swipe right - previous image
            prevImage();
        }
    }
}

// Add animation on scroll
function checkScroll() {
    // Check sport sections
    if (sportSections.length > 0) {
        sportSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85 && !section.classList.contains('hidden')) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Check food sections
    if (foodSections.length > 0) {
        foodSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85 && !section.classList.contains('hidden')) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
}

// Initial check
checkScroll();

// Check on scroll
window.addEventListener('scroll', checkScroll);