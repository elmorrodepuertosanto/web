    
   //intitucion galeria// Datos de las 11 instituciones
const institutions = [
  {
    name: "Liceo; C.E. Leonor García",
    image: "assets/img/work/liceo.webp",
    description: "Fundado en 1979 en el estado Sucre, el Complejo Educativo Leonor García ha sido el pilar de formación académica en la comunidad de El Morro por más de cuatro décadas. Desde sus inicios como Ciclo Básico con apenas 152 alumnos, la institución ha transformado su estructura y nombre hasta consolidarse hoy como un referente de la modalidad Media-Técnica. Su sede actual, establecida a mediados de los años 80, cuenta con una amplia extensión que alberga 15 aulas, 1 laboratorio, 5 coordinaciones, 1 departamento de evaluación, 1 biblioteca, espacios deportivos y 1 estacionamiento. Años después se construyo 1 comedor sin dotación, 4 aulas, 2 baños, 1 sala de computación y 1 aula de telemática. Dedicados al desarrollo de la juventud del pueblo. El nombre de la institución rinde un sentido tributo a su primera directora, Leonor García, quien entregó su vida en la gestión por obtener los espacios físicos que hoy disfruta la comunidad estudiantil. Anteriormente su nombre era L.N.B. El Morro,  hace aproximadamente 3 años se hizo el cambio de nombre oficial al que conocemos actualmente.",
    founded: "1979",
    students: "751",
    location: "Carretera Nacional Carupano-Rio Caribe/8 de Febrero",
    category: "Instituto de Educación Secundaria",
    type: "educacion" // Agregamos tipo para identificar
  },
  {
    name: "Francisco (Chico) Marcano",
    image: "assets/img/work/Ambulatorio.webp",
    description: "Con raíces que se hunden profundamente en la historia de El Morro de Puerto Santo, lo que hoy conocemos como el Ambulatorio Francisco Chico Marcano nació entre los años 1946 y 1948 bajo el nombre de Medicatura Rural. Desde entonces, ha sido el guardián de la salud de generaciones, evolucionando hasta su refundación oficial con su nombre actual en 1999. Ubicado estratégicamente en la calle Luis Vargas del sector El Olivito, este centro destaca por su estructura impecable y su entorno sereno. Hoy, más que un centro médico, es un pilar de confianza gracias al compromiso inquebrantable de su personal de 46 miembros, quienes combinan profesionalismo y calidez humana para ofrecer atención primaria de calidad. Con casi ocho décadas de servicio, el ambulatorio sigue renovándose para ser el primer refugio de bienestar y esperanza para toda la comunidad.",
    founded: "1999",
    employees: "46", // Cambiamos de students a employees
    location: "Calle Luis Vargas/El Olivito",
    category: "Instituto de Salud",
    type: "salud"
  },
  {
    name: "Insopesca",
    image: "assets/img/work/insopesca2.webp",
    description: "Como brazo ejecutor del Ministerio de Pesca y Acuicultura, el Instituto Socialista de la Pesca y Acuicultura (INSOPESCA) desempeña un rol crucial en la gestión de los recursos marinos del país. Fundado bajo la Ley de Pesca y Acuicultura de 2001 y consolidado con el decreto de 2008 —hito que priorizó la pesca artesanal sobre la industrial—, este organismo se encarga del ordenamiento pesquero y el control de registros para embarcaciones y pescadores. Su labor garantiza la seguridad alimentaria a través de estrictas inspecciones sanitarias y la vigilancia de las artes de pesca permitidas, promoviendo además la organización comunitaria mediante los CONPPAs. Con un horario administrativo de lunes a viernes, de 8:00 AM a 4:00 PM, sus inspectores despliegan un esfuerzo continuo en las costas para adaptar la supervisión a las faenas de desembarque, asegurando que el aprovechamiento de nuestros mares sea responsable, higiénico y legal.",
    founded: "1993",
    employees: "14", // Cambiamos de worker a employees
    location: "Vía Nacional, El Morro de Puerto Santo",
    category: "Instituto de Pesca",
    type: "pesca"
  },
  {
    name: "El Tucán",
    image: "assets/img/work/ElTucan.webp",
    description: "Con una estructura operativa de medio turno y equipos de 6 especialistas por jornada, El Tucan optimiza cada ciclo de produccion para ofrecer un suministro constante de hielo. Fundada entre 1974-1975, esta empresa combina decadas de experiencia con una logistica de distribucion agil, consolidandose como la opcion preferida por las embarcaciones.",
    founded: "1974",
    employees: "18", // Cambiamos de students a employees
    location: "Entrada Principal/Calle Principal",
    category: "Frigorífico, Instituto Privado",
    type: "privado"
  },
  {
    name: "Instituto de Espacios Acuaticos (INEA)",
    image: "assets/img/work/Inea.webp",
    description: " El Instituto Nacional de los Espacios Acuáticos INEA es el organismo rector encargado de ejercer la autoridad marítima en todo el territorio nacional. Fundado el 25 de enero de 2002 para modernizar la gestión de nuestras costas, ríos y lagos, el INEA cumple la misión vital de velar por la seguridad de la vida humana en el mar. Entre sus responsabilidades principales destacan el registro de buques (tramitación de matrículas y licencias), la administración de las Capitanías de Puerto y la certificación de la gente de mar, otorgando títulos y licencias de navegación. Además de su labor administrativa, el instituto coordina el servicio de Búsqueda y Salvamento (SAR) para atender emergencias y mantiene la infraestructura de faros y boyas que garantizan una navegación segura. Con un horario de atención de lunes a viernes, de 8:00 AM a 4:00 PM, el INEA se consolida como el pilar fundamental para el control del tráfico marítimo, la prevención de la contaminación acuática y el desarrollo sustentable de la marina mercante y artesanal del pueblo.",
    founded: "2002",
    employees: "15", // Cambiamos de students a employees
    location: "Vía Nacional, El Morro de Puerto Santo",
    category: "Instituto de Pesca",
    type: "pesca"
  },
  {
    name: "Prefectura El Morro",
    image: "assets/img/work/Prefectura El Morro.webp",
    description: "Ubicada en el corazon de El Morro de Puerto Santo, la Prefectura se consolida como el pilar fundamental de atencion al ciudadano y seguridad juridica en nuestra parroquia. Funcionando como sede compartida con la estacion policial, contando con una infraestructura de dos oficinas, dos baños, dos calabozos y dos dormitorios para los funcionarios. Bajo la gestion de un prefecto encargado, asistentes y comisarios, un equipo de siete trabajadores presta servicio matutimo, gestionando tramites de cedulas o documentos extraviados, cartas de concubinato, buena conducta y fe de vida, asi como permisos de mudanzas y resolucion de casos comunitarios, garantizando asi la atencion integral y la seguridad de la parroquia en un solo operativo.",
    founded: "2001",
    employees: "7", // Cambiamos de students a employees
    location: "Calle Cementerio/La Ceiba",
    category: "Instituto de Seguridad Pública",
    type: "seguridad"
  },
  {
    name: "U.E. Dr. Alberto Carnevalli",
    image: "assets/img/work/U.E. Dr. Alberto Carnevalli.webp",
    description: "Ubicada en la calle Andrés Bello de El Morro, estado Sucre, la Unidad Educativa Dr. Alberto Carnevali se erige como un pilar fundamental para la formación académica de la región. Con una sólida trayectoria que inició en 1960, esta institución destaca por su impecable arquitectura de fachadas blancas y azules, cuyos muros lucen con orgullo el emblema del colegio y la imagen de su epónimo. Actualmente, el plantel cuenta con una estructura de 14 aulas que albergan un total de 35 secciones, operando gracias al compromiso de un equipo de 102 trabajadores dedicados a brindar una educación de calidad. En sus puertas, la vitalidad de sus estudiantes y el acompañamiento de la comunidad reflejan el espíritu de una escuela que, década tras década, sigue impulsando el futuro de los jóvenes Morreros.",
    founded: "5 de julio de 1960",
    students: "926",
    location: "calle Andrés Bello/El Oliito",
    category: "Instituto de Educación",
    type: "educacion"
  },
  {
    name: "U.E. Dr. Alberto Carnevalli (Anexo)",
    image: "assets/img/work/U.E. Dr. Alberto Carnevalli (Anexo).webp",
    description: "En el corazón de El Morro, específicamente en la calle La Ceiba, se encuentra un complejo educativo vital que integra dos etapas fundamentales de la enseñanza. Este espacio funciona como sede compartida para la Unidad Educativa Dr. Alberto Carnevali, la cual dispone de 5 aulas destinadas a los niños de educación básica, y el C.E.I. Luis Beltrán Prieto Figueroa, que cuenta con 4 aulas especializadas para la etapa de preescolar. El centro destaca por sus murales coloridos y una fachada que da la bienvenida a la comunidad, operando con un equipo humano de aproximadamente 35 trabajadores, entre directivos, maestros y personal obrero, quienes aseguran el bienestar de los más pequeños. Con una ubicación estratégica y un ambiente dedicado al aprendizaje",
    founded: "1960",
    students: "926",
    location: "Calle la Ceiba/Union de Las 3C",
    category: "Universidad",
    type: "educacion"
  },
  {
    name: "U.E. Simón Rodríguez",
    image: "assets/img/work/simon.jpg",
    description: "Esta Unidad Educativa es un pilar de formacion que atiende con orgullo a una comunidad de 279 estudiantes, distribuidos en niveles de Educacion Inicial y Primaria. Su compromiso se apoya en un equipo humano de 37 profesionales, compuestos por 23 docentes, personal administrativo, obreros y un equipo de cocina.",
    founded: "1997",
    students: "279",
    location: "Calle Bella Vista/Sector La Cisterna",
    category: "Instituto de Educación",
    type: "educacion"
  },
];

