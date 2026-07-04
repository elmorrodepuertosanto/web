let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

// Variable para rastrear la posición actual
let currentSlideIndex = 0;

// Función para inicializar el slider
function initializeSlider() {
    // Verificar si hay un parámetro slide en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const slideParam = urlParams.get('slide');
    
    if (slideParam !== null) {
        const targetSlide = parseInt(slideParam);
        if (targetSlide >= 0 && targetSlide <= 13) {
            // Guardar la posición objetivo en localStorage
            localStorage.setItem('targetSlide', targetSlide);
            // Limpiar la URL inmediatamente
            const url = new URL(window.location);
            url.searchParams.delete('slide');
            window.history.replaceState({}, document.title, url.pathname);
        }
    }
    
    // Verificar si hay una posición guardada
    const savedSlide = localStorage.getItem('targetSlide');
    if (savedSlide !== null) {
        const targetSlide = parseInt(savedSlide);
        moveToSlide(targetSlide);
        localStorage.removeItem('targetSlide'); // Limpiar después de usar
        currentSlideIndex = targetSlide;
    } else {
        // Configuración inicial normal
        thumbnail.appendChild(thumbnailItems[0]);
        currentSlideIndex = 0;
    }
}

// Función para mover a un slide específico
function moveToSlide(targetIndex) {
    const totalSlides = 11;
    
    // Calcular cuántos movimientos necesitamos
    let movesToTarget = targetIndex;
    
    // Realizar los movimientos necesarios
    for (let i = 0; i < movesToTarget; i++) {
        let sliderItems = sliderList.querySelectorAll('.item');
        let thumbnailItems = thumbnail.querySelectorAll('.item');
        
        // Mover el primer elemento al final (simular "next")
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
    }
}

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
        currentSlideIndex = (currentSlideIndex + 1) % 11;
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
        currentSlideIndex = (currentSlideIndex - 1 + 11) % 11;
    }

    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true})
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
});