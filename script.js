document.addEventListener("DOMContentLoaded", function() {
    const elementosAnimados = document.querySelectorAll('.animacion-ocultar');

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('animacion-mostrar');
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementosAnimados.forEach(elemento => {
        observador.observe(elemento);
    });
});