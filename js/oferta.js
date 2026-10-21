/* obtenemos los Elementos Html */
const boton = document.getElementById('btnOferta');
const tarjeta = document.getElementById('tarjeta');

/* Creamos el evento */
boton.addEventListener('click', () => {
    // Añadimos la clase 'oferta' a la tarjeta
    tarjeta.classList.add('oferta');

    // Cambiamos el texto del botón para oferta
    boton.textContent = "¡Oferta Aplicada!";
    boton.disabled = true; // Desactivamos el botón
});