// Variables globales
let currentIndex = 0;

// Elementos del DOM
const featuredImage = document.getElementById('featuredImage');
const imageCounter = document.getElementById('imageCounter');
const institutionCategory = document.getElementById('institutionCategory');
const institutionName = document.getElementById('institutionName');
const institutionLocation = document.getElementById('institutionLocation');
const institutionFounded = document.getElementById('institutionFounded');
const institutionStudents = document.getElementById('institutionStudents');
const thumbnailNav = document.getElementById('thumbnailNav');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const viewDetailsBtn = document.getElementById('viewDetailsBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// Elementos del modal
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalDescription = document.getElementById('modalDescription');
const modalFounded = document.getElementById('modalFounded');
const modalStudents = document.getElementById('modalStudents');

// Función para obtener el término correcto según el tipo de institución
function getMemberTerm(institution) {
  return institution.type === "educacion" ? "estudiantes" : "empleados";
}

// Función para obtener el valor correcto según el tipo de institución
function getMemberValue(institution) {
  return institution.type === "educacion" ? institution.students : institution.employees;
}

// Inicializar la galería
function initGallery() {
  createThumbnails();
  updateGallery();
  bindEvents();
}

// Crear miniaturas
function createThumbnails() {
  thumbnailNav.innerHTML = '';
  institutions.forEach((institution, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';
    thumbnail.innerHTML = `
      <img src="${institution.image}" alt="${institution.name}" />
      <div class="thumbnail-overlay">
        <span class="thumbnail-name">${institution.name}</span>
      </div>
    `;
    thumbnail.addEventListener('click', () => goToSlide(index));
    thumbnailNav.appendChild(thumbnail);
  });
}

// Actualizar la galería
function updateGallery() {
  const institution = institutions[currentIndex];
  
  // Actualizar imagen principal
  featuredImage.src = institution.image;
  featuredImage.alt = institution.name;
  
  // Actualizar contador
  imageCounter.textContent = `${currentIndex + 1} / ${institutions.length}`;
  
  // Actualizar información
  institutionCategory.textContent = institution.category;
  institutionName.textContent = institution.name;
  institutionLocation.querySelector('span').textContent = institution.location;
  institutionFounded.textContent = institution.founded;
  
  // Mostrar el término correcto según el tipo de institución
  const memberTerm = getMemberTerm(institution);
  const memberValue = getMemberValue(institution);
  
  // Actualizar el texto del label y el valor
  const studentsLabel = institutionStudents.previousElementSibling;
  if (studentsLabel) {
    studentsLabel.textContent = memberTerm.charAt(0).toUpperCase() + memberTerm.slice(1) + ':';
  }
  institutionStudents.textContent = memberValue;
  
  // Actualizar miniaturas activas
  const thumbnails = thumbnailNav.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb, index) => {
    thumb.classList.toggle('active', index === currentIndex);
  });
}

