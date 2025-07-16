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
