  // Estado de la aplicación
        let currentSection = 'home';

        // Elementos DOM
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const header = document.getElementById('header');

        // Función para mostrar sección
        function showSection(sectionId) {
            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove('visible', 'show');
                section.style.display = 'none';
            });

            // Remover clase activa de todos los enlaces
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Mostrar sección seleccionada
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
                targetSection.classList.add('visible');
                
                // Pequeño delay para la animación
                setTimeout(() => {
                    targetSection.classList.add('show');
                }, 50);

                currentSection = sectionId;

                // Activar enlace correspondiente
                const activeLink = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }

                // Scroll al inicio
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Función para mostrar inicio
        function showHome() {
            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove('visible', 'show');
                section.style.display = 'none';
            });

            // Remover clase activa de todos los enlaces
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Mostrar sección home
            const homeSection = document.getElementById('home');
            homeSection.style.display = 'block';
            homeSection.classList.add('visible', 'show');
            
            currentSection = 'home';

            // Activar enlace de inicio
            const homeLink = document.querySelector('[onclick="showHome()"]');
            if (homeLink && homeLink.classList.contains('nav-link')) {
                homeLink.classList.add('active');
            }

            // Scroll al inicio
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

            // Función para abrir modal de imagen
        function openModal(imageSrc) {
            modalImage.src = imageSrc;
            modalImage.alt = "Imagen ampliada";
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // Forzar reflow para asegurar la transición
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        }

        // Función para cerrar modal
        function closeModal() {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.classList.remove('show');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });

        // Cerrar modal al hacer clic fuera de la imagen
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('close')) {
                closeModal();
            }
        });  

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

            // Mostrar animación inicial
            setTimeout(() => {
                document.getElementById('home').classList.add('show');
            }, 100);
        });

        // Manejo responsivo del menú (opcional para futuras mejoras)
        const handleResize = () => {
            // Aquí se pueden agregar ajustes responsivos adicionales si es necesario
        };

        window.addEventListener('resize', handleResize);

        // Optimización de rendimiento para animaciones
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

        // Observar elementos para animaciones al hacer scroll
        document.querySelectorAll('.text-content, .gallery').forEach(el => {
            observer.observe(el);
        });