// Ir a una diapositiva específica
function goToSlide(index) {
  if (index >= 0 && index < institutions.length) {
    currentIndex = index;
    updateGallery();
  }
}

// Siguiente diapositiva
function nextSlide() {
  currentIndex = (currentIndex + 1) % institutions.length;
  updateGallery();
}

// Diapositiva anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + institutions.length) % institutions.length;
  updateGallery();
}

// Abrir modal
function openModal() {
  const institution = institutions[currentIndex];
  
  modalImage.src = institution.image;
  modalImage.alt = institution.name;
  modalCategory.textContent = institution.category;
  modalTitle.textContent = institution.name;
  modalLocation.querySelector('span').textContent = institution.location;
  modalDescription.textContent = institution.description;
  modalFounded.textContent = institution.founded;
  
  // Mostrar el término correcto en el modal según el tipo de institución
  const memberTerm = getMemberTerm(institution);
  const memberValue = getMemberValue(institution);
  
  // Actualizar el texto del label en el modal
  const modalStudentsLabel = modalStudents.previousElementSibling;
  if (modalStudentsLabel) {
    modalStudentsLabel.textContent = memberTerm.charAt(0).toUpperCase() + memberTerm.slice(1) + ':';
  }
  modalStudents.textContent = memberValue;
  
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Vincular eventos
function bindEvents() {
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  viewDetailsBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  
  // Cerrar modal al hacer clic fuera
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  // Navegación con teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Enter' && document.activeElement === viewDetailsBtn) {
      openModal();
    }
  });
  
  // Soporte táctil para móviles
  let startX = 0;
  let endX = 0;
  
  featuredImage.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  
  featuredImage.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initGallery);















