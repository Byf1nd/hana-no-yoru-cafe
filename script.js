// Archivo JavaScript para la interacción del sitio

// Función para inicializar el menú de hamburguesa
function setupHamburgerMenu() {
    // Selecciona el botón del menú de hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    // Selecciona la lista de navegación (el menú que se va a mostrar/ocultar)
    const navList = document.querySelector('.nav-list');

    // Verifica que ambos elementos existan antes de añadir el event listener
    if (hamburgerMenu && navList) {
        // Añade un 'event listener' para detectar clics en el botón de hamburguesa
        hamburgerMenu.addEventListener('click', () => {
            // Alterna la clase 'active' en la lista de navegación
            // Esto es lo que CSS usará para mostrar/ocultar el menú
            navList.classList.toggle('active');
            // También alterna la clase 'active' en el botón de hamburguesa
            // Esto se usa para cambiar la apariencia del ícono (por ejemplo, a una 'X')
            hamburgerMenu.classList.toggle('active');
        });
    } else {
        console.warn("No se encontraron los elementos del menú de hamburguesa. Asegúrate de que las clases '.hamburger-menu' y '.nav-list' existan en tu HTML.");
    }
}

// Ejecuta la función cuando el DOM esté completamente cargado
// Esto asegura que los elementos HTML ya existan cuando el script intente seleccionarlos
document.addEventListener('DOMContentLoaded', setupHamburgerMenu);


// script.js
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

// --- Funciones para la página de Reservación ---

function setupReservationForm() {
    const reservationForm = document.getElementById('reservationForm');
    const confirmationSection = document.getElementById('confirmationSection');

    // Selectores para los botones de invitados, duración y slots de tiempo
    const guestButtons = document.querySelectorAll('.guest-btn');
    const durationButtons = document.querySelectorAll('.duration-btn');
    const timeSlotButtons = document.querySelectorAll('.time-slot-btn');

    // Función para manejar la selección de un botón (invitados, duración, tiempo)
    function handleButtonClick(buttons, event) {
        buttons.forEach(btn => btn.classList.remove('active')); // Desactiva todos
        event.target.classList.add('active'); // Activa el clicado
    }

    // Añadir event listeners a los botones de invitados
    guestButtons.forEach(button => {
        button.addEventListener('click', (event) => handleButtonClick(guestButtons, event));
    });

    // Añadir event listeners a los botones de duración
    durationButtons.forEach(button => {
        button.addEventListener('click', (event) => handleButtonClick(durationButtons, event));
    });

    // Añadir event listeners a los botones de slots de tiempo
    timeSlotButtons.forEach(button => {
        button.addEventListener('click', (event) => handleButtonClick(timeSlotButtons, event));
    });

    // Manejar el envío del formulario
    if (reservationForm) {
        reservationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío predeterminado del formulario

            // Aquí sepueden añadir validaciones de formulario si es necesario

            // Muestra la sección de confirmación
            if (confirmationSection) {
                // Oculta la sección del formulario
                reservationForm.closest('.reservation-section').classList.add('hidden');
                confirmationSection.classList.remove('hidden'); // Muestra la confirmación
            } else {
                console.error("No se encontró la sección de confirmación.");
            }

            // En un escenario real, aquí enviaríamos los datos a un servidor
            // fetch('/api/reserve', {
            //     method: 'POST',
            //     body: new FormData(reservationForm)
            // }).then(response => response.json())
            //   .then(data => {
            //       if (data.success) {
            //           // Mostrar confirmación
            //       } else {
            //           // Mostrar mensaje de error
            //       }
            //   }).catch(error => console.error('Error:', error));
        });
    } else {
        console.warn("No se encontró el formulario de reservación con ID 'reservationForm'.");
    }
}


// Ejecuta las funciones cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
    setupReservationForm(); // Llama a la función para configurar el formulario de reserva
});
