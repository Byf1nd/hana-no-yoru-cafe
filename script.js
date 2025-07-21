// Archivo JavaScript para la interacción del sitio

// Función para inicializar el menú de hamburguesa
function setupHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    if (hamburgerMenu && navList) {
        hamburgerMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    } else {
        console.warn("No se encontraron los elementos del menú de hamburguesa. Asegúrate de que las clases '.hamburger-menu' y '.nav-list' existan en tu HTML.");
    }
}

// --- Funciones para la página de Reservación  ---
function setupReservationForm() {
    const reservationForm = document.getElementById('reservationForm');
    const confirmationSection = document.getElementById('confirmationSection');

    const guestButtons = document.querySelectorAll('.guest-btn');
    const durationButtons = document.querySelectorAll('.duration-btn');
    const timeSlotButtons = document.querySelectorAll('.time-slot-btn');

    function handleButtonClick(buttons, event) {
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }

    guestButtons.forEach(button => {
        button.addEventListener('click', (event) => handleButtonClick(guestButtons, event));
    });

    durationButtons.forEach(button => {
        button.addEventListener('click', (event) => handleButtonClick(durationButtons, event));
    });

    timeSlotButtons.forEach(button => {
        button.addEventListener('click', (event) => handleButtonClick(timeSlotButtons, event));
    });

    if (reservationForm) {
        reservationForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (confirmationSection) {
                reservationForm.closest('.reservation-section').classList.add('hidden');
                confirmationSection.classList.remove('hidden');
            } else {
                console.error("No se encontró la sección de confirmación.");
            }
        });
    }
}

// --- Funciones para la página de Postres (Carousel) ---
function setupCarousels() {
    // Selecciona todos los botones de navegación de carrusel
    const carouselNavBtns = document.querySelectorAll('.carousel-nav-btn');

    carouselNavBtns.forEach(button => {
        button.addEventListener('click', () => {
            // Obtiene el ID del carrusel objetivo del atributo data-target
            const carouselId = button.dataset.target;
            const carousel = document.getElementById(carouselId);

            if (carousel) {
                // Determina la dirección del desplazamiento
                const direction = button.classList.contains('next-btn') ? 1 : -1;
                // Calcula el ancho de una tarjeta más el espacio entre ellas (gap)
                // Asumimos un ancho de tarjeta de 300px y un gap de 30px (del CSS)
                // O podemos obtenerlo dinámicamente si las tarjetas no tienen un ancho fijo:
                // const cardWidth = carousel.querySelector('.dessert-card')?.offsetWidth || 300;
                // const gap = 30; // Asegurarnos de que este valor coincida con el CSS
                // const scrollAmount = (cardWidth + gap) * 2; // Desplazar 2 tarjetas a la vez

                // Para un desplazamiento más flexible, podemos desplazar una cantidad fija de píxeles
                // o calcular el ancho visible del carrusel
                const scrollAmount = carousel.clientWidth / 1; // Desplazarse por el ancho visible (muestra 1 o 2 tarjetas aprox.)
                                                              // Podemos ajustar el divisor para que desplace más o menos
                carousel.scrollBy({
                    left: direction * scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Carousel with ID '${carouselId}' not found.`);
            }
        });
    });
}


// Ejecuta las funciones cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
    setupReservationForm(); // Solo se ejecutará si los elementos del formulario existen
    setupCarousels(); // Llama a la función para configurar los carruseles
});
