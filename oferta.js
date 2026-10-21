
const boton = document.getElementById('btnOferta');
const tarjeta = document.getElementById('tarjeta');

boton.addEventListener('click', () => {
    
    tarjeta.classList.add('oferta');

    
    boton.textContent = "¡Oferta Aplicada!";
    boton.disabled = true;
});