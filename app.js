// ... Todo tu código de inicialización anterior ...

// CONTROL DEL MODAL DE INTEGRANTES
const floatingBtn = document.getElementById("floating-btn");
const modalIntegrantes = document.getElementById("modal-integrantes");
const closeModalBtn = document.getElementById("close-modal-btn");

// Función para abrir la ventana modal
floatingBtn.addEventListener("click", () => {
    modalIntegrantes.classList.remove("hidden");
    closeModalBtn.focus(); // Foco accesible
});

// Función para cerrar la ventana modal
const closeModal = () => {
    modalIntegrantes.classList.add("hidden");
    floatingBtn.focus();
};

closeModalBtn.addEventListener("click", closeModal);

// Cerrar si se hace click fuera del cuadro contenedor (en el fondo translúcido)
modalIntegrantes.addEventListener("click", (e) => {
    if (e.target === modalIntegrantes) {
        closeModal();
    }
});

// Cerrar usando la tecla Escape por accesibilidad
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalIntegrantes.classList.contains("hidden")) {
        closeModal();
    }
});