//contenido fluir

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los divs principales
  const containers = document.querySelectorAll('.container-fluid.text-center');

  containers.forEach(container => {
    // Oculta el contenedor principal
    container.style.opacity = 0;
    container.style.transition = "opacity 1s";

    // Oculta los elementos animados internos
    const animatedItems = container.querySelectorAll('.scroll-animated-from-bottom');
    animatedItems.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = "translateY(40px)";
      item.style.transition = "opacity 0.8s, transform 0.5s";
    });
  });

  // Observer para mostrar el contenedor y luego los elementos animados escalonados
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        container.style.opacity = 1;

        // Animación escalonada para los elementos internos
        const animatedItems = container.querySelectorAll('.scroll-animated-from-bottom');
        animatedItems.forEach((item, idx) => {
          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
          }, idx * 450); // 250ms de diferencia entre cada uno
        });

        observer.unobserve(container); // Solo una vez
      }
    });
  }, {
    threshold: 0.2
  });

  containers.forEach(container => {
    observer.observe(container);
  });
});
// ...código existente...



// filepath: c:\Users\usuario\Documents\My Proyecto\index.html
document.addEventListener("DOMContentLoaded", function() {
    const btnFlora = document.getElementById('btnFlora');
    const btnFauna = document.getElementById('btnFauna');
    const btnClima = document.getElementById('btnClima');
    const floraContent = document.getElementById('floraContent');
    const faunaContent = document.getElementById('faunaContent');
    const climaContent = document.getElementById('climaContent');

    btnFlora.addEventListener('click', function() {
        floraContent.style.display = 'block';
        faunaContent.style.display = 'none';
        climaContent.style.display = 'none';
        btnFlora.classList.add('active');
        btnFauna.classList.remove('active');
        btnClima.classList.remove('active');
    });

    btnFauna.addEventListener('click', function() {
        faunaContent.style.display = 'block';
        floraContent.style.display = 'none';
        climaContent.style.display = 'none';
        btnFauna.classList.add('active');
        btnFlora.classList.remove('active');
        btnClima.classList.remove('active');
    });

    btnClima.addEventListener('click', function() {
        climaContent.style.display = 'block';
        floraContent.style.display = 'none';
        faunaContent.style.display = 'none';
        btnClima.classList.add('active');
        btnFlora.classList.remove('active');
        btnFauna.classList.remove('active');
    });
});

