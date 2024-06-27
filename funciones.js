document.addEventListener('DOMContentLoaded', () => {
    const infoEstaticoBtn = document.getElementById('info-estatico');
    const infoDinamicoBtn = document.getElementById('info-dinamico');
    const infoResponsivoBtn = document.getElementById('info-responsivo');
    const forminicio = document.getElementById('form-sitio');
    const contactForm = document.getElementById('contactForm');
    const botonCancelar = document.getElementById('boton-cancelar');

    if (infoEstaticoBtn) {
        infoEstaticoBtn.addEventListener('click', () => {
            window.location.href = 'estatico.html';
        });
    }

    if (infoDinamicoBtn) {
        infoDinamicoBtn.addEventListener('click', () => {
            window.location.href = 'dinamico.html';
        });
    }

    if (infoResponsivoBtn) {
        infoResponsivoBtn.addEventListener('click', () => {
            window.location.href = 'responisvo.html';
        });
    }

    if (forminicio) {
        forminicio.addEventListener('click', () => {
            window.location.href = 'formulario.html';
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Gracias, nos pondremos en contacto con usted.');
            window.location.href = 'index.html';
        });
    }

    if (botonCancelar) {
        botonCancelar.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
